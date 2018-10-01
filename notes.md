# Front End Web Notes

Wed Oct 1
## JavaScript API
Modern browsers are very sophisticated applications that are almost capable  of running full 
applications.

## Learning Objectives
1. Name and identify JS APIs in the browser
1. Explore and identify upcoming technologies available in the browser
1. Measure browser support for any feature

# Initial Exercise
1. Explore browser APIs


## In Class Activity I
* Discussion
	* What are the limitations of applications that run in a web browser?
	* What are the advantages of applications that run in a web browser?


## After Class
My goal is to make a project that *tests* one of the browser APIs. This project should be *small*.

**NOTE!** You should choose a browser API not a web service. Your API should be something provided by
the browser. **FOR example:** Canvas is okay, Yelp is not.

1. Use at least 3 features of the browser.
1. Don't use a service.
1. Check out Web Assembly
1. Include a README.md
1. Github Repo
1. Add notes on the features that are supported by each browser
1. Make a medium article about my opinion about the features we chose
 
 


<br>
<br>
Wed Sept 26
## JavaScript Class Objects and Prototype
Prototypes are how JavaScript handles inheritance.

<br>
<br>


Wed Sept 24
## JavaScript Arrays, Objects, and Loops
Arrays, Objects are core data structures in JS. Use them to hold and organize data used in the programs you write. Use loops to automate repetitive tasks.


## Variables and Scope
1. Variables and Scope
1. Define Arrays and Objects
1. Access values stored in arrays and Objects
1. User loops to automate process working with arrays and Objects
1. Work with nested data structures


### Hoisting
JS only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined.

### Const, let, and var
* Declaring a variable as var variableName makes this available to the global scope.
* Declared varibales are created before any code is executed.
* Because variable declarations (and declarations in general) are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called "hoisting", as it appears that the variable declaration is moved to the top of the function or global code.

* Example var is function scoped:
<br>

```
  var x = 10;

  function test() {
    var t = 99;

    for (var i = 0; i < t; i++) {
      console.log(i);
    }
  }

```

* Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through reassignment, and it can't be redeclared.

```
const number = 42;

try {
  number = 99;
} catch(err) {
  console.log(err.message);
}
```

This should produce and error as constants cannot be reassigned.

* The let statement declares a block scope local variable, optionally initializing it to a value.
* This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.

```
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x); // expected output: 2
}

console.log(x) // expected output: 1
```


<br>
<br>
<br>
Wed Sept 19

## Javascript
Original purpose of JS ws to script browsers.
With JS you can control almost all of the features
and functions of the browser.<br>

Originally JS was devleoped by Netscape for their browser and called
**LiveScript**. The name was soon changed to **JavaScript** because
**Java** was a new and popular language and **Netscape** thought this would
be good for marketing.

#### Where do you use JS?
Everywhere, seriously. Use JS to:
* Build Web pages
	* Manipulate the DOM
	* Add interactivity
	* Create web apps
* Script the server
	* Node JS uses JS
	* JS can run your server
	* Handle server API requests
* Embeded systems
	* Use JS to program hardware devices
* Native applications
	* Script native applications
	* Build native applications
	* Other applications can use a JS layer
	to script native functions


### JavaScript the most Important language
* JS is the ost popular language in Stack Overflow's
developer 2017 survey.

> Any application that can be written in JS will eventually
be written in JavaScript. - Jeff Atwood.

```
<script>
	// Scripts can go inside html inside scripts tags
	console.log("This script is awesome!")
</script>
```



<br>
<br>
<br>
<br>

Monday Sept 17

## Grid
1. What is a grid?
1. Why use a grid
1. What is a unit?
1. What is a gutter?
1. What is a column?
1. What is a field?
1. Why use 12 columns?
1. What is the rulle of thirds?
1. Do you think this works?

## Identify Grids in the Wild
* Work with a group and identify grids in the sites below
	* Identify:
		* Units
		* Columns
		* Proportions 1/2, 1/3, 1/4, 2/3 + 1/3
		* Fields <br>
https://www.facebook.com

* Stretch Challenge
	* Study each of the sites above and understand their grid system
