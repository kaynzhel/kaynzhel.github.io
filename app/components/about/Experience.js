"use client";
import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import ScrollButtonIcon from "@/app/components/icons/ScrollButtonIcon";
import AnimatedText from "@/app/components/AnimatedText";
import GenLayout from "@/app/components/GenLayout";
import { LinkArrow } from "@/app/components/icons/MiscIcons";

const ExperienceDetails = ({company, companyLink, position, time, address, tech, work}) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className={"my-4 first:mt-0 last:mb-0 w-[60%] ml-[20%] flex flex-col items-start md:w-[75%] md:ml-[15%] sm:w-[85%] sm:ml-[10%]"}>
      <ScrollButtonIcon reference={ref} />
      <motion.div
        initial={{y:50, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration: 0.5, type:"spring"}}
        viewport={{once: true}}
      >
        <h3 className={"font-bold text-lg md:text-base text-light"}>
          {position}&nbsp;
          <a
            className={"text-dark capitalize hover:underline inline-flex items-center"}
            href={companyLink}
            target={"_blank"}
          >
            @ {company}<LinkArrow className={"!w-4 ml-1 md:!w-3"} />
          </a>
        </h3>
        <span className={"capitalize font-medium text-sm text-primaryLight1 block"}>
          {time} | {address}
        </span>
        {work && (
          <ul className={"mt-2 space-y-1"}>
            {work.map((item, i) => (
              <li key={i} className={"text-sm text-light/90 leading-relaxed"}>
                • {item}
              </li>
            ))}
          </ul>
        )}
        {tech && (
          <div className={"flex flex-wrap gap-1.5 mt-2"}>
            {tech.split(", ").map((item) => (
              <span
                key={item}
                className={"text-xs px-3 py-1 rounded-lg bg-primary/30 border border-dark/20 text-light font-medium"}
              >
                {item}
              </span>
            ))}
          </div>
        )}
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
    <GenLayout className={"flex flex-col py-16"}>
      <AnimatedText className={"mb-12 text-4xl md:mb-8 md:!text-3xl"} text={"My Experience"} textHighlight={"Experience"} />
      <div className={"w-full mx-auto relative"} ref={ref}>
        <motion.div
          className={"absolute left-[54px] top-0 w-[4px] h-full bg-light origin-top md:left-[40px] sm:left-[32px]"}
          style={{scaleY: scrollYProgress}}
        />
        <ul className={"w-full flex flex-col items-start justify-between ml-4"}>
          <ExperienceDetails
            company={"Clio"}
            companyLink={"https://www.clio.com/"}
            position={"Software Developer"}
            time={"June 2024 - Present"}
            address={"Remote"}
            work={[
              "Building the ledger and core financial features for Clio Accounting.",
            ]}
            tech={"Ruby on Rails, MySQL, Turbo, Alpine.js, TypeScript, JavaScript, Tailwind CSS"}
          />
          <ExperienceDetails
            company={"University of Alberta"}
            companyLink={"https://www.ualberta.ca/"}
            position={"Undergraduate Teaching Assistant"}
            time={"Jan 2024 - Apr 2024"}
            address={"Edmonton, AB, Canada"}
            work={[
              "Taught user-centered software design and UI/UX principles in an Intro to Human-Computer Interaction course.",
            ]}
          />
          <ExperienceDetails
            company={"Arcurve Inc."}
            companyLink={"https://arcurve.com"}
            position={"Software Developer Intern"}
            time={"May 2023 - Aug 2023"}
            address={"Remote"}
            work={[
              "Led implementation of a financial screen for payout management and real-time insights.",
              "Optimized database queries, reducing loading times by 90%.",
            ]}
            tech={"C#, .NET, Entity Framework Core, MudBlazor, Azure"}
          />
          <ExperienceDetails
            company={"Clio"}
            companyLink={"https://www.clio.com/"}
            position={"Software Developer Co-op"}
            time={"May 2022 - Apr 2023"}
            address={"Remote"}
            work={[
              "Integrated billing, calendar, and notification features across 2 web and 2 mobile apps.",
            ]}
            tech={"Ruby on Rails, AngularJS, React Native, MySQL, TypeScript, GraphQL, Tailwind CSS"}
          />
          <ExperienceDetails
            company={"University of Alberta"}
            companyLink={"https://webdocs.cs.ualberta.ca/~ghlin/lingroup/archivenews.php"}
            position={"Undergraduate Research Assistant"}
            time={"May 2021 - Aug 2021"}
            address={"Edmonton, AB, Canada"}
            work={[
              "Awarded $8,000 from NSERC and UAlberta for SARS-CoV-2 genetic mutation analysis.",
              "Analyzed ~6,500 protein sequences to identify functional mutation pairs in spike protein regions.",
            ]}
            tech={"Python, SQLite, Jalview, MAFFT"}
          />
        </ul>
      </div>
    </GenLayout>
  )
}

export default Experience
