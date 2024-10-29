"use client";
import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className={"container flex items-center justify-center mt-2 w-12 h-12"}>
      <MotionLink
        className={"w-full h-full bg-dark text-light flex items-center justify-center rounded-full text-xl font-bold"}
        href={"/"}
        whileHover={{
          backgroundColor: ["#2B004E", "#1D0E27", "#5A2A79", "#2B004E", "#682860", "#2B004E"],
          transition: {duration: 1, repeat: Infinity}
        }}
      >
        KM
      </MotionLink>
    </div>
  )
}

export default Logo;