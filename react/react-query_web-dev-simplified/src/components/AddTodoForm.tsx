import { useState } from "react";

import useTodoStore from "../stores/useTodoStore";

const AddTodoForm = () => {
    const [value, setValue] = useState<string>("");
    const { addTodo, todos } = useTodoStore(state => state);

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                addTodo({
                    title: value,
                    completed: false,
                    id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
                });
                setValue("");
            }}
        >
            <div className="flex gap-3 justify-center mt-5">
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className="rounded-md text-black text-xl pl-2"
                />
                <button className="bg-indigo-500 p-2 rounded-md" type="submit">
                    Add Todo
                </button>
            </div>
        </form>
    );
};

export default AddTodoForm;
