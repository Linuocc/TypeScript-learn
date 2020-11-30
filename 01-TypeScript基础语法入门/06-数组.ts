//自动推导类型
const numberArr1 = [1, 2, 3];

//单一类型数组
const numberArr2: number[] = [1, 2, 3];

//多个类型数组
const arr: (number | string)[] = [1, "2", 3];

//对象数组
const objectArr: { name: string; age: number }[] = [
  { name: "linuocc", age: 22 },
];

//类型别名
type User = { name: string; age: number };
const objectArr2: User[] = [{ name: "linuocc", age: 22 }];
