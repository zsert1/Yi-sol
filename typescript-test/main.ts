import { Console } from "console";
import { isContext } from "vm";
import { createBrotliCompress } from "zlib";

console.log("TypeScript on NodeJS!");

let add = (a: number, b: number) => {
  return a + b;
};

let sum: number = add(1, 2);
console.log(sum);

let isBoolean: boolean;
let isDone: boolean = false;

//문자열만 가지는 배열
let fr: string[] = ["A", "B", "M"];
console.log(fr);
// 숫자만 가지는 배열
let oneSeven: number[] = [1, 2, 3, 4];

console.log(oneSeven);
let array: (string | number)[] = ["A", 1, 2, "B", "Ma", 3];
console.log(array);

let someArr: any[] = [0, 1, {}, [], "str", false];
console.log(someArr);

interface IUuser {
  name: string;
  age: number;
  isValid: boolean;
}
let userArr: IUuser[] = [
  { name: "YI", age: 26, isValid: true },
  {
    name: "YI",
    age: 28,
    isValid: false,
  },
  {
    name: "YI_SOL",
    age: 26,
    isValid: true,
  },
];
console.log(userArr);
//읽기전용 배열
let arrA: readonly number[] = [1, 2, 3, 4];
let arrB: ReadonlyArray<number> = [0, 9, 8, 7];

let tuple: [string, number];
tuple = ["a", 1];
//tuple=['',1,1];
//=>정해진 길이만 허용한다

let userId: number = 1234;
let userName: string = "yi-sol";
let isValid: boolean = true;

let userInfo: [number, string, boolean] = [userId, userName, isValid];
console.log(userInfo[0]);
console.log(userInfo[1]);
console.log(userInfo[2]);

let user: [number, string, boolean][];

user = [
  [1, "sol", true],
  [2, "sel", false],
  [3, "Yisol", true],
];
console.log(user[0]);

enum Week {
  sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Week.Mon);
console.log(Week[0]);

enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

console.log(Color.Red);
console.log(Color["Green"]);

type Result =
  | {
      success: true;
      value: unknown;
    }
  | {
      success: false;
      value: Error;
    };

let getItems = (userObject: IUuser): Result => {
  if (userObject.isValid) {
    return {
      success: true,
      value: ["Apple", "Banana"],
    };
  } else {
    return {
      success: false,
      value: new Error("Invalid user."),
    };
  }
};
let userObject: IUuser = { name: "sol", age: 123, isValid: true };

console.log(getItems(userObject));

interface IUser {
  name: string;
  age: number;
}

let userA: IUser = {
  name: "HEROPY",
  age: 123,
};

let userB: IUser = {
  name: "HEROPY",
  age: 22,
  // email: 'zse@gmail.com' Error
};

let voi: void = undefined;

let hello = (msg: string): void => {
  console.log(`Hello${msg}`);
};
hello(" sol");
let hello2 = (msg: string): void => {
  console.log(`Hello${msg}`);
};
const hi: void = hello2("world");
console.log(hi);
let union: string | number;
union = "hello";
console.log(union);
union = 12345;
console.log(union);

let someFunc = (val: string | number, isNomber: boolean) => {
  if (isNomber) {
    (val as number).toFixed(2);
    console.log(val);
  }
};
someFunc(123, true);

let fnD = (x: number | null | undefined) => {
  if (x) {
    return x.toFixed(2);
  }
};

let fnB = (x: number | null | undefined) => {
  return (x as number).toFixed(2);
};

let fnC = (x: number | null | undefined) => {
  return (<number>x).toFixed(2);
};

let fnE = (x: number | null | undefined) => {
  return x!.toFixed(2);
};

let someFunc2 = (val: string | number, isNumber: boolean) => {
  if (isNumber) {
    console.log((val as number).toFixed(2));
    isNaN(val as number);
  } else {
    console.log((val as string).split(""));
    console.log((val as string).toUpperCase());
    console.log((val as string).length);
  }
};
someFunc2(0.2165, true);

let isNumber = (val: string | number): val is number => {
  return typeof val === "number";
};

