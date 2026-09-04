import dotted from "../../assets/images/Frame.png";
import Button from "../Buttons/Button";
import DescriptionText from "../Text/DescriptionText";
import TitleText from "../Text/TitleText";
import HeroImage from "../../assets/images/Rectangle7.svg";
import hand from "../../assets/images/hand.svg";
import StatSection from "./StatSection";
import ExistSection from "./ExistSection";
import About from "./About";
import Card from "./Card";
import Faqs from "./Faqs";
import arrow from "../../assets/images/arrow.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Bundle images with their respective data
const heroSlides = [
  {
    img: hand,
    crop: "Cocoa",
    price: "$4,240",
    change: "+12.4% vs last week",
  },
  {
    img: HeroImage,
    crop: "Cashew",
    price: "$3,000",
    change: "+8.2% vs last week",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const highlightWord = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
  },
};

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[currentIndex];

  return (
    <div className="w-full">
      {/* Top Hero Container */}
      <div
        className="relative w-full py-12 lg:py-20 flex items-center"
        style={{
          backgroundImage: `url(${dotted})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1450px] mx-auto px-4 mt-10 lg:mt-10 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Text Column */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <motion.span
              variants={fadeUp}
              className="bg-[#2D6A421A] flex justify-center items-center w-[186px] rounded-[0.50rem] px-3 py-1.5"
            >
              <TitleText
                text="AI-First infrastructure"
                color="text-[#2D6A42]"
                fontWeight="font-bold"
                className="text-[14px] font-sans text-center"
              />
            </motion.span>

            <motion.div variants={fadeUp} className="w-full">
              <TitleText
                text={
                  <>
                    Building the Digital Infrastructure for Africa's{" "}
                    <motion.span
                      variants={highlightWord}
                      className="inline-block bg-gradient-to-r from-[#005F2D] from-3% to-[#6E4C00] bg-clip-text text-transparent"
                    >
                      Agro-Economy
                    </motion.span>
                  </>
                }
                color="text-[#041B0E]"
                size="xl:text-[60px] lg:text-[46px] text-[31px]"
                className="font-sans font-bold mt-6 xl:leading-[65px] lg:leading-[52px] leading-[40px] max-w-[800px] w-full"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="w-full">
              <DescriptionText
                text="An AI-powered platform connecting agriculture's key stakeholders to drive smarter farming, transparent trade, seamless financing, and efficient supply chains across West Africa."
                size="text-[16px] xl:text-[18px]"
                color="text-[#041B0E]"
                className="font-inter mt-4 max-w-[540px] w-full"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <Button
                variant="primary"
                text="Get Started"
                paddingTB="py-[1rem]"
                paddingRL="px-10"
                borderRadius="rounded-[0.80rem]"
                borderColor="#00193C"
                className="mt-6"
              />
            </motion.div>
          </motion.div>

          {/* Right Image Container */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-xl h-[380px] sm:h-[440px] lg:h-[480px] xl:h-[491px] rounded-[1rem] overflow-hidden shadow-lg flex-shrink-0">
              {heroSlides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.img}
                  alt="Hero"
                  className={`w-full h-full object-cover rounded-[1rem] absolute inset-0 z-0 transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-[#00193C]/20 z-10" />

              {/* Bottom Floating Card */}
              <div className="absolute xl:bottom-10 md:bottom-8 bottom-3 z-10 xl:left-8 left-4 md:left-6 animate-slow-bounce">
                <div className="w-[167px] h-[116px] bg-[#F9FBF942] border-[#F9FBF942] rounded-2xl border-3 border-t-[#0E7A3D] px-2 flex flex-col justify-center backdrop-blur-sm">
                  <div className="flex gap-3 justify-center items-center">
                    <span className="text-center justify-center border flex items-center rounded-full w-[42px] h-[42px] border-[#DAA545] bg-[#DAA545]">
                      <img src={arrow} alt="arrow" />
                    </span>
                    <span>
                      <TitleText
                        text={
                          <>
                            {activeSlide.crop}: <br />
                            {activeSlide.price}
                          </>
                        }
                        fontWeight="font-semibold"
                        color="text-[#F9FBF9]"
                        className="text-[18px] transition-all duration-500"
                      />
                    </span>
                  </div>
                  <DescriptionText
                    text={activeSlide.change}
                    size="text-[13px]"
                    color="text-[#F9FBF9]"
                    className="px-2 mt-2"
                  />
                </div>
              </div>

              {/* Top Floating Card */}
              <div
                className="absolute xl:top-10 top-5 md:top-8 z-10 xl:right-8 md:right-6 right-4 animate-slow-bounce"
                style={{ animationDelay: "-0.5s" }}
              >
                <div className="w-[167px] h-[116px] bg-[#F9FBF942] border-[#F9FBF942] rounded-2xl border-3 border-t-[#0E7A3D] px-2 flex flex-col justify-center backdrop-blur-sm">
                  <div className="flex gap-3 justify-center items-center">
                    <span className="text-center justify-center border flex items-center rounded-full w-[42px] h-[42px] border-[#DAA545] bg-[#DAA545]">
                      <img src={arrow} alt="arrow" />
                    </span>
                    <span>
                      <TitleText
                        text={
                          <>
                            {activeSlide.crop}: <br />
                            {activeSlide.price}
                          </>
                        }
                        fontWeight="font-semibold"
                        color="text-[#F9FBF9]"
                        className="text-[18px] transition-all duration-500"
                      />
                    </span>
                  </div>
                  <DescriptionText
                    text={activeSlide.change}
                    size="text-[13px]"
                    color="text-[#F9FBF9]"
                    className="px-2 mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the page sections */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <StatSection />
      </div>
      <div>
        <ExistSection />
      </div>
      <div>
        <About />
      </div>
      <div className="my-12 sm:my-16">
        <Card />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 my-12 pb-12">
        <Faqs />
      </div>
    </div>
  );
};

export default HeroSection;
