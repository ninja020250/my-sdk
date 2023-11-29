import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export type SwitchAnimationProps = {
  id: any;
  children?: React.ReactNode;
};

export const SwitchIconButtonAnimation = ({ id, children }: SwitchAnimationProps) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={id}
        initial={{
          y: -20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: 20,
          opacity: 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SwitchIconButtonAnimation;
