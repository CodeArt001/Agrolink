import DescriptionText from "../Text/DescriptionText";
import TitleText from "../Text/TitleText";
import cocoa from "../../assets/images/Rectangle8.svg";
// import cocoasmall from "../../assets/images/cocoasmall.svg";
import nut from "../../assets/images/Rectangle10.svg";
import nutsmall from "../../assets/images/nutsmall.svg";
import cashew from "../../assets/images/Rectangle11.svg";
import cashewFruit from "../../assets/images/Rectangle9.svg";
import mobile from "../../assets/images/mobile.svg";
import cashewsmall from "../../assets/images/cashewsmall.svg";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const imageFadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const imageHover = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeOut" },
};

const ExistSection = () => {
  return (
    <div className="bg-[#F1F5F1] pb-5">
      <span className="flex flex-col items-center text-center gap-2 xl:pt-[3rem] pt-[2rem] ">
        <TitleText
          text="Why We Exist"
          color="text-[#0E7A3D]"
          size="text-[16px]"
          className="font-sans font-semibold"
        />

        <TitleText
          text="Solving Agriculture's Biggest Challenges"
          color="text-[#041B0E]"
          size="xl:text-[32px] md:text-[24px] text-[14px]"
          className="font-sans font-semibold"
        />

        <DescriptionText
          text="Agriculture remains one of Africa's largest economic sectors, yet millions of farmers continue to face barriers that reduce productivity, profitability, and access to markets. Our platform eliminates these barriers by digitizing every stage of the agricultural value chain."
          size="text-[16px]"
          color="text-[#041B0E]"
          className="font-sans text-center xl:w-[660px]"
        />
      </span>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="flex items-center xl:gap-4 gap-2 xl:pt-0 md:pt-5 pt-5 pb-8 xl:px-[4rem] px-[1rem] w-full"
      >
        <motion.img
          variants={imageFadeUp}
          whileHover={imageHover}
          src={cocoa}
          alt="cocoa"
          className="w-full hidden xl:flex md:hidden"
        />
        {/* <img
          src={cocoasmall}
          alt="cocoa"
          className="flex-1 min-w-0 h-[100px] object-cover flex xl:hidden md:flex"
        /> */}
        <motion.img
          variants={imageFadeUp}
          whileHover={imageHover}
          src={nut}
          alt="nut"
          className="w-full xl:h-[420px] h-full xl:mt-3 md:mt-0 mt-0 hidden xl:flex md:hidden"
        />
        <motion.img
          variants={imageFadeUp}
          whileHover={imageHover}
          src={nutsmall}
          alt="nut"
          className="w-full h-full xl:mt-3 md:mt-0 mt-0 xl:hidden md:flex"
        />
        <motion.img
          variants={imageFadeUp}
          whileHover={imageHover}
          src={cashew}
          alt="cashew"
          className="w-full xl:h-[420px] h-full xl:mt-3 md:mt-0 mt-0 hidden xl:flex md:hidden"
        />
        <motion.img
          variants={imageFadeUp}
          whileHover={imageHover}
          src={mobile}
          alt="mobile"
          className="w-full xl:h-[450px] h-full xl:mt-3 md:mt-0 mt-0 md:flex xl:hidden"
        />
        <motion.img
          variants={imageFadeUp}
          whileHover={imageHover}
          src={cashewFruit}
          alt="cashewFruit"
          className="w-full hidden xl:flex md:hidden"
        />
        <motion.img
          variants={imageFadeUp}
          whileHover={imageHover}
          src={cashewsmall}
          alt="cashewFruit"
          className="w-full xl:hidden md:flex"
        />
      </motion.div>
    </div>
  );
};

export default ExistSection;
