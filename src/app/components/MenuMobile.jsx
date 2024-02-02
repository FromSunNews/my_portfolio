"use client"

import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
// import { Navigation } from "./navigation";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "../hooks/useDimentions";
import { Navigation } from "./Navigation";



export const MenuMobile = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height, width } = useDimensions(containerRef);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at calc(100% - 60px) 33px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: `circle(25px at calc(100% - 60px) 33px)`,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };
  
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="flex md:hidden"
    >
      <motion.div className="z-[999] fixed top-0 bottom-0 right-0 w-full border border-white border-opacity-40 
      bg-gray-700 bg-opacity-80 shadow-2xl shadow-black/[0.03] backdrop-blur-[0.5rem] flex flex-col items-center justify-center" variants={sidebar} >
        <Navigation onToggle={() => toggleOpen()}/>
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
