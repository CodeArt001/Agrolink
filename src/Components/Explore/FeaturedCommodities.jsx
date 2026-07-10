import garlic from "../../assets/images/garlic.svg";
import maize from "../../assets/images/maze.svg";
import rice from "../../assets/images/rice.svg";
import gusi from "../../assets/images/egus.svg";
import palm from "../../assets/images/plm.svg";
import cock from "../../assets/images/hen.svg";
import TitleText from "../Text/TitleText";
import DescriptionText from "../Text/DescriptionText";
import location from "../../assets/images/container.svg";
import icon from "../../assets/images/Icone.svg";
import Button from "../Buttons/Button";

const FeaturedCommodities = () => {
  const featureCard = [
    {
      id: 1,
      image: garlic,
      title: "Premium Cocoa Beans",
      price: "3,250",
      unit: "/ 50kg Bag",
      badgeText: "Premium",
      location: "Ondo State",
      quantity: "250 Bags",
    },
    {
      id: 2,
      image: maize,
      title: "Certified Cocoa Beans",
      price: "5,100",
      unit: "/ 55kg Bag",
      badgeText: "Export",
      location: "Lagos State",
      quantity: "100 Bags",
    },
    {
      id: 3,
      image: rice,
      title: "Organic Cocoa Beans",
      price: "4,000",
      unit: "/ 150kg Bag",
      badgeText: "Organic",
      location: "Osun State",
      quantity: "150 Bags",
    },
    {
      id: 4,
      image: gusi,
      title: "Premium Cocoa Beans",
      price: "3,250",
      unit: "/ 50kg Bag",
      badgeText: "Premium",
      location: "Ondo State",
      quantity: "250 Bags",
    },

    {
      id: 5,
      image: palm,
      title: "Bulk Cocoa Beans",
      price: "1,800",
      unit: "/ 50kg Bag",
      badgeText: "Bulk",
      location: "Ondo State",
      quantity: "700 Bags",
    },
    {
      id: 6,
      image: cock,
      title: "Standard Cocoa Beans",
      price: "1,800",
      unit: "/ 50kg Bag",
      badgeText: "Standard",
      location: "Ekiti State",
      quantity: "700 Bags",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-3 xl:px-[4rem] md:px-[1rem] px-[0.80rem]  xl:pt-14 pt-8 md:pt-10 xl:pb-18 md:pb-14 pb-10">
      {featureCard.map((cards, index) => (
        <div
          key={index}
          className="bg-[#F1F5F1] shadow rounded-lg w-full xl:h-[423px] overflow-hidden"
        >
          <img
            src={cards.image}
            alt=""
            className="w-full md:h-[230px] rounded-2xl object-cover"
          />
          <div className="px-4 ">
            <TitleText
              text={cards.title}
              color="text-[20px]"
              size="md:text-[20px] text-[16px]"
              className="md:pt-6 pt-2 pb-2"
            />
            <span className="flex items-center gap-2 ">
              <DescriptionText
                text={cards.price}
                color="text-[#181D18]"
                size="md:text-[18px] text-[13px]"
              />
              <DescriptionText
                text={cards.unit}
                color="text-[#041B0E]"
                size="md:text-[13px] text-[10px]"
              />
            </span>
            <div className="flex justify-between items-center py-2">
              <span className="flex gap-1">
                <img src={location} alt="" />
                <DescriptionText
                  text={cards.location}
                  color="text-[#041B0E]"
                  size="text-[10px]"
                />
              </span>
              <span className="flex gap-1">
                <img src={icon} alt="" />
                <DescriptionText
                  text={cards.quantity}
                  color="text-[#041B0E]"
                  size="text-[10px]"
                />
              </span>
            </div>

            <Button
              variant="primary"
              text="View Details"
              paddingTB="py-[0.65rem]"
              paddingRL="px-8"
              borderRadius="rounded-[0.80rem]"
              className="w-full md:mt-3 xl:mb-0 md:mb-3 mb-2"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCommodities;
