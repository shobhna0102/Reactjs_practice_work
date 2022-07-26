import React, { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  if (action.type === 'INCR') {
    state = state + 1;
  }
  if (state > 0 && action.type === 'DECR') {
    state = state - 1;

  }
  return state;
};

function App() {
  const initialData = 10;
  const [state, dispach] = useReducer(reducer, initialData)


  return (

    <>
      <div className='main_div'>
        <p>{state}</p>
        <div >
          <button onClick={() => { dispach({ type: "INCR" }) }}>INCR</button>
          <button onClick={() => { dispach({ type: "DECR" }) }}>DECR</button>
        </div>
      </div>
    </>


  );
}

export default App;








