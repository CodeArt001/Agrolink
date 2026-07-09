import pattern from "../../assets/images/Decorative.svg";
import Button from "../Buttons/Button";
import DescriptionText from "../Text/DescriptionText";
import TitleText from "../Text/TitleText";

const Start = () => {
  return (
    <div className="bg-[#0A4E29] rounded-3xl h-[293px] w-full relative overflow-hidden flex items-center justify-center">
      <img
        src={pattern}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-20 opacity-40 mix-blend-overlay"
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
        <TitleText
          text="Ready to Transform Your Harvest?"
          size="xl:text-[49px] text-[25px]"
          color="text-[#FFFFFF]"
        />
        <DescriptionText
          text="Join thousands of stakeholders already using Cephas Agro Link to secure the future of African agriculture."
          color="text-[#FFFFFFCC]"
          className="max-w-[635px] py-3 text-center"
        />
        <div className="flex gap-3 py-3">
          <Button
            variant="tertiary"
            text="Get Started"
            paddingTB="py-[0.80rem]"
            paddingRL="px-10"
            borderRadius="rounded-[1rem]"
          />
          <Button
            variant="commercial"
            text="Contact Us"
            paddingTB="py-[0.80rem]"
            paddingRL="px-10"
            borderRadius="rounded-[1rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Start;
