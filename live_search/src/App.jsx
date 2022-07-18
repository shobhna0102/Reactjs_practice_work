import React, { useState } from "react";
import Searchresult from "./Searchresult";
const App = () => {
  const [img, setImg] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    setImg(data);
  };

  return (
    <div className="searchbar">
      <h1>searching</h1>
      <input
        type="text"
        placeholder="Which you want to search"
        onChange={inputEvent}
        value={img}
      />
      {img === "" ? null : <Searchresult name={img} />}
    </div>
  );
};

export default App;
