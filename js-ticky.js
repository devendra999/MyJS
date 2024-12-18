given a string, reverse each word in the sentence
----------------------
    var str = "saare jahn se acha hindustan hamara"
    var savedStr = str.split(" ").map((word) => word.split("").reverse().join(""))
    console.log(savedStr.join(" "));


how to check if an object is an array or not? provide some code
----------------------
    function checkArray(elem) {
        return Array.isArray(elem);
    }
    console.log(checkArray([]));
    console.log(checkArray({}));



how to empty an array in javascript. do not reset it and loop
----------------------
    var array = ["hello", "world"];

    array.length = 0;


how would you check if a number is an intiger ?
----------------------
var a = 12;
if(a % 1 === 0) {
    console.log("integer")
} else {
    console.log("not integer")
}


make this work duplicate  duplicatearray[1,2,3,4,5,1,2,3,4,5]
----------------------
var a = [1,2,3]
a.concat(a)


write javascript function that reverse a number
----------------------
function numberReverse(num) {
    return Number(num.toString().split("").reverse().join(""))
}

write javascript function that checks whether passed string is palindrom or not ?
----------------------
    function palindromChecker(str) {
        var reversed = str.split("").reverse().join("");
        if(reversed === str)return true
        else return false
    }
    console.log(palindromChecker("poop"))
    console.log(palindromChecker("loop"))



write javascript function that return a passed string with letters in alphabetical order
----------------------
function stringAlphbet(str) {
    return str.split("").sort().join("");
}
console.log(stringAlphbet("Devendra"))
console.log(stringAlphbet("Hello"))


write javascript function that accept  a string as a parameter and convert the first letter of each word of the string in uppercase 
----------------------
function capitaliseKaro(str) {
    var allwords = str.split(" ").map((word) =>{
        return  word.charAt(0).toUpperCase() + word.substring(1)
    });
    return allwords.join(" ")
}

capitaliseKaro("devendra kaise ho");


write javascript function to get the number of occurences of each letter in specified string
----------------------
function occurencesStr(str) {
    var occurences = {};
    str.split("").forEach(function(elem) {
        if(occurences.hasOwnProperty(elem) === false) {
            occurences[elem] = 1;
        } else {
            occurences[elem]++;
        }
    })
    return occurences;
}
console.log(occurencesStr("apple"));


loop an array and add all numbers of it
----------------------
var arr = [1,5,6,8,7];

var sum = 0;
arr.forEach(function(elem) {
    sum = sum + elem
})


in an array of numbers and strings, only add those numbers which are not strings
----------------------
var arr = ["dfdf", 12, "dfdf", 4, 5, "dfe", 3];
var sum = 0;

arr.forEach((function(elem) {
    if(typeof elem === "number") sum = sum + elem
}))

loop an array of objects and remove all objects which don't have gender's value male
----------------------
var arr = [
    {
        name: "devendra",
        gender: 'male'
    },
    {
        name: "shivani",
        gender: 'female'
    },
    {
        name: "ashoki",
        gender: 'nonspecified'
    },
    {
        name: "avinya",
        gender: 'female'
    }
]

var newArr = arr.filter((e) => e.gender === 'male')

write a javascript function clone an array
----------------------
function cloneArray(arr) {
    return arr.map((e) => e)
}

var newArray = cloneArray([1,2,3]);


write a javascript function which accept an argument and return the type
note: there are six possible values that type of return : object,boolean, function, number, string and undefined
----------------------
function typeTeller(elem) {
    return typeof elem;
}

console.log(typeTeller([]));
console.log(typeTeller(12));
console.log(typeTeller("12"));
console.log(typeTeller(true));
console.log(typeTeller(undefined));
console.log(typeTeller(function(){}));


write a javascript function to get the first element of an array. passing a parameter 'n' will return the first 'n' elements  of the array.
----------------------
function retrive(arr, n=1) {
    if(n <= arr.length) {
        for(var i = 0; i<n; i++) {
            console.log(arr[i]);
        }
    } else {
        console.log(n+ "to elements nahi he")
    }
}
retrive([1,2,3,4,5], 4)


write a javascript function to get the last element of an array. passing a parameter 'n' will return the last 'n' elements  of the array.
----------------------
function retrive(arr, n=1) {
    if(n <= arr.length) {
        for(var i = 0; i<n; i++) {
            console.log(arr[arr.length - 1 - i]);
        }
    } else {
        console.log(n+ "to elements nahi he")
    }
}
retrive([1,2,3,4,5], 2)


