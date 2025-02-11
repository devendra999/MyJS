
// <!-- ==========================================================================
// interview question list
// ========================================================================== -->
1. Basic JavaScript Concepts:
   What are the different data types in JavaScript?
   Explain the difference between var, let, and const.
   What is the scope of a variable in JavaScript?
   What is hoisting in JavaScript?
   What are closures in JavaScript?
   What is the this keyword in JavaScript? How does it work?
   Explain the concept of prototypes in JavaScript.
   What is the difference between null and undefined?
   What is a callback function?
   What is the difference between synchronous and asynchronous code?

2. Functions & Objects:
   What are JavaScript functions, and how are they declared?
   What is a higher-order function?
   What is an arrow function, and how is it different from regular functions?
   How does JavaScript handle function arguments? Can a function accept more arguments than defined?
   What is the difference between .call(), .apply(), and .bind()?
   What are get and set accessors in JavaScript?
   Explain the concept of a constructor function and the new keyword.

3. Arrays and Loops:
   What is the difference between for, forEach, map, and filter in JavaScript?
   How does the reduce function work? Can you provide an example?
   How can you remove the first and last elements from an array in JavaScript?
   Explain the spread operator and rest parameter with examples.
   What are some methods to iterate over an array in JavaScript?

4. Asynchronous JavaScript:
   What is a Promise in JavaScript? How does it work?
   What are the differences between resolve() and reject() in a promise?
   What is async/await? How does it differ from promises?
   What are callbacks, and why are they important in JavaScript?
   How does the event loop work in JavaScript?

5. DOM Manipulation:
   What is the DOM in JavaScript?
   How do you select an element from the DOM using JavaScript?
   How would you add a new HTML element dynamically to a webpage using JavaScript?
   What are event listeners? How do you attach and remove them?
   How do you prevent a default action of an event in JavaScript?

6. ES6+ Features:
   Explain the concept of template literals in JavaScript.
   What are destructuring assignments and how do they work?
   What is the difference between for...of and for...in loops?
   What are Promises and how do they work in JavaScript?
   What is the Symbol type in JavaScript?

7. Error Handling:
   What are try-catch blocks, and how do you handle exceptions in JavaScript?
   What is the purpose of the finally block in JavaScript?

8. JavaScript Design Patterns:
   What is the Module Pattern in JavaScript?
   What is the Singleton Pattern in JavaScript?
   What is the Factory Pattern in JavaScript?
   Explain the Observer Pattern in JavaScript.

9. Performance & Optimization:
   How would you improve the performance of a JavaScript application?
   How does memory management work in JavaScript?
   What is event delegation, and why is it important for performance?

10. JavaScript and Web APIs:
    What are Web APIs? Can you name a few common ones?
    Explain the difference between localStorage and sessionStorage.
    What is the Fetch API and how does it work?
    How would you handle CORS (Cross-Origin Resource Sharing) in JavaScript?




// <!-- ==========================================================================
// string
// ========================================================================== -->

1. split()
   Use Case: Breaking a sentence into words or separating data based on a delimiter (like a CSV file).
   Example:
   let sentence = "JavaScript is fun";
   let words = sentence.split(" ");
   console.log(words); // ["JavaScript", "is", "fun"]
2. toLowerCase() and toUpperCase()
   Use Case: Normalizing user input or converting text to a consistent case.
   Example:
   let username = "JohnDoe";
   let lowerCaseUsername = username.toLowerCase();
   console.log(lowerCaseUsername); // "johndoe"
3. trim()
   Use Case: Removing unwanted spaces from user input or strings.
   Example:
   let userInput = " Hello World! ";
   let cleanInput = userInput.trim();
   console.log(cleanInput); // "Hello World!"
4. replace()
   Use Case: Replacing characters, words, or patterns in strings (e.g., updating content on a webpage).
   Example:
   let text = "I love coding!";
   let updatedText = text.replace("coding", "JavaScript");
   console.log(updatedText); // "I love JavaScript!"
5. substring()
   Use Case: Extracting part of a string, such as getting the first name from a full name.
   Example:
   let fullName = "Jane Doe";
   let firstName = fullName.substring(0, 4);
   console.log(firstName); // "Jane"
6. indexOf()
   Use Case: Finding the position of a character or substring within a string (e.g., checking if a certain word exists in a text).
   Example:
   let phrase = "Welcome to JavaScript";
   let position = phrase.indexOf("JavaScript");
   console.log(position); // 11
