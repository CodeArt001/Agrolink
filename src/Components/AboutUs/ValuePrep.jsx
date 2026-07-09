import dotted from "../../assets/images/Frame.png";
import DescriptionText from "../Text/DescriptionText";
import TitleText from "../Text/TitleText";
import woman from "../../assets/images/woman.svg";
import shew from "../../assets/images/shew.svg";
import truck from "../../assets/images/truck.svg";

const ValuePrep = () => {
  return (
    <div
      className="relative w-full py-16 md:py-20 flex items-center justify-center"
      style={{
        backgroundImage: `url(${dotted})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex flex-col xl:flex xl:flex-row md:flex-col gap-12 lg:gap-16 xl:px-[6rem] md:px-[4rem] px-[1rem] items-center justify-between">
        <div className="w-full xl:w-[445px] md:w-full flex-shrink-0 flex flex-col justify-center">
          <TitleText
            text="Who We Are"
            color="text-[#0E7A3D]"
            fontWeight="font-bold"
            size="text-[16px]"
          />
          <TitleText
            text="Driving the Future of Agriculture Through Technology"
            color="text-[#041B0E]"
            size="text-[36px]"
            fontWeight="font-bold"
            className="leading-[44px] py-4"
          />
          <DescriptionText
            text="Agriculture is one of the largest contributors to economic growth and employment across Africa. Yet, millions of farmers and agribusinesses continue to face challenges that limit productivity, reduce profitability, and restrict access to opportunities."
            className="leading-[28px]"
            size="text-[16px]"
            color="text-[#041B0E]"
          />
          <DescriptionText
            text="More than just a farming application, Cephas Agro Link serves as the digital backbone of the agro-economy, enabling collaboration between farmers, buyers, financial institutions, warehouses, logistics providers, processors, and export markets."
            className="leading-[28px] mt-4"
            size="text-[16px]"
            color="text-[#041B0E]"
          />
        </div>

        <div className="w-full flex-1 flex gap-4 items-stretch h-[430px]">
          <div className="flex flex-col gap-4 w-1/2">
            <div className="h-[63%] w-full rounded-2xl overflow-hidden">
              <img
                src={woman}
                alt="Farmer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[37%] w-full rounded-2xl overflow-hidden">
              <img
                src={shew}
                alt="Cashews"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-1/2 rounded-2xl overflow-hidden">
            <img
              src={truck}
              alt="Truck"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuePrep;
