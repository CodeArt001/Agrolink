import TitleText from "../Text/TitleText";
import DescriptionText from "../Text/DescriptionText";
import products from "../../assets/images/product.svg"; // Replace with your image path
import Button from "../Buttons/Button";

const ProductCard = () => {
  const productsList = [
    {
      id: 1,
      image: products,
      title: "Premium Cocoa Beans",
      price: "3,250",
      unit: "/ 50kg Bag",
      rating: "4.9",
      badgeText: "Premium",
      badgeColor: "bg-[#8D6200]",
      statusText: "Verified Farmer",
      description:
        "High-grade fermentation, sun-dried beans sourced from the...",
    },
    {
      id: 2,
      image: products,
      title: "Premium Cocoa Beans",
      price: "3,250",
      unit: "/ 50kg Bag",
      rating: "4.9",
      badgeText: "Premium",
      badgeColor: "bg-[#8D6200]",
      statusText: "Verified Farmer",
      description:
        "High-grade fermentation, sun-dried beans sourced from the...",
    },
  ];

  return (
    <div className="w-full flex flex-row md:flex-wrap md:justify-between gap-4 md:gap-6 overflow-x-auto md:overflow-visible scrollbar-none pb-4 select-none md:px-0">
      {productsList.map((product) => (
        <div
          key={product.id}
          className="w-[345px] md:w-[calc(50%-12px)] xl:w-[calc(50%-12px)] h-[199px] md:h-[255px] shrink-0 bg-[#F5F7F4] shadow rounded-[24px] flex gap-4 border border-gray-200 relative overflow-hidden"
        >
          <div className="w-[38%] md:w-[42%] xl:w-[45%] shrink-0 relative bg-white flex items-center justify-center">
            <span
              className={`absolute top-3 left-3 ${product.badgeColor} text-[#F9FBF9] text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-[6px] z-10`}
            >
              {product.badgeText}
            </span>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[62%] md:w-[58%] xl:w-[55%] shrink-0 flex flex-col justify-between items-start py-3 md:py-5 pr-4 pl-0 md:px-5 md:pl-2">
            <div className="w-full flex flex-col items-start pr-1">
              <TitleText
                text={product.title}
                color="text-[#041B0E]"
                size="text-[14px] md:text-[14px] xl:text-[20px]"
                className="font-sans font-bold leading-tight w-full break-words"
              />

              <div className="flex items-baseline gap-1 mt-1 md:mt-2">
                <span className="text-[#0E7A3D] font-bold text-[15px] md:text-[18px]">
                  {product.price}
                </span>
                <span className="text-gray-400 text-[11px] md:text-[13px]">
                  {product.unit}
                </span>
              </div>

              <div className="flex items-center gap-1 mt-0.5 md:mt-1.5 text-[11px] md:text-[13px]">
                <span className="text-[#DAA545]">★</span>
                <span className="font-bold text-[#041B0E]">
                  {product.rating}
                </span>
                <span className="text-gray-400 ml-1">{product.statusText}</span>
              </div>

              <DescriptionText
                text={product.description}
                color="text-[#041B0E]"
                size="text-[12px] md:text-[13px]"
                className="mt-1 md:mt-3 leading-relaxed w-[167px] xl:w-[227px] md:w-[167px]"
              />
            </div>

            <Button
              variant="primary"
              text="Order"
              paddingTB="py-[0.50rem] md:py-[0.70rem]"
              paddingRL="px-4"
              borderRadius="rounded-[12px]"
              className="w-full xl:max-w-[227px] mt-1 md:mt-4 flex justify-center items-center font-semibold text-[12px] md:text-[14px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
