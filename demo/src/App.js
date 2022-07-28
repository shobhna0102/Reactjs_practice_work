// import React from 'react';


// const App = () => {
//   const [toggle, setToggle] = React.useState(localStorage.getItem('toggle'))

//   React.useEffect(() => {
//     localStorage.setItem('toggle', toggle)
//   }, [toggle]);

//   return (
//     <>
//       <div>
//         <button onClick={() => {
//           setToggle(!toggle)
//         }}>
//           Toggle
//         </button>
//         {toggle ? <p>I'm toggled</p> : null}
//       </div>

//       <div>
//         <button onClick={() => {
//           setToggle(!toggle)
//         }}>
//           Toggle
//         </button>
//         {toggle ? <p>I'm toggled</p> : null}
//       </div>
//     </>
//   );
// };

// export default App;
import React from "react";
import { useState } from "react";
const App = (props) => {
  const [shown, setShown] = useState(false);

  const [isChecked, setIsChecked] = useState(localStorage.getItem('checkbox') === 'true');

  const handleOnChange = (e) => {
    setIsChecked(localStorage.getItem('checkbox'));
    localStorage.setItem('checkbox', `${e.target.checked}`)
  }


  const toggle = () => {
    setShown((prevState) => !prevState);
    alert(isChecked)
  };


  return (
    <div className="pdfContainer  row container justify-content-center">
      <section className="justify-content-center">
        <h1 className="row justify-content-center h1--style">
          Κεφάλαιο {props.id}
        </h1>
        <p className="row justify-content-center p--style">{props.info}</p>
      </section>
      <button onClick={toggle} className=" shadow button--style">
        Μάθημα {props.id}
      </button>
      {shown && <embed className=" pdf" src={props.pdf} />}

      <div className="pdfChecked input-group-text input-group ">
        <input
          type="checkbox"
          id='pdfchecked'
          name="pdfChecked"
          value='1'
          checked={isChecked}
          onChange={handleOnChange}
        /> <label className="input--label"> Διάβασα το κεφάλαιο!</label>
      </div>
    </div>
  );
};

export default App;