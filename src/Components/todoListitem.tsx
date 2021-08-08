import React from "react";

interface Todolistitemprops{
    todo : todo;
    togglecomplete : togglecomplete;
}

export const Todolistitem : React.FC<Todolistitemprops> = ({todo, togglecomplete}) => {
    return (
        <li>
            <label className={todo.complete? 'todo-row complete':'todo-row'}>
            <input type='checkbox' checked={todo.complete} onChange= {() => {togglecomplete(todo)}}/>{todo.text}
            </label>
        </li>
    )
}