7. includes()
   Use Case: Checking if a string contains a particular substring.
   Example:
   let email = "user@example.com";
   let hasDomain = email.includes("@example.com");
   console.log(hasDomain); // true
8. charAt()
   Use Case: Accessing a specific character from a string (e.g., checking the first character of a password).
   Example:
   let password = "mypassword";
   let firstChar = password.charAt(0);
   console.log(firstChar); // "m"
9. concat()
   Use Case: Combining strings (e.g., building a full address or message).
   Example:
   let greeting = "Hello, ";
   let name = "Alice!";
   let message = greeting.concat(name);
   console.log(message); // "Hello, Alice!"
10. match()
    Use Case: Searching for a pattern or regular expression match within a string (e.g., validating email addresses or extracting data).
    Example:
    let sentence = "My phone number is 555-1234";
    let match = sentence.match(/\d{3}-\d{4}/);
    console.log(match); // ["555-1234"]
11. repeat()
    Use Case: Repeating a string multiple times (e.g., generating a series of separators).
    Example:
    let separator = "-";
    let repeated = separator.repeat(10);
    console.log(repeated); // "----------"
12. startsWith() and endsWith()
    Use Case: Checking if a string begins or ends with a specific character or substring.
    Example:
    let url = "https://www.example.com";
    console.log(url.startsWith("https")); // true
    console.log(url.endsWith(".com")); // true
13. search()
    Use Case: Finding the position of a match for a regular expression pattern.
    Example:
    let text = "The quick brown fox";
    let position = text.search("brown");
    console.log(position); // 10






// <!-- ==========================================================================
// Array
// ========================================================================== -->
1. map()
Use Case: Transforming data, such as when you need to extract specific properties from a list of objects.
Example: Converting an array of user objects into an array of user names.
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

const names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob", "Charlie"]


2. filter()
Use Case: Filtering data, such as finding active users or products above a certain price.
Example: Filtering out inactive users.
const users = [
  { name: 'Alice', isActive: true },
  { name: 'Bob', isActive: false },
  { name: 'Charlie', isActive: true }
];

const activeUsers = users.filter(user => user.isActive);
console.log(activeUsers); // [{ name: 'Alice', isActive: true }, { name: 'Charlie', isActive: true }]


3. reduce()
Use Case: Aggregating data, such as calculating totals, averages, or transforming an array into a single value.
Example: Calculating the total cost of items in a shopping cart.
const cart = [
  { name: 'Apple', price: 1.5 },
  { name: 'Banana', price: 0.75 },
  { name: 'Orange', price: 1.2 }
];

const totalCost = cart.reduce((total, item) => total + item.price, 0);
console.log(totalCost); // 3.45

4. forEach()
Use Case: Iterating over elements in an array for side effects, like logging or updating the UI.
Example: Logging all user names.
const users = ['Alice', 'Bob', 'Charlie'];

users.forEach(user => console.log(user));
// Alice
// Bob
// Charlie

5. find()
Use Case: Searching for a specific item, like finding a particular user by ID or a product by SKU.
Example: Finding a user by their username.
const users = [
  { username: 'alice', age: 25 },
  { username: 'bob', age: 30 },
  { username: 'charlie', age: 35 }
];

const user = users.find(user => user.username === 'bob');
console.log(user); // { username: 'bob', age: 30 }


6. sort()
Use Case: Sorting data, such as sorting a list of products by price or names alphabetically.
Example: Sorting numbers in ascending order.
const numbers = [5, 3, 8, 1];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 3, 5, 8]


7. some() and every()
Use Case: Checking conditions across an array, like validating whether any or all items meet specific criteria.
Example: Checking if any user is over 30.
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 },
  { name: 'Charlie', age: 28 }
];

const isAnyoneOver30 = users.some(user => user.age > 30);
console.log(isAnyoneOver30); // true


8. includes()
Use Case: Checking if an array contains a specific value, such as if a user has a specific role.
Example: Checking if a list of available categories includes "electronics".
const categories = ['Clothing', 'Electronics', 'Groceries'];

const hasElectronics = categories.includes('Electronics');
console.log(hasElectronics); // true


9. splice()
Use Case: Adding or removing elements from a specific position in an array, like modifying a list of tasks.
Example: Removing an item from an array of tasks.
const tasks = ['Task 1', 'Task 2', 'Task 3'];

tasks.splice(1, 1); // Remove "Task 2"
console.log(tasks); // ["Task 1", "Task 3"]


