[TOC]



# 一、TypeScript带来的优势

`1、开发过程中，发现潜在问题（静态类型）`

`2、更友好的编辑器自动提示`

`3、代码语义更清晰易懂`





# 二、开发环境安装

1、安装vscode

> 打开vscode官网，下载安装包安装

2、安装node.js环境

> 打开nodejs官网，按照官网的安装即可

3、全局安装TypeScript

```shell
npm install -g typescript
```

4、可以安装一个ts-node插件

> 可以直接使用运行ts文件

全局安装ts-node

```shell
npm install -g ts-node
```



ts-node运行ts文件

```shell
ts-node demo.ts
```



# 三、TypeScript基础语法入门

## 1、基础类型

**包括：null、undefined、symbol、boolean、number、string等**

```typescript
//基础类型
let count: number;
count = 123;
const teacher: string = "linuocc";

```



## 2、对象类型

**包括：函数、数组、对象、类等**

```typescript
//对象类型

//对象
const student: {
    name: string;
    age: number;
} = {
    name: "linuocc",
    age: 18,
};

//数组
const numbers: number[] = [1, 2, 3];

//类
class Person {}

const dell: Person = new Person();

//函数,可以指定返回值类型
const getTotal: (str: string) => number = (str) => {
    return 18;
};

const func = (str: string): number => {
    return 10;
};

function func2(str: number): number {
    return 10;
}
```



## 3、类型注解和类型推断

```typescript
//类型注解,我们来告诉ts变量是什么类型
let count: number;
count = 123;


//类型推断，TS自动去尝试分析变量的类型
let count2 = 123;

```





## 4、函数相关类型



```typescript
function add(first: number, second: number): number {
    return first + second;
}

//函数的返回值类型是void，表示没有返回值
function sayHello(): void {
    console.log("hello");
}

//never类型的函数，表示永远没法执行完
function errorEmitter(): never {
    while (true) {}
}

//参数解构的语法
function add1({ first, second }: { first: number; second: number }): number {
    return first + second;
}

function getNumber({ first }: { first: number }): number {
    return first;
}

const total = add1({ first: 1, second: 2 });

```



## 5、补充

**Date类型：**

```typescript
//Date类型
const date = new Date();
let d: Date;
```



```typescript
//其他的
const rawData = '{"name":"linuocc"}';
const nowData = JSON.parse(rawData); //这里nowData的类型是any推导不出类型
```



```typescript
//多个类型
let temp: number | string = 123;
temp = "123";
```



## 6、数组

```typescript
//自动推导类型
const numberArr1 = [1, 2, 3];

//单一类型数组
const numberArr2: number[] = [1, 2, 3];

//多个类型数组
const arr: (number | string)[] = [1, "2", 3];

//对象数组
const objectArr: { name: string; age: number }[] = [
    { name: "linuocc", age: 22 },
];

//类型别名
type User = { name: string; age: number };
const objectArr2: User[] = [{ name: "linuocc", age: 22 }];
```

## 7、元组

```typescript
//元组,可以约束每一个元素的类型
const teacherInfo: [string, string, number] = ["Dell", "male", 18];

const teacherList: [string, string, number][] = [
    ["linuocc", "sdsad", 33],
    ["sdsadas", "qweqwe", 44],
];

```



## 8、接口（interface）

```typescript
//interface（接口）定义的只能是对象或者函数，没法直接定义基础类型
interface Person {
    name: string;
}

// 类型别名可以定义基础类型，也可以定义对象或者函数
type Person1 = {
    name: string;
};

type Person2 = string;

const getPersonName = (person: Person): void => {
    console.log(person.name);
};

const setPersonName = (person: Person, name: string): void => {
    person.name = name;
};

const person = {
    name: "linuocc",
};

getPersonName(person);
setPersonName(person, "hahah");

```



**属性名后加一个“？”，表示这个变量可有可无**

```typescript
interface Person {
    name: string;
    age?: number;
}
```



**属性名前面加readonly，表示这个属性只读，不能给他赋值**

```typescript
interface Person {
    readonly name: string;
    age?: number;
}
```



**表示还可以接收name之外的其他属性**

