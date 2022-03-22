import Form from './Components/Form';
import React, {useState} from 'react';

function App(props) {
  const [colorMain, setColorMain]= useState('');
  const handleColor= value => {setColorMain(value);}
  return (
    <div className='main' style={{ backgroundColor: colorMain }}>
      <Form onColor = {handleColor}/>
    </div>
          
  );
}

export default App;
