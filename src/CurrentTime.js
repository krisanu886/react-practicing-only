import React from 'react';
import './App.css';

const CurrentTime = () => {
    const currentDate1 = new Date().toLocaleDateString();
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth()+1;
    const year = currentDate.getFullYear();

    const currentTime1 = new Date().toLocaleTimeString();
    const currentTime = new Date();
    const time = currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds();
    return(
        <>
            <div className='div'>
                <h1>Hello today i'll show current Date and Times</h1>
                <p>{`Todays date is ${day} / ${month} / ${year}`}</p>
                <p>{`Todays date is ${currentDate1}`}</p>
                <p>{`And current time is ${time}`}</p>
                <p>{`And current time is ${currentTime1}`}</p>
            </div>
        </>
    );
}
export default CurrentTime;