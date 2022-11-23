import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoapp.todos";

function App() {
    // object destructuring
    const [todos, setTodos] = useState([]); // this is the state of the program. When the state changes, the entire component tree is re-rendered

    const todoNameRef = useRef();

    // this useEffect has no dependencies which means it'll run once when the component loads
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedTodos) setTodos(storedTodos);
    }, []);

    // use effect means when something changes, we want to call a function as a side effect
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]); // the array is an array of dependencies. If a dependency changes value, then the effect is called

    function handleAddToDo(e) {
        const name = todoNameRef.current.value;
        if (name === "") return;
        console.log(name);

        // this function is from the useState
        setTodos((prevTodos) => {
            return [
                ...prevTodos,
                { id: uuidv4(), name: name, complete: false },
            ];
        });
        todoNameRef.current.value = null;
    }

    // must return one thing form a function, this we wrap the components in an empty html element called a fragment
    return (
        <>
            <TodoList todos={todos} />
            <input ref={todoNameRef} type="text" />
            <button onClick={handleAddToDo}>+to do</button>
            <button>clear completed</button>
            <div>you're done!</div>
        </>
    );
}

export default App;
