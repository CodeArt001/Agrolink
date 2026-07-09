import dotted from "../../assets/images/Frame.png";
import Button from "../Buttons/Button";
import DescriptionText from "../Text/DescriptionText";
import TitleText from "../Text/TitleText";
import HeroImage from "../../assets/images/Rectangle7.svg";
import StatSection from "./StatSection";
import ExistSection from "./ExistSection";
import About from "./About";
import Card from "./Card";
import Faqs from "./Faqs";
import arrow from "../../assets/images/arrow.svg";

const HeroSection = () => {
  return (
    <>
      <div>
        <div
          className="relative xl:h-[680px] md:h-[550px] h-[500px]"
          style={{
            backgroundImage: `url(${dotted})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // height: "xl:h-[650px] md:h-[400px] h-[800px]",
          }}
        >
          <div className="absolute z-10 xl:px-[6rem] px-[1rem] xl:mt-[10rem] md:mt-[8rem] mt-[0.80em] xl:flex xl:flex-row md:flex md:flex-row flex flex-col items-center gap-8 w-full">
            <div className="w-full">
              <span className="bg-[#2D6A421A]  border-none flex justify-center  items-center w-[186px] border-[#2D6A42] rounded-[0.50rem] px-3 py-1.5">
                <TitleText
                  text="AI-First infrastructure"
                  color="text-[#2D6A42]"
                  fontWeight="font-bold"
                  className=" text-[14px] font-sans text-center "
                />
              </span>
              <TitleText
                text={
                  <>
                    Building the Digital Infrastructure for Africa's{" "}
                    <span className="bg-gradient-to-r from-[#005F2D] from-3% to-[#6E4C00] bg-clip-text text-transparent">
                      Agro-Economy
                    </span>
                  </>
                }
                color="text-[#041B0E]"
                size="xl:text-[60px] text-[31px]"
                className="font-sans font-bold mt-8 xl:leading-[65px] xl:w-[800px] w-[358px]"
              />

              <DescriptionText
                text="An AI-powered platform connecting agriculture's key stakeholders to drive smarter farming, transparent trade, seamless financing, and efficient supply chains across West Africa."
                size="text-[14px] xl:text-[18px]"
                color="text-[#041B0E]"
                className="font-inter mt-4 xl:w-[540px]"
              />
              <Button
                variant="primary"
                text="Get Started"
                paddingTB="py-[0.80rem]"
                paddingRL="px-10"
                borderRadius="rounded-[1rem]"
                borderColor="#00193C"
                className="mt-6"
              />
            </div>
            <div className="w-full relative">
              <img
                src={HeroImage}
                alt="Hero Image"
                className="w-full xl:h-[491px]  object-cover rounded-[1rem]"
              />
              <div className="absolute xl:bottom-10 md:bottom-8 bottom-3 z-10 xl:left-8 left-4 md:left-6 animate-slow-bounce ">
                <div className="w-[167px] h-[116px] bg-[#F9FBF942] border-[#F9FBF942]  rounded-2xl border-3 border-t-[#0E7A3D] px-2 flex flex-col justify-center">
                  <div className="flex gap-3 justify-center items-center ">
                    <span className="text-center justify-center border flex items-center rounded-full w-[42px] h-[42px] border-[#DAA545] bg-[#DAA545]">
                      <img src={arrow} alt="" />
                    </span>
                    <span>
                      <TitleText
                        text={
                          <>
                            Cocoa: <br />
                            $4,240
                          </>
                        }
                        fontWeight="font-semibold"
                        color="text-[#F9FBF9]"
                        className="text-[18px]"
                      />
                    </span>
                  </div>
                  <DescriptionText
                    text="+12.4% vs last week"
                    size="text-[13px]"
                    color="text-[#F9FBF9]"
                    className="px-2 mt-2"
                  />
                </div>
              </div>
              <div
                className="absolute xl:top-10 top-5 md:top-8 z-10 xl:right-8 md:right-6 right-4 animate-slow-bounce"
                style={{ animationDelay: "-0.5s" }}
              >
                <div className="w-[167px] h-[116px] bg-[#F9FBF942] border-[#F9FBF942] rounded-2xl border-3 border-t-[#0E7A3D] px-2 flex flex-col justify-center">
                  <div className="flex gap-3 justify-center items-center ">
                    <span className="text-center justify-center border flex items-center rounded-full w-[42px] h-[42px] border-[#DAA545] bg-[#DAA545]">
                      <img src={arrow} alt="" />
                    </span>
                    <span>
                      <TitleText
                        text={
                          <>
                            Cocoa: <br />
                            $4,240
                          </>
                        }
                        fontWeight="font-semibold"
                        color="text-[#F9FBF9]"
                        className="text-[18px]"
                      />
                    </span>
                  </div>
                  <DescriptionText
                    text="+12.4% vs last week"
                    size="text-[13px]"
                    color="text-[#F9FBF9]"
                    className="px-2 mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:px-[8rem] md:px-[4rem] px-[2rem] xl:py-[4rem] md:py-[3rem] py-[2rem] xl:mt-0 md:mt-[1rem] mt-[19rem]">
          <StatSection />
        </div>
        <div className="">
          <ExistSection />
        </div>
        <div>
          <About />
        </div>
        <div className="xl:mt-[6rem] md:mt-[16rem] mt-[12rem]">
          <Card />
        </div>
        <div className="xl:px-[18rem] md:px-[8rem] px-[1rem] xl:mt-[6rem] mt-[3rem] xl:pb-[7rem] pb-[4rem] md:pb-[4rem]">
          <Faqs />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
