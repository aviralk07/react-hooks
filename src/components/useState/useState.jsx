// MyComponent.js
import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BiSolidMinusCircle } from "react-icons/bi";
import "./MyComponent.css"; // Import your CSS file

const MyComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <button className="icon-add" onClick={() => setCount(count + 1)}>
        <BsFillPlusCircleFill />
      </button>
      <h1>{count}</h1>
      <button
        className="icon-minus"
        onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}
      >
        <BiSolidMinusCircle />
      </button>
    </div>
  );
};

export default MyComponent;
