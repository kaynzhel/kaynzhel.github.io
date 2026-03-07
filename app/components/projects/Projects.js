"use client";
import React from 'react';
import { motion } from "framer-motion";
import AnimatedText from "@/app/components/AnimatedText";
import Image from "next/image";
import GenLayout from "@/app/components/GenLayout";
import { GitHubIcon } from "@/app/components/icons/NavBarIcons";
import { LinkArrow } from "@/app/components/icons/MiscIcons";

const projectData = [
  {
    title: "Mathvin",
    description: "An interactive math practice app built for my little brother. Features arithmetic problem generation, accuracy tracking, and a kid-friendly interface.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    link: "https://mathvin.vercel.app",
    linkType: "website",
    image: "/projects/mathvin.png",
  },
  {
    title: "Distributed",
    description: "A social networking app enabling cross-server post sharing. Built the backend and API architecture, managed deployment, and contributed to the frontend.",
    tech: ["Python", "Django", "React", "TypeScript", "Material UI", "Heroku"],
    link: "https://distributed-network-37d054f03cf4.herokuapp.com/login",
    linkType: "website",
    image: "/projects/distributed.jpeg",
  },
  {
    title: "Control",
    description: "A mental health and wellness app for tracking moods, journaling, and building healthy habits. Won 2nd place out of 270 participants at a Calgary Youth Hackathon.",
    tech: ["Java", "Android Studio", "Firebase", "Figma"],
    link: "https://github.com/kael-org/control",
    linkType: "github",
    image: "/projects/control.png",
  },
  {
    title: "Momentum",
    description: "An Android habit tracker for creating custom events, tracking streaks, and sharing progress with friends. Led the app design and end-to-end development.",
    tech: ["Java", "JUnit", "Robotium", "Android Studio", "Firebase", "Google API"],
    link: "https://github.com/CMPUT301F21T37/Momentum",
    linkType: "github",
    image: "/projects/momentum.png",
  },
];

const ProjectCard = ({ title, description, tech, link, linkType, image, index }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={"group relative rounded-2xl bg-primary/40 overflow-hidden backdrop-blur-sm hover:bg-primary/60 transition-all duration-300"}
    >
      <div className={"relative w-full h-60 overflow-hidden"}>
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          className={"object-cover group-hover:scale-105 transition-transform duration-300"}
        />
      </div>
      <div className={"p-6"}>
        <div className="flex items-start justify-between mb-4">
          <h3 className={"text-lg font-bold text-light group-hover:text-dark transition-colors md:text-base"}>
            {title}
          </h3>
          <a href={link} target="_blank" className="text-light hover:text-dark transition-colors w-5 h-5 flex-shrink-0">
            {linkType === "github" ? <GitHubIcon /> : <LinkArrow className={"!w-5"} />}
          </a>
        </div>
        <p className={"text-light/90 text-base font-medium leading-relaxed mb-4 md:text-sm"}>
          {description}
        </p>
      <div className={"flex flex-wrap gap-2"}>
        {tech.map((item) => (
          <span
            key={item}
            className={"text-xs px-3 py-1 rounded-full bg-dark/20 text-primaryLight1 border border-dark/30 font-medium"}
          >
            {item}
          </span>
        ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <GenLayout className={"flex flex-col py-16"}>
      <AnimatedText className={"mb-12 text-4xl md:mb-8 md:!text-3xl"} text={"My Projects"} textHighlight={"Projects"} />
      <div className={"grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1"}>
        {projectData.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </GenLayout>
  );
};

export default Projects;
