import React, {useState} from "react";
import './App.css';

const MultipleForm = () => {
    const [fullName, setFullName] = useState({
        fname: '',
        lname: '',
        email: '',
        number:''
    });
    const InputEvent = (event) => {
        // console.log(event.target.value);
        // const value = event.target.value;
        // const name = event.target.name;
        const {value, name} = event.target;
        setFullName((preValue) => {
            if(name === 'fname'){
                return{
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    number: preValue.number
                }
            }
            else if(name === 'lname'){
                return{
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                    number: preValue.number
                }
            }
            else if(name === 'email'){
                return{
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    number: preValue.number
                }
            }
            else if(name === 'number'){
                return{
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    number: value
                }
            }
        });
    }
    const Clear = () => {
        setFullName('')
        
    }
    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Hey Using if else statement ${fullName.fname}  ${fullName.lname} | ${fullName.number} | ${fullName.email}`);
    }
    return(
        <>
         <div className="div">
             <h1>Hi Using if else statement {fullName.fname} {fullName.lname}</h1>
             <h4>{fullName.email}</h4>
             <h4>{fullName.number}</h4>
             <input type="text" onChange={InputEvent} name="fname" value={fullName.fname} placeholder="Type Your First Name" /><br/>
             <input type="text" onChange={InputEvent} name="lname" value={fullName.lname} placeholder="Type Your Last Name" /><br/>
             <input type="emil" onChange={InputEvent} name="email" value={fullName.email} placeholder="Type Your Email" /><br/>
             <input type="number" onChange={InputEvent} name="number" value={fullName.number} placeholder="Type Your Mobile Number" /><br/>
             <button onClick={onSubmit}>Submit!!!</button><br/>
             <button onClick={Clear}>All Clear!!!</button>
         </div>
        </>
    );
}
export default MultipleForm;