//Accessing the First Array Element
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // let fruit = fruits[0];

// Accessing the Last Array Element
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // let lastfruit = fruits[fruits.length - 1];

// Looping Array Elements
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // let fLen = fruits.length;
    // for (let i = 0; i < fLen; i++) {
    //     text += "<li>" + fruits[i] + "</li>";
    // }

// Adding Array Elements
    // const fruits = ["Banana", "Orange", "Apple"];
    // fruits.push("Lemon");  // Adds a new element (Lemon) to fruits

// Converting Arrays to Strings
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits.toString();
    // Reslut: Banana,Orange,Apple,Mango

// join() method
    // The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator:
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits.join(" * ");
    // Result: Banana * Orange * Apple * Mango

// shift() method
    // The shift() method removes the first array element and "shifts" all other elements to a lower index.The shift() method returns the value that was "shifted out":

// pop() method
    // The pop() method removes the last element from an array. The pop() method returns the value that was "popped out":
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.pop();

// unshift() method
    // The unshift() method adds a new element to an array(at the beginning), and "unshifts" older elements. The unshift() method returns the new array length:
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.unshift("Lemon");

// push() method
    // The push() method adds a new element to an array(at the end). The push() method returns the new array length:
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.push("Kiwi");

// concat() method
    // The concat() method creates a new array by merging(concatenating) existing arrays. The concat() method does not change the existing arrays. It always returns a new array. The concat() method can also take strings as arguments:
    // const myGirls = ["Cecilie", "Lone"];
    // const myBoys = ["Emil", "Tobias", "Linus"];
    // const myChildren = myGirls.concat(myBoys);

    // const arr1 = ["Emil", "Tobias", "Linus"];
    // const myChildren = arr1.concat("Peter");



// flat() method
    // Flattening an array is the process of reducing the dimensionality of an array. The flat() method creates a new array with sub-array elements concatenated to a specified depth.
    // flat method remove nested array and return to convert nested array into a single array.
    // const myArr = [[1, 2], [3, 4], [5, 6]];
    // const newArr = myArr.flat();
    // Result: [1,2,3,4,5,6]

// splice() method
    // The splice() method adds new items to an array and remove also
        // const fruits = ["Banana", "Orange", "Apple", "Mango"];
        // fruits.splice(2, 0, "Lemon", "Kiwi");
        // result: ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']

        // const fruits = ["Banana", "Orange", "Apple", "Mango"];
        // let result = fruits.splice(1, 2);
        // result : result = ['Orange', 'Apple']
        // result = fruits = ['Banana', 'Mango']

            // The first parameter(2) defines the position where new elements should be added(spliced in).
            // The second parameter(0) defines how many elements should be removed.
            // The rest of the parameters("Lemon", "Kiwi") define the new elements to be added.
            // The splice() method returns an array with the deleted items:

// slice() method
    // The slice() method slices out a piece of an array into a new array. The slice() method does not remove any elements from the source array.
    // let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    // let result = fruits.slice(3);
    // Result: result = [Apple, Mango]

        // The slice() method can take two arguments like slice(1, 3).
       // The method then selects elements from the start argument, and up to(but not including) the end argument.


// sort() method
    // The sort() method sorts an array alphabetically:
    // let fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.sort();

// reverse() method
    // The reverse() method reverses the elements in an array. You can use it to sort an array in descending order:
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.sort();
    // fruits.reverse();

// Number Sort
    // By default, the sort() function sorts values as strings.
    // This works well for strings("Apple" comes before "Banana").
    //     However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
    // Because of this, the sort() method will produce incorrect result when sorting numbers.
    // You can fix this by providing a compare function:
    // let points = [40, 100, 1, 5, 25, 10];
    // points.sort((a, b) => { return a - b });

        // reverse numeric sort -Use the same trick to sort an array descending:
        // const points = [40, 100, 1, 5, 25, 10];
        // points.sort(function (a, b) { return b - a });

// map()
    // The map() method creates a new array by performing a function on each array element.
    // The map() method does not execute the function for array elements without values.
    // The map() method does not change the original array.

    // array.map((curElemt, index, array) => {

    // });


// new Set() method
    // return A common value with object. - new Set(variableName);
        // if object value want to array you can use - let sdk = [...new Set(variableName)];

// spread Operator(...)
    // spread operator get all data in array using [...arrayName]
    // The "spread" operator spreads elements of iterable objects:

