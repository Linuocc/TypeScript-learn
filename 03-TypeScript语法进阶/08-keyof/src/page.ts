interface Person {
  name: string;
  age: number;
  gender: string;
}

type key = keyof Person;
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
