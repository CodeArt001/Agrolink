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
    <section
      className="relative w-full overflow-hidden py-16 lg:py-24"
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
        className="max-w-9xl mx-auto px-4 sm:px-6 xl:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12"
      >
        {/* Left Column: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.div variants={fadeUp}>
            <TitleText
              text="About Agrolink"
              color="text-[#0E7A3D]"
              size="text-sm md:text-base"
              className="font-sans font-semibold pb-3"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <DescriptionText
              text="Built for Every Stakeholder in the Agricultural Value Chain"
              size="text-2xl sm:text-3xl md:text-4xl lg:text-[40px]"
              color="text-[#041B0E]"
              className="font-sans font-semibold pb-4 leading-tight"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <DescriptionText
              text="Our platform is designed to serve the unique needs of every key participant in the agro-economy. Whether you're growing crops, sourcing commodities, or financing agricultural businesses, you'll find the tools and insights needed to operate more efficiently and grow with confidence."
              size="text-sm md:text-base"
              className="text-gray-700 max-w-2xl lg:max-w-md mx-auto lg:mx-0"
            />
          </motion.div>
        </div>

        {/* Right Column: Phone Mockups */}
        <motion.div
          variants={phoneFadeIn}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <img
            src={phone}
            alt="Agrolink mobile app mockup"
            className="w-full max-w-md lg:max-w-xl h-auto object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
