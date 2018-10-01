///////////////////////////
///   LANGUAGE BASICS   ///
///////////////////////////

//VARIABLES: small data structures/storages used for storing data. Types of data: number, string, boolean, array, undeifned, null, object

"use strict"; //Use JS in strict mode. Add this to the top of your file.
let number = 5;
console.log(number);

let string = "Akos is learning JavaScript again!";
console.log(string);

let trueBoolean = true;
let falseBoolean = false;

let var1 = 6.5;
console.log(typeof var1); //type: number

let arr = [1, 2, 3];
console.log(typeof arr2); //type: object
console.log(arr[0]); //access first element of arr
console.log(arr[4]); //undefined. Hey, you're accessing something you never defined.

let var2 = null; //null. Hey, this is not set, empty.

console.log(undefined == null); //true. JS has the same value for null and undefined. In terms of value, undefined and null are the same.

console.log(undefined === null); //false. This checks for same value and type. In terms of type, undefined and null are different. Null is an object. Undefined is undefned.

let var3 = NaN;
console.log(var2); //NaN. Mostly an error message for mathematical operations.
console.log(typeof var2); //number. A number which isn't a number.

let varObject = {
  name: "Max",
  age: 23
};
//Fields/properties: variables inside objects.
//Methods: functions inside variables.
console.log(varObject.name); //Max
console.log(varObject.age); //23
console.log(typeof varObject); //object.

//HOISTING: All declarations are fetched and placed on top of your code.
number1 = 5; //initialization
console.log(number1); //5
var number1; //declaration

//However, a variable must be initialized in order for it to be recognized. Otherwise:
console.log(number1); //undefined
var number1; //declaration
number1 = 5; //initialization

//FUNCTIONS: enclosed code which you can execute whenever you want, however many times you want. Curly braces indicate a block of code. Inside the block, you write the logic that a function should execute. Functions don't get called immediately. You have to call them explicitly.

function calc() {
  console.log("Inside function!");
} //nothing happens. Nothing logged. Why? You need to call the function in order for the function to be executed.

calc(); //You add the parentheses in order to execute the function.
console.log(typeof calc); //function. No parentheses here because you're only referencing the function.

//Due to hoisting, you can also use a function if you define it after calling it:

calc();
function calc() {
  console.log("Insie function, which I defined after calling it!");
}

//Create a variable, name it calcAgain, and assign it to a function:
var justRan = function() {
  console.log("This code has just ran!");
}; //A semicolon is needed now!

justRan();

var anotherJustRan = justRan; //We create a new variable and assign to it another variable, which happens to be a function.
anotherJustRan();

var anotherJustRan = justRan(); //error. justRan() returns nothing, it simply executed some code. So anotherJustRan is not a function, so we can't execute it.
anotherJustRan();
console.log(anotherJustRan); //undefined. Because we're setting it to the return value of something, but that return value simply isn't there. It doesn't exist.

//Often, functions return a value. Add the return keyword to do so:

function calculation() {
  return "Inside calculation function";
}

var returnedCalculation = calculation(); //Assigning the return value of calculation() to anotherCalculation.
console.log(returnedCalculation); //"Inside calculation function."

//To pass something into a function, add arguments inside the () part of your function definition.

function calc(num1, num2) {
  return num1 + num2;
}

var returned = calc();
console.log(returned); //NaN. Why? Because in the previous line, we call the calc() function without passing arguments to it. undefined + undefined = NaN.

//Passing in again:
function calc(num1, num2) {
  return num1 + num2;
}

var returned = calc(8, 10);
console.log(returned); //18. If: calc(8, 10, 16), 16 would be ignored.

//Not calling the calc function, just assigning it to a variable:
function calc(num1, num2) {
  return num1 + num2;
}

var returned = calc;
console.log(returned(5, 3)); //8

//CONTROL STRUCTURES: allow you to tell the browser when or how often to execute code. If-statement, switch-statement, loops

var isItTrue = true;
if (isItTrue) {
  //If what's inside the parentheses is true, then:
  console.log("Yes, true!");
} else {
  //Otherwise:
  console.log("Not true.");
}

var number = 0; //0 is false. 1 is true. Null is treated as false. Everything else is treated/interpreted as true.
if (number) {
  console.log("Executed.");
} else {
  console.log("Not executed.");
}

