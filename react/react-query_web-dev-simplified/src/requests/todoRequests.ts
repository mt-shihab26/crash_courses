export const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (response.status !== 200) {
        throw "Unknown error";
    }

    console.log(response.status);

    return await response.json();
};

export const deleteTodo = async (id: number) => {
    // const response = await fetch(
    //     `https://jsonplaceholder.typicode.com/todos/${id}`,
    //     { method: "DELETE" },
    // );
    // if (response.status !== 200) {
    //     throw "Unknown error";
    // }
    // return await response.json();
    console.log("here", id);
};
