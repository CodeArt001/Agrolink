const Button = (props) => {
  const {
    text,
    bg,
    borderRadius,
    color,
    className,
    onClick,
    paddingTB,
    paddingRL,
    variant,
    borderColor,
  } = props;
  const variantStyles = (style) => {
    switch (style) {
      case "primary":
        return `bg-[#0A4E29] text-white font-bold font-sans md:text-[13px] text-[10px] cursor-pointer`;
      case "secondary":
        return ` bg-[#DAA545] font-sans font-bold xl:text-[18px] text-[14px] cursor-pointer border-[#DAA545]`;
      case "tertiary":
        return `bg-white text-[#005F2D] font-sans font-bold xl:text-[18px] text-[14px] cursor-pointer`;
      case "commercial":
        return `bg-[#0E7A3D] text-white font-sans font-bold xl:text-[18px] text-[14px]`;
      //   case "white":
      //     return `bg-white text-[#43474F] font-outfit`;
      default:
        return "";
    }
  };
  return (
    <button
      onClick={onClick}
      className={` ${borderRadius ? borderRadius : "rounded-lg"} ${borderColor ? `border-3 border-${borderColor}` : ""} ${bg ? bg : ""} ${color ? color : ""} ${className ? className : ""} ${paddingTB ? paddingTB : ""} ${paddingRL ? paddingRL : ""} ${variantStyles(variant)}`}
    >
      {text}
    </button>
  );
};

export default Button;
