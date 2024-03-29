import { useState } from "react";
import "./styles.css";
import { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

const App = () => {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (title) => {
        setTodos((currentTodos) => {
            return [
                ...currentTodos,
                {
                    id: crypto.randomUUID(),
                    title: title,
                    completed: false,
                },
            ];
        });
    };

    const toggleTodo = (id, completed) => {
        console.log(id, completed);
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed,
                    };
                }

                return todo;
            });
        });
    };

    const deleteTodo = (id) => {
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== id);
        });
    };

    return (
        <>
            <NewTodoForm addTodo={addTodo} />
            <h1>Todo List</h1>
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        </>
    );
};

export default App;
