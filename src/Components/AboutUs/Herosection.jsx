import aboutHero from "../../assets/images/about.svg";
import Button from "../Buttons/Button";
import DescriptionText from "../Text/DescriptionText";
import TitleText from "../Text/TitleText";
import ServiceGrid from "./ServiceGrid";
import StakeHoldersGrid from "./StakeHoldersGrid";
import Start from "./Start";
import ValuePrep from "./ValuePrep";
const Herosection = () => {
  return (
    <div className="w-full">
      <div
        className="h-[636px] w-full relative"
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // height: "xl:h-[650px] md:h-[400px] h-[800px]",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#041B0E] via-[#041B0E]/90 to-transparent z-0" />
        <div className="absolute z-10 md:pt-[9rem] pt-[6rem] xl:px-[6rem] md:px-[4rem] px-[1rem]">
          <span className="bg-[#F9FBF917]  border-none flex justify-center  items-center w-[186px] border-[#2D6A42] rounded-[0.50rem] px-3 py-1.5">
            <TitleText
              text="AI-First infrastructure"
              color="text-[#F9FBF9]"
              fontWeight="font-bold"
              className=" text-[14px] font-sans text-center "
            />
          </span>
          <div>
            <TitleText
              text="Building the Digital Infrastructure for Africa's Agro-Economy"
              className="md:w-[652px] w-[358px] xl:leading-[60px] py-3"
              size="md:text-[48px] text-[31px]"
              color="text-[#F9FBF9] "
            />
            <DescriptionText
              text="Cephas Agro Link is an AI-powered agro-economic infrastructure platform transforming how agricultural stakeholders connect, trade, finance, and grow. We are creating a smarter, more transparent ecosystem that empowers farmers, businesses, and institutions to unlock the full potential of agriculture across Nigeria and West Africa."
              className="md:w-[645px] w-[358px]"
              color="text-[#F9FBF9]"
              size="text-[18px]"
            />
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
        </div>
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