10. concat()
Use Case: Merging arrays, like combining two sets of products or user lists.
Example: Combining two arrays of numbers.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combined = array1.concat(array2);
console.log(combined); // [1, 2, 3, 4, 5, 6]



// <!-- ==========================================================================
// // Math
// // ========================================================================== -->
1. Math.abs()
   Description: Returns the absolute value of a number.
   Real-world use: Calculating distances, working with values that must always be positive (e.g., temperature differences).
   Example:
   let value = Math.abs(-10); // Returns 10
2. Math.ceil()
   Description: Rounds a number UP to the nearest integer.
   Real-world use: Rounding up to ensure a safe margin, like calculating pagination or rounding up costs.
   Example:
   let value = Math.ceil(3.14); // Returns 4
3. Math.floor()
   Description: Rounds a number DOWN to the nearest integer.
   Real-world use: Often used for rounding down prices, user ratings, or time-related calculations (like hour rounding).
   Example:
   let value = Math.floor(3.99); // Returns 3
4. Math.round()
   Description: Rounds a number to the nearest integer.
   Real-world use: Rounding currency values or percentages.
   Example:
   let value = Math.round(4.5); // Returns 5
5. Math.max()
   Description: Returns the largest of zero or more numbers.
   Real-world use: Finding the maximum value in a set of data, such as determining the highest score or price.
   Example:
   let value = Math.max(10, 20, 30); // Returns 30
6. Math.min()
   Description: Returns the smallest of zero or more numbers.
   Real-world use: Finding the minimum value, such as the lowest price or the smallest measurement.
   Example:
   let value = Math.min(10, 20, 30); // Returns 10
7. Math.pow()
   Description: Returns the base raised to the exponent power.
   Real-world use: Used in physics or finance calculations, like calculating compound interest or exponential growth.
   Example:
   let value = Math.pow(2, 3); // Returns 8 (2^3)
8. Math.random()
   Description: Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
   Real-world use: Generating random numbers for games, simulations, random selections, etc.
   Example:
   let value = Math.random(); // Returns a random number between 0 and 1
9. Math.sqrt()
   Description: Returns the square root of a number.
   Real-world use: Used in geometry, physics, and other mathematical applications (e.g., finding distance in the Cartesian plane).
   Example:
   let value = Math.sqrt(16); // Returns 4
10. Math.sin(), Math.cos(), Math.tan()
    Description: These methods return the sine, cosine, and tangent of a number (angle in radians).
    Real-world use: Often used in physics (wave calculations), graphics rendering, and simulations.
    Example:
    let sineValue = Math.sin(Math.PI / 2); // Returns 1 (sin(90°))
11. Math.log()
    Description: Returns the natural logarithm (base e) of a number.
    Real-world use: Used in finance (calculating logarithmic returns), physics, or computer science algorithms.
    Example:
    let value = Math.log(10); // Returns 2.302585
12. Math.exp()
    Description: Returns Euler’s number raised to the power of a given number.
    Real-world use: Often used in growth modeling or computing exponential functions.
    Example:
    let value = Math.exp(2); // Returns 7.389056
13. Math.trunc()
    Description: Returns the integer part of a number by removing any fractional digits.
    Real-world use: Used in applications where you need to drop the decimals, such as user input validation or simplifying values.
    Example:
    let value = Math.trunc(4.9); // Returns 4
14. Math.sign()
    Description: Returns the sign of a number, indicating whether its positive, negative, or zero.
    Real-world use: Used to determine the direction of movement or behavior (e.g., checking profit or loss).
    Example:
    let value = Math.sign(-5); // Returns -1 (negative)
15. Math.log10()
    Description: Returns the base-10 logarithm of a number.
    Real-world use: Used in calculations related to scales (e.g., logarithmic scales in statistics).
    Example:
    let value = Math.log10(100); // Returns 2
16. Math.imul()
    Description: Performs a 32-bit integer multiplication.
    Real-world use: Used in graphics programming or certain performance-critical applications requiring low-level operations.
    Example:
    let value = Math.imul(2, 4); // Returns 8
17. Math.cbrt()
    Description: Returns the cube root of a number.
    Real-world use: Used in calculating volumes, physics, and engineering problems.
    Example:
    let value = Math.cbrt(27); // Returns 3
18. Math.acos(), Math.asin(), Math.atan()
    Description: Returns the inverse trigonometric values for cosine, sine, and tangent (in radians).
    Real-world use: For calculating angles in navigation, physics, and graphics programming.
    Example:
    let angle = Math.acos(0.5); // Returns 1.0471975511965976 (in radians)



// <!-- ==========================================================================
//  Object
//  ========================================================================== -->

1. Object.keys()
   Description: Returns an array of a given object's own enumerable property names.
   Use case: Extracting the keys of an object for iteration.
   Example:
   const user = { name: 'John', age: 30 };
   console.log(Object.keys(user)); // ["name", "age"]


2. Object.values()
   Description: Returns an array of a given object's own enumerable property values.
   Use case: Extracting the values of an object to process.
   Example:
   const user = { name: 'John', age: 30 };
   console.log(Object.values(user)); // ["John", 30]


3. Object.entries()
   Description: Returns an array of a given object's own enumerable property [key, value] pairs.
   Use case: Iterating over both keys and values of an object.
   Example:
   const user = { name: 'John', age: 30 };
   console.log(Object.entries(user)); // [["name", "John"], ["age", 30]]


4. Object.assign()
   Description: Copies all enumerable own properties from one or more source objects to a target object.
   Use case: Merging or cloning objects.
   Example:
   const user = { name: 'John', age: 30 };
   const updatedUser = Object.assign({}, user, { age: 31 });
   console.log(updatedUser); // { name: 'John', age: 31 }


5. Object.freeze()
   Description: Freezes an object, making it immutable (no properties can be added, removed, or modified).
   Use case: Preventing object mutation.
   Example:
   const user = { name: 'John' };
   Object.freeze(user);
   user.name = 'Jane'; // No effect, object is frozen
   console.log(user.name); // "John"


6. Object.seal()
   Description: Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.
   Use case: Allowing updates to values but preventing property removal or addition.
   Example:
   const user = { name: 'John', age: 30 };
   Object.seal(user);
   user.age = 31; // Works
   delete user.age; // Doesn't work, the property can't be deleted


7. Object.create()
   Description: Creates a new object, using an existing object as the prototype.
   Use case: Creating objects that inherit from other objects.
   Example:
   const animal = { species: 'dog' };
   const dog = Object.create(animal);
   dog.bark = function() { console.log('Woof!'); };
   dog.bark(); // Woof!


8. Object.hasOwn()
   Description: Checks if the object has a property as its own (not inherited).
   Use case: Checking for an object's own properties.
   Example:
   const user = { name: 'John', age: 30 };
   console.log(user.hasOwn('name')); // true


9. Object.getPrototypeOf()
   Description: Returns the prototype (internal [[Prototype]]) of an object.
   Use case: Checking the prototype chain of an object.
   Example:
   const animal = { species: 'dog' };
   const dog = Object.create(animal);
   console.log(Object.getPrototypeOf(dog)); // { species: 'dog' }


10. Object.defineProperty()
    Description: Defines a new property or modifies an existing one on an object.
    Use case: Adding or modifying object properties with more control (e.g., setting getters/setters).
    Example:
    const user = {};
    Object.defineProperty(user, 'name', {
    value: 'John',
    writable: false
    });
    console.log(user.name); // "John"
    user.name = 'Jane'; // Throws error in strict mode or fails silently


11. Object.is()
    Description: Determines whether two values are the same value.
    Use case: Comparing two values for equality.
    Example:
    console.log(Object.is(10, 10)); // true
    console.log(Object.is(10, '10')); // false


12. Object.setPrototypeOf()
    Description: Sets the prototype (i.e., internal [[Prototype]]) of a specified object to another object or null.
    Use case: Changing an object’s prototype chain dynamically.
    Example:
    const animal = { species: 'dog' };
    const dog = { breed: 'bulldog' };
    Object.setPrototypeOf(dog, animal);
    console.log(dog.species); // "dog"


13. Object.toString()
    Description: Returns a string representation of the object (can be customized).
    Use case: Customizing how an object is represented when converted to a string.
    Example:
    const user = { name: 'John', age: 30 };
    user.toString = function() {
    return `User: ${this.name}, Age: ${this.age}`;
    };
    console.log(user.toString()); // "User: John, Age: 30"


14. Object.prototype.hasOwnProperty()
    Description: Returns true if the object has the specified property as its own (not inherited).
    Use case: Checking if a property exists in the object.
    Example:
    const user = { name: 'John' };
    console.log(user.hasOwnProperty('name')); // true
    console.log(user.hasOwnProperty('age')); // false


15. Object.prototype.toString()
    Description: Returns a string representation of the object. Useful for checking the type of the object.
    Use case: Determining the exact type of an object.
    Example:
    const user = {};
    console.log(user.toString()); // "[object Object]"