```typescript
interface Person {
    name: string;
    [prop: string]: any;
}
```





**interface也可以继承**

```typescript
interface Person {
    name: string;
    age?: number;
    [prop: string]: any;
    say(): string;
}

interface Teacher extends Person {
    teach(): string;
}

```



**interface定义函数类型**

```typescript
interface SayHi {
    (word: string): string;
}

const say: SayHi = (word: string) => {
    return "4as564";
};
```



**类使用一个接口，这个类就要实现这个接口的所有属性和方法**

```typescript
interface Person {
    name: string;
    say(): string;
}

class User implements Person {
    name = "sa";
    say() {
        return "sdasd";
    }
}
```



## 9、类

### ①类的继承

子类会继承父类全部的属性和方法

```typescript
//父类
class Person {
    name = "linuocc";
    getName() {
        return this.name;
    }
}
//子类
class Teacher extends Person {
    getTeacherName() {
        return "lhc";
    }
}

const teacher = new Teacher();
console.log(teacher.getName());//打印：linuocc
console.log(teacher.getTeacherName());//打印：lhc
```



### ②方法的重载

```typescript
class Person {
    name = "linuocc";
    getName() {
        return this.name;
    }
}

class Teacher extends Person {
    getTeacherName() {
        return "lhc";
    }
    getName() {//对Person类的方法重写
        return "123";
    }
}

const teacher = new Teacher();
console.log(teacher.getName());//打印：123
console.log(teacher.getTeacherName());//打印：lhc
```



### ③super关键字

通过super关键字可以访问父类的属性和方法

```typescript
class Person {
    name = "linuocc";
    getName() {
        return this.name;
    }
}

class Teacher extends Person {
    getTeacherName() {
        return "lhc";
    }
    getName() {
        return super.getName() + "123";
    }
}

const teacher = new Teacher();
console.log(teacher.getName());//打印：linuocc123
console.log(teacher.getTeacherName());//打印：lhc
```



### ④访问类型

**三种访问类型：private、protected、public**

- private：允许在类内被调用，子类也不能调用
- protected：允许在类内调用，子类可以调用
- public：允许在类的内外都可以调用



> 不注明访问类型，默认的访问类型是public



private：

```typescript
class Person {
    private name: string;
}

const person = new Person();
person.name = "linuocc";//报错，只允许在类内使用，子类也不能使用
console.log(person.name);//报错
```



protected：

```typescript
class Person {
    protected name: string;
}

class Teacher extends Person {
    public sayBye() {
        this.name;
    }
}

const person = new Person();
person.name = "linuocc";//报错，只能在类内使用或者继承的子类使用
console.log(person.name);//报错
```



public：

```typescript
class Person {
    name: string;//默认为public，可以在任何地方调用
}

class Teacher extends Person {
    public sayBye() {
        this.name;
    }
}

const person = new Person();
person.name = "linuocc";
console.log(person.name);
```



### ⑤构造器

使用new关键字实例化对象时，会自动执行constructor方法，这个constructor方法就是构造器



**下面两种使用效果是一样的**

传统使用：

```typescript
class Person {
    public name: string;
    constructor(public name: string) {
        this.name = name;
    }
}

const person = new Person("linuocc");
console.log(person.name);//linuocc
```

简化使用：

```typescript
class Person {
    constructor(public name: string) {
    }
}

const person = new Person("linuocc");
console.log(person.name);//linuocc
```





**子类使用constructor构造器的时候，一定要调用super()，传入相应的参数**

```typescript
class Person {
    constructor(public name: string) {}
}

class Teacher extends Person {
    constructor(name: string, age: number) {
        super(name);
    }
}

const teacher = new Teacher("linuocc", 28);

```

### ⑥Setter和Getter

```typescript
class Person {
    constructor(private _name: string) {}

    get name() {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
}

const person = new Person("linuocc");
console.log(person.name);
person.name = "lhc";
console.log(person.name);
```



### ⑦单例模式示例

只会生成一个对象

