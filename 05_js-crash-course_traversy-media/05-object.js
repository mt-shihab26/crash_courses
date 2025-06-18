const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "movies", "sports",],
    address: {
        street: "50 main st",
        city: "Boston",
        state: "MA",
    },
}

console.log(person);
console.log(person.hobbies[1]);
console.log(person.address.city);


const { firstName, lastName, address: { city } } = person;
console.log(firstName, lastName, city);


person.email = "john@gmail.com";
console.log(person);


// array of objects
const todos = [
    {
        id: 1,
        text: "Take out trash",
        inCompleted: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        inCompleted: true
    },
    {
        id: 1,
        text: "Dentist appt",
        inCompleted: false
    },
]
console.log(todos);
console.log(todos[1].text);

// Json
const todoJSON = JSON.stringify(todos)
console.log(todoJSON);
