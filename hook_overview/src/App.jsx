import React, { useState } from 'react';


const App = () => {
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  }
  return (
    <>
      <h1>{count} </h1>
      <button onClick={IncNum}>Click Me</button>
    </>
  );
};

// const App = () => {
//   const [crnTime, setTime] = useState(new Date().toLocaleTimeString());
//   const IncNum = () => {
//     let currentTime = new Date().toLocaleTimeString();
//     setTime(currentTime);

//   }
//   return (
//     <>
//       <h1>{crnTime} </h1>
//       <button onClick={IncNum}>Click Me</button>
//     </>
//   );
// };


// const App = () => {
//   const [crnTime, setTime] = useState(new Date().toLocaleTimeString());
//   const IncTime = () => {
//     let currentTime = new Date().toLocaleTimeString();
//     setTime(currentTime);
//   }
//   setInterval(IncTime, 1000);
//   return (
//     <>
//       <h1>{crnTime} </h1>

//     </>
//   );
// };


export default App;
