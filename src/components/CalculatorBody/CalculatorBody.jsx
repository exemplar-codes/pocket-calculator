import React from "react";
import Display from "../Display/Display";
import KeyPad from "../KeyPad/KeyPad";

import "./CalculatorBody.css";

const CalculatorBody = () => {
  return (
    <div className="calculator-body">
      <Display />
      <KeyPad />
    </div>
  );
};
export default CalculatorBody;
