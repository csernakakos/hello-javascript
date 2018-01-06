///////////////////////////////////////////////////////
///////////////////	 FUNCTIONS		///////////////////
///////////////////////////////////////////////////////
//Udacity

function laugh(num) {
	var ha = "";
	for (var i = 0; i < num; i++) {
	ha += "ha";
	}
	return ha + "!";
}
console.log(laugh(20));

function isPrime(integer) {
	for (var i = 2; i < integer; i++) {
		if (integer % i === 0) {
			console.log(integer+ " is divisible by " +i+ ".");
			return false;
		}
}
	return true;
}

function buildTriangle(width) {
	for (var i = 0; i < width; i++) {
		//run width times
		function makeLine(length) {
		  var line = "";
		  for (var j = 1; j < length; j++) {
			line += "* ";
			console.log(line);
		  }
		  return line + "\n";
		}
	}
	return makeLine(i);
}
console.log(buildTriangle(7));

function buildTriangle(width) {
	for (var i = 0; i < width; i++) {
		//run width times
		function makeLine(length) {
		  var line = "";
		  for (var j = 1; j < length; j++) {
			line += "* ";
			console.log(line);
		  }
		  return line + "\n";
		}
	}
	return makeLine(i);
}
console.log(buildTriangle(7));


function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(width) {
	var triangle = "";
	for (var i = 0; i <= width; i++) {
	triangle = triangle + makeLine(i);
	}
	return triangle;
}
console.log(buildTriangle(10));

function reverseString(reverseMe) {
	var reversed = "";
	for (var i = reverseMe.length -1; i >= 0; i--) {
		reversed += reverseMe[i];
	}
	return reversed;
}
console.log(reverseString("Akos"));

function laugh() {
	return "hahahahahaha!";
}
console.log(laugh());

function laugh(num) {
	var ha = "";
	for (var i = 1; i <= num; i++) {
		ha += "ha";	
	}
	return ha += "!"
}
console.log(laugh(8));

function isPrime(int) {
	for (var i = 2; i < int; i++) {
		if (int % 2 === 0) {
			console.log("Nope, that's not a prime.");
			return false;
		} else {
			return true;
		}
	}
}
console.log(isPrime(7));

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(width) {
	var triangle = "";
	for (var i = 1; i <= width; i++) {
		triangle += makeLine(i);	
	}
	return triangle;
}
console.log(buildTriangle(10));

function laugh(num) {
	var ha = "";
	for (var i = 1; i < num; i++) {
		ha += "ha";
	}
	return ha + "\n";
}

function allLaughs(width) {
	var laughter = "";
	for (var i = 1; i < width; i++) {
		laughter += laugh(i);
	}
	return laughter;
}
console.log(allLaughs(15));

var catSays = function(max) {
	var catMessage = "";
	for (var i = 0; i < max; i++) {
		catMessage += "meow ";
	}
	return catMessage;
};
catSays;

var laugh = function(num) {
	var ha = "";
	for (var i = 1; i <= num; i++) {
		ha += "ha"
	}
	return ha + "!";
};
console.log(laugh(3));

function emotions(myString, myFunc) {
	console.log("I am " + myString + ", " + myFunc(2));
}
emotions("happy", "haha!");

///////////////////////////////////////////////////////
///////////////////		ARRAYS		///////////////////
///////////////////////////////////////////////////////
//Udacity

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
prices[1] = "Akos";
prices[3] = "Akos";
prices[7] = "Akos";
console.log(prices);

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

//functions and methods. get a list of array methods by typing [] in the console.
	//how many elements are there in my array?
	crew.length;

	//add new element to the end of your array. https://www.youtube.com/watch?time_continue=17&v=at5iFx9hPAc
	crew.push(rogue); 

	//pop last element off the end of your array. https://www.youtube.com/watch?time_continue=24&v=Q61vAPvAuLY
	crew.pop();

	//specify index location to add new elements and the number of elements you want to delete (if any). https://youtu.be/x7VmszJALtM
	crew.splice(1,1, "Aimee");	

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

for (var i = 0; i < donuts.length; i++) {
	donuts[i] += " hole";
	donuts[i] = donuts[i].toUpperCase();
};
console.log(donuts);

donuts[0] += " hole";
donuts[1] += " hole";
donuts[2] += " hole";
console.log(donuts);

