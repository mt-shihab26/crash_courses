import { MdDelete } from "react-icons/md";
import useTodoStore, { TTodo } from "../stores/useTodoStore";

const TodoItem = ({ todo }: { todo: TTodo }) => {
    const { toggleTodo, editTodo, deleteTodo } = useTodoStore(state => state);

    return (
        <li className="flex bg-slate-700 p-2 rounded-md align-middle justify-center mb-2">
            <input
                type="checkbox"
                checked={todo.completed}
                readOnly
                className="mr-2"
                onClick={() => toggleTodo(todo.id)}
            />
            <input
                className={`flex-1 bg-transparent ${
                    todo.completed ? "line-through" : ""
                }`}
                value={todo.title}
                onChange={e => editTodo(todo.id, e.target.value)}
            ></input>
            <button onClick={() => deleteTodo(todo.id)}>
                <MdDelete />
            </button>
        </li>
    );
};

export default TodoItem;
