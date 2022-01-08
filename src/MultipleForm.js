import React, {useState} from "react";
import './App.css';

const MultipleForm = () => {
    const [fullName, setFullName] = useState({
        fname: '',
        lname: '',
        // email: ''
    });
    const InputEvent = (event) => {
        console.log(event.target.value);
        const value = event.target.value;
        const name = event.target.name;
        setFullName((preValue) => {
            if(name === 'fname'){
                return{
                    fname: value,
                    lname: preValue.lname,
                }
            }
            else if(name === 'lname'){
                return{
                    fname: preValue.lname,
                    lname: value,
                }
            }
        });
    }
    const Clear = () => {
        
    }
    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted ${fullName.fname} ${fullName.lname}`);
    }
    return(
        <>
         <div className="div">
             <h1>Hello {fullName.fname} {fullName.lname}</h1>
             {/* <h4>{fullName.email}</h4> */}
             <input type="text" onChange={InputEvent} name="fname" value={fullName.fname} placeholder="Type Your First Name" />
             <input type="text" onChange={InputEvent} name="lname" value={fullName.lname} placeholder="Type Your Last Name" />
             {/* <input type="text" onChange={InputEvent} name="email" value={fullName.email} placeholder="Type Your Email Add" /> */}
             <button onClick={Clear}>All Clear!!!</button>
             <button onClick={onSubmit}>Submit!!!</button>
         </div>
        </>
    );
}
export default MultipleForm;