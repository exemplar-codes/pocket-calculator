import React from "react";

import OperatorKey from "./OperatorKey";

const MultiplyKey = () => {
  let symbol = <div style={{ position: "relative", top: "9px" }}>*</div>;

  return <OperatorKey symbol={symbol} />;
};

export default MultiplyKey;
