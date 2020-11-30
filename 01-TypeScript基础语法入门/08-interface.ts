//interface（接口）定义的只能是对象或者函数，没法直接定义基础类型
interface Person {
  name: string;
  age?: number;
  [prop: string]: any;
  say(): string;
}

interface Teacher extends Person {
  teach(): string;
}

interface SayHi {
  (word: string): string;
}

const say: SayHi = (word: string) => {
  return "";
};

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
  say() {
    return "";
  },
};

// getPersonName(person);
// setPersonName(person, "sdad");

// class User implements Person {
//   name = "sa";
//   say() {
//     return "sdasd";
//   }
// }
