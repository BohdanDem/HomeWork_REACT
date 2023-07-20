import { useEffect, useState } from 'react';
import Todo from "./Todo/Todo";

export const Todos = () => {
    const [ todos, setTodos ] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((todos) => {
                setTodos(todos);
            })
    },[]);

    return (
        <>
            <h2>Todos</h2>
            {todos.map((todo) => {
                return (
                    <Todo
                        key = {todo.id}
                        todo = {todo}
                    />
                );
            })}
        </>);
};