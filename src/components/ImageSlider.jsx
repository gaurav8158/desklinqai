import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const changePhotoId = (newIndex) => {
    if (newIndex > index) setDirection(1);
    else setDirection(-1);
    setIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < images.length - 1) changePhotoId(index + 1);
    },
    onSwipedRight: () => {
      if (index > 0) changePhotoId(index - 1);
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
      <div
        className="relative w-full h-48 overflow-hidden rounded-xl group"
        {...handlers}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Carousel Images */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={images[index]}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows (Visible on Hover) */}
        {index > 0 && isHovered && (
          <button
            className="absolute p-2 transition transform -translate-y-1/2 bg-white rounded-full shadow opacity-0 left-3 top-1/2 group-hover:opacity-100"
            onClick={() => changePhotoId(index - 1)}
          >
            <Icon icon="formkit:left" width="16" height="16" />
          </button>
        )}
        {index < images.length - 1 && isHovered && (
          <button
            className="absolute p-2 transition transform -translate-y-1/2 bg-white rounded-full shadow opacity-0 right-3 top-1/2 group-hover:opacity-100"
            onClick={() => changePhotoId(index + 1)}
          >
            <Icon icon="formkit:right" width="16" height="16" />
          </button>
        )}

        {/* Dots Navigation */}
        <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-2 left-1/2">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === index ? "bg-white" : "bg-gray-300"
              }`}
              onClick={() => changePhotoId(idx)}
            />
          ))}
        </div>
      </div>
    </MotionConfig>
  );
};

export default ImageSlider;
