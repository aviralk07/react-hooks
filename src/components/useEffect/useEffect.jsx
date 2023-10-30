import React, { useState, useEffect } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BiSolidMinusCircle } from "react-icons/bi";
import "./useEffect.css"; // Import your CSS file

const UseEffect = () => {
  const [count, setCount] = useState(0);

  // Use useEffect to update the document title whenever count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

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

export default UseEffect;
