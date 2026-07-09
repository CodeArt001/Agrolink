import { useState } from "react";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const FAQS = [
    {
      num: 1,
      question: "Who can register on this platform",
      answer:
        "Farmers, buyers, financial institutions, logistics providers, processors, warehouses, and other stakeholders in the agricultural value chain.",
    },
    {
      num: 2,
      question: "Which commodities are currently supported?",
      answer:
        "The platform currently focuses on cocoa and cashew, with planned expansion to palm oil, sesame, ginger, maize, rice, livestock, and cassava.",
    },
    {
      num: 3,
      question: "How do financial institutions verify farmers?",
      answer:
        "The platform uses verified farm records, production history, and AI-driven insights to support informed lending decisions.",
    },
    {
      num: 4,
      question: "Can buyers purchase directly from farmers?",
      answer:
        "Yes. Buyers can connect with verified farmers, compare available commodities, negotiate prices, and manage transactions through the platform.",
    },
    {
      num: 5,
      question: "Is the platform available across West Africa?",
      answer:
        "The platform launches with a focus on Nigeria and is designed to scale across West Africa as partnerships and infrastructure expand.",
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      {FAQS.map((items, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            onClick={() => toggleFaq(index)}
            className="border-[#F1F5F1] bg-[#F1F5F1] rounded-[1.4rem] px-6 py-6 cursor-pointer"
          >
            <button className="flex items-center xl:gap-14 gap-4">
              <span
                className={`text-center justify-center border flex items-center rounded-full w-10 h-10 transition-colors duration-300 ${
                  isOpen
                    ? "bg-[#DAA545] border-[#DAA545]"
                    : "bg-[#005F2D1A] border-[#005F2D1A]"
                }`}
              >
                <p
                  className={`text-[18px] font-bold font-sans transition-colors duration-300 ${
                    isOpen ? "text-white" : "text-[#041B0E]"
                  }`}
                >
                  {items.num}
                </p>
              </span>
              <p className="xl:text-[20px] text-[12px] font-sans font-bold text-nowrap">
                {items.question}
              </p>
            </button>

            <div
              className="grid transition-all duration-700 ease-in-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <p className="xl:pl-24 pl-14 mt-3 xl:text-[14px] text-[11px] font-sans xl:w-[700px] text-[#041B0E]/80 font-semibold">
                  {items.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faqs;
