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
    (animal as Bird).sing();
  } else {
    (animal as Dog).bark();
  }
}
function trainAnil2(animal: Bird | Dog) {
  if ("sing" in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}

function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}

class NumerObj {
  count: number;
}
//需求：如果first和second都是NumerObj类型，就返回他们两个count属性的和，否则就返回0
function add2(first: object | NumerObj, second: object | NumerObj) {
  if (first instanceof NumerObj && second instanceof NumerObj) {
    return first.count + second.count;
  }

  return 0;
}
