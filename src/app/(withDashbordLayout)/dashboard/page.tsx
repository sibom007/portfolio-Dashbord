"use client";
import { motion, useAnimate } from "framer-motion";

const Mainpage = () => {
  const boxVariants = {
    animate: {
      x: [0, 100, 200, 300, 200, 100, 0, 400, 700, 900, 1000],
      y: [0, 200, 100, 300, -100, 400, 400, 100, 400, 500],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "easeInOut",
        },
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div className="flex justify-center">
      <motion.div
        variants={boxVariants}
        animate="animate"
        initial={{ x: 0 }}
        className="bg-orange-500 p-20 rounded-2xl flex justify-center items-center"></motion.div>
    </div>
  );
};

export default Mainpage;