// rest parameter (...)
    // The rest parameter(...) allows a function to treat an indefinite number of arguments as an array:
    // function sum(...args) {
    //     let sum = 0;
    //     for (let arg of args) sum += arg;
    //     return sum;
    // }

    // let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

// JavaScript Classes
    // JavaScript Classes are templates for JavaScript Objects.
    // Use the keyword class to create a class.
    // Always add a method named constructor():

// JavaScript Promises
    // JavaScript Promise are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

    // let myPromise = new Promise((resolve, reject) => {
    //     resolve(); // when successful
    //     reject(); // when error
    // });

    // myPromise.then(
    //     resolve(value) { /* code if successful */ },
    //     reject(error) { /* code if some error */ }
    // );

// String.includes()
    // The includes() method returns true if a string contains a specified value, otherwise false:
    // let text = "Hello world, welcome to the universe.";
    // text.includes("world")    // Returns true

// String.startsWith()
    // The startsWith() method returns true if a string begins with a specified value, otherwise false:
    // let text = "Hello world, welcome to the universe.";
    // text.startsWith("Hello")   // Returns true

// String.endsWith()
    // The endsWith() method returns true if a string ends with a specified value, otherwise false:
    // var text = "John Doe";
    // text.endsWith("Doe")    // Returns true


// Array keys()
    // The keys() method returns an Array Iterator object with the keys of an array.
    // let fruits = ["Banana", "Orange", "Apple", "Mango"];
    // let keys = fruits.keys();

// Array find()
    // The find() method returns the value of the first array element that passes a test function.
    // This example finds(returns the value of) the first element that is larger than 18:

    // let numbers = [4, 9, 16, 25, 29];
    // let first = numbers.find(myFunction);

    // function myFunction(value, index, array) {
    //     return value > 18;
    // }

// Array findIndex()
    // The findIndex() method returns the index of the first array element that passes a test function.
    // This example finds the index of the first element that is larger than 18
    // const numbers = [4, 9, 16, 25, 29];
    // let first = numbers.findIndex(myFunction);

    // function myFunction(value, index, array) {
    //     return value > 18;
    // }

// toString()
    // The JavaScript method toString() converts an array to a string of (comma separated) array values.
    // let fruits = ["Banana", "Orange", "Apple", "Mango"];
    // let result = fruits.toString();
    // result = 'Banana,Orange,Apple,Mango'

// JavaScript Array indexOf()
    // The indexOf() method searches an array for an element value and returns its position.
    // let fruits = ["Banana", "Orange", "Apple", "Mango"];
    // let result = fruits.indexOf('Apple') // result is 2

// JavaScript Array lastIndexOf()
    // Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
    // let fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple", "Mango"];
    // let result = fruits.indexOf('Apple') // result is 6

// Types of array
    // Js array is divided into two types:
    // One - dimensional arrays.
    // Multi - dimensional arrays.

// JavaScript Array filter()
    // The filter() method creates a new array with array elements that pass a test.

    // const ages = [32, 33, 16, 40];
    // document.getElementById("demo").innerHTML = ages.filter(checkAdult);
    // function checkAdult(age) {
    //     return age >= 18;
    // }
    // result is 33,32,40

// JavaScript Array reduce()
    //The reduce() method runs a function on each array element to produce(reduce it to) a single value.  The reduce() method works from left-to-right in the array. See also reduceRight(). The reduce() method does not reduce the original array.

    // let arr = [5, 6, 2];

    // let sum = arr.reduce((accumulator, curElem) => {
    //     debugger;
    //     return accumulator += curElem;
    // }, 7)
    // console.log(sum);

// trim()
    // remove white space before array and end array

// charAt
    // The charAt() method returns the character at a specified index (position) in a string. Get the first character in a string:
    // var str = "Hello, world!";
    // var strPos = str.charAt(4); 
    // Result:  o


// Math.trunc() - returns the integer part of x:
// Math.sign() - returns if x is negative, null or positive:
// Math.cbrt() - returns the cube root of x: like 8 cube root is 2

// Number.isInteger()
    // The Number.isInteger() method returns true if the argument is an integer.
    // Number.isInteger(10);        // returns true
    // Number.isInteger(10.5);      // returns false

// isNaN()
    // The global isNaN() method returns true if the argument is NaN. Otherwise it returns false:
    // isNaN("Hello");       // returns true

// ===============================================================
// javascript Object
// ===============================================================

// what is javascript?
    // JavaScript is an open-source programming language. It is lightweight and interpreted, which makes it much faster than other languages. JavaScript is integrated with HTML, which makes it easier to implement JavaScript in web applications.