```typescript
//单例模式
class Demo {
    private static instance: Demo;
    private constructor(public name: string) {}

    public static getInstance(name: string) {
        if (!this.instance) {
            this.instance = new this(name);
        }
        return this.instance;
    }
}

const demo1 = Demo.getInstance("linuocc");
const demo2 = Demo.getInstance("lhc");
console.log(demo1.name, demo2.name);//linuocc linuocc
```



### ⑧类里面使用readonly

类里面除了使用Getter和Setter限制属性的读写之外，可以使用readonly限制属性只读

```typescript
class Person {
    constructor(public readonly name: string) {}
}

const person = new Person("linuocc");
person.name = "lhc";//报错
console.log(person.name);

```



### ⑨抽象类

抽象类不能直接实例化，只能被继承，抽象类中的抽象方法子类必须实现，抽象类中被实现了的方法，子类可以直接调用

```typescript
//抽象类
abstract class Geom {
    width: number;

    getType() {
        return "Gemo";
    }
    abstract getArea(): number;
}

class Circle extends Geom {
    getArea() {//必须实现抽象方法
        return 123;
    }
}

class Square extends Geom {
    getArea() {//必须实现抽象方法
        this.getType();//不用实现，但是可以直接调用，因为抽象类已经实现了这个方法
        return 565;
    }
}

class Triangle extends Geom {
    getArea() {//必须实现抽象方法
        return 34234;
    }
}

```



# 四、使用TypeScript编写爬虫工具（TS入门案例）



## 1、爬虫源代码



**crowller.ts**(数据的获取以及将数据存入文件)

```typescript
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

```



**analyzer.ts**（数据的分析，单例模式）

```typescript
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

```





## 2、TS编译运行的插件工具

### ①直接编译

package.json

```json
"scripts": {
    "build": "tsc"
},
```

运行`npm run build`命令，将直接把ts文件编译成js文件



### ②修改ts文件之后自动编译

```json
"scripts": {
    "build": "tsc -w"
},
```

在tsc之后加上“-w”，运行`npm run build`命令之后，命令行会一直保持运行状态，当再次修改ts文件保存之后，会自动编译成js文件



### ③js文件变化，自动执行

执行`npm install nodemon -D`安装nodemon插件

```json
"scripts": {
    "start": "nodemon node ./build/crowller.js"//nodemon之后的语句是指文件发生变化之后要执行的命令
},
"nodemonConfig": {//nodemon的配置文件
    "ignore": [//要忽略监控变化的文件，在爬虫项目中一定要忽略data文件夹，不然会陷入死循环（nodemon默认会执行一次，就会爬取到数据，data下的文件发生变化，触发nodemon的监控，又会执行nodemon之后的命令，就会再次爬取数据，data下的文件就又发生了变化，就陷入了死循环）
        "data/*"
    ]
},
```



### ④修改ts文件之后，自动编译并运行

将**②③**两个结合在一起，就可以实现ts文件修改之后，自动编译成js，js发生变化会触发nodemon的监控，就会自动运行js文件，nodemon默认是不会监控ts文件的变化的，所以修改ts之后不会立即执行，只有在ts编译成js之后，监控到js发生变化，才会执行nodemon之后的命令



### ⑤并行执行多个命令

执行`npm install concurrently -D`安装concurrently插件

```json
"scripts": {
    "dev:build": "tsc -w",
    "dev:start": "nodemon node ./build/crowller.js",
    "dev": "concurrently npm:dev:*"
},
```

运行`npm run dev`命令就会同时执行`build`和`start`命令





# 五、TypeScript语法进阶



## 1、TypeScript中的配置文件



### ①生成配置文件

```shell
tsc --init
```

运行上面的命令就会生成一个tsconfig.json的配置文件



### ②使用配置文件

只有在项目目录下直接运行tsc命令，tsconfig.json文件的配置才会生效

```shell
tsc
```



### ③配置项说明

**include：表示要编译的文件，其他的则不会编译，值为一个数组，可以使用正则匹配**

```json
"include": ["./demo.ts"],
```

files配置项和include使用类似



**exclude：表示不编译的文件，除了这些文件，其他的都会被编译**

```json
"exclude": ["./demo1.ts"],
```



