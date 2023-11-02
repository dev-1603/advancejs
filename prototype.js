function Person(fName, lName) {
    this.firstName = fName
    this.lastName = lName
}

const p1 = new Person('John', 'Doe')
const p2 = new Person('Jane', 'Doe')

// in Below example get fullname function is added only to p1 not p2
p1.getfullName = function () {
    return this.firstName + '  ' + this.lastName
}
console.log(p1.getfullName()); // this will work fine 
// console.log(p2.getfullName()); // this function will throw error as get fullName is not defined for p2



// where as  here we are adding getFullname function to Initial constructor function's prototype

Person.prototype.getfullName = function () {
    return this.firstName + '  ' + this.lastName

}
// below both the console logs will return  output
console.log(p1.getfullName());
console.log(p2.getfullName());


function Superhero(fName, lName) {

    // this= {}
    Person.call(this, fName, lName) // inherits the properties of Person 

    this.isSuperHero = true
}
Superhero.prototype.fightCrime = function () {
    console.log('Fights Crime');
}

Superhero.prototype = Object.create(Person.prototype) // Inherits the prototype Object of person 
const batman = new Superhero('Bruce', 'Wanye ')

console.log(batman.getfullName());  // here it inherits the getFullName method from the person

