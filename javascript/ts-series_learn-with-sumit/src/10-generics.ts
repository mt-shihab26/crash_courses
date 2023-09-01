// Generics

type num = number;
type str = string;

const addId = <T extends { name: str, age: num }>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
}

const user = addId({ name: "Mashrafi", age: 40 })

console.log(user);

// const user2 = addId("Mashrafi");
// console.log(user2);

interface APIResponse<T> {
    status: num;
    type: string;
    data: T;
}

const res1: APIResponse<{ name: string, something: number }> = {
    status: 200,
    type: "good",
    data: {
        name: "test",
        something: 300
    }
}

console.log(res1.data.name);
