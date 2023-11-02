# JavaScript Concepts

## Advance concepts

### Scope

- Block Scope : varible declared inside a curly braces
- Function scope: varibles declared inside a function which cannot be access outside the function .
- Global scope: globally declared varibles which can ce accessed inside a block or function.
- Nested function scope: lexical scoping i.e how js resolve variable 1st it checks in block if not available then in function if it still doesnt find then it checks at global level

```js
let a = 10;

function outer() {
	let b = 20;
	function inner() {
		let c = 30;
		console.log({ a, b, c });
	}
	inner();
}
```

### closure

When we return a function inside another function, we are returning a combination of function definition along with function scope. This would let the function to have an associated persistent memory which would hold to live data between execution.

```js
function outer2() {
	let counter = 0;
	function inner() {
		counter++;
		console.log(counter);
	}
	return inner;
}

const fn = outer2();
// calling 1st time
fn(); // output :1

// calling 2st time
fn(); // output: 2
```

### Function currying

It is a process in functional programing in which we transform a function with multiple argument into a sequence of nesting function that takes one argument at a time.

```js
const curry = (fn) =>
	(function curried(cargs) {
		return cargs.length >= fn.length
			? fn.apply(this, cargs)
			: (...args) => curried([...cargs, ...args]);
	})([]);

const arg2 = curry((a, b) => a + b);
const arg3 = curry((a, b, c) => a * (b + c));
const arg4 = curry((a, b, c, d) => Math.pow(a, b * (c + d)));
```

### This

- when used in a function , refers to the object it belongs to
- It makes the function resusable by letting you decie the Object value.
- this value is determined entirely by how a functionis called.

#### How to determine 'this' ?

- implicit biniding - rule says when a function is invoked with dot notation then the object on the left of the function is treated as 'this' instance
- explicit binding - rule says when a functin is invoked explicitly with buit in call method then the 1st arg passed to the call method act as 'the' this instance
- new binding - when we use 'new' keyword for creating constructor then js create a empty object which is refered as this.
- default binding - if above 3 rules are not satisfied then js bind 'this' to the global object.

##### Order of precedence

1. New binding
2. Explicit binding
3. Implicit binding
4. Default binding

### Prototype

there is a property of every function which is called prototype that points to an object.
we can use that to add property to function definition

**Use of Prototype**

- to share properties and methods across instances
- Inheritance

#### Prototypal Inheritance

prototypal inheritance is used to inherit properties and methods and prototype object from existing functions

It lowers memory usage as we are reusing the methods and properties of an existing contructor function.

```js
const o = {
	a: 1,
	b: 2,
	// __proto__ sets the [[Prototype]]. It's specified here
	// as another object literal.
	__proto__: {
		b: 3,
		c: 4,
	},
};

// o.[[Prototype]] has properties b and c.
// o.[[Prototype]].[[Prototype]] is Object.prototype (we will explain
// what that means later).
// Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain, as null,
// by definition, has no [[Prototype]].
// Thus, the full prototype chain looks like:
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

console.log(o.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log(o.b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing

console.log(o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(o.d); // undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is Object.prototype and
// there is no 'd' property by default, check its prototype.
// o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined.
```

In below example all boxes' getValue method will refer to the same function, lowering memory usage. However, manually binding the **proto** for every object creation is still very inconvenient. This is when we would use a constructor function, which automatically sets the [[Prototype]] for every object manufactured. Constructors are functions called with new.

```js
const boxPrototype = {
	getValue() {
		return this.value;
	},
};

const boxes = [
	{ value: 1, __proto__: boxPrototype },
	{ value: 2, __proto__: boxPrototype },
	{ value: 3, __proto__: boxPrototype },
];
```

```js
// A constructor function
function Box(value) {
	this.value = value;
}

// Properties all boxes created from the Box() constructor
// will have
Box.prototype.getValue = function () {
	return this.value;
};

const boxes = [new Box(1), new Box(2), new Box(3)];
```

### Class

In javascript Classes are primarily syntactical sugar over prototypal inheritance

in class instead of having a Object Function its declared as class

There are 2 changes mainly

1. The initialization of Object moves into an constructor function.
2. All the methods on prototype object is rewriten inside the class

The Class keyword simply makes the syntax better.

The body of a class is the part that is in curly braces {}. This is where you define class members, such as methods or constructor.

A class element can be characterized by three aspects:

Kind: Getter, setter, method, or field
Location: Static or instance
Visibility: Public or private

Together, they add up to 16 possible combinations. To divide the reference more logically and avoid overlapping content, the different elements are introduced in detail in different pages:

**Method definitions**
Public instance method

**getter**
Public instance getter

**setter**
Public instance setter

**Public class fields**
Public instance field

**static**
Public static method, getter, setter, and field

**Private class features**
Everything that's private

2 used keywords in class are **extends** and **Super**

```js
class Animal {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log(`${this.name} makes a noise.`);
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name); // call the super class constructor and pass in the name parameter
	}

	speak() {
		console.log(`${this.name} barks.`);
	}
}

const d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
```

### Iterable and Iterators

- Iterable Objects: An iterable object is any JavaScript object that can be iterated over, meaning you can loop through its elements one at a time. Iterable objects include arrays, strings, sets, maps, and custom objects that implement the Iterable protocol.

- The Iterable Protocol: The Iterable protocol is not a formal specification but a de facto concept that iterable objects adhere to. To be iterable, an object should have a method named Symbol.iterator that returns an iterator object. This iterator object should have a **next** method that, when called, returns an object with **value** and **done** properties. The value property represents the current value being iterated, and the done property indicates whether iteration is complete.

1. For ..of loop

```js
//   for string
const str = 'Developer';

for (const char of str) {
	console.log(char);
}

// for Array
const arr = [1, 4, 56, 8, 08, 23];

for (const item of arr) {
	console.log(item);
}
```

Here's an example of how to make a custom object iterable by implementing the Iterable protocol:

```js
const myIterableObject = {
	data: [1, 2, 3, 4],
	[Symbol.iterator]() {
		let index = 0;
		return {
			next: () => {
				if (index < this.data.length) {
					return { value: this.data[index++], done: false };
				} else {
					return { done: true };
				}
			},
		};
	},
};

for (const item of myIterableObject) {
	console.log(item);
}
```

### Generators

its a special class function that simplify the task for writing iterators.

A generator function is a special type of function that allows you to pause its execution and later resume it. It's defined using an asterisk (\*) after the function keyword, like this:

```js
function* myGeneratorFunction() {
	// Generator function code here
}
```

Generator functions are used to create generator objects, which can be iterated over to produce a sequence of values. The key feature of generator functions is the yield keyword, which is used to pause the function's execution and yield a value to the caller. Here's an example of a generator function:

```js
function* countToThree() {
	yield 1;
	yield 2;
	yield 3;
}

const generator = countToThree();

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
```

In this example, countToThree is a generator function that yields the numbers 1, 2, and 3. When you call generator.next(), it returns an object with a value property representing the yielded value.

Generator functions are useful for dealing with asynchronous code, iterating over large data sets, and creating iterators with a more readable and efficient syntax.

## Asynchronous javascript

in basic form js is synchronous , blocking and single threaded
