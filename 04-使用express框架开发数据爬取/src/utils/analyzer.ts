import cheerio from "cheerio"; //以jQuery的方式操作html网页数据
import fs from "fs"; //文件操作
//爬取的数据形式
interface Json {
  title: string;
  time: string;
}

//结果的数据形式
interface result {
  date: number;
  data: Json[];
}

//内容的数据形式
interface Content {
  [propName: number]: Json[];
}

/**
 * 分析器类
 */
class Analyzer {
  /**
   * 单例模式存储对象实例的
   */
  private static instance: Analyzer;

  /**
   * 单例模式，获取对象实例
   */
  public static getInstace() {
    //判断对象实例是否存在
    if (!this.instance) {
      //不存在就创建实例
      this.instance = new this();
    }
    //返回对象实例
    return this.instance;
  }

  /**
   * 获取数据
   * @param html
   */
  private getJsonInfo(html: string) {
    const $ = cheerio.load(html);
    const jsonInfos: Json[] = [];
    const domList = $(
      "body > div > div.container-fluid.content-inner-container.col-md-9.col-xs-12 > div.container-fluid.articles-inner-container.col-xs-12 > div > div > ul > li"
    );
    domList.map((index, element) => {
      const title = $(element).find("a").text();
      const time = $(element).find("span").text();
      jsonInfos.push({
        title,
        time,
      });
    });
    const result = {
      date: new Date().getTime(),
      data: jsonInfos,
    };
    return result;
  }

  /**
   * 获取内容
   * @param data
   * @param filePath
   */
  private generateJsonContent(data: result, filePath: string) {
    //获取文件的绝对路径

    let fileContent: Content = {};

    //判断文件是否存在
    if (fs.existsSync(filePath)) {
      //存在就读取文件的内容
      fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }

    fileContent[data.date] = data.data;

    return fileContent;
  }

  /**
   * 分析器
   * @param html
   * @param filePath
   */
  public analyze(html: string, filePath: string) {
    const Info = this.getJsonInfo(html);
    const fileContent = this.generateJsonContent(Info, filePath);
    return JSON.stringify(fileContent);
  }

  private constructor() {}
}

export default Analyzer;
