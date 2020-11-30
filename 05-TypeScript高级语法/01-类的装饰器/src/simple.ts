//类的装饰器
//装饰器本身是一个函数
//装饰器通过@符号来使用
//

// function testDeacorator(flag: boolean) {
//   if (flag) {
//     return function (constructor: any) {
//       constructor.prototype.getName = () => {
//         console.log("linuocc");
//       };
//     };
//   } else {
//     return function (constructor: any) {};
//   }
// }
// @testDeacorator(true)
// class Test {}

// const test = new Test();
// (test as any).getName();
