import React from "react";
import { Todolistitem } from "./todoListitem";

interface todolistprop {
    todos: Array<todo>;
    togglecomplete : togglecomplete;
}

export const Todolist: React.FC<todolistprop> =({todos,togglecomplete}) => {
    return (
        <ul>
            {todos.map(todo => (
                <Todolistitem
                key ={todo.text}
                todo = {todo}
                togglecomplete={togglecomplete}/>
            ))}
        </ul>
    )
}