import React from "react";

import Button from "../Button/Button";

const EqualsKey = () => {
  let text = <div style={{ position: "relative", bottom: "5%" }}>=</div>;

  return (
    <Button
      text={text}
      width={200}
      height={100}
      color="white"
      bgColor="#69E57D"
    />
  );
};

export default EqualsKey;
