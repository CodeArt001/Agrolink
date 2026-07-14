import aboutHero from "../../assets/images/about.svg";
import Button from "../Buttons/Button";
import DescriptionText from "../Text/DescriptionText";
import TitleText from "../Text/TitleText";
import ServiceGrid from "./ServiceGrid";
import StakeHoldersGrid from "./StakeHoldersGrid";
import Start from "./Start";
import ValuePrep from "./ValuePrep";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Herosection = () => {
  return (
    <div className="w-full">
      <div
        className="h-[636px] w-full relative"
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 z-0 [--gradient-dir:to_bottom] lg:[--gradient-dir:to_right]"
          style={{
            background: `linear-gradient(var(--gradient-dir),
      #041B0E 0%,
      #041B0E 0%,
      rgba(4, 27, 14, 0.85) 70%,
      rgba(4, 27, 14, 0.4) 85%,
      transparent 100%)`,
          }}
        />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="absolute z-10 md:pt-[9rem] pt-[7rem] xl:px-[4rem] md:px-[3rem] px-[1rem]"
        >
          <motion.span
            variants={fadeUp}
            className="bg-[#F9FBF917] border-none flex justify-center items-center w-[186px] border-[#2D6A42] rounded-[0.50rem] px-3 py-1.5"
          >
            <TitleText
              text="AI-First infrastructure"
              color="text-[#F9FBF9]"
              fontWeight="font-bold"
              className=" text-[14px] font-sans text-center "
            />
          </motion.span>
          <div>
            <motion.div variants={fadeUp}>
              <TitleText
                text="Building the Digital Infrastructure for Africa's "
                className="md:w-[652px] w-full xl:leading-[60px] py-5 font-semibold px-2"
                size="md:text-[48px] text-[31px]"
                color="text-[#F9FBF9] "
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <DescriptionText
                text="Cephas Agro Link is an AI-powered agro-economic infrastructure platform transforming how agricultural stakeholders connect, trade, finance, and grow. We are creating a smarter, more transparent ecosystem that empowers farmers, businesses, and institutions to unlock the full potential of agriculture across Nigeria and West Africa."
                className="md:w-[645px] w-full px-2"
                color="text-[#F9FBF9]"
                size="xl:text-[18px] md:text-[16px] text-[16px]"
              />
            </motion.div>
            <Button
              variant="secondary"
              text="Explore"
              paddingTB="py-[0.60rem]"
              paddingRL="px-10"
              borderRadius="rounded-[1rem]"
              borderColor="#DAA545"
              className="mt-6"
            />
          </div>
        </motion.div>
      </div>
      <div className="w-full">
        <ValuePrep />
      </div>
      <div>
        <ServiceGrid />
      </div>
      <div>
        <StakeHoldersGrid />
      </div>
      <div className="xl:px-[4rem] md:px-[2rem] px-[1rem] md:pb-16 pb-10">
        <Start />
      </div>
    </div>
  );
};

export default Herosection;
