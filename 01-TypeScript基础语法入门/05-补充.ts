//Date类型
const date = new Date();
let d: Date;

//其他的
const rawData = '{"name":"linuocc"}';
const nowData = JSON.parse(rawData); //这里nowData的类型是any推导不出类型

//多个类型
let temp: number | string = 123;
temp = "123";
