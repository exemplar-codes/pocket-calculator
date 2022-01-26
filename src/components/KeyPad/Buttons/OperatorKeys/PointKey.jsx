import React from "react";

import Button from "../Button/Button";

const PointKey = () => {
  let text = <div style={{ position: "relative", bottom: "20%" }}>.</div>;

  return (
    <Button
      text={text}
      width={100}
      height={100}
      color="black"
      bgColor="#9C4646"
    />
  );
};

export default PointKey;
