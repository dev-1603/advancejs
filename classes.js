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