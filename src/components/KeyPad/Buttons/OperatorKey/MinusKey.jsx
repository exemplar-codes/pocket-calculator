import React from "react";

import OperatorKey from "./OperatorKey";

const MinusKey = () => {
  let symbol = <div style={{ position: "relative", bottom: "" }}>-</div>;

  return <OperatorKey symbol="-" />;
};

export default MinusKey;
