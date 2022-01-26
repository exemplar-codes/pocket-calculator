import React from "react";

import Button from "../Button/Button";

const EqualsKey = ({className}) => {
  let text = <div style={{ position: "relative", bottom: "5%" }}>=</div>;

  return (
    <Button
      text={text}
      width={210}
      height={100}
      color="white"
      bgColor="#69E57D"
      className={className}
    />
  );
};

export default EqualsKey;
