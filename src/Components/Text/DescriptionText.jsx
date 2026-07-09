import React from "react";

const DescriptionText = ({ text, color, size, className, fontWeight }) => {
  return (
    <div
      className={`${color ? color : ""} ${size ? size : ""} ${fontWeight ? fontWeight : ""} ${className ? className : ""}`}
    >
      {text}
    </div>
  );
};

export default DescriptionText;