write a javascript function to find the most frequent item of an array // kon sa item jyada bar he
----------------------
function frequency(arr) {
    var frq = {};
    arr.forEach(function(elem) {
        if(frq.hasOwnProperty(elem)) frq[elem]++;
        else frq[elem] = 1;
    })
    var ans = Object.keys(frq).reduce(function(acc, num) {
        return frq[acc] > frq[num] ? acc : num;
    });
    console.log(ans)
}
frequency([1,2,3,4,5,6,7,84,24,2,43,5,1,2,1,1,1,2]);


write a javascript function to shuffle an array // position change karna
----------------------
function suffleKaro(arr) {
    var totalSuffleArea = arr.length;
    while(totalSuffleArea > 0) {
        totalSuffleArea--;
        var indexTobeExchanged = Math.floor(Math.random() * totalSuffleArea);
        var temp = arr[totalSuffleArea];
        arr[totalSuffleArea] = arr[indexTobeExchanged];
        arr[indexTobeExchanged] = temp;
    }
    return arr;
}
console.log(suffleKaro([1,2,3,4,5,6,7]));


write a javascript program to compute the union of two arrays 
----------------------
function union(arr1, arr2){
    return [...new Set(arr1.concat(arr2))];
}
console.log(union([1,2,3,1,2], [5,1,2,4,6]))

OR

function union(arr1, arr2){
    return [...new Set([...arr1, ...arr2])];
}
console.log(union([1,2,3,1,2], [5,1,2,4,6]))



const obj = {
    a: 1,
    b: 2,
    c: 3
  };
  
  const key = "b";
  
  delete obj[key];
  
  console.log(obj); // { a: 1, c: 3 }

------------

const obj = {
    prop: 1,
    method() {
        return this.prop;
    }
};

const newObj = { prop: 2 };

console.log(obj.method.call(newObj)); // 2

------------

const a = [];
const b = [];

a[0] = b;
b[0] = a;

console.log(a[0][0]); // Error: Maximum call stack size exceeded

------------

console.log([] == []); // false
console.log([] === []); // false
console.log({} == {}); // false
console.log({} === {}); // false

------------

var a = 1;
function foo() {
  console.log(a);
  var a = 2;
}
foo(); // undefined


------------

console.log(typeof null); // object
console.log(typeof undefined); // undefined

------------
console.log(1 + '1'); // 11 // except + operator convert string to number
console.log('1' + 1); // 11 // except + operator convert string to number
console.log(1 - '1'); // 0 // -, /, and * this operation convert string to number
console.log('1' - 1); // 0 // -, /, and * this operation convert string to number

------------

var a = [1, 2, 3];
var b = a;
b[0] = 99;

console.log(a); // [ 99, 2, 3 ]
console.log(b); // [ 99, 2, 3 ]
// b does not create a new copy of the array. Instead, it copies the reference to the array a into b. So, both a and b now refer to the same array in memory.

------------ 
console.log([] + []); // ''
console.log([] + {}); // [object Object]
console.log({} + []); // [object Object]
console.log({} + {}); // [object Object]
console.log([] == ![]); // true
//  {} is evaluated as an empty object, which is converted to the string "[object Object]".
------------

let x = 10;
let y = 20;

function foo() {
  console.log(x);
  let x = 30;
}

foo(); // ReferenceError: Cannot access 'x' before initialization

------------

const obj = {
    value: 10,
    increment() {
      this.value++;
    }
  };
  
  const newObj = obj;
  newObj.increment();
  
  console.log(obj.value);
// You create a new variable newObj and assign it the reference to obj. This means newObj and obj now refer to the same object in memory. So, any change to newObj will also affect obj because they point to the same underlying object.
  

------------
let a = 1;
let b = a;
a = 2;

console.log(b); // 1
// Note that this is not a reference assignment, since a is a primitive value (a number). So, b gets a copy of the value of a, which is 1. Now, b = 1 and a = 1.

------------
Qustion : difference between null and undefined 
  undefined
    - A variable that has been declared but not assigned a value is automatically assigned the value undefined.
    - undefined is its own type.

    let x;
    console.log(x); // undefined, because x is declared but not assigned

    function foo() {
    // no return statement
    }
    console.log(foo()); // undefined, because foo() doesn't return anything

    const obj = {};
    console.log(obj.nonExistentProperty); // undefined, because property doesn't exist

  null
    - null represents the intentional absence of any object value. It is explicitly assigned to variables to indicate that they should not have a value (or that they are "empty").
    - null is of type object (this is a known quirk in JavaScript).

    let x = null;
    console.log(x); // null, explicitly assigned

    let obj = { name: "John" };
    obj = null; // clear the reference to the object
    console.log(obj); // null, explicitly set to null


    example comparison
    let a;
    let b = null;

    console.log(a === undefined); // true, a is undefined
    console.log(b === null);      // true, b is null

    console.log(a == b);          // true, because undefined == null (loose equality)
    console.log(a === b);         // false, because undefined and null are of different types



