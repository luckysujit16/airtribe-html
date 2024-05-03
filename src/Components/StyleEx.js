import React from "react";

const StyleEx = () => {
  const myStyle = {
    backgroundColor: "green",
    color: "white",
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>StyleEx</h1>
      <h1 style={myStyle}>StyleEx</h1>
      <p>Designed & Developed By Sujit S Jadhav</p>
    </div>
  );
};

export default StyleEx;
