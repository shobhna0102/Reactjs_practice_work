import React from "react";
import ReactDOM from "react-dom";

//1.way:--Render Multiple element inside ReacDom.render()
ReactDOM.render(
  <div>
    <h1>hello</h1>,
    <h2>How r u hiiii ...</h2>,
  </div>,
  document.getElementById("root")
);
//2.way:-- React version 16+

ReactDOM.render(
  [
    <h1>hello</h1>,
    <h2>How r u ...</h2>,
  ],
  document.getElementById("root")
);

//3.way:--
ReactDOM.render(
  <React.Fragment>
    <h1>hello</h1>
    <h2>How r u ...</h2>
  </React.Fragment>,
  document.getElementById("root")
);

//4.way:--
ReactDOM.render(
  <>
    <h1>hello</h1>
    <h2>How r u helloo...</h2>
  </>,
  document.getElementById("root")
);


ReactDOM.render(
  <>
    <h1>My colors</h1>
    <p> show </p>
    <ol>
      <li>red</li>
      <li>black</li>
      <li>white</li>
    </ol>
  </>,
  document.getElementById("root")
);

//Javascript Expression in JSX & template literals

const FirstName = "shobhna";
const LastName = "Baraiya";
ReactDOM.render(
  <>
    <h1>My name is {FirstName}</h1>
    <h2>My last name is {LastName}</h2>
    <h1>My name is {FirstName + " " + LastName}</h1>
    <h1>{`My name is ${FirstName} ${LastName}`}</h1>

    <p>Add number{2 + 3}</p>
    <p>Random number {Math.random()}</p>

  </>,
  document.getElementById("root")
);

//Show current Date & Time
ReactDOM.render(
  <>
    <h1>{`My name is ${FirstName} ${LastName}`}</h1>
    <h3>{`Today Date is ${new Date().toLocaleDateString()}`} </h3>
    <h3>{`Today Time is ${new Date().toLocaleTimeString()}`} </h3>


  </>,
  document.getElementById("root")
);



