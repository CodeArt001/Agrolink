import TitleText from "../Text/TitleText";
import DescriptionText from "../Text/DescriptionText";

const StatSection = () => {
  return (
    <div className="flex flex-row md:grid md:grid-cols-4 items-center xl:gap-[14rem] md:gap-[7rem] gap-[4rem] overflow-x-auto xl:overflow-x-visible md:overflow-visible no-scrollbar scroll-smooth w-full py-4">
      <span className="flex flex-col items-center">
        <TitleText
          text="100k+"
          color="text-[#005F2D]"
          size="xl:text-[48px] text-[31px]"
          fontWeight="font-bold"
          className="font-sans"
        />
        <DescriptionText
          text="FARMERS CONNECTED"
          color="text-[#3F493F]"
          size="text-[14px]"
          //   fontWeight="font-regular"
          className="font-sans text-nowrap"
        />
      </span>
      <span className="flex flex-col items-center">
        <TitleText
          text="50k+"
          color="text-[#005F2D]"
          size="xl:text-[48px] text-[31px]"
          fontWeight="font-bold"
          className="font-sans"
        />
        <DescriptionText
          text="TONS TRADED"
          color="text-[#3F493F]"
          size="text-[14px]"
          //   fontWeight="font-bold"
          className="font-sans text-nowrap"
        />
      </span>
      <span className="flex flex-col items-center">
        <TitleText
          text="$240M"
          color="text-[#005F2D]"
          size="xl:text-[48px] text-[31px]"
          fontWeight="font-bold"
          className="font-sans"
        />
        <DescriptionText
          text="FINANCING FACILITATED"
          color="text-[#3F493F]"
          size="text-[14px]"
          //   fontWeight="font-bold"
          className="font-sans text-nowrap"
        />
      </span>
      <span className="flex flex-col items-center">
        <TitleText
          text="14"
          color="text-[#005F2D]"
          size="xl:text-[48px] text-[31px]"
          fontWeight="font-bold"
          className="font-sans"
        />
        <DescriptionText
          text="COUNTRIES REACHED"
          color="text-[#3F493F]"
          size="text-[14px]"
          //   fontWeight="font-bold"
          className="font-sans text-nowrap"
        />
      </span>
    </div>
  );
};

export default StatSection;