//forEach() for arrays
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
function myFunction(element, index, array) {
	console.log("Element: " + element);
	console.log("Index: " + index);
	console.log("Array: " + array);
}
donuts.forEach(myFunction);

//printDonuts function
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
function printDonuts(donut) {
	donut += " hole";
	donut = donut.toUpperCase();
	console.log(donut);
}
donuts.forEach(printDonuts);

//turn above function into inline function expression
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
donuts.forEach(function(donut) {
	donut += " hole";
	donut = donut.toUpperCase();
	console.log(donut);
});

//forEach() with all three of its parameters
words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
	console.log("Word " +num+ " in " +all.toString()+ " is " +word+ ".");
});

//forEach() to loop over the array and add 100 to each value if the value is divisible by 3.
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
test.forEach(function(e, i, a) {
	if (e % 3 === 0) {
	a[i] += 100;
	};
});
console.log(test);

//map() to create a new array from an existing array
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
	// roots is now [1, 2, 3]
	// numbers is still [1, 4, 9]

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
var improvedDonuts = donuts.map(function(donut) {
	donut += " hole";
	donut = donut.toUpperCase();
	return donut;
});

//map() to create a totals array that shows the bill amounts with a 15% tip added
var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
var totals = bills.map(function(e) {
	e *= 1.15;
	e = e.toFixed(2);
	e = Number(e);
	return e;
});
totals

//loop over 2D arrays
var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];
	// here, donutBox.length refers to the number of rows of donuts
for (var r = 0; r < donutBox.length; r++) {
	console.log(donutBox[r]);
}

  // here, donutBox[row].length refers to the length of the donut array currently being looped over
for (var r = 0; r < donutBox.length; r++) {
	for (var c = 0; c < donutBox[r].length; c++) {
		console.log(donutBox[r][c]);
	}
}

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

//with ternary operators:
for (var i = 0, n = numbers.length; i < n; i++) {
    for (var j = 0, m = numbers[i].length; j < m; j++) {
        numbers[i][j] = numbers[i][j] % 2 === 0 ? "even" : "odd";
    }
}

//or:
for (var r = 0; r < numbers.length; r++) {
	for (var c = 0; c < numbers[r].length; c++) {
			if (numbers[r][c] % 2 === 0) {
			numbers[r][c] = "even";
			} else {
			numbers[r][c] = "odd";	
			};
	}
}

///////////////////////////////////////////////////////
///////////////////		OBJECTS		///////////////////
///////////////////////////////////////////////////////
//Udacity

var umbrella = {};
typeof umbrella;

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
	close: function() {
		if (!umbrella.isOpen) {
			return "Akos has closed the umbrella.";
		} else {
			umbrella.isOpen = false;
			return "Akos is just closing the umbrella.";
		}
	}
};

// object-literal notation
var sister = {
	//a key-value pair is separated by a colon 
	name: "Sarah",
	//key-value pairs are separated by commas
	age: 23, 
	parents: [ "alice", "andy" ]
	siblings: ["julia"],
	favoriteColor: "purple",
	pets: true
	//the entire object is wrapped inside curly braces
}; 

//two equivalent ways to look up a key's value
sister["parents"]; //bracket notation
sister.parents; //dot notation

//function in a key-value pair that describes the paintPicture() method
var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};
sister.paintPicture();

var myObj = {
	color: "orange",
	shape: "sphere",
	type: "food",
	eat: function() {return "yummy"}	
};
myObj.eat();
myObj.color;

var breakfast = {
	name: "The Lumberjack",
	price: "$9.95",
	ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};

//add a printAccountSummary() method that returns the message:
	//Welcome!
	//Your balance is currently $1000 and your interest rate is 1%.
var savingsAccount = {
	balance: 1000,
	interestRatePercent: 1,
	deposit: function addMoney(amount) {
		if (amount > 0) {
			savingsAccount.balance += amount;
		}
	},
	withdraw: function removeMoney(amount) {
		if (amount > 0 && verifyBalance >= 0) {
			savingsAccount.balance -= amount;
		}	
	},
	printAccountSummary: function() {
		return "Welcome!\nYour balance is currently $" +savingsAccount.balance+ " and your interest rate is " +savingsAccount.interestRatePercent+ "%.";
	}
}
console.log(savingsAccount.printAccountSummary());