//Switch-statements
var luckyNumber = 8;
switch (
  luckyNumber //Inside braces, I define cases
) {
  case 1:
    console.log("It's 1");
    break;
  case 8:
    console.log("It's 8");
    break;
  default:
    console.log("A different case");
    break;
} //without the break keyword, the statement falls through and console.log-s everything. Once it finds it case, it'll continue to execute until the end.

//For-loops
for (var i = 0; i < 5; i++) {
  console.log(i);
}

//Nested loops
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 2; j++) {
    console.log(i + j);
  }
}

//Loops work well with arrays
let array = ["One", "Two", "Three"];
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//While-loops
let num = 5;
while (num < 7) {
  //in parentheses, define how long the loop should keep running.
  console.log(num);
  num++;
}

let condition = true;
let i = 2;

while (condition) {
  if (i == 3) {
    condition = false;
  }
  console.log(i);
  i++;
}

//Do-while-loops
let condition = false;
do {
  //Even is the while condition is false right from the beginning, we want to execute this code.
  console.log("Execute me, no matter what.");
} while (condition);

//OPERATORS
//subtraction
var a = 12;
var b = "1";
console.log(a - b); //11. JS is not able to construct new strings when subtracting. That's different to addition.

//multiplication
var a = 1.3;
var b = 2.2;
console.log(a * b); //2.8600000000000003
console.log((a * b).toFixed(2)); //"2.86"

//division
var a = 12;
var b = 2;
console.log(a / b);
console.log(a % b); //1. modulus is what remains after a division.

//comparison
console.log(1 == 1); //checks for value-equality
console.log(1 === 1); //checks for value- and type-equality
console.log(1 != 1); //checks for value-equality
console.log(1 !== 1); //checks for value- and type-equality

//weird comparisons
console.log(NaN == NaN); //false;
console.log(null == undefined); //true;
console.log(0 == undefined); //false;
console.log(0 == null); //false;
//Undefined, compared to anything except null, is false.

//boolean operators
if (1 == 1 && 2 == 2) {
  //and-operator. && combine both results into one single result
  console.log("Trueee!");
} else {
  console.log("Falseee!");
}

if (1 == 1 || 2 == 2) {
  //or-operator. || asks for at least one true
  console.log("Trueee!");
} else {
  console.log("Falseee!");
}

//check if a value is anything but with the exclamation point
var isTrue = true;
console.log(!isTrue);

//ternary operators
let a = 5;
let b = 5;
if (a == b) {
  console.log("Equal.");
} else {
  console.log("Not equal.");
}

let a = 5;
let b = 5;
console.log(a == b ? "Equal." : "Not equal."); //ternary operator: a way to write a simple one-line conditional code. The question mark means if, then. The colon means otherwise.

///////////////////////////
///     TYPES, SCOPE    ///
///////////////////////////

//primitive types: numbers, strings, booleans. In memory:

var a = 5; //In memory, the value 5 is stored.
var b = a; //The value 5 is copied. B doesn't access A. B accesses the value 5. If you change A to 10, then B will still be 5 because it's the value that has been copied.

//reference types: objects (including arrays). In memory:
var a = { a: 5 }; //The object {a: 5,} is stored. But in memory, the variable doesn't store this value. The variable holds a pointer that points to this value.
var b = a; //You're not copying the value directly, but the pointer. This is because objects can be complex, and it'd be a waste for the memory to be polluted with all that data.

//Example of primitive type in memory:
var aNumber = 5;
console.log(aNumber);
var anotherNumber = aNumber;
console.log(anotherNumber);
//Prints 5 twice.
aNumber = 12;
console.log(aNumber);
console.log(anotherNumber);
//Prints 12 and 5.

//Example of reference type in memory:
var array = [1, 2, 3];
console.log(typeof array); //"object"
var anotherArray = array;
console.log(array);
console.log(anotherArray);
//Prints [1, 2, 3] twice.
array.push(4);
console.log(array);
console.log(anotherArray);
//Prints [1, 2, 3, 4] twice.

//However:
var array = [1, 2, 3];
var anotherArray = array;

