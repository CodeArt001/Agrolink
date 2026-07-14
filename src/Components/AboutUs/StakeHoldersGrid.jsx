import buyers from "../../assets/images/buyers.svg";
import farmers from "../../assets/images/tractor.svg";
import institute from "../../assets/images/bank.svg";
import house from "../../assets/images/warehouse.svg";
import logistics from "../../assets/images/logistics.svg";
import develop from "../../assets/images/policy.svg";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const StakeHoldersGrid = () => {
  const StakeData = [
    {
      img: buyers,
      title: "Buyers",
      desc: "Source verified commodities with confidence through transparent pricing and complete traceability.",
      isComingSoon: false,
      bgColor: "bg-[#F1F5F1]",
    },
    {
      img: farmers,
      title: "Farmers",
      desc: "Access markets, financing, AI-powered advisory tools, logistics, and storage services.",
      isComingSoon: false,
      bgColor: "bg-[#F1F5F1]",
    },
    {
      img: institute,
      title: "Financial Institutions",
      desc: "Evaluate verified farm data, assess creditworthiness, and expand agricultural financing opportunities.",
      isComingSoon: false,
      bgColor: "bg-[#F1F5F1]",
    },
    {
      img: house,
      title: "Warehouses",
      desc: "Digitally manage storage capacity, inventory, and commodity records.",
      isComingSoon: true,
      bgColor: "bg-[#F4F1EA]",
    },
    {
      img: logistics,
      title: "Logistics Providers",
      desc: "Coordinate transport services, optimize delivery routes, and track shipments in real time.",
      isComingSoon: true,
      bgColor: "bg-[#F4F1EA]",
    },
    {
      img: develop,
      title: "Government & Development Partners",
      desc: "Leverage reliable agricultural data and insights to support policy development and sector growth.",
      isComingSoon: true,
      bgColor: "bg-[#F4F1EA]",
    },
  ];

  return (
    <div className="w-full bg-white py-16 md:pt-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="w-full xl:px-[4rem] md:px-[3rem] px-[1rem] mx-auto flex flex-col items-center"
      >
        <div className="text-center mb-12 md:mb-16 md:max-w-[600px] w-full px-4">
          <span className="text-[#0E7A3D] font-bold font-sans text-[16px] md:text-[16px] tracking-wide block mb-3">
            Who We Serve
          </span>
          <h2 className="text-[#041B0E] font-bold font-sans xl:text-[32px] md:text-[40px] text-[25px] leading-[1.2] tracking-tight whitespace-nowrap">
            Connecting Every Stakeholder
          </h2>
        </div>

        <div className="w-full flex flex-row overflow-x-auto md:grid md:grid-cols-3 gap-6 snap-x snap-mandatory scrollbar-none xl:pb-4">
          {StakeData.map((item, index) => (
            <motion.div
              variants={fadeUp}
              key={index}
              className={`relative flex-shrink-0 w-[85%] sm:w-[60%] md:w-full ${item.bgColor} p-6 md:p-8 rounded-2xl flex flex-col justify-between min-h-[220px] md:min-h-[260px] snap-start border border-[#E8E3D7]/40 shadow-sm`}
            >
              <div className="flex justify-between items-start w-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl shadow-xs mt-6">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                {item.isComingSoon && (
                  <span className="text-[11px] font-medium tracking-wide bg-[#F4E3CD] text-[#A66E2E] px-2.5 py-1 rounded-full border border-[#E8CEAF]">
                    Coming Soon
                  </span>
                )}
              </div>

              <div className="flex-1 flex flex-col mt-6">
                <h3 className="text-[#041B0E] font-bold text-[20px] leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#041B0E]/75 text-[14px] md:text-[15px] leading-[1.6] mt-2 font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default StakeHoldersGrid;