// What is Object
    // Objects are variables too. But objects can contain many values.

    // The name:values pairs in JavaScript objects are called properties:

    // Object Methods: Objects can also have methods. Methods are actions that can be performed on objects. Methods are stored in properties as function definitions.



// What is this ?
    // In JavaScript, the this keyword refers to an object. Which object depends on how this is being invoked (used or called).The this keyword refers to different objects depending on how it is used. In a function definition, this refers to the "owner" of the function.

// There are 6 types of objects:
    // objects
    // Date.
    // Array.
    // String.
    // Number.
    // Boolean.


// Object.keys()
    // Create an Array, return keys values

// Object.values()
    // Create an Array, return values

// Object.entries()
    // Create an Array Iterator, and then iterate over the key / value pairs:



// ===============================================================
// javascript array Methods
// ===============================================================

// concat()	Joins arrays and returns an array with the joined arrays
// filter()	Creates a new array with every element in an array that pass a test
// find()	Returns the value of the first element in an array that pass a test
// findIndex()	Returns the index of the first element in an array that pass a test
// forEach()	Calls a function for each array element
// includes()	Check if an array contains the specified element
// indexOf()	Search the array for an element and returns its position
// join()	Joins all elements of an array into a string
// keys()	Returns a Array Iteration Object, containing the keys of the original array
// lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// length	Sets or returns the number of elements in an array
// map()	Creates a new array with the result of calling a function for each array element
// pop()	Removes the last element of an array, and returns that element
// push()	Adds new elements to the end of an array, and returns the new length
// reduce()	Reduce the values of an array to a single value(going left - to - right)
// reverse()	Reverses the order of the elements in an array
// shift()	Removes the first element of an array, and returns that element
// slice()	Selects a part of an array, and returns the new array
// sort()	Sorts the elements of an array
// splice()	Adds / Removes elements from an array
// toString()	Converts an array to a string, and returns the result
// unshift()	Adds new elements to the beginning of an array, and returns the new length

// constructor	Returns the function that created the Array object's prototype
// copyWithin()	Copies array elements within the array, to and from specified positions
// entries()	Returns a key / value pair Array Iteration Object
// every()	Checks if every element in an array pass a test
// fill()	Fill the elements in an array with a static value
// prototype	Allows you to add properties and methods to an Array object
// from()	Creates an array from an object
// isArray()	Checks whether an object is an array
// some()	Checks if any of the elements in an array pass a test
// reduceRight()	Reduce the values of an array to a single value(going right - to - left)
// valueOf()	Returns the primitive value of an array


// ===============================================================
// javascript String Methods
// ===============================================================

// String length - The length property returns the length of a string:

// String slice() - slice(start, end) - slice() extracts a part of a string and returns the extracted part in a new string. If a parameter is negative, the position is counted from the end of the string:

// String substring() - substring(start, end) - The difference is that start and end values less than 0 are treated as 0 in substring().

// String substr() - substr(start, length) - substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.

// String replace() - The replace() method replaces a specified value with another value in a string.
    // let text = "Please visit Microsoft!";
    // let newText = text.replace("Microsoft", "W3Schools");

    // The replace() method does not change the string it is called on.
    // The replace() method returns a new string.
    // The replace() method replaces only the first match

    // If you want to replace all matches, use a regular expression with the / g flag set.See examples below.
        // let text = "Please visit Microsoft and Microsoft!";
        // let newText = text.replace(/Microsoft/g, "W3Schools");



// String replaceAll() - The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
    // let text = "I love cats. Cats are very easy to love. Cats are very popular."
    // text = text.replaceAll("Cats", "Dogs");
    // text = text.replaceAll("cats", "dogs");

// String toUpperCase() - Convert string to upper case:

// String toLowerCase() - Convert string to lower case:
// String concat() - The concat() method joins two or more strings // let text3 = text1.concat(" ",text2);
// String trim() - The trim() method removes whitespace from both sides of a string:

// String trimStart() - The trimStart() method works like trim(), but removes whitespace only from the start of a string.
// String trimEnd() - The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
// String padStart() - The padStart() method pads a string from the start.
// String padEnd()
// String charAt() - The charAt() method returns the character at a specified index (position) in a string
    // var text = "HELLO WORLD";
    // document.getElementById("demo").innerHTML = text.charAt(0);

// String split() - A string can be converted to an array with the split() method:

// =================================================================================
// JavaScript Operators
// =================================================================================
// Arithmetic Operators - +, -, *, /, %, ++, --
    // Addition +
    // Subtraction -
    // Multiplication *
    // Division /
    // Modulus (Division Remainder) %
    // Increment ++
    // Decrement --

// Assignment Operators
    // The Addition Assignment Operator (+=) adds a value to a variable.

// Comparison Operators - All the comparison operators above can also be used on strings:
    // let text1 = "A";
    // let text2 = "B";
    // let result = text1 < text2;

// String Operators


// Logical Operators - &&, ||, !
// Bitwise Operators
// Ternary Operators
// Type Operators

// JavaScript has 8 Datatypes
    // 1. String
    // 2. Number
    // 3. Bigint - JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
    // 4. Boolean
    // 5. Undefined
    // 6. Null
    // 7. Symbol
    // 8. Object

// The Object Datatype
    // 1. An object
    // 2. An array
    // 3. A date


// what is ajex
    // Read data from a web server - after the page has loaded
    // Update a web page without reloading the page
    // Send data to a web server - in the background
    // AJAX = Asynchronous JavaScript And XML.
    // AJAX is not a programming language.


// what is json
    // JSON stands for JavaScript Object Notation
    // JSON is a text format for storing and transporting data used as key pair value
    // JSON is "self-describing" and easy to understand

// why use json
    // The JSON format is syntactically similar to the code for creating JavaScript objects. Because of this, a JavaScript program can easily convert JSON data into JavaScript objects.

// localStorage
    // localStorage.setItem("name", "John Doe"); // Item name must be string
    // localStorage.getItem("name");

// sessionStorage
    //The sessionStorage object is identical to the localStorage object. The difference is that the sessionStorage object stores data for one session. The data is deleted when the browser is closed.
    // sessionStorage.setItem("name", "John Doe");
    // sessionStorage.getItem("name");

// History
    // window.history.back();
    // window.history.forward();
    // window.history.go(-2);  - go back to two pages back


// What are Cookies?
    // Cookies are data, stored in small text files, on your computer. When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user. Cookies were invented to solve the problem "how to remember information about the user":


// js timing
    // setTimeout() - The first parameter is a function to be executed. The second parameter indicates the number of milliseconds before execution.
    // clearTimeout() - The clearTimeout() method stops the execution of the function specified in setTimeout().
        // myVar = setTimeout(function, milliseconds);
        // clearTimeout(myVar);

    // The setInterval() method repeats a given function at every given time-interval.
    // clearInterval() - method stops the executions of the function specified in the setInterval() method.
        // let myVar = setInterval(function, milliseconds);
        // clearInterval(myVar);

// window method
    // window.open() - open a new window
    // window.close() - close the current window
    // window.moveTo() - move the current window
    // window.resizeTo() - resize the current window
    // window.innerHeight - the inner height of the browser window(in pixels)
    // window.innerWidth  - the inner width of the browser window (in pixels)

// =======================================================================================
// DOM
// =======================================================================================

// What is DOM(Document Object Model)
    // The HTML DOM is a standard object model and programming interface for HTML
    // When a web page is loaded, the browser creates a Document Object Model of the page.
    // With the object model, JavaScript gets all the power it needs to create dynamic HTML:
    // JavaScript can change all the HTML elements in the page
    // JavaScript can change all the HTML attributes in the page
    // JavaScript can change all the CSS styles in the page
    // JavaScript can remove existing HTML elements and attributes
    // JavaScript can add new HTML elements and attributes
    // JavaScript can react to all existing HTML events in the page
    // JavaScript can create new HTML events in the page


// Dom method
    // document.getElementById(id)	Find an element by element id
    // document.getElementsByTagName(name)	Find elements by tag name
    // document.getElementsByClassName(name)	Find elements by class name

    // element.innerHTML = new html content	Change the inner HTML of an element
    // element.attribute = new value	Change the attribute value of an HTML element
    // element.style.property = new style	Change the style of an HTML element

    // document.createElement(element)	Create an HTML element
    // document.removeChild(element)	Remove an HTML element
    // document.appendChild(element)	Add an HTML element
    // document.replaceChild(new, old)	Replace an HTML element
    // document.write(text)

// Node - According to the W3C HTML DOM standard, everything in an HTML document is a node:

// Dom Navigation
    // parentNode
    // childNodes[nodenumber]
    // firstChild
    // lastChild
    // nextSibling
    // previousSibling














// =======================================================================================
// String Method
// =======================================================================================

