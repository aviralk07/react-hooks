import React, { useState, useEffect } from "react";
import "./TrafficLight.css";

const TrafficLight = () => {
  const [lightColor, setLightColor] = useState("red");

  useEffect(() => {
    const colorOrder = ["red", "green", "yellow"];
    let currentIndex = colorOrder.indexOf(lightColor);

    const timer = setInterval(() => {
      currentIndex = (currentIndex + 1) % colorOrder.length;
      setLightColor(colorOrder[currentIndex]);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [lightColor]);

  return (
    <div className="traffic-light">
      <div
        className={`light red ${lightColor === "red" ? "active" : ""}`}
      ></div>
      <div
        className={`light yellow ${lightColor === "yellow" ? "active" : ""}`}
      ></div>
      <div
        className={`light green ${lightColor === "green" ? "active" : ""}`}
      ></div>
    </div>
  );
};

export default TrafficLight;

