import digital from "../../assets/images/digital.svg";
import ai from "../../assets/images/ai.svg";
import finance from "../../assets/images/finance.svg";
import TitleText from "../Text/TitleText";
import DescriptionText from "../Text/DescriptionText";

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
    /* FIXED: Removed fixed h-[599px]. Added py-16 md:py-24 to manage scale naturally. */
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
        {/* FIXED: Changed w-[694px] to max-w-[694px] so text scales nicely on smaller viewports */}
        <DescriptionText
          text="A Complete Digital Ecosystem for Agriculture Cephas Agro Link connects every stage of the agricultural value chain through intelligent digital infrastructure."
          color="text-[#041B0E]"
          size="text-[16px]"
          className="max-w-[694px] leading-relaxed"
        />
      </div>

      {/* Grid Container */}
      {/* OPTIMIZED: Simplified to pure responsive grid-cols-1 md:grid-cols-3 system */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:px-[6rem] md:px-[4rem] px-[1rem] max-w-[1440px] mx-auto items-stretch">
        {Data.map((datas, index) => (
          <div
            key={index}
            /* FIXED: Removed sub-pixel height. Added flex/min-h-full to make card columns equal height. */
            className="bg-[#FFFFFF] p-6 md:p-8 rounded-2xl shadow-sm border border-[#041B0E]/5 flex flex-col justify-start h-full"
          >
            {/* Icon Wrapper */}
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

            {/* Description Area */}
            <DescriptionText
              text={datas.desc}
              color="text-[#3F493F]"
              size="text-[14px] md:text-[15px]"
              className="leading-relaxed flex-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
