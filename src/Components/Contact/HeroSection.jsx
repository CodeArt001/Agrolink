import TitleText from "../Text/TitleText";
import GetInTouch from "./GetInTouch";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-[#041B0E] h-[220px] relative mt-20">
        <div className="flex items-center justify-center absolute z-10 inset-0">
          <TitleText
            text="Contact Us"
            color="text-[#DAA545]"
            size="text-[48px]"
            className="text-center"
          />
        </div>
      </div>
      <div className="py-10">
        <GetInTouch />
      </div>
    </div>
  );
};

export default HeroSection;
