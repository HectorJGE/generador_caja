import './App.css';
import FormBox from './components/FormBox';
import Box from './components/Box'
import { useState } from 'react';

        

function App() {

  const [currentBoxes,setCurrentBox] = useState([])

  const newB = (box)=>{
    let boxes=[...currentBoxes]
    boxes.push(box)
    setCurrentBox(boxes)
  }

  return (
    <>
      <FormBox onNewBox={newB}/>
      <Box cajas={currentBoxes}/>
    </>
  );
}

export default App;
