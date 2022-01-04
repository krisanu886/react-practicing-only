import React from 'react';

let curDate = new Date(2022,5,5,14);
curDate = curDate.getHours();
let greeting = '';
const cssStyle = {};

if(curDate >=1 && curDate<12){
  greeting ='Good Morning';
  cssStyle.color = 'green'
}
else if(curDate >= 12 && curDate <= 19){
  greeting = 'Good Afternoon';
  cssStyle.color = 'orange'
}
else{
  greeting = 'Good Night';
  cssStyle.color = 'black'
}

function Greeting(){
    return(
        <h1 className='div'>Hey buddy, <span style={cssStyle}>{greeting}</span></h1>
    );
}
export default Greeting;