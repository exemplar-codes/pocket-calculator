import React from "react";

import OperatorKey from "./OperatorKey";

const DivideKey = () => {
  let symbol = <div style={{ position: "relative", bottom: "5%" }}>÷</div>;

  return <OperatorKey symbol={symbol} />;
};

export default DivideKey;
