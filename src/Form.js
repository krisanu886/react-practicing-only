import React, { useState } from 'react';
import './App.css';

const Form =() => {
    const [name, setName] = useState();
    const [updateName, setUpdateName] = useState();
    const inputEvent =(event)=>{
        setName(event.target.value);
    }
    const onSubmit = () => {
        setUpdateName(name);
    }
    const onClear = () => {
        setUpdateName('')
    }
    return(
        <>
         <div className='div'>
             <h1>Hello {updateName}</h1>
             <input type="text" value={name} onChange={inputEvent} placeholder='Type Your Text Here!' />
             <button onClick={onSubmit}>Submit</button>
             <button onClick={onClear}>Clear</button>
         </div>
        </>
    );
}
export default Form;