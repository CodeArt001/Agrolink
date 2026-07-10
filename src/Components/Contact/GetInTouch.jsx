import Input from "../Input";
import ContactLinks from "./ContactLinks";
import call from "../../assets/images/call.svg";
import mail from "../../assets/images/mail.svg";
import location from "../../assets/images/location.svg";
import TitleText from "../Text/TitleText";
import DescriptionText from "../Text/DescriptionText";

const GetInTouch = () => {
  return (
    <div className="xl:flex xl:flex-row flex-col items-center justify-between xl:px-[4rem] md:px-[2rem] px-[0.80rem] xl:h-[605px] ">
      <div className=" flex flex-col gap-4">
        <div>
          <TitleText
            text="Contact Us"
            color="text-[#0E7A3D]"
            size="text-[16px]"
            className="font-sans font-semibold"
          />
          <TitleText
            text="Get In Touch"
            color="text-[#041B0E]"
            size="text-[32px]"
            className="py-3 font-semibold"
          />
          <DescriptionText
            text="Lorem ipsum dolor sit amet consectetur. Ornare id vitae ultrices orci aliquam aliquam. Sed ut placeida enim purus non. Hac justo int"
            className="md:w-[476px] w-[358px]"
            color="text-[#041B0E]"
            size="text-[16px]"
          />
        </div>
        <div className="flex flex-col md:gap-8 gap-4 md:mt-10">
          <Input label="Email" />
          <Input label="Subject" />
          <Input label="Message" />
        </div>
      </div>
      <div className="md:flex md:flex-col flex flex-row items-center justify-center xl:mt-0 mt-6 md:mt-6 gap-4 ">
        <ContactLinks img={call} value="Phone Number" label="09012345678" />
        <ContactLinks
          img={mail}
          value="Email Address"
          label="Agrolink@gmail.com"
        />
        <ContactLinks
          img={location}
          label="009012345678"
          value="Our Location"
        />
      </div>
    </div>
  );
};

export default GetInTouch;
