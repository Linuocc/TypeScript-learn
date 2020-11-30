function add(first: number, second: number): number {
  return first + second;
}

//函数的返回值类型是void，表示没有返回值
function sayHello(): void {
  console.log("hello");
}

//never类型的函数，表示永远没法执行完
function errorEmitter(): never {
  while (true) {}
}

//参数解构的语法
function add1({ first, second }: { first: number; second: number }): number {
  return first + second;
}

function getNumber({ first }: { first: number }): number {
  return first;
}

const total = add1({ first: 1, second: 2 });
