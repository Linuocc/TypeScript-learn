// class Person {
//   constructor(public readonly name: string) {}
// }

// const person = new Person("linuocc");
// person.name = "lhc"; //报错
// console.log(person.name);

//抽象类
// abstract class Geom {
//   width: number;

//   getType() {
//     return "Gemo";
//   }
//   abstract getArea(): number;
// }

// class Circle extends Geom {
//   getArea() {
//     return 123;
//   }
// }

// class Square extends Geom {
//   getArea() {
//     this.getType();
//     return 565;
//   }
// }

// class Triangle extends Geom {
//   getArea() {
//     return 34234;
//   }
// }
interface Teacher {
  name: string;
}
interface Student {
  name: string;
  age: number;
}

const teacher = {
  name: "linuocc",
};

const student = {
  name: "lhc",
  age: 18,
};

const getUserInfo = (user: Teacher | Student) => {
  console.log(user.name);
};

getUserInfo(teacher);
getUserInfo(student);