array = ["a", "b"];
console.log(array); //Prints ["a", "b"]
console.log(anotherArray); //Prints [1, 2, 3]
//Why? It's not against the logic. Because in array = ["a", "b"], we created a new object with a new pointer. anotherArray still has the old value with the old pointer. array(push) edited an existing object, but here, we created a new object.

//Scope is like a registry where variables are registered. Global scope refers to the Window object (the browser window). We also have local scopes nested inside the global scope. Whenever we create a function, we create a local scope together with it. Variables defined inside a function are independent from variables outside the function. Global scope elements can be used in local scopes. Elements defined in local scopes cannot be used in global scope, however.

var test = "Global scope";
function localScope() {
  console.log(test);
}
localScope(); //Prints "Global scope". The function can access the global scope element.

var test = "Global scope";
function localScope() {
  var test = "Local scope";
  console.log(test);
}
localScope(); //Prints "Local scope". This function now has its own scope (think of it as a registry).

//declaring variables in both global and local scopes:
var test = "Global scope";
function localScope() {
  var test = "Local scope";
  console.log(test); //Prints "Local scope"
}
localScope();
console.log(test); //Prints "Global scope"

//removing var from global scope:
function localScope() {
  var test = "Local scope";
  console.log(test); //Prints "Local scope"
}
localScope();
console.log(test); //Error.

//removing "var":
function localScope() {
  test = "Local scope";
  console.log(test); //Prints "Local scope"
}
localScope();
console.log(test); //Prints "Local scope". In non-strict mode. JS automatically generates a new variable if you try to use a variable that hasn't been declared. These variables always have global scope, and, therefore, can be accessed in this case.

///////////////////////////
///       ARRAYS        ///
///////////////////////////

var array = [1, 2, 3]; //The array has 3 items, but the index starts at 0. The first item can be accessed via [0].

console.log(array.length); //prints 3.
console.log(array[1]); //prints 2.

array[1] = 100; //replace element
console.log(array); //prints [1, 100, 3].

console.log(array[3]); //prints undefined.
array[3] = 200; //add element
console.log(array); //prints [1, 2, 3, 200];

array[5] = 400;
console.log(array); //prints [1, 2, 3, undefined, undefined, 400];

//forEach()
var array = [1, 2, 3];
array.forEach(function(elllement) {
  //The forEach() method takes an argument type function. Here, we added an anonymous function: one without a name. This function also takes an argument. We've named it elllement.
  console.log(elllement); //prints 1, 2, 3. forEach makes sure that for each element, the function (which is function(elllement)) is executed. elllement becomes 1, then 2, then 3.
});

//push()
var array = [1, 2, 3];
array.push(4);
console.log(array); //print [1, 2, 3, 4]. push() adds a new element at the end of your array. If you add a comma after 3, nothing happens. If you add two commas after 3, an undefined element gets added:

var array = [1, 2, 3];
var array = [1, 2, 3, ,];

//pop()
var array = [1, 2, 3, 4];
array.pop(); //pop() takes no arguments.
console.log(array); //prints [1, 2, 3]. pop() removes the last element of an array and returns it:
console.log(array.pop()); //prints 4;

//shift()
var array = [1, 2, 3, 4];
array.shift(); //shift() takes no arguments.
console.log(array); //prints [2, 3, 4]. shift() removes the first element of an array and returns it:

//shift()
var array = [1, 2, 3, 4];
array.unshift("Akos");
console.log(array); //prints ["Akos", 1, 2, 3, 4]. unshift() adds an element to the beginning of an array.

//indexOx()
var array = [1, 2, 3, 4];
array.unshift("Akos");
console.log(array.indexOf("Akos")); //prints 0, which is the index of the value I'm looking for.
array[array.indexOf("Akos")] = "Csernak";
console.log(array); //prints ["Csernak", 1, 2, 3, 4]. We've set array[0] to a new value.

//splice()
var array = [0, 1, 2, 3, 4];
var newArray = array.splice(3); //In the first argument, define the positon where you want to start adding new elements. In this case, index 3.
console.log(newArray); //prints [3, 4].
//to get the middle of the array:
var newArray = array.splice(2, 2); //In the second argument, define how many elements you want to splice out into your new array. In this case, we want two elements.
console.log(newArray); //prints [2, 3].
//however:
console.log(array); //prints [0, 1, 4]. The middle elements have been pulled out of our original array. If you don't want this removal, use slice().

