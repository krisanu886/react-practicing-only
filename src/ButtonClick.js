import React, { useState } from 'react';
import './App.css';

const ButtonClick =() =>{
   
    const color = 'grey'
    const [bg, setBg] = useState(color);
    const [name, setName] = useState('Click Me')
    const bgChange = () =>{
        let newbg = 'aqua'
        // let newname = 'Ouch!!!'
        setBg(newbg);
        setName('Ouch!!!');
    }
    const bgBack =() => {
        let newbgBack = 'violet';
        // let newBackName = 'Aahhh!!!'
        setBg(newbgBack);
        setName('Aahhh!!!');
    }
    return(
        <>
        <div className='div' style={{backgroundColor:bg}}>
            <button onDoubleClick={bgBack} onClick={bgChange}>{name}</button>
            {/* <button onMouseEnter={bgBack} onMouseLeave={bgChange}>{name}</button> */}
        </div>
        </>
    );
}
export default ButtonClick;