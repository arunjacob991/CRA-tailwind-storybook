import React from "react";
import PropTypes from "prop-types";

export const Button = ({ backgroundColor, label, ...props }) => {
  const color = {
    primary: "bg-blue-500 hover:bg-fuchsia-500",
    secondary: "bg-red-500 hover:bg-yellow-500",
    disabled: "bg-red-300 opacity-50 cursor-not-allowed",
  };

  return (
    <button type="button" className={`${color[backgroundColor]}`} {...props}>
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
