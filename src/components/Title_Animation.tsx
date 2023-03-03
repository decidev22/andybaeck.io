import { motion, useAnimationControls } from "framer-motion";
import { any } from "prop-types";
import React, { useState } from "react";

const Title_Animation: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);
  const rubberband = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.3,.65,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.15,.95,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
      transition: {
        time: [0, -4, -6, -7, -8, 0.9],
      },
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      animate={controls}
      whileHover={{
        color: "#00f6ff",
      }}
      onMouseOver={() => {
        if (!isPlaying) rubberband();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      style={{
        display: "inline-block",
      }}
    >
      {children}
    </motion.span>
  );
};

export default Title_Animation;
