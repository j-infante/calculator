"use client";
import React from "react";

export default function ColorFlipper() {
  const [color, setColor] = React.useState("#ffffff");

  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center mt-4">
        <a href="/" className="text-blue-500 hover:underline">
          Home
        </a>
      </div>
      <div style={{ backgroundColor: color, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button onClick={changeColor} style={{ padding: "20px", fontSize: "24px" }}>
          Change Color
        </button>
      </div>

    </div>
  );
}