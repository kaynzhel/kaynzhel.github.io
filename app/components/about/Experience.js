"use client";
import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import ScrollButtonIcon from "@/app/components/icons/ScrollButtonIcon";

const ExperienceDetails = ({address, company, companyLink, position, time, work}) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className={"my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"}>
            <ScrollButtonIcon reference={ref} />
            <motion.div
                className={"text-light"}
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration: 0.5, type:"spring"}}
            >
                <h3 className={"font-bold text-2xl"}>
                    {position}&nbsp;
                    <a
                        className={"text-dark capitalize"}
                        href={companyLink}
                        target={"_blank"}
                    >
                        @ {company}
                    </a>
                </h3>
                <span className={"capitalize font-medium text-primaryLight1"}>
                    {time} | {address}
                </span>
                <p className={"font-medium w-full"}>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}
const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <div className={"my-32"}>
            <h2 className={"font-bold text-8xl mb-32 w-full text-center text-light"}>
                Experience
            </h2>
            <div className={"w-[100%] mx-auto relative self-start"} ref={ref}>
                <motion.div
                    className={"absolute left-14 top-0 w-[4px] h-full bg-light origin-top"}
                    style={{scaleY: scrollYProgress}}
                />
                <ul className={"w-full flex flex-col items-start justify-between ml-4"}>
                    <ExperienceDetails
                        address={"Calgary, AB, Canada (Remote)"}
                        company={"Arcurve"}
                        companyLink={"https://arcurve.com"}
                        position={"Software Developer Intern"}
                        time={"May 2023 - Current"}
                        work={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                    />
                    <ExperienceDetails
                        address={"Calgary, AB, Canada (Remote)"}
                        company={"Clio"}
                        companyLink={"https://clio.com"}
                        position={"Software Developer Co-op"}
                        time={"May 2022 - April 2023"}
                        work={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                    />
                    <ExperienceDetails
                        address={"Edmonton, AB, Canada"}
                        company={"University of Alberta"}
                        companyLink={"https://webdocs.cs.ualberta.ca/~ghlin/lingroup/archivenews.php"}
                        position={"Undergraduate Research Assistant"}
                        time={"May 2021 - August 2021"}
                        work={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience