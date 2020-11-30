// class Person {
//   name = "linuocc";
//   getName() {
//     return this.name;
//   }
// }

// class Teacher extends Person {
//   getTeacherName() {
//     return "lhc";
//   }
//   getName() {
//     return super.getName() + "123";
//   }
// }

// const teacher = new Teacher();
// console.log(teacher.getName());
// console.log(teacher.getTeacherName());

// private protected public
// class Person {
//   private name: string;
// }

// const person = new Person();
// person.name = "linuocc";
// console.log(person.name);

// class Person {
//   protected name: string;
// }

// class Teacher extends Person {
//   public sayBye() {
//     this.name;
//   }
// }

//构造函数
// const person = new Person();
// person.name = "linuocc";
// console.log(person.name);

// class Person {
//   // public name: string;
//   constructor(public name: string) {
//     // this.name = name;
//   }
// }

// const person = new Person("linuocc");
// console.log(person.name);

// class Person {
//   constructor(public name: string) {}
// }

// class Teacher extends Person {
//   constructor(name: string, age: number) {
//     super(name);
//   }
// }

// const teacher = new Teacher("linuocc", 28);

//getter和setter
// class Person {
//   constructor(private _name: string) {}

//   get name() {
//     return this._name;
//   }
//   set name(name: string) {
//     this._name = name;
//   }
// }

// const person = new Person("linuocc");
// console.log(person.name);
// person.name = "lhc";
// console.log(person.name);

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
console.log(demo1.name, demo2.name);
