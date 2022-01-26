import React from "react";
import PropTypes from "prop-types";

import "./NumberKey.css";
import Button from "../Button/Button";

const NumberKey = ({ number }) => {
  return (
    <Button
      text={number}
      width={100}
      height={100}
      bgColor="#485F9B"
      color="white"
    />
  );
};

Number.propTypes = {
  number: PropTypes.string.isRequired,
};

export default NumberKey;
