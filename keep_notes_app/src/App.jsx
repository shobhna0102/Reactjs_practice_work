import React, { useState } from 'react';
import Header from './Header';
import Createnote from './Createnote';
import Note from './Note';


const App = () => {
  const [crntData, setData] = useState([]);

  const addNote = (crntNote) => { setData((prevData) => [...prevData, crntNote]); }
  const onDelete = (id) => { setData((oldData) => oldData.filter((data, index) => index !== id)) }
  return (
    <>
      <Header />
      <Createnote passNote={addNote} />
      {crntData.map((value, index) => {

        return (

          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            delete={onDelete}
          />

        );
      })}

    </>
  );
}
export default App;