//slice()
var array = [0, 1, 2, 3, 4];
var newArray = array.slice(2, 4); //In the first argument, specify from which index to start. In the second argument, specify before which index to end. here, we want to start at two and end at four.
console.log(newArray); //prints [2, 3].
console.log(array); //prints [0, 1, 2, 3, 4].

//filter()
var array = [1, 2, 3, 4];
console.log(
  array.filter(function(valllue) {
    // Like forEach(), filter() takes an anonymous function. This method calls the filter() function on all elements in the array, then we pass the valllue of the element, and we can do something with the element and return something:
    return valllue > 2; //prints [3, 4]. Return if value is greater than 2.
  })
);

//map();
var array = [1, 2, 3, 4];
console.log(
  array.map(function(eleppphant) {
    // Map() lets you return value times two. Map() will create a new array and it needs to know what to do with each element of that array. The original array is untouched.
    return eleppphant * 2; //returns [2, 4, 6, 8];
  })
);

//reverse()
var array = [1, 2, 3, 4];
console.log(array.reverse()); //prints [4, 3, 2, 1]. Reverse() takes no argument. Here, the original array is changed!

//concat()
var array = [1, 2, 3, 4];
var newArray = ["join", "me"];
console.log(array.concat(newArray)); //We pass newArray to the concat method. Concat() lets you combine arrays. The two old arrays are untouched and a third new one is created.
console.log(newArray); //prints [1, 2, 3, 4, "join", "me"].
console.log(array); //prints [1, 2, 3, 4].

//join()
var array = [1, 2, 3, 4];
var newArray = ["join", "me"];
console.log(array.join(newArray)); //prints [1join,me2join,me3join,me4]. The old arrays are untouched. It joins arrays into strings. A better use of this is to use a comma:

var array = [1, 2, 3, 4];
var newArray = [", "];
console.log(array.join(newArray)); //prints 1, 2, 3, 4

//reduce()
var array = [1, 2, 3, 4];
console.log(
  array.reduce(function(total, value) {
    return total + value;
  })
); //The reduce() method also takes a function as an argument. That function takes two arguments.
console.log(array); //prints 10, and prints [1, 2, 3, 4]. Reduce() reduced an array to a single value. Here, we added all values together.

var array = [1, 2, 3, 4];
console.log(
  array.reduce(function(total, value) {
    console.log(`Total: ${total}, Value: ${value}`);
    return total + value;
  })
);
console.log(array); //prints Total: 1, Value: 2, etc.

///////////////////////////
///       OBJECTS       ///
///////////////////////////

let person = {
  name: "Akos", //literal notation: property or field name, colon, value, comma. These are key-value pairs.
  age: 27,
  details: {
    hobbies: ["sports", "cooking", "reading"],
    location: "Denmark"
  },
  greet: function() {
    console.log("Hello!");
  }
};
console.log(person);
console.log(person.name); //Access the name property of the object. Use this dot notation by default.
console.log(person["name"]); //Access the name property/variable just like above. Don't use this by default.
console.log(person.details.location);
person.greet(); //Call the greet function
console.log(typeof person); //prints "object".
console.log(typeof person.name); //prints "string".

//change properties after the object has been updated:
person.name = "Anna";
console.log(person);

//properties do not equal variables:
let person = {
  name: "Akos",
  age: 27,
  details: {
    hobbies: ["sports", "cooking", "reading"],
    location: "Denmark"
  },
  greet: function() {
    console.log(`Hello, I'm ${age} years old!`);
  }
};
person.greet(); //Error. var age doesn't exist in the global scope. Instead, say: console.log(`Hello, I'm ${person.age} years old!`); or: console.log(`Hello, I'm ${this.age} years old!`);

//A different, but slower and less explicit way to create an object: use the new keyword.
var anotherPerson = new Object(); //Hey JS, create a new object for me.
anotherPerson.name = "Akos";
anotherPerson.age = 27;
console.log(anotherPerson);

