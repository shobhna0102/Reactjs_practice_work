import './App.css';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [crntNum, setNum] = useState(0);
  useEffect(() => {
    //alert('clicked...');
    document.title = `you cliced me ${crntNum} times`
  }, [crntNum]);
  return (
    <>
      <button onClick={() => { setNum(crntNum + 1) }}>Click Me{crntNum}</button>
    </>
  );
}

export default App;