// includes() - returns true if a string contains a specified string otherwise false
    // let text = "Hello world, welcome to the universe.";
    // let result = text.includes("world"); // true

// charAt()	Returns the character at the specified index(position)	char
    // let myStr = "Hello";
    // let result = myStr.charAt(4); // o

// toLowerCase()	Converts a string to lower case letters	String
    // let myStr = "HELLO HOW ARE YOU";
    // let result = myStr.toLowerCase(); // hello how are you

// toUpperCase()	Converts a string to upper case letters	String
    // let myStr = "hello how are you";
    // let result = myStr.toLowerCase(); // HELLO HOW ARE YOU

// toString()	Returns the value of a String object	String

// trim()	Removes whitespace from both start and  ends of a string
    // let myStr = "             hello how are you                 ";
    // let result = myStr.trim(); // hello how are you


// indexOf()	Returns the position of the first found occurrence of specified characters in a string	int
    // let text = "Hello world, welcome to the universe.";
    // let result = text.indexOf("welcome"); // 13

// lastIndexOf()	Returns the position of the last found occurrence of specified characters in a string	int
    // let text = "Hello planet, welcome to the planet.";
    // let result = text.indexOf("planet"); // 29

// length()	Returns the length of a specified string int
    // let text = "Hello planet, welcome to the planet.";
    // let result = text.length; // 36

// split()	Splits a string into an array of substrings	String, and returns the array
    // let text = "How are you doing today?";
    // const myArray = text.split("o"); // ['H', 'w are y', 'u d', 'ing t', 'day?']

// concat()	- method creates a new array by merging(concatenating) existing arrays. The concat() method does not change the existing arrays. It always returns a new array. The concat() method can also take strings as arguments:
    // const myGirls = ["Cecilie", "Lone"];
    // const myBoys = ["Emil", "Tobias", "Linus"];
    // const myChildren = myGirls.concat(myBoys); // ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus']

// replace()	Searches a string for a specified value, and returns a new string where the specified values are replaced String
    // let text = "Visit Microsoft!";
    // let result = text.replace("Microsoft", "W3Schools"); // Visit W3Schools!

    // for global replacement use(/blue/g, red);
        // let text = "Mr Blue has a blue house and a blue car";
        // let result = text.replace(/blue/g, "red"); // Mr Blue has a red house and a red car


// replaceAll()	Replaces each substring of this string that matches the given regular expression with the given replacement	String
    // let string = "Geeks or Geeks world or same to or sdfk";
    // newString = string.replaceAll("or", "for"); // Geeks for Geeks world for same to for sdfk

// matches()  searches for a match in a string.
    // let text = "The rain in SPAIN stays mainly in the plain";
    // let result = text.match("ain"); // ain



// replaceFirst()	Replaces the first occurrence of a substring that matches the given regular expression with the given replacement	String
// codePointAt()	Returns the Unicode of the character at the specified index	int
// codePointBefore()	Returns the Unicode of the character before the specified index	int
// codePointCount()	Returns the number of Unicode values found in a string.int
// compareTo()	Compares two strings lexicographically	int
// compareToIgnoreCase()	Compares two strings lexicographically, ignoring case differences	int
// contains()	Checks whether a string contains a sequence of characters	boolean
// contentEquals()	Checks whether a string contains the exact same sequence of characters of the specified CharSequence or StringBuffer	boolean
// copyValueOf()	Returns a String that represents the characters of the character array	String
// endsWith()	Checks whether a string ends with the specified character(s)	boolean
// equals()	Compares two strings.Returns true if the strings are equal, and false if not	boolean
// equalsIgnoreCase()	Compares two strings, ignoring case considerations	boolean
// format()	Returns a formatted string using the specified locale, format string, and arguments	String
// getBytes()	Encodes this String into a sequence of bytes using the named charset, storing the result into a new byte array	byte[]
// getChars()	Copies characters from a string to an array of chars	void
// hashCode()	Returns the hash code of a string	int
// intern()	Returns the canonical representation for the string object	String
// offsetByCodePoints()	Returns the index within this String that is offset from the given index by codePointOffset code points	int
// regionMatches()	Tests if two string regions are equal	boolean
// startsWith()	Checks whether a string starts with specified characters	boolean
// subSequence()	Returns a new character sequence that is a subsequence of this sequence	CharSequence
// substring()	Returns a new string which is the substring of a specified string	String
// toCharArray()	Converts this string to a new character array	char[]





