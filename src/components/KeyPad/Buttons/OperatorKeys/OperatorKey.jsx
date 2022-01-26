import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";

// For *, - and division
const OperatorKey = ({ symbol, width, height, className }) => {
  return (
    <Button
      text={symbol}
      bgColor="white"
      color="#485F9B"
      width={width}
      height={height}
      className={className}
    />
  );
};

OperatorKey.propTypes = {
  symbol: PropTypes.node.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

OperatorKey.defaultProps = {
  height: 100,
  width: 100,
};

export default OperatorKey;
