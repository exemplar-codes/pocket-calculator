import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";

import "./MiscKey.css";

const MiscKey = ({ text, bgColor }) => {
  return (
    <Button
      className="misc-key"
      text={text}
      width={100}
      height={100}
      color="white"
      bgColor={bgColor}
    />
  );
};

Number.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MiscKey;
