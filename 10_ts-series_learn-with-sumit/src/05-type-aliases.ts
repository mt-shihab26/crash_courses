// Aliases
type strOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: strOrNum, user: userType): void => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
}

const sayHello = (user: userType): void => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
}