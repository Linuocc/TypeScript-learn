import fs from "fs"; //文件操作
import path from "path"; //路径
import superagent from "superagent"; //安装之后引入会报错，缺少.d.ts文件，执行npm install @types/superagent -D,其他类似
import Analyzer from "./analyzer"; //分析器

class Crowller {
  /**
   * 文件完整路径
   */
  private filePath = path.resolve(__dirname, "../data/data.json");

  /**
   * 构造器
   * @param url
   * @param analyzer
   */
  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess();
  }

  /**
   * 运行爬虫
   */
  private async initSpiderProcess() {
    //调用获取html内容的方法
    const html = await this.getRawHtml();
    // 调用分析器对象，将传入的html内容分析之后，返回分析之后的数据
    const fileContent = this.analyzer.analyze(html, this.filePath);
    //将分析之后的数据写入文件
    this.writeFile(fileContent);
  }

  /**
   * 将数据写入文件
   * @param content
   */
  private writeFile(content: string) {
    //以同步的方式将数据写入文件
    fs.writeFileSync(this.filePath, content);
  }

  /**
   * 获取html内容
   */
  private async getRawHtml() {
    //使用superagent的get方法获取指定url的html数据
    const result = await superagent.get(this.url);
    return result.text;
  }
}

//要爬取的网址
const url = "http://www.xuyang.run/blog";

//分析器对象，单例模式
const analyzer = Analyzer.getInstace();

//爬虫对象
const crowller = new Crowller(url, analyzer);
