// import explore from "../../assets/images/Frame.png";
import search from "../../assets/images/Vector.svg";
import DescriptionText from "../Text/DescriptionText";
import TitleText from "../Text/TitleText";
import Category from "./Category";
import ProductCard from "./ProductCard";
const HeroSection = () => {
  return (
    <div>
      <div className="bg-[#041B0E] h-[470px] relative">
        <div
        // style={{
        //   backgroundImage: `url(${explore})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
        // className="absolute z-10 w-full h-[467px]"
        >
          <div className="flex flex-col items-center justify-center xl:pt-[8rem] md:pt-[8rem] pt-[6rem]">
            <TitleText
              text="Explore Fresh Agricultural
Commodities"
              size="md:text-[46px] text-[32px]"
              color="text-[#DAA545]"
              className="xl:w-[604px] md:w-[604px] w-[356px] text-center xl:leading-[1.2] md:leading-[1.2]"
            />
            <DescriptionText
              text="Browse verified agricultural products directly from trusted farmers and suppliers. Discover premium cocoa, cashew, grains, spices, livestock, and more with transparent pricing and reliable sourcing."
              size="md:text-[18px] text-[16px]"
              color="text-[#F9FBF9]"
              className="xl:w-[650px] md:w-[650px] w-[356px] text-center py-3"
            />
            <div>
              <span className="relative flex left-0">
                <input
                  type="text"
                  placeholder="search"
                  className="placeholder:text-[#F9FBF9] border border-white/30 bg-[#041B0E]/10 xl:w-[696px] md:w-[600px] w-[356px] py-3 rounded-2xl pl-18 text-white mt-2"
                />
                <img src={search} alt="" className="absolute mt-5 left-8" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Category />
      </div>
      <div className="xl:px-[4rem] md:px-[3rem] px-[1rem]">
        <ProductCard />
      </div>
    </div>
  );
};

export default HeroSection;
