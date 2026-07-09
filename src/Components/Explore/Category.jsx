import TitleText from "../Text/TitleText";
import cocoasmall from "../../assets/images/cash.svg";
import cashewsmall from "../../assets/images/coc.svg";
import oil from "../../assets/images/Frame54.svg";
import sesame from "../../assets/images/Ellipse44.svg";
import ginger from "../../assets/images/Ellipse45.svg";
import maize from "../../assets/images/Ellipse46.svg";
import rice from "../../assets/images/Ellipse47.svg";

const Category = () => {
  const catData = [
    { img: cocoasmall, title: "Cocoa" },
    { img: cashewsmall, title: "Cashew" },
    { img: oil, title: "Palm oil" },
    { img: sesame, title: "Sesame" },
    { img: ginger, title: "Ginger" },
    { img: maize, title: "Maize" },
    { img: rice, title: "Rice" },
    { img: ginger, title: "Ginger" },
    { img: sesame, title: "Sesame" },
  ];

  return (
    <div className="py-10 w-full overflow-hidden">
      <TitleText
        text="Shop by Category"
        color="text-[#0A4E29]"
        size="text-[25px]"
        className="text-center font-sans font-semibold mb-8"
      />

      {/* ========================================================
          1. SMALL & MEDIUM SCREENS VIEWPORT (Hidden on large desktops)
          Uses simple flex row with standard separation gaps. No calculation conflicts.
         ======================================================== */}
      <div className="w-full overflow-x-auto scrollbar-none px-4 md:px-16 xl:hidden">
        <div className="flex flex-row gap-6 md:gap-10 pb-4 w-max">
          {catData.map((items, index) => (
            <div
              key={index}
              className="w-[120px] shrink-0 flex flex-col items-center justify-center gap-3 select-none cursor-pointer"
            >
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden bg-gray-100">
                <img
                  src={items.img}
                  alt={items.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <TitleText
                text={items.title}
                color="text-[#181D18]"
                size="text-[16px]"
                className="font-sans font-medium text-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================
          2. LARGE SCREENS ONLY VIEWPORT (Hidden on small/medium)
          Your exact, original calculation grid code completely untouched.
         ======================================================== */}
      <div className="w-full overflow-x-auto scrollbar-none px-16 hidden xl:block">
        <div
          className="grid grid-flow-col gap-10 pb-4 min-w-max"
          style={{ gridAutoColumns: "calc((100vw - 8rem - (7 * 2.5rem)) / 8)" }}
        >
          {catData.map((items, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3 select-none cursor-pointer group"
            >
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden bg-gray-100 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={items.img}
                  alt={items.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <TitleText
                text={items.title}
                color="text-[#181D18]"
                size="text-[16px]"
                className="font-sans font-medium text-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
