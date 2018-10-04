///////////////////////////
///     LET, CONST      ///
///////////////////////////

//LET, CONST
let name = "Max";//Use let when you expect the variable content to change. let is block-scoped in the {} it sits in.
console.log(name);

if (true) {
  let age = 27;
}
console.log(age);//error

const age = 27;
age = 31;//error. write consts in all uppercase to signal that they cannot be changed.

const AGES = [27, 29, 31];
AGES.push(25);
AGES; //Arrays are reference types. Thus, AGES doesn't hold values, it holds a pointer. We're not changing the pointer, so that's totally valid.

const OBJ = {
  age: 27,
};
OBJ.age = 30; //Again, this is valid.


//HOISTING
age = 26;
var age; //An example of hoisting.
age = 26;
let age; //error. It's OK. No advantage to the old approach. So always declare before initializing.

function (doSmth) {
  age = 27;
}
let age;//declare
doSmth();//initialize
console.log(age);//We get 27. Here, hoisting works. Because let age is declared, and we call the function after declaring the variable first. SO always declare first.

//FAT ARROW FUNCTIONS
var fn = () => {
  console.log("Hello");
}
fn(); //The parentheses () stand for the arguments you pass in. Always provide these, even if empty. The fat arrow is followed by the function body. An even shorter way for a one-liner:
var fn = () => console.log("Hello"); //You can leave out the curly braces in case of a one-loner.
fn();

//To return a one-liner:
var fn = () => "Hello"; //same as return "Hello";

//To return a multi-liner:
var fn = () => {
  let a = 2;
  let b = 3;
  return a + b;
};
fn();

//Passing in arguments:
var fn = (a, b) => {
  return a + b;
};
fn(3, 4);

//If you have zero arguments, you need empty parentheses.
//If you have two or more arguments, you need those inside the parentheses.
//If you have exactly one arguments, leave out the parentheses:
var fn = a => a + 5;
fn(3);

//Callback functions:
setTimeout(() => console.log("Hello!"), 1000);//Fire after 1 second

//Use arrow functions like normal functions. But how does "this" work with arrow functions?

function fn() {
  console.log(this);
}
fn();//We get the Window object, the global scope, which holds our app. Rewrite into arrow:

var fn2 = () => console.log(this);
fn2();//We get the Window object.

var button = document.querySelector("button");
var fn2 = () => console.log(this); //with fat arrow functions, we need no workarounds like .bind, .apply, or .call, to get "this" to the right context. The context is kept! If it first referred to the Window object, it'll continue to refer to it, no matter what. 
function fn() {
  console.log(this);
}
button.addEventListener("click", fn);

//GENERAL UPDATES TO FUNCTIONS
function isEqualTo(number, compare = 8) { //With ES6, attach a default value to argument.
  return number == compare;
}
console.log(isEqualTo(3));//false

function isEqualTo(number = 8, compare = 8) { //With ES6, attach a default value to argument.
  return number == compare;
}
console.log(isEqualTo());//true

function isEqualTo(number = 10, compare) { //With ES6, attach a default value to argument. You can overwrite it by calling it with a different value.
  return number == compare;
}
console.log(isEqualTo(10));//false. Because number is 10! compare remains undefined.