//Objects are reference types:
var person1 = {
  name: "Max",
  age: 27
};
var person2 = {
  name: "Max",
  age: 27
};
console.log(person1 == person2); //prints false. The two variables are stored in two different slots in the memory. The pointers point to different locations in memory. Objects are reference types.

//Another way to create an object: with the static method create.
var anotherPerson = Object.create(null); //The argument specifices which prototype to base this object on. The default is Object.prototype. You can pass any other object in, e.g. person.
anotherPerson.name = "Akos";
console.log(anotherPerson);

//Prototypes.
var person = {
  name: "Max",
  age: 27
};

Object.prototype; //This is the prototype object that all other objects are based on by default. Prototypes are blueprints of object. It's JS's way of inheritance. Try:
console.log(person.prototype); //Though, it's undefined.
console.log(person.__proto__); //Never use __proto__ in production!
console.log(person.toString()); //"[object Object]". This object seems to have a toString() method, which prints it as a string. toString() is a method that the prototype object has. Prototype is about inheritance. The parent object passes down methods into all child objects.
Object.prototype.greet = function() {
  console.log("Hello there!");
}; //We created a new key called greet. Greet is equal to a function.
person.greet(); //We try to access greet on the person object, and we do get it! Prototype chain: JS works its way up in all levels of prototypes to find the key.

var max = Object.create(person);
console.log(max.name); //prints "Max".
max.greet(); //prints "Hello there.". Because of the prototype chain, Object.prototype holds greet.

var anna = Object.create(person);
anna.name = "Anna";
anna.greet();

//this in the Object prototype:
Object.prototype.greet = function() {
  console.log(`Hi, my name is ${this.name}.`); //"this" refers to the object that we're calling this function on: max and anna. So it doesn't search for name in the object prototype because these objects have their names already. If you delete the name of anna, we go up to the prototype of anna looking for a name. var person contains it, and it's set to "max". "max" gets printed in that case.
};
var max = Object.create(person);
var anna = Object.create(person);
anna.name = "Anna";
max.greet();
anna.greet();

console.log(anna.__proto__ == person); //true. The prototype of anna is person.

console.log(anna.__proto__.__proto__ == Object.prototype); //true. This lets us see the prototype chain.

console.log(Object.getPrototypeOf(anna) == person); //true. Use this code to find prototype chain in production.

//Another way to create an object: constructor functions.
function Person() {} //Start with a capital first letter.
var person = new Person();
person.name = "Akos";
console.log(person); //prints the object.
console.log(person.__proto__ == Object.prototype); //false
console.log(person.__proto__ == Person); //false
console.log(person.__proto__ == Person.prototype); //true. JS created Person.prototype for us. This function is a normal function, but it's called constructor because we added the "new" keyword. We're constructing an object using a function.

Person.prototype.greet = function() {
  console.log(`Hello ${this.name}`);
};
person.greet();

//Why is it useful to use constructor functions? Constructor functions let you create objects with some default fields and values—a blueprint. Prototypes are more than just blueprints: they allow us to inherit from objects.
function Person() {
  this.name = "Max";
  this.greet = function() {
    console.log(`Hello, I am ${this.name}.`);
  };
}
var person = new Person();
console.log(person.name); //prints "Max"
person.greet();

person.name = "Anna"; //Overwriting the var person instance, but not the blueprint constructor function object.
person.greet();

var anotherPerson = new Person();
person.greet(); //"Hello, I am Anna."
anotherPerson.greet(); //"Hello, I am Max."

console.log(person instanceof Person); //Is a certain variable an instance of a constructor function? //prints true

//Constructor functions: arguments.
function Person(name, age) {
  //Pass name and age
  this.name = name;
  this.age = age;
}
var christine = new Person("Christine", 27);
var max = new Person("Max", 33);
console.log(christine); //We get Christine and 27.
console.log(max); //We get Max and 33.

//summary: 4 ways to create objects
//1. literal notation: easy to see what you created.
var person = {
    name: "Max",
    age: 27
};

//2. new Object: identical to literal notation
var person = new Object{};
person.name = "Max";
person.age = 27;

//3. object.create: you pick your prototype and can set it to null
var person = Object.create(null); //person object doesn't have Object.prototype as a fallback mechanism. So this is for creating standalone objects.
person.name = "Max";
person.age = 27;
console.log(person.toString());//error
console.log(person instanceof Object);//error