------------

console.log(1 + '1'); // 11
console.log('1' + 1); // 11
console.log(1 + + '1'); // 2 
console.log(+'1' + 1); // 2
// + '1' becomes 1, and then you add 1 + 1, which gives 2.


------------

let x = 10;
let y = '10';

console.log(x == y); // true - number and string check value is same or not
console.log(x === y); // false


------------
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false

------------

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const first = outer();
const second = outer();

first();  // 1
first();  // 2
second(); // 1
first();  // 3

------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------


------------

------------



------------
function outer() {
  var x = 10;
  
  function inner() {
    console.log(x);
  }
  
  return inner;
}

var fn = outer();
fn();  // 10


---------------------
function outer() {
  var x = 10;
  
  setTimeout(function() {
    console.log(x);
  }, 0);
  
  x = 20;
}

outer(); // 20
---------------------
var a = 1;

function foo() {
  console.log(a); // undefined  - local scope
  var a = 2;
}

foo();


---------------------
function outer() {
  var x = 1;
  
  function inner() {
    var x = 2;
    console.log(x); // 2
  }
  
  inner();
  console.log(x); // 1
}

outer();


---------------------

function outer() {
  var x = 1;
  
  function inner() {
    console.log(x); // 2
  }
  
  setTimeout(inner, 1000);
  
  x = 2;
}

outer();


---------------------

console.log(foo()); // Typeerror : foo is not a function

var foo = function() {
  return "Hello, World!";
};
console.log(foo()); // Hello, World!

---------------------
function createFunctions() {
  var functions = [];
  
  for (var i = 0; i < 3; i++) {
    functions[i] = function() {
      console.log(i);
    };
  }
  
  return functions;
}

var funcs = createFunctions();
funcs[0](); // 3
funcs[1](); // 3
funcs[2](); // 3

---------------------
function createFunctions() {
  var functions = [];
  
  for (let i = 0; i < 3; i++) {
    functions[i] = function() {
      console.log(i);
    };
  }
  
  return functions;
}

var funcs = createFunctions();
funcs[0](); // 0
funcs[1](); // 1
funcs[2](); // 2
---------------------
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// output : 333

for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// output : 012
---------------------
async function foo() {
  console.log(1);
  await bar();
  console.log(2);
}

async function bar() {
  console.log(3);
  return new Promise(resolve => resolve());
}

foo();
// output : 132
---------------------
console.log(a); // function return

var a = 10;

function a() {
  console.log("Hello!");
}

---------------------

---------------------


------------







function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Lydia';
    let age = 21;
  }
  
  sayHi(); // undefined and ReferenceError



-------------------------
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  } // 3 3 3 
  
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  } // 0 1 2

-------------------------


+true; // 1
!'Lydia'; // false


-------------------------
const bird = {
    size: 'small',
  };
  
  const mouse = {
    name: 'Mickey',
    small: true,
  };

// A: mouse.bird.size is not valid
// B: mouse[bird.size] is valid // true
// C: mouse[bird["size"]] is valid // true

-------------------------

let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b); // true
console.log(a === b); // false
console.log(b === c); // false


-------------------------

let greeting;
greetign = {}; 
console.log(greetign); // {}

-------------------------

greetign = 3; 
console.log(greetign); // 3

-------------------------

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  const member = new Person('Lydia', 'Hallie');
  Person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  console.log(member.getFullName()); // TypeError

-------------------------

    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    const member = new Person('Lydia', 'Hallie');
    console.log(member); // Person { firstName: 'Lydia', lastName: 'Hallie' }

-------------------------

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const member = new Person('Lydia', 'Hallie');
  const sarah = Person('sarah', 'Tendulkar');

  
  console.log(member); // Person { firstName: 'Lydia', lastName: 'Hallie' }
  console.log(sarah); // undefined

-------------------------

let number = 0;
console.log(number++); // 0
console.log(++number); // 2
console.log(number); // 2

-------------------------

function checkAge(data) {
    if (data === { age: 18 }) {
      console.log('You are an adult!');
    } else if (data == { age: 18 }) {
      console.log('You are still an adult.');
    } else {
      console.log(`Hmm.. You don't have an age I guess`);
    }
  }
  
  checkAge({ age: 18 }); // This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false.

-------------------------

function getAge(...args) {
    console.log(typeof args);  // object : The rest parameter (...args) lets us "collect" all remaining arguments into an array. An array is an object, so typeof args returns "object"
  }
  
  getAge(21); 

