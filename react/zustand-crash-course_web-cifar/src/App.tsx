import { useEffect } from "react";

import AddTodoForm from "./components/AddTodoForm";
import TodoItem from "./components/TodoItem";

import useTodoStore from "./stores/useTodoStore";

const App = () => {
    const { todos, loadTodos } = useTodoStore(state => state);

    useEffect(() => {
        loadTodos();
    }, []);

    return (
        <div className="bg-slate-900 text-gray-100 min-h-screen">
            <div className="container m-auto px-5 pt-5">
                <h1 className="text-center text-3xl">TODO App</h1>
                <AddTodoForm />
                <ul className="mt-5">
                    {todos.length < 1
                        ? "No Todos"
                        : todos.map(todo => (
                              <TodoItem key={todo.id} todo={todo}></TodoItem>
                          ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
