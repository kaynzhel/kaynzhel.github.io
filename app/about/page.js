import React from 'react';
import Head from "next/head";
import AnimatedText from "@/app/components/AnimatedText";
import GenLayout from "@/app/components/GenLayout";
import Image from "next/image";
import Experience from "@/app/components/about/Experience";

const About = () => {
  return (
    <GenLayout className={"flex flex-col py-16"}>
      <AnimatedText className={"mb-16 text-4xl"} text={"Ang Aking Kwento"} textHighlight={"Kwento"} />
      <div className={"grid w-full grid-cols-8 gap-16"}>
        <div className={"col-span-4 flex flex-col items-start justify-start"}>
          <h2 className={"mb-2 text-lg font-bold uppercase text-dark"}>About Me</h2>
          <p className={"mb-4 font-medium"}>
            Kamusta! I'm Kaye Ena Crayzhel F. Misay, but you can call me <strong>Kaye</strong>.
            Here's a bit about my journey.
          </p>
          <p className={"mb-4 font-medium"}>
            Back in 2013, in a northern city in the Philippines, I discovered my passion for Computer Science.
            I was in a 7th-grade class of about 30 students, we were introduced to the basics——
            computer parts like SATA hard drives, flowcharts, logic, and the history of what is now a thriving tech
            industry. As a young girl learning about the likes of Ada Lovelace and Grace Hopper, one thought made sense:
            <strong className={"text-dark/75"}> I want to be just like them.</strong>
          </p>
            <p className={"mb-4 font-medium"}>
              Fast forward to 2018, the start of my senior year of high school in a city just south of Edmonton——
              I was set on applying to the University of Alberta’s Computing Science program, and so, I did!
              By September 2019, I was starting my journey at university.
            </p>
          <p className={"mb-4 font-medium"}>
            Five years later, I've had the opportunity to gain experience and build my skills in a variety of roles,
            including working as an <strong>Undergraduate Research Assistant</strong> studying SARS-CoV-2,
            a <strong>Software Developer Co-op</strong> at a legal tech company (Clio),
            a <strong>Software Developer Intern</strong> at a full-service tech company (Arcurve),
            and as an <strong>Undergraduate Teaching Assistant</strong> for a Human-Computer Interaction course.
          </p>
          <p className={"mb-4 font-medium"}>
          Now, I’m thrilled to be back at Clio, where I have rejoined as a Software Developer.
          </p>
          <p className={"font-medium"}>
            Outside of tech, I like going for walks, reading and watching all things ice hockey, and spending time with my partner, family, and friends!
          </p>
        </div>
        <div className={"col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8"}>
          <div className={"absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"} />
          <Image
            src={"/home_images/self_photo.svg"}
            alt={"Kaye's About Me Photo"}
            className={"w-full h-auto rounded-2xl"}
            width={50}
            height={50}
          />
        </div>
      </div>
    </GenLayout>
  )
}

export default About;