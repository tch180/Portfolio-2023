import Link from "next/link";
import React from "react";
import {motion} from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-light text-dark flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-dark"
        whileHover={{
            scale: 1.5, rotate: 360, 
            transition: {duration: 1},
            backgroundColor: "#274357",
            color: "#f5f5f5"
    }}
      >
       TR
      </MotionLink>
    </div>
  );
};

export default Logo;