//facebook profile
var facebookProfile = {
	name: "Akos Csernak",
	friends: 629,
	messages: ["Hey", "Whassup", "I love Lana!!!!"],
	postMessage: function(message) {
		facebookProfile.messages.push(message);
	},
	deleteMessage: function(index) {
		facebookProfile.messages.splice(index,1);
	},
	addFriend: function() {
		facebookProfile.friends += 1;
	},
	removeFriend: function() {
		facebookProfile.friends -= 1;
	}
};

//donuts revisited
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

//loop over donuts using forEach()
donuts.forEach(function(donut) {
	console.log(donut.type+ " donuts cost $" +donut.cost+ " each");
});

///////////////////////////////////////////////////////
///////////////////	 JS INTRO		///////////////////
///////////////////////////////////////////////////////
//Colt Steele

var logo = document.querySelector("#hplogo");
setInterval(function(){
	logo.width += 5;
}, 100)

"hello world".length
"hello world"[4]
"I love the Beatles"[5].length

//undefined: sth that doesn't have a value yet
var name;
var age;

//null: explicitly empty
var currentPlayer = "Charlie";
currentPlayer = null; //when the game is over

//JavaScript methods
alert()			//alerts the user in a pop-up
prompt()		//a Cancel/OK dialogue box
confirm()		//a Cancel/OK choice
console.log()	//prints to the console
clear() 		//clears console

//JavaScript tag in HTML
//<script type="text/javascript" src="script.js"></script>

//modulo to check even or odd
17 % 2 = 1 //17 is Odd
48 % 2 = 0 //48 is Even

//Celsius to Fahrenheit
var celsius = 100;
var fahrenheit = celsius * (9/5) + 32;
console.log(fahrenheit);

//escape characters
\"
\'
\\ //backslash
\n //newline
\t //tab
\r //carriage return
\b //backspace
\f //form feed

//concatenating strings with the plus equals operator
var string = "I come  first. ";
string += "I come second."
console.log(string);

//zero-based indexing starts at 0
var name = "Akos";
name[0];

var firstLetter;
var name = "akos";
firstLetter = name[0].toUpperCase();
firstLetter;

//find last character in a string
var name = "Linda Lovelace";
var lastLetter = name[name.length-1];
lastLetter;

//find Nth-to-last character in a string
//find penultimate character in a string
var name = "Kevin McCallister";
var penultimateLetter = name[name.length-2];
penultimateLetter;

//wordBlanks challenge
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
	var result = "";
	result += "The " +myNoun+ " was really " +myAdjective+ ", and it " +myVerb+ " " +myAdverb+ ".";  
	return result;
}
wordBlanks("dog", "big", "ran", "quickly");

var one = 18;
var total = one * 1.25;
total;

///////////////////////////////////////////////////////
///////////////////		LOOPS		///////////////////
///////////////////////////////////////////////////////
//Colt Steele

var string = "hello";
var counter = 0;
while(counter < string.length) {
	console.log(string[counter]);
	counter+=2;
}

var num = -10;
while (num < 20) {
	console.log(num);
	num++;
}

for (var i = -10; i < 20; i++) {
	console.log(i);
}

var num = 10;
while (num < 41) {
	if (num % 2 === 0) {
	console.log(num);
	}
	num++;
}

for (var i = 10; i < 41; i++) {
	if (i % 2 === 0) {
	console.log(i);
	}
}

var num = 300;
while (num < 334) {
	if (num % 2 === 1) {
	console.log(num);
	}
	num++;
}

for (var i = 300; i < 334; i++) {
	if (i % 2 === 1) {
	console.log(i);
	}
}

var num = 5;
while (num <= 50) {
	if ((num % 5 === 0) && (num % 3 === 0)) {
	console.log(num);
	}
	num++;	
}

for (var i = 5; i <= 50; i++) {
	if ((i % 5 === 0) && (i % 3 === 0)) {
	console.log(i);
	}
}

var string = "ahceclwlxo";
for (var i = 1; i < string.length; i+=2) {
	console.log(string[i]);
}


///////////////////////////////////////////////////////
///////////////////		FUNCTIONS	///////////////////
///////////////////////////////////////////////////////
//Colt Steele

//functions are reusable bits of code
//1. declare a function
function doSomething() {
	console.log("HELLO WORLD");
	console.log("GOODBYE");
}

