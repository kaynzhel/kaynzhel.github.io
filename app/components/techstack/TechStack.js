"use client";
import React from 'react';
import { motion } from "framer-motion";
import AnimatedText from "@/app/components/AnimatedText";
import GenLayout from "@/app/components/GenLayout";
import {
  SiPython, SiRuby, SiTypescript, SiJavascript,
  SiHtml5, SiCss, SiRubyonrails, SiDjango, SiAngular,
  SiReact, SiDotnet, SiNextdotjs, SiTailwindcss,
  SiGit, SiGithub, SiSqlite, SiHeroku, SiVercel, SiSupabase,
  SiMysql, SiTurbo, SiAlpinedotjs, SiBlazor, SiFigma,
} from "react-icons/si";
import { FaJava, FaDatabase, FaVial } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

const categories = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "Ruby", icon: SiRuby },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "SQL", icon: FaDatabase },
      { name: "Java", icon: FaJava },
      { name: "C#", icon: TbBrandCSharp },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS/SCSS", icon: SiCss },
      // { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Ruby on Rails", icon: SiRubyonrails },
      { name: "Django", icon: SiDjango },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Turbo", icon: SiTurbo },
      { name: "RSpec", icon: FaVial },
      { name: "Capybara", icon: FaVial },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Native", icon: SiReact },
      { name: "Alpine.js", icon: SiAlpinedotjs },
      { name: "AngularJS", icon: SiAngular },
      { name: ".NET", icon: SiDotnet },
      { name: "EF Core", icon: SiDotnet },
      { name: "MudBlazor", icon: SiBlazor },
    ],
  },
  {
    title: "Technologies",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite", icon: SiSqlite },
      { name: "Figma", icon: SiFigma },
      { name: "Heroku", icon: SiHeroku },
      { name: "Vercel", icon: SiVercel },
      { name: "Supabase", icon: SiSupabase },
      // { name: "Firebase", icon: SiFirebase },
      // { name: "Azure", icon: VscAzure },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const chip = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const TechStack = () => {
  return (
    <GenLayout className={"flex flex-col py-16"}>
      <AnimatedText className={"mb-12 text-4xl md:mb-8 md:!text-3xl"} text={"Tech Stack"} textHighlight={"Tech"} />
      <div className={"grid grid-cols-3 gap-8 lg:grid-cols-1"}>
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className={"text-lg font-bold text-dark mb-4 md:text-base"}>{category.title}</h3>
            <motion.div
              className={"flex flex-wrap gap-2"}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {category.items.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.span
                    key={item.name}
                    variants={chip}
                    className={"flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-primary/30 border border-dark/20 text-light font-medium hover:bg-primary/50 hover:border-dark/40 transition-all cursor-default"}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    {item.name}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </GenLayout>
  );
};

export default TechStack;
