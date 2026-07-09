import React from "react";

const TitleText = ({ text, color, size, className, fontWeight }) => {
  return (
    <div
      className={`${color ? color : ""} ${size ? size : ""} ${fontWeight ? fontWeight : ""} ${className ? className : ""}`}
    >
      {text}
    </div>
  );
};

export default TitleText;
