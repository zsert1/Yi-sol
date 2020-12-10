if (true) {
  var x = 3;
}
console.log(x);

if (true) {
  const y = 3;
  console.log(y);
}

let q = 100;
q = 153;

const c = [1, 2, 3];
c[0] = 4;
c;
console.log(c);

const d = { name: "zero" };
d.name = "one";
d;
console.log(d);

//기존방식
var sayYeah = function () {
  console.log("say");
};

var a = 1;
var b = "wow";

var object = {
  say: function () {
    console.log("hello");
  },
  sayYeah: sayYeah,
};

object[a + 3] = "four";
object["say" + b] = function () {
  console.log("wow");
};

//ES6방식
const z = 1;
const s = "Wow";
const sayYeah2 = () => {
  console.log("yeah");
};
const object2 = {
  sayHello() {
    console.log("Hello");
  },
  sayYeah2,
  [a + 3]: "four",
  ["say" + b]() {
    console.log("wow");
  },
};

//ex.3
//기존
var object3 = {
  name: "zero",
  friends: ["one", "two", "Three"],
  alertFriends: function () {
    var self = this;
    this.friends.forEach(function (friend) {
      console.log(self.name + "and" + friend);
    });
  },
};
object3.alertFriends(); //세번알림

//ES6
const object4 = {
  name: "zero",
  friends: ["one", "two", "Three"],
  alertFriends() {
    this.friends.forEach((friend) => {
      console.log(this.name + " " + "and" + " " + friend);
    });
  },
};
object4.alertFriends();

var long = function (x) {
  return x + 1;
};
console.log(1 + "기존방식");

const short = (x) => x + 1;
console.log(1 + "ES6방식");

//기존
var func3 = function (x) {
  var args = Array.prototype.slice.call(arguments, 1);
  console.log(args.length);
};
func3(1);

//ES6
const func4 = (x, ...y) => {
  console.log(y.length);
};
func4(1, 2, 3, 4);

//기존
var func = function (msg) {
  console.log(msg);
};
func("abc"); //func( ) undefined
//ES6
const func2 = (msg = "hello") => {
  console.log(msg);
};
func2(); // 'hello'

var array = [1, 2, 3];
var fanc5 = function (x, y, z) {
  console.log(x + y + z);
};
fanc5(array[0], array[1], array[2]);

fanc5.apply(null, array);
//spread방식
fanc5(...array);
fanc5(...array, 4, 5);

//템플릿 문자열
var a = 3;
var b = "hit";
var object = {
  c: "friend",
};
var string = b + ", my" + a + " " + object.c;
console.log(string);

const string2 = `${b}, my ${a} ${object.c}`;
console.log(string2);

var string3 = "hello\nfriends!";
const string4 = `hello
friends!`;
console.log(`${string3}`);
console.log(`${string4}`);

var Human = function (type) {
  this.type = type || "human";
};

Human.isHuman = function (human) {
  return human instanceof Human;
};

Human.prototype.breathe = function () {
  console.log("h-a-a-a-m");
};

var Zero = function (type, firstName, lastName) {
  Human.apply(this, arguments);
  this.firstName = firstName;
  this.lastName = lastName;
};

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero; //상속부분
Zero.prototype.sayName = function () {
  console.log(this.firstName + " " + this.lastName);
};

var oldZero = new Zero("human", "zero", "choi");
Human.isHuman(oldZero); //true
console.log(Human);

class Human2 {
  constructor(type = "human") {
    this.type = type;
  }

  static isHuman(human) {
    return human instanceof Human2;
  }

  breathe() {
    console.log("h-a-a-a-m");
  }
}

