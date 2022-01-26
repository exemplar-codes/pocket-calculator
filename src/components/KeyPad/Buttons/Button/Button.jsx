import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

const Button = (props) => {
  let { text, bgColor, color, height, width } = props;
  let style = {
    backgroundColor: bgColor,
    color: color,
    height: `${height}px`,
    width: `${width}px`,
  };
  return (
    <div className={`button ${props.className}`} style={style}>
      {text}
    </div>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

Button.defaultProps = {
  bgColor: "black",
  color: "white",
};