### ④编译选项compilerOptions

|        选项        |  类型   | 默认值 |                             描述                             |
| :----------------: | :-----: | :----: | :----------------------------------------------------------: |
|   removeComments   | boolean | false  |          删除所有注释，除了以 `/!*`开头的版权信息。          |
|   noImplicitAny    | boolean | false  |           在表达式和声明上有隐含的 `any`类型时报错           |
|  strictNullChecks  | boolean | false  | 在严格的 `null`检查模式下， `null`和`undefined`值不包含在任何类型里，只允许用它们自己和 `any`来赋值（有个例外， `undefined`可以赋值到 `void`）。 |
|      rootDir       | string  |        |                      需要编译的文件路径                      |
|       outDir       | string  |        |                     编译后输出文件的路径                     |
|    incremental     | boolean | false  |                           增量编译                           |
|      allowJs       | boolean | false  |                    允许编译javascript文件                    |
|       target       | string  | "ES3"  |                指定编译之后ECMAScript目标版本                |
|   noUnusedLocals   | boolean | false  |                 若有未使用的局部变量则抛错。                 |
| noUnusedParameters | boolean | false  |                 若函数有未使用的参数则抛错。                 |







## 2、联合类型和类型保护



### ①联合类型

```typescript
interface Bird {
    fly: boolean;
    sing: () => {};
}

interface Dog {
    fly: boolean;
    bark: () => {};
}

function trainAnil(animal: Bird | Dog) {//这里的animal的类型就是联合类型，Brid和Dog都可以
    animal.fly;
}
```



### ②类型保护

**类型断言：**

```typescript
interface Bird {
    fly: boolean;
    sing: () => {};
}

interface Dog {
    fly: boolean;
    bark: () => {};
}

function trainAnil(animal: Bird | Dog) {
    if (animal.fly) {
        (animal as Bird).sing();//此时，直接指定animal为Bird类型
    } else {
        (animal as Dog).bark();
    }
}
```



**in 语法：**

```typescript
interface Bird {
    fly: boolean;
    sing: () => {};
}

interface Dog {
    fly: boolean;
    bark: () => {};
}

function trainAnil2(animal: Bird | Dog) {
    if ("sing" in animal) {//使用in语法之后，else语句中可以直接调用另一个方法，typescript还会给出语法提示
        animal.sing();
    } else {
        animal.bark();
    }
}
```



**typeof：**

```typescript
function add(first: string | number, second: string | number) {
    if (typeof first === "string" || typeof second === "string") {
        return `${first}${second}`;
    }
    return first + second;
}
```





**instanceof:**

需求：如果first和second都是NumerObj类型，就返回他们两个count属性的和，否则就返回0

```typescript
class NumerObj {//这里只能用class，不能用interface，因为interface不能用instanceof操作
    count: number;
}
//需求：如果first和second都是NumerObj类型，就返回他们两个count属性的和，否则就返回0
function add2(first: object | NumerObj, second: object | NumerObj) {
    if (first instanceof NumerObj && second instanceof NumerObj) {
        return first.count + second.count;
    }

    return 0;
}
```





## 3、枚举类型

需求：判断用户的状态



传统的写法：

```typescript
const Status = {
    OFFLINE: 0,
    ONLINE: 1,
    DELETED: 2,
};

function getResult(status) {
    if (status === Status.OFFLINE) {
        return "offline";
    } else if (status === Status.ONLINE) {
        return "online";
    } else if (status === Status.DELETED) {
        return "deleted";
    } else {
        return "error";
    }
}

const res = getResult(Status.OFFLINE);
console.log(res);
```



TS的写法：

```typescript
enum Status {//枚举类型
    OFFLINE,
    ONLINE,
    DELETED,
}

function getResult(status) {
    if (status === Status.OFFLINE) {
        return "offline";
    } else if (status === Status.ONLINE) {
        return "online";
    } else if (status === Status.DELETED) {
        return "deleted";
    } else {
        return "error";
    }
}

const res = getResult(0);
console.log(res);
```





> 枚举类型的值默认从0开始依次加1

