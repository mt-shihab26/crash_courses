// for loop
for (let i = 0; i < 5; i++) {
    console.log(`For Loop Number: ${i}`);
}

// while loop
let i = 0;
while (i < 5) {
    console.log(`For Loop Number: ${i}`);
    i++;
}


const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true
    },
    {
        id: 1,
        text: "Dentist appt",
        isCompleted: false
    },
]

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}


// for..of loop
for (let todo of todos) {
    console.log(todo.text);
}

// higher-order functions
// forEach
function func(todo) {
    console.log(todo.text);
}
todos.forEach(func);

// map
function func2(todo) {
    return todo.text;
}
const todoText = todos.map(func2);
console.log(todoText);

// filter
function func3(todo) {
    return todo.isCompleted === true;
}
const todosFiltered = todos.filter(func3);
console.log(todosFiltered);


// chain
const todo2 = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;
})
console.log(todo2);


function fpf1(todo) {
    return todo.isCompleted === true;
}
function fpf2(todo) {
    return { text: todo.text, id: todo.id };
}
const todo3 = todos.filter(fpf1).map(fpf2);
console.log(todo3);
