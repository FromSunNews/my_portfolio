import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#ADB7BE"
    strokeLinecap="round"
    {...props}
  />
);

// button {
//   outline: none;
//   border: none;
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   cursor: pointer;
//   position: absolute;
//   top: 18px;
//   left: 15px;
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   background: transparent;
// }

export const MenuToggle = (props) => (
  <button onClick={props.toggle} 
      className="flex justify-center items-center cursor-pointer fixed 
      top-[16px] right-[40px] w-[40px] h-[40px] z-[1000]"
    >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);
