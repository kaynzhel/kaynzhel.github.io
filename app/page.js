import Image from 'next/image'
import GenLayout from "@/app/components/GenLayout";
import AnimatedText from "@/app/components/AnimatedText";
import Link from "next/link";
import {EmailIcon, LinkArrow} from "@/app/components/icons/MiscIcons";

function Home() {
    return (
        <main className={"flex items-center text-light w-full min-h-screen"}>
            <GenLayout className={"pt-0"}>
                <div className={"flex items-center justify-between w-full"}>
                    <div className={"w-1/2"}>
                        <Image
                            src={"/home_images/self_photo.svg"}
                            alt={"Kaye's Photo"}
                            className={"w-full h-auto"}
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className={"w-1/2 flex flex-col items-center self-center"}>
                        <AnimatedText
                            className={"text-left"}
                            text={"Hi, I'm Kaye."}
                        />
                        <p className={"my-4"}>
                            I'm currently a Software Developer intern at <a className={"font-semibold hover:underline"} href={"https://arcurve.com"} target={"_blank"}>Arcurve</a> and a Computing Science student at the University of Alberta.
                            I also have previous experiences as a Software Developer Co-op at <a className={"font-semibold hover:underline"} href={"https://www.clio.com/"} target={"_blank"}>Clio</a> and as an Undergraduate Research Assistant.
                            My interests include full-stack and mobile development. Explore my work, learn about my background, and let's connect!
                        </p>
                        <div className={"flex items-center self-start mt-2"}>
                            <Link
                                className={"flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold " +
                                    "hover:bg-light hover:text-dark border border-sold border-transparent hover:border-dark"}
                                href={"/documents/resume_kaye.pdf"}
                                target={"_blank"}
                            >
                                Resume <LinkArrow className={"w-6 ml-1"}/>
                            </Link>
                            <Link
                                className={"ml-4 flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold " +
                                    "hover:bg-light hover:text-dark border border-sold border-transparent hover:border-dark"}
                                href={"mailto:kayeena.misay@gmail.com?subject=Hi Kaye, I would like to connect!"}
                                target={"_blank"}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </GenLayout>
        </main>
    )
}

export default Home