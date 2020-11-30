import { Request, Response, NextFunction } from "express";
import "reflect-metadata";
import { controller, use, get } from "../decorator";
import { getResponseData } from "../utils/util";
import fs from "fs";
import path from "path";
import Crowller from "../utils/crowller";
import Analyzer from "../utils/analyzer"; //分析器

interface BodyRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

const checkLogin = (req: Request, res: Response, next: NextFunction): void => {
  const isLogin = !!(req.session ? req.session.login : false);
  if (isLogin) {
    next();
  } else {
    res.json(getResponseData(null, "请先登录"));
  }
};

@controller("/api")
export class CrowllerController {
  @get("/getData")
  @use(checkLogin)
  getData(req: BodyRequest, res: Response): void {
    //要爬取的网址
    const url = "http://www.xuyang.run/blog";
    //分析器对象，单例模式
    const analyzer = Analyzer.getInstace();
    //爬虫对象
    new Crowller(url, analyzer);
    res.json(getResponseData(true));
  }

  @get("/showData")
  @use(checkLogin)
  showData(req: BodyRequest, res: Response): void {
    try {
      const position = path.resolve(__dirname, "../../data/data.json");
      const result = fs.readFileSync(position, "utf-8");
      res.json(getResponseData(JSON.parse(result)));
    } catch (err) {
      res.json(getResponseData(false, "数据不存在"));
    }
  }
}
