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
  name: 'zero',
  friends: ['one', 'two', 'Three'],
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
  name: 'zero',
  friends: ['one', 'two', 'Three'],
  alertFriends() {
   this.friends.forEach((friend) => {
      console.log(this.name +" "+ "and" +" "+ friend);
    });
  },
};
object4.alertFriends();

var long = function (x) {
  return x + 1;
};
console.log(1+'기존방식');


const short = (x) => x + 1;
console.log(1+'ES6방식');


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
func('abc'); //func( ) undefined
//ES6
const func2 = (msg = 'hello') => {
  console.log(msg);
};
func2(); // 'hello'


var array=[1,2,3];
var fanc5=function(x,y,z){
console.log(x+y+z);
};
fanc5(array[0],array[1],array[2]);

fanc5.apply(null, array);
//spread방식 
fanc5(...array);
fanc5(...array,4,5);


//템플릿 문자열
var a=3;
var b='hit';
var object ={
  c:'friend'
};
var string=b+', my'+a+' '+ object.c;
console.log(string);

const string2 = `${b}, my ${a} ${object.c}`;
console.log(string2);

var string3 = 'hello\nfriends!';
const string4 = `hello
friends!`;
console.log(`${string3}`);
console.log(`${string4}`);

var Human=function(type){
  this.type=type || 'human';
};

Human.isHuman = function(human){
  return human instanceof Human;
};

Human.prototype.breathe=function(){
console.log('h-a-a-a-m');
};

var Zero= function(type,firstName,lastName){
Human.apply(this, arguments);
this.firstName=firstName;
this.lastName=lastName;
};

Zero.prototype=Object.create(Human.prototype);
Zero.prototype.constructor=Zero;//상속부분
Zero.prototype.sayName=function(){
console.log(this.firstName+' '+this.lastName);
};

var oldZero=new Zero('human','zero','choi');
Human.isHuman(oldZero);//true
console.log(Human);



class Human2{
constructor(type='human'){
  this.type=type;
  }

static isHuman(human){
  return human instanceof Human2;
  }

breathe(){
  console.log('h-a-a-a-m');
  }
}

class Zero2 extends Human2{
  constructor(type,firstName,lastName){
  super(type);
  this.firstName=firstName;
  this.lastName=lastName;
  }
sayName(){
  super.breathe();
  console.log(`${this.firstName} ${this.lastName}`);
  }
}


const newZero=new Zero2('hunam','Zero','choi');
Human2.isHuman(newZero);
newZero.sayName(Zero2);

var array=[1,2,3];
var a=array[0];
var b=array[2];
console.log(`a=${a}, b=${b}기존방식의 배열의 요소 가져오기`);

const [e, ,t]=[1,2,3];
console.log(`e=${e} t=${t} ES6방식의 변수 선언 및 배열의 요소 가져오기`);


var obj={
  o:'Eeee',
  f:{
    g:'Gee'
 }
};
var o=obj.o;
var g=obj.f.g;
console.log(`e::${e} g::${g}`);

var obj2={
  h:'Eich',
  u: { 
    j:'Jey'
  }
}
 const{h,u:{j},k}=obj2;
 console.log(h,j,k);

const destruct = ({ value: x }) => {
  console.log(x);
};
const arg = { value: 3 };
 destruct(arg); 


 for(var i in 'string') {console.log(i);}//key값 반복
 for(var i of 'string') {console.log(i);}//속성 값 반복
 let arraya=[3,5,7];
 arraya.foo='bar';
 for(let j in arraya){console.log(j);}
 for(let j of arraya){console.log(j);}

//  var domArr = document.getElementsByTagName('div');
//  for(var kk= 0;kk<domArr.length;kk++){console.log(domArr[kk]); }

//  for (var l of document.getElementsByTagName('div')) { console.log(l); }



// for (const [idx, val] of Iterable.entries()) {
//   console.log(idx, val);
// }

var map = new Map([['zero', 'ZeroCho']]);
map.set('hero','Hero');
console.log (map.get('zero'));
console.log(map.size);
map.has('hero');
map.has('sol');
map.entries();
console.log(map.keys()); 
console.log(map.values()) 
map.delete('hero');
map.clear();

var weakMapObj = { example: 'any' };
var weakMap = new WeakMap();
weakMap.set(weakMapObj, 'zero');
weakMap.get(weakMapObj); 



var set = new Set(['zero']);
set.add('hero');
set.has('zero'); 
set.has('nero'); 
console.log(set.size); 
set.entries(); 
console.log(set.keys()); 
console.log(set.values()); 
set.clear();

var weakSetObj = { example: 'any' };
var weakSet = new WeakSet();
weakSet.add(weakSetObj)

const promise4 =new Promise((resolve,reject)=>{
  setTimeout(
  ()=>{
try {
   resolve('hello')
   }catch(error){
  reject(error)
   }
}
 ,7000)
});


promise4.then(dat =>{
  console.log('then',dat);
}).catch(err=>{
  console.log('catch',err);
}).finally
console.log('finally')


const promise = new Promise((resolve, reject) => { 
  setTimeout(
    () => {
      try{
        throw new Error('failed');
        resolve('ok');
      } catch(e) {
        reject(e);
      }
    }
    , 5000)
});

promise.then(data => {
  console.log('then', data);
}).catch(err => {
  console.log('catch', err);

}).finally 
  console.log('무조건 실행');



  let factorial={
[Symbol.iterator](){

  let count =1;
  let cur=1;
  return{
    next( ){
     [count,cur]=[count+1,cur*count];
     return{done:false,value:cur};
      }
    }
  }
};
for (let n of factorial){
  if(n>10000000){
    break;
  }
  console.log(n)
}
function* factGenerator() {
  let cur = 1;
  let count = 1;
  while (true) {
    [count, cur] = [count + 1, cur * count]
    yield cur;
  }
}

let factGen = factGenerator();
console.log(factGen.next().value); 
console.log(factGen.next().value); 
console.log(factGen.next().value); 


function* customGenerator() {
  yield 1;
  yield 'zero';
  yield ['nero', 'hero'];
}

let cusGen = customGenerator();
console.log(cusGen.next()); 
console.log(cusGen.next()); 
console.log(cusGen.next()); 
console.log(cusGen.next());

function* stringCutter(string) {
  yield* string;
}
const cutter = stringCutter('Zero');
console.log(cutter.next().value); 
console.log(cutter.next().value); 

console.log(Array.from('Zero')); 
console.log(Array.of('Zero', 'Nero', 'Hero'));
console.log([1, 3, 5, 7, 9].fill(4)); 
console.log([1, 3, 5, 7, 9].fill(4, 0, 3)); 