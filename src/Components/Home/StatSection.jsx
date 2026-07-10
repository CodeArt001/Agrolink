import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import TitleText from "../Text/TitleText";
import DescriptionText from "../Text/DescriptionText";

const Counter = ({ to, prefix = "", suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    } else {
      count.set(0);
    }
  }, [isInView, to]);

  return (
    <motion.span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
};

const stats = [
  { to: 100, suffix: "k+", label: "FARMERS CONNECTED" },
  { to: 50, suffix: "k+", label: "TONS TRADED" },
  { to: 240, prefix: "$", suffix: "M", label: "FINANCING FACILITATED" },
  { to: 14, suffix: "", label: "COUNTRIES REACHED" },
];

const StatSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
      className="flex flex-row md:grid md:grid-cols-4 items-center xl:gap-[14rem] md:gap-[7rem] gap-[4rem] overflow-x-auto xl:overflow-x-visible md:overflow-visible no-scrollbar scroll-smooth w-full py-4"
    >
      {stats.map((stat) => (
        <motion.span
          key={stat.label}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="flex flex-col items-center"
        >
          <TitleText
            text={
              <Counter to={stat.to} prefix={stat.prefix} suffix={stat.suffix} />
            }
            color="text-[#005F2D]"
            size="xl:text-[48px] text-[31px]"
            fontWeight="font-bold"
            className="font-sans"
          />
          <DescriptionText
            text={stat.label}
            color="text-[#3F493F]"
            size="text-[14px]"
            className="font-sans text-nowrap"
          />
        </motion.span>
      ))}
    </motion.div>
  );
};

export default StatSection;
