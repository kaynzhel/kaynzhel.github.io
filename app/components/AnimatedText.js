"use client"
import React from 'react';
import { motion } from "framer-motion";

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.1,
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: -25,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

const AnimatedText = ({className="", text, textHighlight=""}) => {
    return (
        <div className={"w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0"}>
            <motion.h1
                animate={"animate"}
                className={`${className} inline-block w-full font-bold capitalize text-6xl`}
                initial={"initial"}
                variants={quote}
            >
                {
                    text.split(" ").map((word, index) =>
                        <motion.span
                            className={`inline-block ${word.includes(textHighlight) ? "text-dark" : "text-light"}`}
                            key={word + "-" + index}
                            variants={singleWord}
                        >
                            {word}&nbsp;
                        </motion.span>
                    )
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText