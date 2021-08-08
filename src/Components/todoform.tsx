import React, { ChangeEvent, FormEvent, useState } from 'react';

interface todoformprops {
    addprop : Addprop;

}

export const Todoform: React.FC<todoformprops> = ({addprop}) => {
    const [newtodo,setnewtodo] = useState<string>("");

    const handlechange= (e: ChangeEvent<HTMLInputElement>) => {
        setnewtodo(e.target.value);
    }

    const handlesubmit =(e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addprop(newtodo);
        setnewtodo("");
    }
    return(
        <form className='todoform'> 
        <input type='text' value={newtodo} className='todo-input' placeholder='Add an item' onChange ={handlechange}></input>
        <button type="submit" className ='todo-button'onClick={handlesubmit}>Add a Todo</button>
        </form>
    )

}