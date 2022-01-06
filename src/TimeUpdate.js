import React,{useState} from 'react';
import './App.css';

const TimeUpdate = () => {
    let newTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState({newTime});
  const CurrentTime = () => {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime)
  }
    return(
        <>
            <div className='div'>
      
                <h2>{newTime}</h2>
                <button  onClick={CurrentTime}>Refresh</button>
            </div>
        </>
    );
}
export default TimeUpdate;