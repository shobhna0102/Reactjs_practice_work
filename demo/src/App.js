//import { Component } from "react";
//import { useState } from "react";


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
// import React from "react";
// import { useState } from "react";
// const App = (props) => {
//   const [shown, setShown] = useState(false);

//   const [isChecked, setIsChecked] = useState(localStorage.getItem('checkbox') === 'true');

//   const handleOnChange = (e) => {
//     setIsChecked(localStorage.getItem('checkbox'));
//     localStorage.setItem('checkbox', `${e.target.checked}`)
//   }


//   const toggle = () => {
//     setShown((prevState) => !prevState);
//     alert(isChecked)
//   };


//   return (
//     <div className="pdfContainer  row container justify-content-center">
//       <section className="justify-content-center">
//         <h1 className="row justify-content-center h1--style">
//           Κεφάλαιο {props.id}
//         </h1>
//         <p className="row justify-content-center p--style">{props.info}</p>
//       </section>
//       <button onClick={toggle} className=" shadow button--style">
//         Μάθημα {props.id}
//       </button>
//       {shown && <embed className=" pdf" src={props.pdf} />}

//       <div className="pdfChecked input-group-text input-group ">
//         <input
//           type="checkbox"
//           id='pdfchecked'
//           name="pdfChecked"
//           value='1'
//           checked={isChecked}
//           onChange={handleOnChange}
//         /> <label className="input--label"> Διάβασα το κεφάλαιο!</label>
//       </div>
//     </div>
//   );
// };

//const { useState } = React; // --> for inline use
// import React, { useState } from 'react';  // --> for real project



//import { toppings } from "./utils/toppings";
// class CheckboxComponent extends Component {

//   constructor() {
//     super();
//     this.state = {
//       items: {}
//     }
//   }

//   handleCheckboxClick = (event) => {
//     const { name, value } = event.target;
//     const item = localStorage.getItem(name);
//     if (item) {
//       console.log(`Remove item name: ${name}, value: ${value}`);
//       localStorage.removeItem(name);
//       this.setState(state => delete state.items[name])
//     } else {
//       console.log(`Set item name: ${name}, value: ${value}`);
//       localStorage.setItem(name, value);
//       this.setState(state => state.items[name] = value);
//     }
//   }

//   getLocalStorageItems = () => {
//     const storageKeys = Object.keys(localStorage);
//     let obj = {};
//     for (let i = 0; i < storageKeys.length; i++) {
//       obj[storageKeys[i]] = localStorage.getItem(storageKeys[i]);
//     }
//     this.setState({ items: obj });
//   }

//   componentWillMount() {
//     this.getLocalStorageItems();
//   }

//   render() {
//     const { items } = this.state;
//     return (
//       <form action="/action_page.php">
//         <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked={items["vehicle1"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
//         <label for="vehicle1"> I have a bike</label><br />
//         <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" checked={items["vehicle2"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
//         <label for="vehicle2"> I have a car</label><br />
//         <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" checked={items["vehicle3"] !== undefined} onChange={event => this.handleCheckboxClick(event)} />
//         <label for="vehicle3"> I have a boat</label><br /><br />
//         <input type="submit" value="Submit" />
//       </form>
//     )
//   }
// }
// export default CheckboxComponent;
import React from "react";

export default class yourComponent extends React.Component {

  state = {
    checkedBoxes: []
  }

  handleCheckbox = (e, s) => {
    const checkedBoxes = [...this.state.checkedBoxes];
    if (e.target.checked) {
      checkedBoxes.push(s)
    } else {
      const index = checkedBoxes.findIndex((ch) => ch.roomId === s.roomId);
      checkedBoxes.splice(index, 1);
    }
    this.setState({ checkedBoxes });
  }


  render() {

    return (
      <div className="checkboxRowContent">
        {sensors.map(s => {
          return (
            <div className="checkboxElementWrapper" key={s.id}>
              <label htmlFor={`sensor${s.id}`}>
                <div className="checkboxLabel">
                 // <Link to={`/sensors/edit/${s.id}`}>{s.name}</Link>
                </div>
                <input
                  type="checkbox"
                  id={`sensor${s.id}`}
                  name="sensorId"
                  checked={checkedBoxes.find((ch) => ch.roomId === s.roomId)}
                  onChange={(e) => handleCheckbox(e, s)}
                />
                <span className="checkbox" />
              </label>
            </div>
          );
        })}
      </div>
    )
  }
}