```typescript
enum Status {
    OFFLINE,
    ONLINE,
    DELETED,
}

console.log(Status.OFFLINE);
console.log(Status.ONLINE);
console.log(Status.DELETED);
//输出结果
//0
//1
//2
```



> 可以手动赋值

```typescript
enum Status {
    OFFLINE,
    ONLINE = 5,
    DELETED,
}

console.log(Status.OFFLINE);
console.log(Status.ONLINE);
console.log(Status.DELETED);
//输出
//0
//5
//6
```



> 可以反向输出枚举的名字

```typescript
enum Status {
    OFFLINE,
    ONLINE = 5,
    DELETED,
}

console.log(Status[0]);
console.log(Status[5]);
//输出结果
//OFFLINE
//ONLINE
```





## 4、函数泛型

### ①一般用法

单个泛型：

```typescript
//泛型  generic 泛指的类型

function join<ABC>(first: ABC, second: ABC) {
    return `${first}${second}`;
}

join<number>(1, 1);
join<string>("1", "2");
join<string>(1, "2");//报错，第一个参数必须是string类型
```



多个泛型：

```typescript

function join<T,P>(first: T, second: P) {
    return `${first}${second}`;
}

join<number,string>(1, "1");
```



返回值泛型：

```typescript
function join<T>(first: T, second: T): T {
    return first;
}

join<string>("1", "2");
```



### ②数组用法

```typescript
function map<ABC>(params:Array<ABC>) {
    return params;
}

map<string>(["1","2"]);//必须传入字符串数组
```

下面的用法和上面等价：

```typescript
function map<ABC>(params:ABC[]) {
    return params;
}

map<string>(["1","2"])//必须传入字符串数组
```





## 5、命名空间

**语法格式**

```typescript
namespace name{
    //代码
    export class a{//通过export对外暴露变量

    }
}
```

> - 通过export导出
> - 命名空间中还可以继续导出命名空间
> - 命名空间中可以导出interface（接口）





## 6、Parcel打包TS代码

### ①安装parcel

```shell
npm install parcel@next -D
```



### ②运行

```shell
parcel ./src/index.html
```



package.json如下：

```json
{
    "name": "demo",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "dev": "parcel ./src/index.html"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "parcel": "^2.0.0-beta.1"
    }
}
```



> 如果html中引入了ts文件，就会自动编译



## 7、描述文件中的全局类型（类型定义文件[.d.ts]）

### ①script标签CDN引入

> 作用：帮助ts文件理解引入的js文件或js库



**使用`declare`关键字声明**

```typescript
//定义全局变量
declare var $: (param: () => void) => void;

//定义全局函数

declare function $(params: () => void): void;

declare function $(
  param: string
): {
  html: (html: string) => {};
};
```

> 可以对同一个变量或函数多次定义





**在类型定义文件中可以使用`interface`**

```typescript
//使用interface的语法实现函数重载
interface JQuery {
    (readyFunc: () => void): void;
    (selector: string): JqueryInstance;
}

declare var $: JQuery;
```



**使用`namespace`以及`class`**

```typescript
//对象、类以及命名空间
declare namespace $ {
    namespace fn {
        class init {}
    }
}
```



### ②ES6模块化的类型定义文件

```typescript
declare module "jquery" {//模块里面就不需要再写declare
    interface JqueryInstance {
        html: (html: string) => JqueryInstance;
    }

    function $(params: () => void): void;

    function $(param: string): JqueryInstance;
    namespace $ {
        namespace fn {
            class init {}
        }
    }
    export = $;//最后需要导出
}
```



## 8、泛型中keyof语法的使用

**`keyof`用于获取某种类型的所有键，其返回类型是联合类型。**

```typescript
interface Person {
    name: string;
    age: number;
    gender: string;
}

class Teacher {
    constructor(private info: Person) {}
    getInfo<T extends keyof Person>(key: T) :Person[T]{//T就是"name"|"age"|"gender"
        return this.info[key];
    }
}

const teacher = new Teacher({
    name: "linuocc",
    age: 18,
    gender: "male",
});

const test = teacher.getInfo("name");

console.log(test);

```

等价于以下代码

