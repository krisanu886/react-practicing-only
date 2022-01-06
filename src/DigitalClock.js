import React, { useState} from 'react';
import './App.css';


const DigitalClock = () => {
    let date = new Date().toLocaleTimeString();
    const [updateClock, setUpdateClock] = useState(date);
    const UpdateTime = () => {
        date = new Date().toLocaleTimeString();
        setUpdateClock(date)
    }  
    setInterval(UpdateTime, 1000);
    return(
        <>
        <div className='div'>
            <h1>{date}</h1>
        </div> 
        </>
    );
}
export  default DigitalClock;