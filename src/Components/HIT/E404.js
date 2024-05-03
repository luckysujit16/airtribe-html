import React from "react";
import errorImg from "./assets/ErrorPage.gif";

const E404 = () => {
  return (
    <div className="contianer-fluid d-block p-5 h-50">
      <img src={errorImg} alt="Page Not Found Error Page"></img>
    </div>
  );
};

export default E404;
