import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const OnScrollAnimation = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
    console.log(isInView);
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden"}}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div 
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{ 
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "white",
          zIndex: 20,
         }}
      />
    </div>
  );
};
