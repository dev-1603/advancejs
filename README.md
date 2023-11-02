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

<script src="./closure.js" ></script>
