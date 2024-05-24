import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);
  

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleClick(event) {
    setHeading(name);
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
      <h1>Hello {headingText}</h1>
      <form autocomplete="off">
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          name="name"
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
