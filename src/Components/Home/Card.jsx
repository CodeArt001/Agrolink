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
      className="flex flex-col md:flex-row gap-8 xl:px-[4rem] md:px-[2rem] px-[1rem] w-full overflow-hidden xl:overflow-visible"
    >
      {cardData.map((item, index) => (
        <motion.div
          variants={fadeUp}
          key={index}
          className="bg-[#F1F5F1] p-4 rounded-lg shadow-md mb-4 md:h-[312px] xl:shrink w-full md:w-[50%] xl:w-full"
        >
          <div className="flex gap-2 mb-2 mt-8">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <img
                key={starIndex}
                src={item.img}
                alt="Star"
                className="w-6 h-6 mb-2 "
              />
            ))}
          </div>
          <p className={`text-[#181D18] text-[16px] py-3 ${item.descWidth}`}>
            {item.desc}
          </p>
          <div className="flex flex-col gap-1 mt-2">
            <h3 className="text-[#181D18] font-extrabold font-sans text-[16px]">
              {item.title}
            </h3>
            <p className="text-[#6F7A6E] text-[16px]">{item.role}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Card;
