"use client";
import Link from "next/link";
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
        <Link href="/" className="text-blue-500 hover:underline">
          Home
        </Link>
      </div>
      <div style={{ backgroundColor: color, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }} role="none" onClick={changeColor}>
        <h3 style={{ userSelect: "none" }} >
        Click to change color
        </h3>
        {/* <button onClick={changeColor} style={{ padding: "20px", fontSize: "24px" }}>
        </button> */}
      </div>

    </div>
  );
}