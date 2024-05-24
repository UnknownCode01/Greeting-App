import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });
  const [headingText, setHeading] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;
    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  function handleClick(event) {
    setHeading(fullName.fName+" "+fullName.lName);
    event.preventDefault();
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseout() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>
        Hello {headingText}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button type="submit" 
        style={{ backgroundColor: isMousedOver ? "Black" : "White" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseout}
        onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
