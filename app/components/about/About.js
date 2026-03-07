import React from 'react';
import AnimatedText from "@/app/components/AnimatedText";
import GenLayout from "@/app/components/GenLayout";
import Image from "next/image";

const About = () => {
  return (
    <GenLayout className={"flex flex-col py-16"}>
      <AnimatedText className={"mb-12 text-4xl md:mb-8 md:!text-3xl"} text={"Ang Aking Kwento"} textHighlight={"Kwento"} />
      <div>
        <div className={"flex flex-col items-center"}>
          <Image
            src={"/home_images/self_photo.svg"}
            alt={"Kaye's About Me Photo"}
            className={"w-72 h-72 md:w-56 md:h-56 rounded-full object-cover"}
            width={300}
            height={300}
          />
          <h2 className={"mt-4 mb-4 text-lg font-bold uppercase text-light tracking-wider md:text-base"}>About Me</h2>
        </div>
        <div className={"max-w-2xl mx-auto"}>
          <p className={"mb-4 text-base font-medium leading-relaxed md:text-sm"}>
            Kamusta! I&apos;m <strong>Kaye</strong> — a Software Developer
            at <a className={"font-semibold hover:underline"} href={"https://www.clio.com/"} target={"_blank"}>Clio</a>. Here's a bit about my journey.
          </p>
          <p className={"mb-4 text-base font-medium leading-relaxed md:text-sm"}>
            My journey started in 2013 in a small city in the Philippines. Learning about Ada Lovelace
            and Grace Hopper, one thought made sense:
            <strong className={"text-dark"}> I want to be just like them.</strong>
          </p>
          <p className={"mb-4 text-base font-medium leading-relaxed md:text-sm"}>
            That drive brought me to the University of Alberta&apos;s Computing Science program,
            where I graduated in 2024. Along the way, I gained hands-on experience across research, internships, and teaching.
          </p>
          <p className={"text-base font-medium leading-relaxed md:text-sm"}>
            Outside of tech, you&apos;ll find me going for walks and runs, watching ice hockey, reading romance, and spending
            time with my partner, family, and friends!
          </p>
        </div>
      </div>
    </GenLayout>
  )
}

export default About;
