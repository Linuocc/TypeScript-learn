"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio")); //以jQuery的方式操作html网页数据
var fs_1 = __importDefault(require("fs")); //文件操作
/**
 * 分析器类
 */
var Analyzer = /** @class */ (function () {
    function Analyzer() {
    }
    /**
     * 单例模式，获取对象实例
     */
    Analyzer.getInstace = function () {
        //判断对象实例是否存在
        if (!this.instance) {
            //不存在就创建实例
            this.instance = new this();
        }
        //返回对象实例
        return this.instance;
    };
    /**
     * 获取数据
     * @param html
     */
    Analyzer.prototype.getJsonInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var jsonInfos = [];
        var domList = $("body > div > div.container-fluid.content-inner-container.col-md-9.col-xs-12 > div.container-fluid.articles-inner-container.col-xs-12 > div > div > ul > li");
        domList.map(function (index, element) {
            var title = $(element).find("a").text();
            var time = $(element).find("span").text();
            jsonInfos.push({
                title: title,
                time: time,
            });
        });
        var result = {
            date: new Date().getTime(),
            data: jsonInfos,
        };
        return result;
    };
    /**
     * 获取内容
     * @param data
     * @param filePath
     */
    Analyzer.prototype.generateJsonContent = function (data, filePath) {
        //获取文件的绝对路径
        var fileContent = {};
        //判断文件是否存在
        if (fs_1.default.existsSync(filePath)) {
            //存在就读取文件的内容
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, "utf-8"));
        }
        fileContent[data.date] = data.data;
        return fileContent;
    };
    /**
     * 分析器
     * @param html
     * @param filePath
     */
    Analyzer.prototype.analyze = function (html, filePath) {
        var Info = this.getJsonInfo(html);
        var fileContent = this.generateJsonContent(Info, filePath);
        return JSON.stringify(fileContent);
    };
    return Analyzer;
}());
exports.default = Analyzer;
