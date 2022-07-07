import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    pwd: "",
    email: "",

  });

  const inputEvent = (event) => {
    const { value, name } = event.target;


    setFullName((preValue) => {

      return {
        ...preValue,
        [name]: value,
      }
    })

  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("submitted..");
  };
  return (
    <>
      <div1 className="maindiv">
        <form onSubmit={onSubmit}>
          <div>
            <h1>
              Heloo{fullName.fname} {fullName.pwd} {fullName.email}

            </h1>
            <input
              type="text"
              placeholder="Name"
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <input
              type="text"
              placeholder="password"
              name="pwd"
              onChange={inputEvent}
              value={fullName.pwd}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={inputEvent}
              value={fullName.email}
            />

            <button type="submit">Submit</button>
          </div>
        </form>
      </div1>
    </>
  );
};

export default App;
