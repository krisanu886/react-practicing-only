import React,{useState} from 'react';
import './App.css';

const MultiProForm = () => {
    const [fullName, setFullName] = useState({
        fname: '',
        lname: '',
        email: '',
        number:'',
        textArea:''
    });
    const InputEvent = (event) => {
        const {value, name} = event.target
        // 
        setFullName((preValue)=>{
            return{
                ...preValue,
                [name]: value,
            }
        });
    }
    const Clear = () => {
        setFullName('')
        
    }
    const onSubmit = (event) => {
        event.preventDefault();
        alert(`Using Spreed operator ${fullName.fname}  ${fullName.lname} | ${fullName.number} | ${fullName.email} | ${fullName.textArea}`);
    }
    return(
        <>
         <div className="div">
             <h1>Using Spreed operator {fullName.fname} {fullName.lname}</h1>
             <h4>{fullName.email}</h4>
             <h4>{fullName.number}</h4>
             <h4>{fullName.textArea}</h4>
             <input type="text" onChange={InputEvent} name="fname" value={fullName.fname} placeholder="Type Your First Name" /><br/>
             <input type="text" onChange={InputEvent} name="lname" value={fullName.lname} placeholder="Type Your Last Name" /><br/>
             <input type="emil" onChange={InputEvent} name="email" value={fullName.email} placeholder="Type Your Email" /><br/>
             <input type="number" onChange={InputEvent} name="number" value={fullName.number} placeholder="Type Your Mobile Number" /><br/>
             <input type="text" onChange={InputEvent} name="textArea" value={fullName.textArea} placeholder="Type Your Moner Kahini" /><br/>
             <button onClick={onSubmit}>Submit!!!</button><br/>
             <button onClick={Clear}>All Clear!!!</button>
         </div>
        </>
    );
}
export default MultiProForm;