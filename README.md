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

#### How ro determine 'this' ?

- implicit biniding - rule says when a function is invoked with dot notation then the object on the left of the function is treated as 'this' instance
- explicit binding - rule says when a functin is invoked explicitly with buit in call method then the 1st arg passed to the call method act as 'the' this instance
- new binding - when we use 'new' keyword for creating constructor then js create a empty object which is refered as this.
- default binding - if above 3 rules are not satisfied then js bind 'this' to the global object.