//2. call the function
doSomething();

//+1 get the function value back without running it
doSomething;

//functions that take inputs
//num is a temporary placeholder
function square(num) {
	console.log(num * num);
}
square(10);

//return to capture the value that comes back
//only the first return will run
function square(num) {
	return num * num;
}

//save return in a variable
var result num * num;

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
var city = "paris";
var capital = capitalize(city);
capital;

//function declaration
function capitalize(string) {

//function expression
var capitalize = function(string) {
	
function isEven(num) {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

function isEven(num) {
	return num % 2 === 0;
}	
isEven(4);
isEven(333);

function factorial(num) {
	var result = 1;
	for (var i = 2; i <= num; i++) {
	result *= i;
	}
	return result;
}
factorial(5);
factorial(12);

function kebabToSnake(string) {
	var newString = string.replace(/-/g , "_");
	return newString;
}
kebabToSnake("hello-world");
	
//execute interval in a timely manner
setInterval(sing, 2000);
clearInterval(2);
	

///////////////////////////////////////////////////////
///////////////////		ARRAYS		///////////////////
///////////////////////////////////////////////////////
//Colt Steele

//arrays of arrays
var arr = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
	[[10,11,12], 13, 14]
	];

arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11

var myArray = [
	[1,2,3], 
	[4,5,6], 
	[7,8,9], 
	[[10,11,12], 13, 14]
	];

var myData = myArray[2][1]; //myData equals 8

function nextInLine(arr, item) {
  arr.push(item);
  arr.shift();
  
  return arr.shift();  // Change this line
}
nextInLine([1, 2, 3], 4);

//indexOf array
var friends = ["Charlie", "Kimber", "Matt"];
friends.indexOf("Kimber");
friends.indexOf("Hagrid");
	
//slice()
//slice(1,3) - start copying at 1, finish one before 3

//loop over an array
var colors ["red", "blue", "green"];
	for (var i = 0; i < colors.length; i++) {
		console.log(colors[i]);
	}
	
//iterate over array -- a better way to loop over an array
colors.forEach(function(color) {
	console.log(color);
});
	
foodItem.forEach(function(foodItem) {
	console.log("I love " + foodItem.name);
});

function printReverse(array) {
	for (var i = array.length; i >= 0; i--) {
		console.log(array[i]);
	}
};
printReverse(["a", "b", "c", "d"]);
	
function isUniform(array) {
	var firstInIndex = array[0];
	for (var i = 1; i < array.length; i++) {
		if (firstInIndex !== array[i]) {
			return false;
		}
	} return true;
};
isUniform([1,1,1,1,1,1]);
	
function sumArray(array) {
	var result = 0;
	array.forEach(function(element) {
	result += element;
	});
	return result;
};
sumArray([1, 2, 3, 4]);
	
function max(array) {
	var max = array[0];
	for (var i = 1; i < array.length; i++) {
		if (array[i] > max) {
		max = array[i];
		}	
	}
	return max;
};
max([2,5,3,8]);
	
///////////////////////////////////////////////////////
///////////////////		OBJECTS		///////////////////
///////////////////////////////////////////////////////
//Colt Steele
	
//dot notation vs bracket notation
	//you can't use dot notation if the property starts with a number
	someObject.1blah //invalid
	someObject["1blah"] //valid
	
	//look up a variable with bracket notation
	var str = "name";
	someObject.str //doesn't look for "name"
	someObject[str] //does evaluate "str" and looks for name
	
	//you can't use dot notation for property names with spaces
	someObject.fav color //invalid
	someObject[fav color] //valid
	
var someObject = {
	friends: [
		{name: "Malfoy"},
		{name: "Crabbe"},
		{name: "Goyle"},
	],
	color: "baby blue",
	isEvil: true
};
	
var favoriteSeries = [
	{title: "The Leftovers", haveSeen: true, rating: 5},
	{title: "This Is Us", haveSeen: false, rating: 4},
	{title: "Black Mirror", haveSeen: true, rating: 4},
	{title: "Big Little Lies", haveSeen: true, rating: 4.5},
];
	
for (var i = 0; i < favoriteSeries.length; i++) {
	if (favoriteSeries[i].haveSeen === true) {
		console.log("You have seen "+favoriteSeries[i].title+" and gave it "+favoriteSeries[i].rating+" stars.");
	}
	if (favoriteSeries[i].haveSeen === false) {
		console.log("You have not seen "+favoriteSeries[i].title+".");
	}
};

	
///////////////////////////////////////////////////////
///////////////////		DOM			///////////////////
///////////////////////////////////////////////////////
//Colt Steele

//print out the document object in Object syntax (key-value pairs)
console.dir(document);
document.url;
document.links
document.body
document.head

//select and manipulate

//select <h1> and save to a variable
var h1 = document.querySelector("h1");
//manipulate <h1> using the .style property and its .color property
h1.style.color = "pink";

//select <body> and change its bckgr color
var body = document.querySelector("body");
var isBlue = false;
setInterval(function(){
	if (isBlue) {
		body.style.background = "white";
	} else {
		body.style.background = "blue";
	}
	isBlue = !isBlue;
}, 1000);

//5 methods for selecting elements
	//return the one element that matches the id
	document.getElementById();
	
	//return all elements matching a class
	document.getElementsByClassName();
	
	//return all elements matching a tag such as <li> or <h2>
	document.getElementsByTagName();
	
	//a jack of all trades. does what the first three. gives you the first match. uses a CSS-like selector: #id, .class, li a.special
	document.querySelector();
	
	//returns all matching elements
	document.querySelectorAll();

//changing an element's style
	//style property
	var tag = document.getElementById("highlight");
	tag.style.color = "blue";
	tag.style.border = "10px solid black";
	tag.style.fontSize = "70px";
	tag.style.background = "yellow";
	tag.style.marignTop = "200px";
	
//between CSS and JS
	//define a class in CSS
	.h1 {
		color: blue;
		border: 10px solid red;
	}
	//in JS, add a class to the selected element
	var tag = document.getElementById("highlight");
	tag.classList.add("h1");
	
	//remove a class
	tag.classList.remove("h1");
	
	//toggle a class
	tag.classList.toggle("h1");

//changing text content
	//textContent
	var tag = document.getElementsByTagName("p")[0];
	
	//retrieve text content
	tag.textContent

	//alter text content
	tag.textContent = "blah blah";
	
	//innerHTML: retrieves text together with HTML markups such as <strong></strong>
	document.body.innerHTML;
	document.body.textContent;
	
//manipulating attributes, like hrefs or img srcs
	//select with getAttribute()
	var link = document.querySelector("a");
	link.getAttribute("href");
	
	//manipulate with setAttribute()
	link.setAttribute("href", "http://www.index.hu");
	
	//for images:
	var img = document.querySelector("img");
	img.setAttribute("src", "corgi.png");
    
    
///////////////////////////////////////////////////////
///////////////////	  DOM EVENTS	///////////////////
///////////////////////////////////////////////////////
//Colt Steele

//We select an element and then add an event listener
//To add a listener, we use a method called addEventListener
element.addEventListener(type, functionToCall);
    

    //listen for a click on this <button>
    <button>Click Me</button>
    <p>No one has clicked the button yet</p>
    
    var button = document.querySelector("button");
    var paragraph = document.querySelector("p");
    
    button.addEventListener("click", function() {
    console.log("someone clicked the button.");
    paragraph.textContent = "You just clicked the button, sir!";
    });
    
    
    //listen for a hover event on each <li> and change color to deeppink
    var lis = document.querySelectorAll("li");
    for (var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.style.color = "deeppink";
    });
    }
    
    //use change to listen for keyboard inputs and clicks alike
    numInput.addEventListener("change", function(){});
    
    //on initial mouseover, li turns green
    var firstLi = document.querySelector("li");
    firstLi.addEventListener("mouseover", function(){
        firstLi.style.color = "green";
    });
    
    //when leaving above element, li returns to original color
    firstLi.addEventListener("mouseout", function(){
        firstLi.style.color = "black";        
    });
    
    //for all Lis
    var lis = document.querySelectorAll("li");
    for (var i = 0; i < lis.length; i++){
        lis[i].addEventListener("mouseover", function(){
            this.style.color = "green"; 
        });
        lis[i].addEventListener("mouseout", function(){
        this.style.color = "black"; 
        });
        lis[i].addEventListener("click", function(){
            this.classList.toggle("done");
        });
    }   