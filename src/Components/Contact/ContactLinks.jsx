import TitleText from "../Text/TitleText";
import DescriptionText from "../Text/DescriptionText";

const ContactLinks = ({ img, label, value, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`xl:w-[412px] md:w-full w-[115px] xl:h-[189px] h-[114px] bg-[#F1F5F1] rounded-[24px] flex flex-col items-center justify-center p-6 border border-gray-100 select-none transition-all duration-300 ${
        onClick ? "cursor-pointer hover:shadow-md hover:scale-[1.01]" : ""
      }`}
    >
      <div className="text-[28px] text-[#DAA545] flex items-center justify-center mb-3">
        <img
          src={img}
          alt=""
          className="md:w-[38px] w-[26px] h-[28px] md:h-[38px]"
        />
      </div>

      <TitleText
        text={value}
        color="text-[#041B0E]"
        size="md:text-[18px] text-[13px]"
        className="font-sans font-bold text-center tracking-tight"
      />

      <DescriptionText
        text={label}
        color="text-[#041B0E]"
        size="md:text-[14px] text-[10px]"
        className="font-sans font-normal text-center mt-1 opacity-80 "
      />
    </div>
  );
};

export default ContactLinks;
