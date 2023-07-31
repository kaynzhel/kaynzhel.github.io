"use client";
import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className={"container flex items-center justify-center mt-2"}>
            <MotionLink
                className={"w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"}
                href={"/"}
                whileHover={{
                    backgroundColor: ["#121212", "#682860","#008080","#87CEEB","#C0C0C0", "#121212"],
                    transition: {duration: 1, repeat: Infinity}
                }}
            >
                KM
            </MotionLink>
        </div>
    )
}

export default Logo