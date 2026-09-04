import Divider from "./Divider";
import DescriptionText from "./Text/DescriptionText";
import TitleText from "./Text/TitleText";
import cephasLogo from "../assets/images/cephaslogowhite.png"; // adjust path to wherever you save the logo

const Footer = () => {
  return (
    <footer className="bg-[#005F2D] w-full xl:min-h-[378px] overflow-x-hidden">
      <div className="flex flex-col xl:flex-row md:flex-col justify-between xl:px-[6rem] md:px-[4rem] px-[1.5rem] py-12 gap-10 xl:gap-0 md:gap-10">
        <div>
          <TitleText
            text="Agro-AI Africa"
            size="text-[32px]"
            color="text-[#F9FBF9]"
            fontWeight="font-bold"
            className="font-bold hidden  md:flex"
          />
          <TitleText
            text="AgroLink"
            size="text-[32px]"
            color="text-[#F9FBF9]"
            fontWeight="font-bold"
            className="font-bold md:hidden flex"
          />
          <DescriptionText
            text="Building the world's most intelligent
         agricultural infrastructure for the global
          economy."
            color="text-[#F9FBF9]"
            size="text-[16px]"
            className="w-full xl:w-[297px] md:w-[400px] font-sans mt-6"
          />
        </div>

        {/* 4-column row on mobile too, becomes transparent (contents) at md/xl so columns rejoin the flex row */}
        <div className="grid grid-cols-4 gap-2 xl:contents md:grid md:grid-cols-4 ">
          <div className="flex flex-col gap-3 xl:gap-5 md:gap-5">
            <TitleText
              text="Home"
              size="xl:text-[20px] md:text-[20px] text-[14px]"
              color="text-[#DAA545]"
              className="font-sans"
              fontWeight="font-semibold"
            />
            <DescriptionText
              text="Why We Exist"
              size="xl:text-[12px] md:text-[12px] text-[10px]"
              color="text-[#F9FBF9]"
            />
            <DescriptionText
              text="About Agro-link"
              size="xl:text-[12px] md:text-[12px] text-[10px]"
              color="text-[#F9FBF9]"
            />
            <DescriptionText
              text="Testimonies"
              size="xl:text-[12px] md:text-[12px] text-[10px]"
              color="text-[#F9FBF9]"
            />
            <DescriptionText
              text="FAQs"
              size="xl:text-[12px] md:text-[12px] text-[10px]"
              color="text-[#F9FBF9]"
            />
          </div>

          <div className="flex flex-col gap-3 xl:gap-5 md:gap-5">
            <TitleText
              text="About Us"
              size="xl:text-[20px] md:text-[20px] text-[14px]"
              color="text-[#DAA545]"
              className="font-sans"
              fontWeight="font-semibold"
            />
            <DescriptionText
              text="Cocoa"
              size="xl:text-[12px] md:text-[12px] text-[10px]"
              color="text-[#F9FBF9]"
            />
            <DescriptionText
              text="Cashew"
              size="xl:text-[12px] md:text-[12px] text-[10px]"
              color="text-[#F9FBF9]"
            />
            <DescriptionText
              text="Palm Oil"
              size="xl:text-[12px] md:text-[12px] text-[10px]"
              color="text-[#F9FBF9]"
            />
            <DescriptionText
              text="Grain"
              size="xl:text-[12px] md:text-[12px] text-[10px]"
              color="text-[#F9FBF9]"
            />
          </div>

          <div className="flex flex-col gap-3 xl:gap-5 md:gap-5">
            <TitleText
              text="Explore"
              size="xl:text-[20px] md:text-[20px] text-[14px]"
              color="text-[#DAA545]"
              className="font-sans"
              fontWeight="font-semibold"
            />
            <DescriptionText
              text="About Us"
              size="xl:text-[12px] md:text-[12px] text-[10px]"
              color="text-[#F9FBF9]"
            />
            <DescriptionText
              text="Careers"
              size="xl:text-[12px] md:text-[12px] text-[10px]"
              color="text-[#F9FBF9]"
            />
            <DescriptionText
              text="Partners"
              size="xl:text-[12px] md:text-[12px] text-[10px]"
              color="text-[#F9FBF9]"
            />
            <DescriptionText
              text="Contacts"
              size="xl:text-[12px] md:text-[12px] text-[10px]"
              color="text-[#F9FBF9]"
            />
          </div>

          <div className="flex flex-col gap-3 xl:gap-5 md:gap-5">
            <TitleText
              text="Contact"
              size="xl:text-[20px] md:text-[20px] text-[14px]"
              color="text-[#DAA545]"
              className="font-sans"
              fontWeight="font-semibold"
            />
            <DescriptionText
              text="Privacy Policy"
              size="xl:text-[12px] md:text-[12px] text-[10px]"
              color="text-[#F9FBF9]"
            />
            <DescriptionText
              text="Terms of Trade"
              size="xl:text-[12px] md:text-[12px] text-[10px]"
              color="text-[#F9FBF9]"
            />
            <DescriptionText
              text="Compliance"
              size="xl:text-[12px] md:text-[12px] text-[10px]"
              color="text-[#F9FBF9]"
            />
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col items-center gap-4 mt-8 pb-4 xl:pb-8 px-6">
        <div className="text-center font-sans text-[#F9FBF9] text-sm">
          &copy; {new Date().getFullYear()} Agro-AI Infrastructure Platform. All
          rights reserved.
        </div>

        <Divider />

        <div className="flex w-auto justify-center items-center gap-5">
          <img
            src={cephasLogo}
            alt="Cephas ICT HUB Logo"
            className=" w-auto opacity-90 h-5"
          />
          <span className="font-bold text-[#F9FBF9] text-xs">
            A Product of{" "}
            <span className="font-semibold text-[#DAA545]">Cephas ICT HUB</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
