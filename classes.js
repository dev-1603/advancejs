class Person {
    constructor(fName, lName) {
        this.firstName = fName
        this.lastName = lName
    }
    getfullName() {
        return this.firstName + '  ' + this.lastName

    }
}


const person1 = new Person('Bruce', 'Wayne')
console.log(person1.getfullName());

class Superhero extends Person {
    constructor(fName, lName) {
        super(fName, lName) // it will call person class contructor
        this.fightCrime = true
    }

    fightCrime() {
        console.log('Fight Crime');
    }
}