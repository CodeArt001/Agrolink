import dotted from "../../assets/images/Frame.png";
import DescriptionText from "../Text/DescriptionText";
import TitleText from "../Text/TitleText";
import phone from "../../assets/images/Frame30.svg";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const phoneFadeIn = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="absolute z-10 flex flex-col xl:flex xl:flex-row md:flex md:flex-col xl:gap-6 md:gap-14 gap-10 items-center w-full xl:px-[4rem] md:px-[3rem] px-[1rem] xl:mt-[8rem] mt-[4rem]"
      >
        <div className="w-full xl:w-2/5 md:w-full shrink-0 text-center xl:text-start">
          <motion.div variants={fadeUp}>
            <TitleText
              text="About Agrolink"
              color="text-[#0E7A3D]"
              size="xl:text-[16px] md:text-[16px] text-[14px]"
              className="font-sans font-semibold pb-4 "
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <DescriptionText
              text="Built for Every Stakeholder in the Agricultural Value Chain"
              size="xl:text-[40px] md:text-[40px] text-[22px]"
              color="text-[#041B0E]"
              className="font-sans font-semibold pb-4 xl:w-[580px] xl:max-w-[580px] md:w-[580px] md:max-w-[580px] w-full max-w-[356px] md:mx-auto xl:mx-0 mx-auto"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <DescriptionText
              text="Our platform is designed to serve the unique needs of every key participant in the agro-economy. Whether you're growing crops, sourcing commodities, or financing agricultural businesses, you'll find the tools and insights needed to operate more efficiently and grow with confidence."
              size="xl:text-[16px] md:text-[16px] text-[13px]"
              className="xl:w-[445px] xl:max-w-[445px] md:w-[600px] md:max-w-[600px] w-full max-w-[356px] xl:text-start text-center md:mx-auto xl:mx-0 mx-auto"
            />
          </motion.div>
        </div>

        <motion.div
          variants={phoneFadeIn}
          className="w-full xl:w-3/5 shrink-0 "
        >
          <img
            src={phone}
            alt=""
            className="w-full xl:max-w-[150rem] md:h-[459px] object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
