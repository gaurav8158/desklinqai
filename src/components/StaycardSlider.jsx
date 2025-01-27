import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import StayCard from "./StayCard";

const StayCardSlider = ({ message }) => {
  console.log(message);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const changeSlide = (newIndex) => {
    if (newIndex > index) setDirection(1);
    else setDirection(-1);
    setIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < message.length - 1) changeSlide(index + 1);
    },
    onSwipedRight: () => {
      if (index > 0) changeSlide(index - 1);
    },
    trackMouse: true,
  });

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <div className="relative w-full overflow-hidden rounded-xl" {...handlers}>
        {/* Slider Content */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full"
          >
            <div className="flex justify-center">
              <StayCard space={message[index]} />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Left Navigation */}
        {index > 0 && (
          <button
            className="absolute p-2 -translate-y-1/2 bg-white rounded-full shadow left-4 top-1/2 hover:bg-gray-200"
            onClick={() => changeSlide(index - 1)}
          >
            <Icon icon="formkit:left" width="24" height="24" />
          </button>
        )}

        {/* Right Navigation */}
        {index < message.length - 1 && (
          <button
            className="absolute p-2 -translate-y-1/2 bg-white rounded-full shadow right-4 top-1/2 hover:bg-gray-200"
            onClick={() => changeSlide(index + 1)}
          >
            <Icon icon="formkit:right" width="24" height="24" />
          </button>
        )}

        {/* Navigation Dots */}
        <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
          {message.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === index ? "bg-purple-500" : "bg-gray-300"
              }`}
              onClick={() => changeSlide(idx)}
            />
          ))}
        </div>
      </div>
    </MotionConfig>
  );
};

export default StayCardSlider;
