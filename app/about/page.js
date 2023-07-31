import React from 'react';
import Head from "next/head";
import AnimatedText from "@/app/components/AnimatedText";
import GenLayout from "@/app/components/GenLayout";
import Image from "next/image";
import Experience from "@/app/components/about/Experience";

const About = () => {
    return (
        <>
            <Head>
                <title>Kaye's Portfolio | About Page</title>
            </Head>
            <main className={"flex w-full flex-col items-center justify-center"}>
                <GenLayout className={"pt-16"}>
                    <AnimatedText className={"mb-16"} text={"Mga pangarap ko'y makakamit"}/>
                    <div className={"grid w-full grid-cols-8 gap-16"}>
                        <div className={"col-span-4 flex flex-col items-start justify-start text-light"}>
                            <h2 className={"mb-4 text-lg font-bold uppercase text-dark/75"}>About Me</h2>
                            <p className={"mb-4 font-medium"}>
                                Hello! My name is Kaye Ena Crayzhel F. Misay, but you can call me <strong>Kaye</strong>.
                                If you're wondering what the title means, the non-direct translation from Filipino is "I will achieve all of my dreams", and I think that's beautiful.
                            </p>
                            <p className={"mb-4 font-medium"}>
                                Back in 2013 in a city in the northern part of the Philippines, I fell in love with Computer Science.
                                In a 7th grade class of about 30 or so students, we were introduced computer parts like SATA hard drive. After that,
                                we learned flow charts, logic, and the history of what is now a thriving tech industry. As a young girl reading about the
                                likes of Ada Lovelace or Grace Hopper, it made me think that yes, <strong>I want to be just like them</strong>!
                            </p>
                            <p className={"mb-4 font-medium"}>
                                Fast-forward to 12th grade in a city south of Edmonton, I was adamant to apply for the University of Alberta's Computing Science program, and so, I did!
                                A few more years after, I've had the privilege to work as an Undergraduate Research Assistant studying <strong>SARS-CoV-2</strong>, Software Developer Co-op at a <strong>legal tech</strong> software company, and now,
                                as a Software Developer Intern at a <strong>full-service</strong> tech company.
                            </p>
                            <p className={"mb-4 font-medium"}>
                                In addition, I also have a year of formal tutoring experience with Ada's Team for two introductory computing courses.
                                The courses introduce Computing Science students to functional programming, data structures, and algorithms in Python.
                            </p>
                            <p className={"font-medium"}>
                                Outside of tech, I usually go for walks, read and watch all things ice hockey, and spend time with my partner, family, and friends!
                            </p>
                        </div>
                        <div className={"col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8"}>
                            <div className={"absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark"}/>
                            <Image
                                src={"/home_images/self_photo.svg"}
                                alt={"Kaye's About Me Photo"}
                                className={"w-full h-auto rounded-2xl"}
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                    <Experience />
                </GenLayout>
            </main>
        </>
    )
}

export default About