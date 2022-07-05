import React from "react";
import ReactDOM from "react-dom";
import './index.css';

let curntDate = new Date(2022, 5, 5, 22);
curntDate = curntDate.getHours();
let resultData = "";
let cssStyle = {};

if (curntDate >= 1 && curntDate <= 12) {
  resultData = "good morning";
  cssStyle.color = "green";
} else if (curntDate >= 12 && curntDate <= 19) {
  resultData = "good Afternoon";
  cssStyle.color = "orange";
} else {
  resultData = "good night";
  cssStyle.color = "blue";
}

ReactDOM.render(
  <>
    <div>
      <h1>
        Hello miss,<span style={cssStyle}>{resultData}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