// =======================================================================================
// Math Method
// =======================================================================================
// Note: Math.Floor rounds down, Math.Ceiling rounds up, and Math.Truncate rounds towards zero. Thus, Math.Truncate is like Math.Floor for positive numbers, and like Math.Ceiling for negative numbers.

// abs(x) Returns the absolute value of x in positive	double | float | int | long
    // let a = Math.abs(7.25); - 7.25
    // let b = Math.abs(-7.25); - 7.25
    // let c = Math.abs(null); - 0
    // let d = Math.abs("Hello"); - NaN
    // let e = Math.abs(2 - 3); - 1

// max(x, y) Returns the number with the highest value	double | float | int | long
    // let a = Math.max(5, 10); - 10
    // let b = Math.max(0, 150, 30, 20, 38); - 150
    // let c = Math.max(-5, 10); - 10
    // let d = Math.max(-5, -10); - -5
    // let e = Math.max(1.5, 2.5); - 2.5

// min(x, y)	Returns the number with the lowest value	double | float | int | long
    // let a = Math.max(5, 10); - 5
    // let b = Math.max(0, 150, 30, 20, 38); - 0
    // let c = Math.max(-5, 10); - -5
    // let d = Math.max(-5, -10); - -10
    // let e = Math.max(1.5, 2.5); - 1.5

// trunc() returns the integer part of a number. removes the decimals (does NOT round the number). {truncate}
    // let a = Math.trunc(8.76); - 8
    // let b = Math.trunc(5.9); - 5

// floor(x)	Returns the value of x rounded down to its nearest integer value in positive
    // let a = Math.floor(0.60); - 0
    // let b = Math.floor(0.40); - 0
    // let c = Math.floor(5); - 5
    // let d = Math.floor(5.1); - 5
    // let d = Math.floor(5.9); - 5
    // let e = Math.floor(-5.1); - 6
    // let f = Math.floor(-5.9); - 6 

// round() Math.round() rounds a number to the nearest integer
    // let a = Math.round(2.60); - 3
    // let b = Math.round(2.50); - 3
    // let c = Math.round(2.49); - 2
    // let d = Math.round(-2.60); - -3
    // let e = Math.round(-2.50); - -2
    // let f = Math.round(-2.49); - -2

// ceil() return rounds a number rounded UP to the nearest integer.
    // let a = Math.ceil(0.60); - 1
    // let b = Math.ceil(0.40); - 1
    // let c = Math.ceil(5); - 5
    // let d = Math.ceil(5.1); - 6
    // let e = Math.ceil(-5.1); - -5
    // let f = Math.ceil(-5.9); - -5

// sqrt(x)	Returns the square root of x	
    // let d = Math.sqrt(25); - 5
    // let d = Math.sqrt(9); - 3

// toFixed() The toFixed() method rounds the string to a specified number of decimals. Note. If the number of decimals are higher than in the number, zeros are added
    // let num = 5.56789;
    // let n = num.toFixed(2); result is 5.56

// pow(x, y)	Returns the value of x to the power of y	double
// acos(x)	Returns the arccosine of x, in radians	double
// asin(x)	Returns the arcsine of x, in radians	double
// atan(x)	Returns the arctangent of x as a numeric value between - PI / 2 and PI / 2 radians	double
// atan2(y, x)	Returns the angle theta from the conversion of rectangular coordinates(x, y) to polar coordinates(r, theta).double
// cbrt(x)	Returns the cube root of x	double
// ceil(x)	Returns the value of x rounded up to its nearest integer	double
// copySign(x, y)	Returns the first floating point x with the sign of the second floating point y	double
// cos(x)	Returns the cosine of x(x is in radians)	double
// cosh(x)	Returns the hyperbolic cosine of a double value	double
// exp(x)	Returns the value of Ex	double
// expm1(x)	Returns ex - 1	double
// getExponent(x)	Returns the unbiased exponent used in x	int
// hypot(x, y)	Returns sqrt(x2 + y2) without intermediate overflow or underflow	double
// IEEEremainder(x, y)	Computes the remainder operation on x and y as prescribed by the IEEE 754 standard	double
// log(x)	Returns the natural logarithm(base E) of x	double
// log10(x)	Returns the base 10 logarithm of x	double
// log1p(x)	Returns the natural logarithm(base E) of the sum of x and 1	double
// nextAfter(x, y)	Returns the floating point number adjacent to x in the direction of y	double | float
// nextUp(x)	Returns the floating point value adjacent to x in the direction of positive infinity	double | float