-------------------------

function getAge() {
    'use strict';
    age = 21;
    console.log(age);  // using 'use strict' get ReferenceError
  }
  
  getAge();

-------------------------

const sum = eval('10*10+5');

-------------------------
sessionStorage.setItem('cool_secret', 123);
-------------------------

const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1'); // true
obj.hasOwnProperty(1); // true
set.has('1'); // false
set.has(1); // true

-------------------------
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj); // { a: "three", b: "two" }
-------------------------

for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);  // 1,2,4 : The continue statement skips an iteration if a certain condition returns true.
  }

-------------------------

String.prototype.giveLydiaPizza = () => {
    return 'Just give Lydia pizza already!';
  };
  
  const name = 'Lydia';
  
  console.log(name.giveLydiaPizza())  // 'Just give Lydia pizza already!'

-------------------------

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456
note : Object keys are automatically converted into strings. We are trying to set an object as a key to object a, with the value of 123.

However, when we stringify an object, it becomes "[object Object]". So what we are saying here, is that a["[object Object]"] = 123. Then, we can try to do the same again. c is another object that we are implicitly stringifying. So then, a["[object Object]"] = 456.

Then, we log a[b], which is actually a["[object Object]"]. We just set that to 456, so it returns 456.
-------------------------
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
note : An array of all nested elements.
--------------------------------
<div onclick="console.log('div')">
    <p onclick="console.log('p')">
      Click here!
    </p>
  </div>
  note : p div
-------------------------

const person = { name: 'Lydia' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21)); // Lydia is 21
console.log(sayHi.bind(person, 21)); // function
-------------------------
function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi()); // number : immideate function call and return return a number

-------------------------
console.log(typeof typeof 1); // number

-------------------------
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);  // 1 // This is the value of the local `x` inside the `catch` block
  }
  console.log(x); // undefined  // This is the value of the outer `x`, which was never assigned
  console.log(y); // 2 // This is the value of `y`, which was set to 2 in the `catch` block
})();

-------------------------
[...'Lydia']; // ["L", "y", "d", "i", "a"]

-------------------------
console.log(mul(2)(3)(4)); // output : 24
-------------------------

[] == ![]; // -> true

true == []; // -> false
true == ![]; // -> false

false == []; // -> true
false == ![]; // -> true

// true is 'truthy' and represented by value 1 (number), 'true' in string form is NaN.
true == "true"; // -> false
false == "false"; // -> false

// 'false' is not the empty string, so it's a truthy value
!!"false"; // -> true
!!"true"; // -> true

"b" + "a" + +"a" + "a"; // -> 'baNaNa'

"foo" + +"bar"; // -> 'fooNaN'

NaN === NaN; // -> false

Object.is(NaN, NaN); // -> true
NaN === NaN; // -> false

Object.is(-0, 0); // -> false
-0 === 0; // -> true

Object.is(NaN, 0 / 0); // -> true
NaN === 0 / 0; // -> false

+![]          // -> 0
+!![]         // -> 1
!![]          // -> true
![]           // -> false
[][[]]        // -> undefined
+!![] / +![]  // -> Infinity
[] + {}       // -> "[object Object]"
+{}           // -> NaN

[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'


[] == ''   // -> true
[] == 0    // -> true
[''] == '' // -> true
[0] == 0   // -> true
[0] == ''  // -> false
[''] == 0  // -> true

[null] == ''      // true
[null] == 0       // true
[undefined] == '' // true
[undefined] == 0  // true

[[]] == 0  // true
[[]] == '' // true

[[[[[[]]]]]] == '' // true
[[[[[[]]]]]] == 0  // true

[[[[[[ null ]]]]]] == 0  // true
[[[[[[ null ]]]]]] == '' // true

[[[[[[ undefined ]]]]]] == 0  // true
[[[[[[ undefined ]]]]]] == '' // true

+true; // -> 1

typeof NaN; // -> 'number'

typeof []; // -> 'object'
typeof null; // -> 'object'

1 < 2 < 3; // -> true
3 > 2 > 1; // -> false

3  - 1  // -> 2
3  + 1  // -> 4
'3' - 1  // -> 2
'3' + 1  // -> '31'

'' + '' // -> ''
[] + [] // -> ''
{} + [] // -> 0
[] + {} // -> '[object Object]'
{} + {} // -> '[object Object][object Object]'

'222' - -'111' // -> 333

[4] * [4]       // -> 16
[] * []         // -> 0
[4, 4] * [4, 4] // NaN

-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------

-------------------------



-------------------------





















