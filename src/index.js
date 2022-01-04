import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import Greeting from './Greeting';


// const myName ='Krisanu Dey';
// const fName = 'Krisanu';
// const lName = 'Dey';

// const currentDate1 = new Date().toLocaleDateString();
// const currentDate = new Date();
// const day = currentDate.getDate();
// const month = currentDate.getMonth()+1;
// const year = currentDate.getFullYear();

// const currentTime1 = new Date().toLocaleTimeString();
// const currentTime = new Date();
// const time = currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds();

// let curDate = new Date(2022,5,5,14);
// curDate = curDate.getHours();
// let greeting = '';
// const cssStyle = {};

// if(curDate >=1 && curDate<12){
//   greeting ='Good Morning';
//   cssStyle.color = 'green'
// }
// else if(curDate >= 12 && curDate <= 19){
//   greeting = 'Good Afternoon';
//   cssStyle.color = 'orange'
// }
// else{
//   greeting = 'Good Night';
//   cssStyle.color = 'black'
// }

ReactDOM.render(
  <React.StrictMode>
    <App />

    {/* 12 no video ------------------------- */}
    {/* <h1>Hey buddy</h1>
    
    <p>My name is {myName}</p>
    <ol>
      <li>Dabang</li>
      <li>Krish3</li>
      <li>Bahubali</li>
      <li>Ginius</li>
    </ol> */}
    {/* 12 no video -------------- */}

    {/* 13 no video -------------- */}
    {/* <h1>{`My first name is ${fName} and my last name is ${lName} and my lucky number is ${3*3}....`}</h1>
    <p>my lucky number is {3*3}</p> */}
    {/* 13 no video -------------- */}

    {/* 14 no video -------------- */}
    {/* <h1>Hello today i'll show current Date and Times</h1>
    <p>{`Todays date is ${day} / ${month} / ${year}`}</p>
    <p>{`Todays date is ${currentDate1}`}</p>
    <p>{`And current time is ${time}`}</p>
    <p>{`And current time is ${currentTime1}`}</p> */}
    {/* 14 no video -------------- */}

    {/* 15 no video -------------- */}
    {/* <h1 contentEditable='true'>Hey, my name is {myName}</h1> */}

    {/* 18 no video -------------- */}
    {/* <h1 className='div'>Hey buddy, <span style={cssStyle}>{greeting}</span></h1> */}
    
    {/* 20 no video -------------- */}
    {/* <Greeting/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

