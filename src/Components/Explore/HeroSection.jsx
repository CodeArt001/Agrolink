import search from "../../assets/images/Vector.svg";
import DescriptionText from "../Text/DescriptionText";
import TitleText from "../Text/TitleText";
import Category from "./Category";
import FeaturedCommodities from "./FeaturedCommodities";
import ProductCard from "./ProductCard";
const HeroSection = () => {
  return (
    <div>
      <div className="bg-[#041B0E] md:h-[470px] h-[448px] relative md:mt-18 mt-15">
        <div
          className="relative w-full h-full bg-[#041B0E]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.09) 2px, transparent 1px)",
            backgroundSize: "26px 26px", // adjust to taste — spacing between dots
          }}
        >
          <div className="flex flex-col items-center justify-center md:pt-[6rem] pt-[3rem]">
            <TitleText
              text="Explore Fresh Agricultural
              Commodities"
              size="md:text-[46px] text-[31px]"
              color="text-[#DAA545]"
              className="xl:w-[604px] md:w-[604px] w-[356px] font-semibold text-center xl:leading-[1.2] md:leading-[1.2]"
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
                  className="placeholder:text-[#F9FBF9] border border-white/30 bg-[#1C3125] xl:w-[696px] md:w-[600px] w-[356px] py-5 rounded-2xl pl-18 text-white mt-2"
                />
                <img src={search} alt="" className="absolute mt-7 left-8" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Category />
      </div>
      <div className="xl:px-[4rem] md:px-[1rem] px-[0.80rem]">
        <ProductCard />
      </div>
      <div>
        <FeaturedCommodities />
      </div>
    </div>
  );
};

export default HeroSection;
