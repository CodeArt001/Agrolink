import dotted from "../../assets/images/Frame.png";
import DescriptionText from "../Text/DescriptionText";
import TitleText from "../Text/TitleText";
import phone from "../../assets/images/Frame30.svg";
const About = () => {
  return (
    <div
      className="relative xl:h-[680px] md:h-[550px] h-[500px]"
      style={{
        backgroundImage: `url(${dotted})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute z-10 flex flex-col xl:flex xl:flex-row md:flex md:flex-col xl:gap-6 md:gap-14  items-center w-full xl:px-[6rem] md:px-[4rem] px-[1rem] xl:mt-[8rem] mt-[4rem]">
        <div className="w-full xl:w-2/5 shrink-0">
          <TitleText
            text="About Agrolink"
            color="text-[#0E7A3D]"
            size="xl:text-[16px] md:text-[16px] text-[14px]"
            className="font-sans font-semibold pb-4"
          />
          <DescriptionText
            text="Built for Every Stakeholder in the Agricultural Value Chain"
            size="xl:text-[40px] md:text-[16px] text-[14px]"
            color="text-[#041B0E]"
            className="font-sans font-semibold pb-4 xl:w-[580px]"
          />
          <DescriptionText
            text="Our platform is designed to serve the unique needs of every key participant in the agro-economy. Whether you're growing crops, sourcing commodities, or financing agricultural businesses, you'll find the tools and insights needed to operate more efficiently and grow with confidence."
            size="xl:text-[16px] md:text-[16px] text-[14px]"
            className="xl:w-[445px]"
          />
        </div>
        <div className="w-full xl:w-3/5 shrink-0 ">
          <img
            src={phone}
            alt=""
            className="w-full xl:max-w-[150rem] h-[459px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
