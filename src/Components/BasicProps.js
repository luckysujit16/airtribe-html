import React from "react";

function BasicProps(Props) {
  return (
    <div>
      {/* Inside the JSX if you want to write javascript you have to write an EXPRESSION {} */}
      <h1>
        Welcome to {Props.name} as a {Props.role}
      </h1>
    </div>
  );
}

export default BasicProps;