let someFunc3 = (val: string | number) => {
  if (isNumber(val)) {
    console.log((val as number).toFixed(2));
    isNaN(val);
  } else {
    console.log((val as string).split(""));
    console.log((val as string).toUpperCase());
    console.log((val as string).length);
  }
};
someFunc3("ABCDEFG");

interface IUser {
  name: string;
  age: number;
  //isAdult?: boolean;
}
let usrin: IUser = { name: "sol", age: 26 };

interface IUuser2 {
  readonly name: string;
  age: number;
}

let user3: IUuser2 = { name: "sol", age: 27 };

user3.age = 20;
//user3.name='asdasd' 초기화 시킨 값으로 고정

interface IUuser3 {
  name: string;
  age: number;
}
let user5: Readonly<IUuser3> = {
  name: "SOL",
  age: 27,
};
interface IUser4 {
  name: string;
}
interface IGetUser {
  (name: string): IUser4;
}

let use: IUser4 = { name: "sol" };

const etUser: IGetUser = (n) => {
  return use;
};
etUser("sol");

interface IUser6 {
  name: string;
  getName(): string;
}

class User6 implements IUser6 {
  constructor(public name: string) {}
  getName() {
    return this.name;
  }
}

const neo = new User6("Neo");
console.log(neo.getName());

interface ICat {
  name: string;
  age?: number;
}
interface ICatConstructor {
  new (name: string): ICat;
}

interface ICatConstructor2 {
  new (name: string, age: number): ICat;
}

class Cat implements ICat {
  //   public name: string;
  constructor(public name: string, public age?: number) {
    // this.name = strName;
  }
}

console.log(new Cat("abc", 11));

let makeKitten = (c: ICatConstructor, n: string) => {
  return new c(n);
};
const kitten = makeKitten(Cat, "Lucy");
console.log(kitten);

let makeKitten2 = (c: ICatConstructor2, n: string, age: number) => {
  return new c(n, age);
};
const kitten2 = makeKitten2(Cat, "Lucy", 11);
console.log(kitten2);

interface IItem {
  [itemIdex: number]: string | boolean | number[];
}

let item: IItem = ["hello", false, [1, 2, 3]];
console.log(item[0]);
console.log(item[1]);
console.log(item[2]);

interface IUUuser {
  [userPro: string]: string | boolean;
}

let users: IUUuser = {
  name: "sol",
  email: "zseqwr1@qwe.con",
  isValid: true,
  0: false,
};

console.log(users["name"]);
console.log(users["email"]);
console.log(users["isValid"]);
console.log(users[0]);
console.log(users[1]);
console.log(users["0"]);

interface IUser {
  [userProp: string]: string | number;
  name: string;
  age: number;
}

let usr: IUser = {
  name: "Neo",
  age: 123,
  email: "zseqwr123@qwe.com",
  // isAdult: true
};
console.log(usr["name"]);
console.log(usr["age"]);
console.log(usr["email"]);

interface ICountries {
  KR: "대한민국";
  US: "미국";
  CP: "중국";
}

let country: keyof ICountries;
country = "KR";
console.log(country);

let country2: ICountries[keyof ICountries];
country2 = "대한민국";

let toArray = (a: number, b: number): number[] => {
  return [a, b];
};

console.log(toArray(2, 5));

let toArray2 = (
  a: number | string,
  b: number | string
): (number | string)[] => {
  return [a, b];
};
console.log(toArray2(1, 2));
console.log(toArray2("string", 2));
console.log(toArray2("string", " string"));

function toArray4<T>(a: T, b: T): T[] {
  return [a, b];
}

let toArray3 = <T>(a: T, b: T): T[] => {
  return [a, b];
};
console.log(toArray3(1, 2));
console.log(toArray3("1", "2"));

interface MyType<T> {
  name: string;
  value: T;
}

const dataA: MyType<string> = {
  name: "DATA A",
  value: "<T>=string",
};

const dataB: MyType<number> = {
  name: "DTAA B <T>=number",
  value: 1234,
};

const dataC: MyType<boolean> = {
  name: "DATA C <T>=boolean",
  value: true,
};

const dataD: MyType<number[]> = {
  name: "DATA <T>= array",
  value: [1, 2, 3, 4],
};

interface MyType2<T extends string | number> {
  name: string;
  value: T;
}

