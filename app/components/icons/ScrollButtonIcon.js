import React from 'react';
import { motion, useScroll } from "framer-motion";

const ScrollButtonIcon = ({reference}) => {
    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )

    return (
        <figure className={"absolute left-0 stroke-primary"}>
            <svg width={"75"} height={"75"} viewBox={"0 0 100 100"}>
                <circle cx={"75"} cy={"50"} r={"20"} className={"stroke-primary stroke-1 fill-none"}/>
                <motion.circle
                    className={"stroke-[5px] fill-light"}
                    cx={"75"} cy={"50"} r={"20"}
                    style={{pathLength: scrollYProgress}}
                />
                <circle cx={"75"} cy={"50"} r={"10"} className={"animate-pulse stroke-1 fill-primary"}/>
            </svg>
        </figure>
    )
}

export default ScrollButtonIcon