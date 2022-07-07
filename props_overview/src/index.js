import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from './Card'
import sourceData from './data'

ReactDOM.render(
  <>
    {sourceData.map((val) => {
      return (<Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}

      />
      );
    })}

  </>,
  document.getElementById("root")
);
