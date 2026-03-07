"use client";
import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

const Logo = () => {
  return (
    <div className={"container flex items-center justify-center mt-2 w-12 h-12"}>
      <MotionLink
        className={"w-full h-full bg-dark text-primary flex items-center justify-center rounded-full text-xl font-bold"}
        href={"/"}
        whileHover={{
          backgroundColor: ["#B9A0CC", "#9B80B0", "#B9A0CC"],
          transition: {duration: 1, repeat: Infinity}
        }}
      >
        KM
      </MotionLink>
    </div>
  )
}

export default Logo;