const dataE: MyType2<string> = {
  name: "Data E",
  value: "Hello world",
};
const dataF: MyType2<number> = {
  name: "Data F",
  value: 1234,
};

type U = string | number | boolean;

type MyType3<T> = T extends U ? string : never;

interface IUser7<T> {
  name: string;
  age: T extends U ? number : never;
}

interface IUser8<T extends boolean> {
  name: string;
  age: T extends true ? string : number; // `T`의 타입이 `true`인 경우 `string` 반환, 아닌 경우 `number` 반환.
  isString: T;
}

const str: IUser8<true> = {
  name: "sol",
  age: "26", // String
  isString: true,
};
const num: IUser8<false> = {
  name: "YI",
  age: 20, // Number
  isString: false,
};

const obj = {
  a: "Hello~",
  b: function () {
    console.log(this.a);
  },
};

obj.b();

const b = obj.b.bind(obj);
b();

const someFunc4 = (cb: any) => {
  cb();
};

someFunc4(b);
setTimeout(b, 100);

class Dog {
  constructor(private name: string) {}
  getName = () => {
    console.log(this.name);
  };
}

const dog = new Dog("babydog");
dog.getName();

const getname = dog.getName;
getname();

const somfun = (cd: any) => {
  cd();
};
somfun(dog.getName);

const add2 = (a: any, b: any): any => {
  // 함수 구현
  return a + b;
};

add2("hello ", "world~");
add2(1, 2);
add2("hello ", 2);

interface IUuse {
  name: string;
  age: number;
  getDate(x: string): string[];
  getDate(x: number): string;
}

let use10: IUuse = {
  name: "sol",
  age: 26,
  getDate: (data: any) => {
    if (typeof data === "string") {
      return data.split("");
    } else {
      return data.toString();
    }
  },
};

console.log(use10.getDate("hello"));
use10.getDate(123);

class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dogg extends Animal {
  getName(): string {
    return `dogg name is ${this.name}`;
  }
}

let dogg = new Dogg("바둑이");
console.log(dogg.getName());

dogg.name = "검둥이";
console.log(dogg.getName());

// 파생된 클래스에서 구현해야 합니다.
abstract class Ani {
  abstract name: string;
  abstract getName(): string;
}

class Ddog extends Ani {
  constructor(public name: string) {
    super();
  }
  getName() {
    return this.name;
  }
}
const ddog = new Ddog("흰둥이");
console.log(ddog.getName());

interface IAni {
  name: string;
  getName(): string;
}

class DDDog implements IAni {
  constructor(public name: string) {}
  getName() {
    return this.name;
  }
}
let dddog = new DDDog("갈돌이");
console.log(dddog.getName());

abstract class Ainimals {
  abstract name: string;
  abstract getName(): string;

  abstract legs: number;
  abstract getLegs(): number;
}

class Anima extends Ainimals {
  constructor(public name: string, public legs: number) {
    super();
  }
  getName() {
    return this.name;
  }
  getLegs() {
    return this.legs;
  }
}

let aa = new Anima("빨강이", 10);
console.log(`${aa.getName()}의 다리는 ${aa.getLegs()}개 입니다`);

const add3 = (x: number, y?: number): number => {
  return x + (y || 0);
};
console.log(add3(5));

const add4 = (x: number, y: number | undefined): number => {
  return x + (y || 0);
};
console.log(add4(15, undefined));



interface IU {
  name: string;
  age: number;
  isAdult?: boolean;
}

  let us: IU = {
    name: "sol",
    age: 26,
  };
  console.log(us);
  let us2: IU = {
    name: "YIsor",
    age: 25,
    isAdult: true,
  };
  console.log(us2);




  interface IUser5 {
    name: string,
    age: number,
    isAdult?: boolean,
    validate?(): boolean
  }
  type TUser = {
    name: string,
    age: number,
    isAdult?: boolean,
    validate?(): boolean
  }
  abstract class CUser {
    abstract name: string;
    abstract age: number;
    abstract isAdult?: boolean;
    abstract validate?(): boolean;
  }


  // 인터페이스 내보내기
export interface IUser10 {
  name: string,
  age: number
}

// 타입 별칭 내보내기
export type MyType5 = string | number;