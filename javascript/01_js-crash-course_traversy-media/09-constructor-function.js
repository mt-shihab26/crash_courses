// Constructor Function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

Person.prototype.getBirthYear2 = function () {
    return this.dob.getFullYear();
}
Person.prototype.getFullName2 = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate object
const person1 = new Person("John", "Doe", "04-03-1980");
const person2 = new Person("Mary", "Smit", "03-06-1970");

console.log(person1);
console.log(person2);
console.log(person2.dob.getFullYear());
console.log(person2.getBirthYear());
console.log(person2.getFullName());

console.log(person1);

console.log(person1.getFullName2());
console.log(person1.getBirthYear2());
