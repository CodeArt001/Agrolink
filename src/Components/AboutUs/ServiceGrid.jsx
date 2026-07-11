import digital from "../../assets/images/digital.svg";
import ai from "../../assets/images/ai.svg";
import finance from "../../assets/images/finance.svg";
import TitleText from "../Text/TitleText";
import DescriptionText from "../Text/DescriptionText";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const ServiceGrid = () => {
  const Data = [
    {
      img: digital,
      title: "Digital Marketplace",
      desc: "Connect verified farmers with buyers through a transparent commodity marketplace for cocoa and cashew, with future expansion into additional commodities.",
    },
    {
      img: ai,
      title: "AI Farm Intelligence",
      desc: "Provide farmers with crop advisory services, disease detection, weather insights, yield forecasting, and market intelligence powered by artificial intelligence.",
    },
    {
      img: finance,
      title: "Agricultural Financing",
      desc: "Enable financial institutions to evaluate verified farm data, assess credit risk, and provide loans, grants, and other financial services with greater confidence.",
    },
  ];

  return (
    <div className="bg-[#F1F5F1] w-full py-16 md:py-24">
      {/* Top Header Group */}
      <div className="flex flex-col items-center text-center px-4 mb-12">
        <TitleText
          text="What We Do"
          size="text-[16px]"
          color="text-[#0E7A3D]"
          fontWeight="font-bold"
        />
        <TitleText
          text="Solving Agriculture's Biggest Challenges"
          color="text-[#041B0E]"
          size="text-[28px] md:text-[36px]"
          fontWeight="font-bold"
          className="py-2"
        />

        <DescriptionText
          text="A Complete Digital Ecosystem for Agriculture Cephas Agro Link connects every stage of the agricultural value chain through intelligent digital infrastructure."
          color="text-[#041B0E]"
          size="text-[16px]"
          className="max-w-[694px] leading-relaxed"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:px-[4rem] md:px-[3rem] px-[1rem] max-w-[1440px] mx-auto items-stretch"
      >
        {Data.map((datas, index) => (
          <motion.div
            variants={fadeUp}
            key={index}
            className="bg-[#FFFFFF] p-6 md:p-8 rounded-2xl shadow-sm border border-[#041B0E]/5 flex flex-col justify-start h-full"
          >
            <div className="w-14 h-14 bg-[#DAA545] flex items-center justify-center rounded-2xl">
              <img src={datas.img} alt="" className="w-6 h-6 object-contain" />
            </div>

            <TitleText
              text={datas.title}
              className="pt-5 pb-2"
              fontWeight="font-bold"
              size="text-[20px]"
              color="text-[#181D18]"
            />

            <DescriptionText
              text={datas.desc}
              color="text-[#3F493F]"
              size="text-[14px] md:text-[15px]"
              className="leading-relaxed flex-1"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceGrid;