class Zero2 extends Human2 {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayName() {
    super.breathe();
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

const newZero = new Zero2("hunam", "Zero", "choi");
Human2.isHuman(newZero);
newZero.sayName(Zero2);

var array = [1, 2, 3];
var a = array[0];
var b = array[2];
console.log(`a=${a}, b=${b}기존방식의 배열의 요소 가져오기`);

const [e, , t] = [1, 2, 3];
console.log(`e=${e} t=${t} ES6방식의 변수 선언 및 배열의 요소 가져오기`);

var obj = {
  o: "Eeee",
  f: {
    g: "Gee",
  },
};
var o = obj.o;
var g = obj.f.g;
console.log(`e::${e} g::${g}`);

var obj2 = {
  h: "Eich",
  u: {
    j: "Jey",
  },
};
const {
  h,
  u: { j },
  k,
} = obj2;
console.log(h, j, k);

const destruct = ({ value: x }) => {
  console.log(x);
};
const arg = { value: 3 };
destruct(arg);

for (var i in "string") {
  console.log(i);
} //key값 반복
for (var i of "string") {
  console.log(i);
} //속성 값 반복
let arraya = [3, 5, 7];
arraya.foo = "bar";
for (let j in arraya) {
  console.log(j);
}
for (let j of arraya) {
  console.log(j);
}

//  var domArr = document.getElementsByTagName('div');
//  for(var kk= 0;kk<domArr.length;kk++){console.log(domArr[kk]); }

//  for (var l of document.getElementsByTagName('div')) { console.log(l); }

// for (const [idx, val] of Iterable.entries()) {
//   console.log(idx, val);
// }

var map = new Map([["zero", "ZeroCho"]]);
map.set("hero", "Hero");
console.log(map.get("zero"));
console.log(map.size);
map.has("hero");
map.has("sol");
map.entries();
console.log(map.keys());
console.log(map.values());
map.delete("hero");
map.clear();

var weakMapObj = { example: "any" };
var weakMap = new WeakMap();
weakMap.set(weakMapObj, "zero");
weakMap.get(weakMapObj);

var set = new Set(["zero"]);
set.add("hero");
set.has("zero");
set.has("nero");
console.log(set.size);
set.entries();
console.log(set.keys());
console.log(set.values());
set.clear();

var weakSetObj = { example: "any" };
var weakSet = new WeakSet();
weakSet.add(weakSetObj);

const promise4 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ok = "promise4의resolve";
      resolve(ok);
      throw new Error(`고의에러`);
    }, 7000);
  });
};

const errorr = async () => {
  var ok = await promise4();
  console.log(ok);
};
errorr();



const promise6 = () => {
  return new Promise((resolve, reject) => {
    const ok = "async()/await 사용";
    resolve(ok);
  });
};

const another = async () => {
  var resultok = await promise6();
  console.log(resultok);
};
another();

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      throw new Error("failed");
      resolve("ok");
    } catch (e) {
      reject(e);
    }
  }, 5000);
});

promise
  .then((data) => {
    console.log("then", data);
  })
  .catch((err) => {
    console.log("catch", err);
  }).finally;
console.log("무조건 실행");

let factorial = {
  [Symbol.iterator]() {
    let count = 1;
    let cur = 1;
    return {
      next() {
        [count, cur] = [count + 1, cur * count];
        return { done: false, value: cur };
      },
    };
  },
};
for (let n of factorial) {
  if (n > 10000000) {
    break;
  }
  console.log(n);
}
function* factGenerator() {
  let cur = 1;
  let count = 1;
  while (true) {
    [count, cur] = [count + 1, cur * count];
    yield cur;
  }
}

let factGen = factGenerator();
console.log(factGen.next().value);
console.log(factGen.next().value);
console.log(factGen.next().value);

function* customGenerator() {
  yield 1;
  yield "zero";
  yield ["nero", "hero"];
}

let cusGen = customGenerator();
console.log(cusGen.next());
console.log(cusGen.next());
console.log(cusGen.next());
console.log(cusGen.next());

function* stringCutter(string) {
  yield* string;
}
const cutter = stringCutter("Zero");
console.log(cutter.next().value);
console.log(cutter.next().value);

console.log(Array.from("Zero"));
console.log(Array.of("Zero", "Nero", "Hero"));
console.log([1, 3, 5, 7, 9].fill(4));
console.log([1, 3, 5, 7, 9].fill(4, 0, 3));

const findN = [1, 2, 3, 4, 5].find((number) => {
  return number % 2 === 0;
});

const findP = [{ name: "Zero" }, { name: "Nero" }, { name: "Hero" }].find(
  (person) => {
    return person.name === "Zero";
  }
);
console.log(findN);
console.log(findP);

const findFirstWhere = [1, 2, 3, 4, 5].findIndex(function (number) {
  return number % 2 === 0;
});

const findFirstWhere2 = [
  { name: "Zero" },
  { name: "Nero" },
  { name: "Hero" },
].findIndex(function (person) {
  return person.name === "Zero";
});

console.log(findFirstWhere);
console.log(findFirstWhere2);

const arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(1, 2)); //원본을 수정 시킨다!
console.log(arr);
console.log([1, 2, 3, 4, 5].copyWithin(1, 2, 4));
console.log([1, 2, 3, 4, 5].copyWithin(1, 1, 4));

const st = "Zero is Great".startsWith("Zero");
const st2 = "Zero is Great".startsWith("is", 3);
console.log(st);
console.log(st2);

const st3 = "Zero is Great".endsWith("t");
const st4 = "Zero is Great".endsWith("s", 7);
console.log(st3);
console.log(st4);

