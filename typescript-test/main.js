"use strict";
exports.__esModule = true;
console.log("TypeScript on NodeJS!");
var add = function (a, b) {
    return a + b;
};
var sum = add(1, 2);
console.log(sum);
var isBoolean;
var isDone = false;
//문자열만 가지는 배열
var fr = ["A", "B", "M"];
console.log(fr);
// 숫자만 가지는 배열
var oneSeven = [1, 2, 3, 4];
console.log(oneSeven);
var array = ["A", 1, 2, "B", "Ma", 3];
console.log(array);
var someArr = [0, 1, {}, [], "str", false];
console.log(someArr);
var userArr = [
    { name: "YI", age: 26, isValid: true },
    {
        name: "YI",
        age: 28,
        isValid: false
    },
    {
        name: "YI_SOL",
        age: 26,
        isValid: true
    },
];
console.log(userArr);
//읽기전용 배열
var arrA = [1, 2, 3, 4];
var arrB = [0, 9, 8, 7];
var tuple;
tuple = ["a", 1];
//tuple=['',1,1];
//=>정해진 길이만 허용한다
var userId = 1234;
var userName = "yi-sol";
var isValid = true;
var userInfo = [userId, userName, isValid];
console.log(userInfo[0]);
console.log(userInfo[1]);
console.log(userInfo[2]);
var user;
user = [
    [1, "sol", true],
    [2, "sel", false],
    [3, "Yisol", true],
];
console.log(user[0]);
var Week;
(function (Week) {
    Week[Week["sun"] = 0] = "sun";
    Week[Week["Mon"] = 1] = "Mon";
    Week[Week["Tue"] = 2] = "Tue";
    Week[Week["Wed"] = 3] = "Wed";
    Week[Week["Thu"] = 4] = "Thu";
    Week[Week["Fri"] = 5] = "Fri";
    Week[Week["Sat"] = 6] = "Sat";
})(Week || (Week = {}));
console.log(Week.Mon);
console.log(Week[0]);
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
console.log(Color.Red);
console.log(Color["Green"]);
var getItems = function (userObject) {
    if (userObject.isValid) {
        return {
            success: true,
            value: ["Apple", "Banana"]
        };
    }
    else {
        return {
            success: false,
            value: new Error("Invalid user.")
        };
    }
};
var userObject = { name: "sol", age: 123, isValid: true };
console.log(getItems(userObject));
var userA = {
    name: "HEROPY",
    age: 123
};
var userB = {
    name: "HEROPY",
    age: 22
};
var voi = undefined;
var hello = function (msg) {
    console.log("Hello" + msg);
};
hello(" sol");
var hello2 = function (msg) {
    console.log("Hello" + msg);
};
var hi = hello2("world");
console.log(hi);
var union;
union = "hello";
console.log(union);
union = 12345;
console.log(union);
var someFunc = function (val, isNomber) {
    if (isNomber) {
        val.toFixed(2);
        console.log(val);
    }
};
someFunc(123, true);
var fnD = function (x) {
    if (x) {
        return x.toFixed(2);
    }
};
var fnB = function (x) {
    return x.toFixed(2);
};
var fnC = function (x) {
    return x.toFixed(2);
};
var fnE = function (x) {
    return x.toFixed(2);
};
var someFunc2 = function (val, isNumber) {
    if (isNumber) {
        console.log(val.toFixed(2));
        isNaN(val);
    }
    else {
        console.log(val.split(""));
        console.log(val.toUpperCase());
        console.log(val.length);
    }
};
someFunc2(0.2165, true);
var isNumber = function (val) {
    return typeof val === "number";
};
var someFunc3 = function (val) {
    if (isNumber(val)) {
        console.log(val.toFixed(2));
        isNaN(val);
    }
    else {
        console.log(val.split(""));
        console.log(val.toUpperCase());
        console.log(val.length);
    }
};
someFunc3("ABCDEFG");
var usrin = { name: "sol", age: 26 };
var user3 = { name: "sol", age: 27 };
user3.age = 20;
var user5 = {
    name: "SOL",
    age: 27
};
var use = { name: "sol" };
var etUser = function (n) {
    return use;
};
etUser("sol");
var User6 = /** @class */ (function () {
    function User6(name) {
        this.name = name;
    }
    User6.prototype.getName = function () {
        return this.name;
    };
    return User6;
}());
var neo = new User6("Neo");
console.log(neo.getName());
var Cat = /** @class */ (function () {
    //   public name: string;
    function Cat(name, age) {
        this.name = name;
        this.age = age;
        // this.name = strName;
    }
    return Cat;
}());
console.log(new Cat("abc", 11));
var makeKitten = function (c, n) {
    return new c(n);
};
var kitten = makeKitten(Cat, "Lucy");
console.log(kitten);
var makeKitten2 = function (c, n, age) {
    return new c(n, age);
};
var kitten2 = makeKitten2(Cat, "Lucy", 11);
console.log(kitten2);
var item = ["hello", false, [1, 2, 3]];
console.log(item[0]);
console.log(item[1]);
console.log(item[2]);
var users = {
    name: "sol",
    email: "zseqwr1@qwe.con",
    isValid: true,
    0: false
};
console.log(users["name"]);
console.log(users["email"]);
console.log(users["isValid"]);
console.log(users[0]);
console.log(users[1]);
console.log(users["0"]);
var usr = {
    name: "Neo",
    age: 123,
    email: "zseqwr123@qwe.com"
};
console.log(usr["name"]);
console.log(usr["age"]);
console.log(usr["email"]);
var country;
country = "KR";
console.log(country);
var country2;
country2 = "대한민국";
var toArray = function (a, b) {
    return [a, b];
};
console.log(toArray(2, 5));
var toArray2 = function (a, b) {
    return [a, b];
};
console.log(toArray2(1, 2));
console.log(toArray2("string", 2));
console.log(toArray2("string", " string"));
function toArray4(a, b) {
    return [a, b];
}
var toArray3 = function (a, b) {
    return [a, b];
};
console.log(toArray3(1, 2));
console.log(toArray3("1", "2"));
var dataA = {
    name: "DATA A",
    value: "<T>=string"
};
var dataB = {
    name: "DTAA B <T>=number",
    value: 1234
};
var dataC = {
    name: "DATA C <T>=boolean",
    value: true
};
var dataD = {
    name: "DATA <T>= array",
    value: [1, 2, 3, 4]
};
var dataE = {
    name: "Data E",
    value: "Hello world"
};
var dataF = {
    name: "Data F",
    value: 1234
};
var str = {
    name: "sol",
    age: "26",
    isString: true
};
var num = {
    name: "YI",
    age: 20,
    isString: false
};
var obj = {
    a: "Hello~",
    b: function () {
        console.log(this.a);
    }
};
// class obj3{
//   private obj2= {
//     a: "Hello~",
//     b: () => {
//       console.log(this.obj2);
//     },
//   }
// };
obj.b();
var b = obj.b.bind(obj);
b();
var someFunc4 = function (cb) {
    cb();
};
someFunc4(b);
setTimeout(b, 100);
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.getName = function () {
        console.log(this.name);
    };
    return Dog;
}());
var dog = new Dog("babydog");
console.log(dog.getName());
var getname = dog.getName;
console.log("getname " + getname());
var somfun = function (cd) {
    cd();
};
somfun(dog.getName);
console.log("somfun(dog.getName):" + somfun(dog.getName));
