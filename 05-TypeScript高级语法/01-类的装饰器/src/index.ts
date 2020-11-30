const userInfo: any = undefined;

function catchError(msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function () {
      try {
        fn();
      } catch (e) {
        console.log("userInfo." + msg + "存在问题");
      }
    };
  };
}

class Test {
  @catchError("name")
  getName() {
    return userInfo.name;
  }
  @catchError("age")
  getAge() {
    return userInfo.age;
  }
}

const test = new Test();
test.getName();
test.getAge();
