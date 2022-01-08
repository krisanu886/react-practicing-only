import React, { useState } from "react";
import './App.css';

const TwoForm = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState('');
    const [updateFirstName, setUpdateFirstName] = useState('');
    const [updateLastName, setUpdateLastName] = useState('');

    const InputEvent =(event)=>{
        setFirstName(event.target.value);
    }
    const InputEventTwo=(e)=>{
        setLastName(e.target.value);
    }
    const onSubmit =() => {
        setUpdateFirstName(firstName);
        setUpdateLastName(lastName);
    }
    const allClear = () => {
        setUpdateFirstName('');
        setUpdateLastName('');
        setFirstName('');
        setLastName('');
    }
    return(
        <>
         <div className="div">
             <h1>Hello {updateFirstName} {updateLastName}</h1>
             <input type="text" placeholder="Enter Your First Name" value={firstName} onChange={InputEvent}/>
             <input type="text" placeholder="Enter Your Last Name" value={lastName} onChange={InputEventTwo}/>
             <button onClick={onSubmit}>Add Here!!</button>
             <button onClick={allClear}>All Clear</button>
         </div>
        </>
    );
}
export default TwoForm;