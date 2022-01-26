import React from "react";

import OperatorKey from "./OperatorKey";

const MinusKey = () => {
  let symbol = <div style={{ position: "relative", bottom: "7%" }}>-</div>;

  return <OperatorKey symbol={symbol} />;
};

export default MinusKey;
