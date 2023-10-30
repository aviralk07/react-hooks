import React, { useState, useEffect } from "react";

function ClearUp() {
  const [widthcount, setWidthcount] = useState(window.screen.width);

  const currentScreenWidth = () => {
    setWidthcount(() => window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth);
    return () => {
      window.removeEventListener("resize", currentScreenWidth);
    };
  });

  const headingStyle = {
    fontSize: "16px", // You can adjust the font size as needed
    color: "blue", // You can set the text color to your desired value
    // Add more CSS properties for the h3 element as needed
  };

  const spanStyle = {
    fontWeight: "bold", // You can set the font weight to your desired value
    // Add more CSS properties for the span element as needed
    fontSize: "30px",
    color: "red",
  };

  return (
    <div className="container">
      <h3 style={headingStyle}>
        The size of the mac window is ={" "}
        <span style={spanStyle}>{widthcount}</span>
      </h3>
    </div>
  );
}

export default ClearUp;
