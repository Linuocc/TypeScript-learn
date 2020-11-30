//泛型  generic 泛指的类型

function join<T>(first: T, second: T): T {
  return first;
}

join<string>("1", "2");