```typescript
interface Person {
    name: string;
    age: number;
    gender: string;
}

type key = keyof Person;//"name"|"age"|"gender"

class Teacher {
    constructor(private info: Person) {}
    getInfo(key: key) {
        return this.info[key];
    }
}

const teacher = new Teacher({
    name: "linuocc",
    age: 18,
    gender: "male",
});

const test = teacher.getInfo("name");

console.log(test);
```



# 六、使用 Express 框架开发数据爬取及展示接口

略





# 七、TypeScript高级语法



## 1、类的装饰器



> 装饰器本身是一个函数
>
> 装饰器通过@符号来使用



### ①简单的装饰器

单个装饰器

```typescript
function testDeacorator(constructor: any) {
    console.log("linuocc");
}

@testDeacorator
class Test {}

const test = new Test();
```



多个装饰器

```typescript
function testDeacorator(constructor: any) {
    console.log("linuocc");
}
function testDeacorator1(constructor: any) {
    console.log("linuocc1");
}

@testDeacorator
@testDeacorator1
class Test {}

const test = new Test();

//linuocc1
//linuocc
```

先使用的装饰器后被执行



以工厂模式写装饰器，可以传入参数

```typescript
function testDeacorator(flag: boolean) {
    if (flag) {
        return function (constructor: any) {
            constructor.prototype.getName = () => {
                console.log("linuocc");
            };
        };
    } else {
        return function (constructor: any) {};
    }
}
@testDeacorator(true)
class Test {}

const test = new Test();
(test as any).getName();
```



### ②复杂的装饰器

```typescript
function testDeacorator() {
    return function <T extends new (...args: any[]) => any>(constructor: T) {
        return class extends constructor {
            name = "lhc";
            getName() {
                return this.name;
            }
        };
    };
}

const Test = testDeacorator()(
    class {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }
);

const test = new Test("linuocc");
console.log(test.getName());
```



## 2、类的方法的装饰器

```typescript
//普通方法，target对应的是类的prototype
//静态方法，target对应的是类的构造函数
//key的值就是被修饰的方法名
//descriptor的用法和js的Object.defineProperty()中descriptor的用法一样
function getNameDecorator(
 target: any,
 key: string,
 descriptor: PropertyDescriptor
) {
    // descriptor.writable = true;
    descriptor.value = function () {
        return "dec";
    };
}

class Test {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    @getNameDecorator
    getName() {
        return this.name;
    }
}

const test = new Test("linuocc");

console.log(test.getName());
```





## 3、访问器的装饰器

> 访问器指的是类的getter和setter函数
>
> 访问器的装饰器的参数和方法的装饰器的参数一致

```typescript
//target对应的是类的prototype
function visit(target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.writable = false;
}

class Test {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
    @visit
    set name(name: string) {
        this._name = name;
    }
}

const test = new Test("linuocc");
test.name = "lhc";//会报错，因为在装饰器中已经设置writable为false
console.log(test.name);
```



## 4、属性的装饰器



> 属性的装饰器只有两个参数

```typescript
//第一个参数是类的prototype
//第二个参数是属性名
function nameDec(target: any, key: string) {
    console.log(target, key);
}
```



虽然属性的装饰器，没有descriptor参数，但是可以用以下的方式返回一个descriptor

```typescript
function nameDec(target: any, key: string): any {
    const descriptor: PropertyDescriptor = {
        writable: false,
    };

    return descriptor;
}

class Test {
    @nameDec
    name = "linuocc";
}

const test = new Test();
test.name = "lhc";//报错，decriptor中的writable生效
console.log(test.name);

```



## 5、参数的装饰器

> 参数的装饰器接收三个参数
>
> target：类的原型
>
> method：参数所处方法的方法名
>
> paramIndex：参数的顺序，第几个参数

```typescript
function param(target: any, method: string, paramIndex: number): any {
    console.log(target);//Test { getInfo: [Function] } 
    console.log(method);//getInfo
    console.log(paramIndex);// 0
}
class Test {
    getInfo(@param name: string, age: number) {
        console.log(name, age);
    }
}

const test = new Test();
test.getInfo("linuocc", 18);
```

