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
