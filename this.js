// function sayMyName(name) {
//     console.log(`my name is ${name}`);
// }


// Implicit Binding

// the rule says when a functin is invoked with dot notation then the object on the left of the function is treated as this

const person = {
    name: 'dev',
    sayMyName: function () {
        console.log(`my name is ${this.name}`);

    }
}
person.sayMyName()

// Explicit Binding
//  rule says when a function is invoked explicitly with built in call method then the 1st arg passed to the call method act as 'this'  instance

const person2 = {
    name: 'dev',
    sayMyName: () => {
        console.log(`my name is ${this.name}`);

    }
}
function sayMyName() {
    console.log(`my name is ${this.name}`);
}
sayMyName.call(person)


// new binding
function personnew(name) {

    // this = {}
    this.name = name
}

const p1 = new personnew('superman')
const p2 = new personnew('batman')
console.log({ p1, p2 });


globalThis.name = 'spider man'

function sayMyNamedefault() {
    console.log(`my name is ${this.name}`);
}

sayMyNamedefault()