//4. constructor function
function Person() { //ALlows you to build your own blueprint on which you create other objects.
    this.name = "Max";
    this.age = 27;
}
var person = new Person(); //Falls back to Person.prototype and then to Object.prototype.

//The keyword "this". On a top level it refers to the global object. In an object it refers to that object. "This" always refers to the left part of the dot where "this" was created. "This" refers to whatever calls something where "this" is used in. 
function fn() {
    console.log(this); //Here, "this" refers to the window object. We call the function at the top level.
}
fn();

//Now we add an object:
function fn() {
    console.log(this);
}
var obj = {
    obfn: fn, //obj holds a reference to the fn function
};
obj.obfn()//Now "this" refers to the obj object. Here, we call the obfn() function, which refers to obfn: fn inside var obj, which, in turn, refers to function fn(){}

obj.obfn.bind(this)();//Tells JS to rebind "this" inside obfn, and in the parentheses you add to what you want to bind "this".

var person = {
    name: "Max"
}
obj.obfn.bind(person)();//Binds "this" to the person object
obj.obfn();//Refer to the left of the dot: obj

//Create and delete properties on objects
var account = {
    cash: 12000,
    withdraw: function(amount) {
        this.cash -= amount;
        console.log(`Withdrew ${amount}, new cash reserve is: ${this.cash}.`);
    }
};
account.withdraw(589);

Object.defineProperty(account, "deposit", {//Create a new property. Why do this? You can not only define values, but other keys, too.
    value: function(amount) {
        this.cash += amount;
    }
});
account.deposit(3000);

Object.defineProperty(account, "name", {
    value: "ID000-1",
    //writable: true,
    //enumerable: true,
    //get: function() {} //this function will be called whenever I try to access the "name" value.
    //set: function() {} 
});
console.log(account.name);//Prints ID000-1

account.name = "ID000-3";
console.log(account.name);//Still prints ID000-1. Why? If we create a new property with defineProperty, it's read-only. So use writable: true!
console.log(account);

//Built-in methods and properties
var person = {
    name: "Max",
    age: 27,
    greet: function() {
        console.log("Hello!");
    }
}

delete person.name;
console.log(person.name); //prints undefined

console.log("name" in person); //false
console.log("age" in person); //true

for (var fiiieeld in person) { //for-loop looping through all fields
    console.log(fiiieeld); //"age", "greet"
}

for (var fiiieeld in person) { //for-loop looping through all values
    console.log(person[fiiieeld]); //27, function
}

///////////////////////////
///      FUNCTIONS      ///
///////////////////////////

//Closures are functions defined in another function. Closures are aware of their environment. Useful for callbacks. Callback functions are aware of the function that result in the callback, and in functions inside functions.
function generator(input) {
    var number = input;
    return function() { //Anonymous function. We're calling it from the inside of another function. This is a closure.You can use "number" and "inside" in this function, because closures are aware of their environment.
        return number * 2;
    }
}

var calc = generator(900);
console.log(calc);//returns the inside function. We're executing the generator function and passing in 900. This generator function simply returns another function. This function is bound to calc. To execute this function:
console.log(calc());//returns 1800. The closure is aware of its environment: number and input.

//IIFEs: immediately invoked function expressions. Immediately executed when the code runs through our JS file. 
(function calc() {
    var number = 10;
    console.log("Calc");
})();
console.log(number);
//Why is this useful? We're using local scope here. We make sure we don't pollute our global scope with variables. Good when using third-party stuff.  

//methods and properties we can use with functions
function message(message) {
    console.log(message);
}
message("Hi!");

function message(message) {
    console.log(message);
    console.log(arguments[0]);//We've never created this before. Check for extra arguments and access them.
    console.log(arguments.length);//returns 3
}
message("Hi!", 10, 5);

console.log(message.name);//returns "message"

var msg = message;
console.log(msg.name);//find out which function gets executed.
console.log(msg.length);//returns 1. The number of arguments this function expects. Useful to learn how many arguments you have to pass to a function.

var msg = function (message) {
    console.log(message);
}
console.log(msg.name);//returns nothing. Above we bind an anonymous function to the "msg" variable.