const st5 = "JavaScript ".repeat(5);
console.log(st5);

console.log(st5.includes("J"));
console.log(st5.includes("j"));

const arrr = Object.assign({}, { a: 1 });
const arrrPlus = Object.assign({ a: 1, b: 1 }, { a: 2 }, { a: 3 });
const arrrPlus2 = Object.assign({ a: 1, b: 1 }, { a: 2 }, { a: 3 }, { c: 6 });
console.log(arrr);
console.log(arrrPlus);
console.log(arrrPlus2);

console.log(Object.is("window", "window"));
console.log(Object.is(0, -0));
console.log(Object.is(null, null));
console.log(`${Math.sign(-3)} :음수`);
console.log(`${Math.sign(-0)} :0의 음수`);
console.log(`${Math.sign(0)} :0의양수`);
console.log(`${Math.sign(4)} :양수`);
console.log(`${Math.sign("숫자가아닌 것")} :숫자가 아닌 것`);

console.log(
  `Math.trunc(1.5): ${Math.trunc(1.5)}   Math.floor(1.9): ${Math.floor(1.9)}`
);
console.log(
  `Math.trunc(-1.5): ${Math.trunc(-1.5)}   Math.ceil(-1.1):${Math.ceil(-1.1)}`
);

console.log(`1은 정수이다? ${Number.isInteger(1)} `);
console.log(`0.1은 정수이다? ${Number.isInteger(0.1)} `);

const target = {};
const handler = {
  get: (obj, name) => {
    return `안녕 ${name}`;
  },
};
const proxy = new Proxy(target, handler);
console.log(proxy.zero);
console.log(target.zero);

class ttt {
  get zero() {
    return 222;
  }
}
const t2 = new ttt();
const t3 = { zero: 111 };

t3.zero = 300;
console.log("ttt.zero = ", t3.zero);

const target2 = {};
const handler2 = {
  set: (obj, name, value) => {
    console.log(`${name}가 ${value}로 설정되었습니다`);
  },
};
const proxy2 = new Proxy(target2, handler2);
console.log(target2.zero);
proxy2.zero = "change";

const target3 = (a, b) => a + b;
const handler3 = {
  apply: (target3, thisArg, argList) => {
    return target3.apply(thisArg, argList);
  },
};
const proxy3 = new Proxy(target3, handler3);
console.log(proxy3(3, 5));

const target6 = {};
const handler6 = {
  set: (target6, name, value) => {
    if (name === "onlyNumber") {
      if (!Number.isInteger(value)) {
        try {
          throw new TypeError("onlyNumber에는 정수만 입력해주세요");
        } catch (e) {
          console.log(e);
        }
      }
    }
  },
};
const proxy6 = new Proxy(target6, handler6);
proxy6.onlyNumber = "Hi";

const obj5 = { a: 1, b: "zero", c: true };
console.log(Reflect.get(obj5, "a"));
const arry = [1, "zero", true];
console.log(Reflect.get(arry, 1));

Reflect.set(obj5, "d", ["plus", "plusplus"]);
console.log(obj5.d);
const add = (a, b) => a + b;
console.log(Reflect.apply(add, null, [10, 150]));

//  const Person= ((first,last) =>{
//   this.firstName = first;
//   this.lastName = last;

// });
//   zero3=Reflect.construct(Person,['Zero','cho']);
//   console.log(zero3);
//  const zero4= new Person('zero','cho');
//   console.log(zero4);

function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}
const zero = Reflect.construct(Person, ["zero", "cho"]);
console.log(zero);
const zsro4 = new Person("zero", "cho");
console.log(zsro4);

console.log(Reflect.has(obj5, "b"));
Reflect.deleteProperty(obj5, "c");
console.log(obj5);

const human = {
  eat() {
    console.log("먹다");
  },
  move() {
    console.log("움직이다");
  },
};
Reflect.setPrototypeOf(zero, human);
console.log(Reflect.getPrototypeOf(zero, human));

var i = 5;
console.log((i **= 6));

let obj7 = {
  a: "hello",
  b: "zero",
};
console.log(Object.values(obj7));

const job = (x) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(x);
      resolve(x);
    }, x * 1000);
  });
};

(async (x) => {
  const [a, b] = await Promise.all([job(3), job(6)]);
  const c = await job(9);
  return a + b + c;
})().then((res) => console.log(res));



const fetchItems = () => {
  return new Promise((resolve, reject) => {
    var items = [1, 2, 3];
    resolve(items);
  });
};

const logItems = async () => {
  var resultItems = await fetchItems();
  console.log(resultItems);
};
logItems();
