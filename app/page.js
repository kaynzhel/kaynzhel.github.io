import Image from 'next/image'
import GenLayout from "@/app/components/GenLayout";
import AnimatedText from "@/app/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/app/components/icons/MiscIcons";
import About from "@/app/components/about/About";
import Experience from "@/app/components/about/Experience";
import TechStack from "@/app/components/techstack/TechStack";
import Projects from "@/app/components/projects/Projects";

function Home() {
  return (
    <main className={"text-light"}>
      <section id="home" className={"flex min-h-screen flex-row items-center justify-center lg:pt-16"}>
        <GenLayout className={"flex"}>
          <div className={"flex lg:flex-col w-full items-center"}>
            <div className={"w-1/2 md:w-full"}>
              <Image
                src={"/home_images/home_photo_2.svg"}
                alt={"Kaye's Home Photo"}
                className={"w-full h-auto md:inline-block"}
                width={50}
                height={50}
                priority
                sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
              />
            </div>
            <div className={"w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center"}>
              <AnimatedText
                className={"text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"}
                text={"Hi, I'm Kaye."}
                textHighlight={"Kaye"}
              />
              <p className={"my-4 text-base md:text-md sm:text-sm"}>
                I&apos;m currently a Software Developer at <a className={"font-semibold hover:underline"} href={"https://www.clio.com/"} target={"_blank"}>Clio</a>,
                transforming the legal experience through <a className={"font-semibold hover:underline"} href={"https://www.clio.com/accounting/"} target={"_blank"}>Clio Accounting</a>.
                With a strong interest in full-stack development, I am dedicated to building user-centered applications.
              </p>
              <p className={"mb-4 self-start lg:self-center md:text-md sm:text-sm"}>
                Explore my work, learn about my background, and let&apos;s connect!
              </p>
              <div className={"flex items-center self-start mt-2 lg:self-center"}>
                <Link
                  className={`flex items-center bg-dark text-primary p-2.5 px-6 rounded-lg text-lg font-semibold
                    hover:bg-light hover:text-primary transition-all
                    md:p-2 md:px-4 md:text-base`}
                  href={"mailto:kayeena.misay@gmail.com?subject=Hi Kaye, I would like to connect!"}
                  target={"_blank"}
                >
                  Contact <LinkArrow className={"!w-6 ml-1 md:!w-4"}/>
                </Link>
              </div>
            </div>
          </div>
        </GenLayout>
      </section>

      <section id="about" className="w-full">
        <About />
      </section>

      <section id="experience" className="w-full">
        <Experience />
      </section>

      <section id="projects" className="w-full">
        <Projects />
      </section>

      <section id="techstack" className="w-full">
        <TechStack />
      </section>
    </main>
  )
}

export default Home;