// random()	Returns a random number between 0 and 1	double
// round(x)	Returns the value of x rounded to its nearest integer	int
// rint(x)	Returns the double value that is closest to x and equal to a mathematical integer	double
// signum(x)	Returns the sign of x	double
// sin(x)	Returns the sine of x(x is in radians)	double
// sinh(x)	Returns the hyperbolic sine of a double value	double
// tan(x)	Returns the tangent of an angle	double
// tanh(x)	Returns the hyperbolic tangent of a double value	double
// toDegrees(x)	Converts an angle measured in radians to an approx.equivalent angle measured in degrees	double
// toRadians(x)	Converts an angle measured in degrees to an approx.angle measured in radians	double
// ulp(x)	Returns the size of the unit of least precision(ulp) of x	double | float





// =======================================================================================
// Object Method
// =======================================================================================

// Object.assign() - This method is used to copy one or more source objects to a target object.It invokes getters and setters since it uses both 'get' on the source and 'Set' on the target
// JSON.parse() & JSON.stringify()
// Object.create()
// Object.entries() - is used for listing properties related to an object, listing all the [key, value] pairs of an object.
// Object.keys() - return all keys
// Object.values() - return all values
// Object.freeze() - when object freeze we can not update any value 
    // const obj1 = { property1: 'initial_data' }; // creating an object constructor and assigning values to it 
    // const obj2 = Object.freeze(obj1); // creating a second object which will freeze // the properties of the first object
    // obj2.property1 = 'new_data';// Updating the properties of the frozen object
    // console.log(obj2.property1);// Displaying the properties of the  frozen object 





// Difference between splice vs slice
    // splice method return delete item of an array, source arr updated, also add and remove elements
    // slice method return delete item of an new array, source arr as it is. can not be add new elements

// Difference between null vs undefined
    // In JavaScript, undefined is a type, whereas null an object.
    // undefined - It means a variable declared, but no value has been assigned a value. type is undefined
    // null - Whereas, null in JavaScript is an assignment value. You can assign it to a variable. type is object


// What is NaN?
    // NaN is a property of the global object.
    // In other words, it is a variable in global scope.
    // The initial value of NaN is Not-A-Number

// Difference between var, let and const
    // var is not a scope varible, we can define it many times, Function scope, we can redeclared it. 
    // let is scope variable, we can reassign its value, we can not redeclared it.
    // const is scope variable, we can not reasign value, we can not redeclared it.

// break
    // The break statement "jumps out" of a loop


// continue
    // The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

// Function
    // A JavaScript function is a block of code designed to perform a particular task.

    // Why Functions? 

    // You can reuse code: Define the code once, and use it many times.
    // You can use the same code many times with different arguments, to produce different results.

    // OR

    // A function is a group of reusable code which can be called anywhere 
    // in your program. This eliminates the need of writing the same code 
    // again and again.


// Return Keyword
    // The return statement stops the execution of a function and returns a value. return is never executed.

// Template literals (Template strings) 
    // we can use html and js both using template literals
    // console.log(` ${tableOf} * ${num} = ${tableOf * num}`);  


// Array Destructuring
    // const myBioData = ['vinod', 'thapa', 26];
    // let [myFName,myAge, myLName] = myBioData;
    // console.log(myAge);

    // we can add values too
     // let [myFName,myLName,myAge, myDegree="MCS"] = myBioData;

// Object destructuring
        // const myBioData = {
        //   myFname : 'vinod',
        //   myLname : 'thapa',
        //   myAge : 26
        // }
        // let {myFname,myLname,myAge} = myBioData;

// Prmitive Data Types
    // string.
    // number.
    // bigint.
    // boolean.
    // undefined.
    // null.
    // symbol.

// Non Prmitive Data Types
    // array.
    // object.
    
// call another js file
    // ... everything necessary is done before
    // var scriptEl = document.createElement('script');
    // scriptEl.setAttribute('src', '/path_to_js_file.js');
    // document.body.appendChild(scriptEl);

/*===========================================================================*/
// Javascript loops 
/*===========================================================================*/

// for loop
    // var myStringArray = ["Hello", "World"];
    // var arrayLength = myStringArray.length;
    // for (var i = 0; i < arrayLength; i++) {
    //     console.log(myStringArray[i]);
    //     //Do something
    // }

// foreach loop 
    // foreach loop provide value and index number
    // const array = ["one", "two", "three"]
    // array.forEach(function (item, index) {
    //     console.log(item, index);
    // });

