import star from "../../assets/images/Icon.svg";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Card = () => {
  const cardData = [
    {
      img: star,
      desc: "Since joining the portal, my cashew revenue has increased by 40%. The loan eligibility feature allowed me to buy a tractor within six months.",
      descWidth: "xl:w-[450px] w-full",
      title: "Kofi Mensah",
      role: "CASHEW PRODUCER, GHANA",
    },
    {
      img: star,
      desc: "The personalized market insights helped me anticipate demand and adjust my harvest schedules, boosting profits by 30%.",
      descWidth: "xl:w-[380px] w-full md:w-full",
      title: "Kofi Mensah",
      role: "MANGO FARMER, GHANA",
    },
    {
      img: star,
      desc: "Thanks to the real-time weather alerts, I prevented crop damage during the rainy season, saving thousands in potential losses.",
      descWidth: "xl:w-[380px] w-full",
      title: "Joseph Owusu",
      role: "COCOA FARMER, GHANA",
    },
  ];
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-row gap-6 xl:px-[4rem] md:px-[2rem] px-[1rem] w-full overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none py-4"
    >
      {cardData.map((item, index) => (
        <motion.div
          variants={fadeUp}
          key={index}
          className="bg-[#F1F5F1] p-6 rounded-lg shadow-md mb-4 md:h-[312px] 
                     w-[85vw] min-w-[280px] max-w-[340px] shrink-0 
                  md:flex-1 md:min-w-0 md:max-w-none md:shrink
                     xl:w-full snap-center flex flex-col justify-between"
        >
          <div>
            {/* Stars Row */}
            <div className="flex gap-1.5 mb-2 mt-4">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <img
                  key={starIndex}
                  src={item.img}
                  alt="Star"
                  className="w-5 h-5"
                />
              ))}
            </div>

            {/* Description */}
            <p className="text-[#181D18] text-[15px] leading-relaxed py-3">
              {item.desc}
            </p>
          </div>

          {/* User Details */}
          <div className="flex flex-col gap-0.5 mt-auto">
            <h3 className="text-[#181D18] font-extrabold font-sans text-[16px]">
              {item.title}
            </h3>
            <p className="text-[#6F7A6E] text-[13px] tracking-wide font-medium">
              {item.role}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Card;
