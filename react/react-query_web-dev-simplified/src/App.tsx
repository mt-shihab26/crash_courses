import AddTodoForm from "./components/AddTodoForm";
import TodoItem from "./components/TodoItem";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteTodo, fetchTodos } from "./requests/todoRequests";
import { TTodo } from "./stores/useTodoStore";

const App = () => {
    const fetchTodoQuery = useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodos,
    });
    const deleteQuery = useMutation({ mutationFn: deleteTodo });

    const isLoading = fetchTodoQuery.isLoading;
    const isError = fetchTodoQuery.isError;

    const errorMessage = fetchTodoQuery.error as string;

    const todos: TTodo[] = fetchTodoQuery.data;

    console.log(fetchTodoQuery);

    return (
        <div className="bg-slate-900 text-gray-100 min-h-screen">
            <div className="container m-auto px-5 pt-5">
                <h1 className="text-center text-3xl">TODO App</h1>
                <AddTodoForm />
                {fetchTodoQuery.isLoading ? (
                    <>Loading...</>
                ) : fetchTodoQuery.isError ? (
                    <>{errorMessage}</>
                ) : (
                    <ul className="mt-5">
                        {todos.length < 1
                            ? "No Todos"
                            : todos.map(todo => (
                                  <TodoItem
                                      key={todo.id}
                                      todo={todo}
                                      deleteTodo={deleteQuery.mutate}
                                  ></TodoItem>
                              ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default App;
