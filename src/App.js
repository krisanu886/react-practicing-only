import React from 'react';
import Count from './Count';
import TimeUpdate from './TimeUpdate';
import Greeting from './Greeting';
import CurrentTime from './CurrentTime';
import DigitalClock from './DigitalClock';
import ButtonClick from './ButtonClick';
import Form from './Form';
import TwoForm from './TwoForm';
import MultipleForm from './MultipleForm';
import MultiProForm from './MultiProForm';



const App = () => {
  return (
    <>
      <Count/>
      <TimeUpdate/>
      <Greeting/>
      <CurrentTime/>
      <DigitalClock/>
      <ButtonClick/>
      <Form/>
      <TwoForm/>
      <MultipleForm/> 
      <MultiProForm/>
    </>
  );
}
export default App;