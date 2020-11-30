//定义全局变量
// declare var $: (param: () => void) => void;

// declare var $: (param: () => void) => void;

//定义全局函数
// interface JqueryInstance {
//   html: (html: string) => JqueryInstance;
// }

// declare function $(params: () => void): void;

// declare function $(param: string): JqueryInstance;

// //对象、类以及命名空间
// declare namespace $ {
//   namespace fn {
//     class init {}
//   }
// }

//使用interface的语法实现函数重载
// interface JQuery {
//   (readyFunc: () => void): void;
//   (selector: string): JqueryInstance;
// }

// declare var $: JQuery;

//模块化类型定义文件
declare module "jquery" {
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
  export = $;
}
