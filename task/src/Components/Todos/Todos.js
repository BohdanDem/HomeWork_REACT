import { useEffect, useState } from 'react';
import Todo from "./Todo/Todo";
import {GetTodos} from "../../Services/ApiServices";

export const Todos = () => {
    const [ todos, setTodos ] = useState([]);

    useEffect(() => {GetTodos.getTodos(setTodos)},[]);

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