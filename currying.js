function sum(a, b, c) {
    return a + b + c
}

console.log(sum(2, 8, 5))

//  sum(2, 8, 5) => sum(2)(8)(5)

function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c)
            }

        }
    }
}
const curriedSum = curry(sum)

console.log((curriedSum(2)(3)(4)));



const add2 = curriedSum(2)
const add3 = add2(3)
const add4 = add3(4)
console.log({ add4 });

const curry2 = (fn) =>
    (function curried(cargs) {

        console.log(cargs.length, fn.length);
        return cargs.length >= fn.length
            ? fn.apply(this, cargs)
            : (...args) => curried([...cargs, ...args]);
    })([]);

const arg2 = curry2((a, b) => a + b);
const arg3 = curry2((a, b, c) => a * (b + c));
const arg4 = curry2((a, b, c, d) => Math.pow(a, b * (c + d)));