// for of loop
    // for of loop provide value
    // let colors = ['red', 'green', 'blue'];
    // for (color of colors) {
    //     console.log(color);  result is: red,green,blue
    // }

// for in loop
    // for in loop provide index number

    // var array = ['a', 'b', 'c'];
    // for (var i in array) {
    //     console.log(array[i]);  result is: 0,1,2
    // }

// while loop
    // let i = 0;
    // while (i < 10) {
    //     text += "The number is " + i;
    //     i++;
    // }

// switch statement
    // let day;
    // switch (new Date().getDay()) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    // }
    // document.getElementById("demo").innerHTML = "Today is " + day;

// =============================================================================
// Main Method list
// =============================================================================

// Math Method or number method
    // abs, trunc, round, floor, ceil, min, max, sqrt

// String Method
    // includes, charAt, toLowerCase, toUpperCase, trim, toString, indexOf, lastIndexOf, concat, replace, replaceAll, split, length

// Object Method
    // keys, values, entries, freeze, date

// Array Method
    // push, unshift, pop, shift, map, filter, find, join, length, sort, flat, slice, concat, findIndex, includes, keys

// Data Type
    // Number, string, boolean, undefined, null, object, array, date, bigint, symbol 

// Dom
    // getElementId, getElementsByClassName, getElementsByTagName, createElement, appendChild, removeChild, getAttribute, setAttribute, innerHTML, textContent, innerText, insertAdjacentHTML, classList, remove, localStorage

// BOM
    // window.open(), window.close(), window.moveTo(), window.resizeTo(), window.location.href, window.location.hostname, window.location.pathname, window.location.protocol, window.confirm(), window.alert, window.onClick, window.onScroll

// Ajax
    // Read data from a web server - after the page has loaded. Update a web page without reloading the page. Send data to a web server - in the background . ajax stands for Asynchronous JavaScript And XML.
        // demo
            // function loadDoc() {
            //     const xhttp = new XMLHttpRequest();
            //     xhttp.onload = function () {
            //         document.getElementById("demo").innerHTML =
            //             this.responseText;
            //     }
            //     xhttp.open("GET", "ajax_info.txt");
            //     xhttp.send();
            // }

// JSON 
    // JSON stands for JavaScript Object Notation. JSON is a text format for storing and transporting data. JSON is "self-describing" and easy to understand. JSON is parsed into a ready-to-use JavaScript object.

    // JSON.parese(), JSON.stringify(),




// =============================================================================
// Reduce method
// =============================================================================
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
The reduce() method does not change the original array.

The reducer function takes four arguments:
    Accumulator
    Current Value
    Current Index
    Source Array

array.reduce(callbackFunction(accumulator, currentValue, currentIndex, arr), initialValue)

    const array1 = [1, 2, 3, 4];
    
    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );



// =============================================================================
// Higher Order Function (HOF)
// =============================================================================
A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
map(), reduce(), filter() is a HOF.

    // Callback function, passed as a parameter in the higher order function
    const interviewQuestion = (name) => {
    if(name === 'devendra') {
        return (topic) => {
            console.log(`Hi ${name}. What is ${topic}. Plz Explain us?`)
        }
    } 

    if(name === 'devendra prajapati') {
        return (topic) => {
            console.log(`Hi ${name}. What is ${topic}. Plz Explain us?`)
        }
    }

    if(name === 'prajapati') {
        return (topic) => {
            console.log(`Hi ${name}. What is ${topic}. Plz Explain us?`)
        }
    } else {
        console.log('welcome to Exam');
    }
}


interviewQuestion('devendra')('Frontend Developer');
interviewQuestion('devendra prajapati')('Full Stack Developer');
interviewQuestion('prajapati')('Backend Developer');


// =============================================================================
// Pure Function and Impure function
// =============================================================================
pure functions are functions that accept an input and return a value without modifying any data outside its scope (side effect).

    Pure function
        var x = 5;
        function add(x) { // this is pure function becaue x value is not modified here
            return x+4;  
        }


    Impure function
    var x = 5;
    function add(x) { // this is impure function becaue x value is modified here
        return x++;  
    }


// =============================================================================
// closure js
// =============================================================================
A closure is the combination of a function and the lexical environment within which that function was declared. 

closure in action that is inner function can have access to the outer function variables/parameters as well as all the global variables.

const outerFunction = (a) => {
    let b = 10;
    const innerFunction = () => {
        let sum = a+b;
        console.log(`two number sum is ${sum}`)
    }
    innerFunction();
}
outerFunction(5);




