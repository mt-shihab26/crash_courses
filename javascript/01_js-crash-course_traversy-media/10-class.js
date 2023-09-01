// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person("John", "Doe", "04-03-1980");
const person2 = new Person("Mary", "Smit", "03-06-1970");

console.log(person1);
console.log(person2);
console.log(person2.dob.getFullYear());

console.log(person2.getBirthYear());
console.log(person2.getFullName());
