import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
const App = () => {

  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMove] = useState();

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data.name);
      setName()
      setMove()
    }
    getData();

  })

  return (
    <>
      <h1>you choose <span style={{ color: 'red' }} >{num} </span> </h1>,

      <select value={num} onChange={(event) => {
        setNum(event.target.value);
      }}>
        <option value='1'>1</option>
        <option value='25'>25</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
    </>
  );
}

export default App;
