"use client"
import React, { useState } from 'react';
import Logo from "@/app/components/Logo";
import { GitHubIcon, LinkedInIcon } from "@/app/components/icons/NavBarIcons";
import { CustomNavBarIcon, CustomNavBarLink, CustomNavBarMobileLink } from "@/app/components/helpers/NavBarHelpers";
import { motion } from "framer-motion";

const NavBar = () => {
  const navOptionClass = "mx-4 text-light";
  const navOptionClassMobile = "mx-4 text-dark";
  const navIconClass = "w-6 mx-3";
  const navIconClassMobile = "w-6 mx-3 sm:mx-1";
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
    <header style={{ zIndex: 200 }} className={"border-b-2 bg-gradient-to-b from-primary/40 to-transparent backdrop-blur-sm w-full fixed top-0 py-8 font-medium items-center justify-between px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8"}>
      <button className={"flex-col justify-center items-center hidden lg:flex"} onClick={handleClick}>
        <span className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? `opacity-0` : `opacity-100`}`}></span>
        <span className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>
      <div className={"w-full flex flex-row justify-between items-center lg:hidden"}>
        <nav>
          <CustomNavBarLink className={navOptionClass} href={"/"} title={"Home"} />
          <CustomNavBarLink className={navOptionClass} href={"/#about"} title={"About"} />
          {/*<CustomNavBarLink className={navOptionClass} href={"/projects"} title={"Projects"} />*/}
          {/*<CustomNavBarLink className={navOptionClass} href={"/blog"} title={"Blog"} />*/}
        </nav>
        <nav className={"flex items-center justify-center flex-wrap"}>
          <CustomNavBarIcon className={navIconClass} href={"https://github.com/kaynzhel"} icon={<GitHubIcon />} />
          <CustomNavBarIcon className={navIconClass} href={"https://www.linkedin.com/in/kaye-ena-crayzhel-misay/"} icon={<LinkedInIcon />} />
        </nav>
      </div>
      <div className={"absolute left-[50%] top-2 -translate-x-1/2"}>
        <Logo />
      </div>
    </header>

    {isOpen && (
      <motion.div
        initial={{scale: 0, opacity: 1, x: "-50%", y: "-50%"}}
        animate={{scale: 1, opacity: 1}}
        className={`min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          z-50 bg-primaryLight1/90 rounded-2xl backdrop-blur-md py-32`}>
        <nav className={"flex items-center flex-col justify-center"}>
          <CustomNavBarMobileLink className={navOptionClassMobile} href={"/"} title={"Home"} toggle={handleClick} />
          <CustomNavBarMobileLink className={navOptionClassMobile} href={"/#about"} title={"About"} toggle={handleClick} />
          {/*<CustomNavBarMobileLink className={navOptionClassMobile} href={"/projects"} title={"Projects"} toggle={handleClick} />*/}
          {/*<CustomNavBarMobileLink className={navOptionClassMobile} href={"/blog"} title={"Blog"} toggle={handleClick} />*/}
        </nav>
          <nav className={"flex items-center justify-center flex-wrap mt-2"}>
            <CustomNavBarIcon className={navIconClassMobile} href={"https://github.com/kaynzhel"} icon={<GitHubIcon />} />
            <CustomNavBarIcon className={navIconClassMobile} href={"https://www.linkedin.com/in/kaye-ena-crayzhel-misay/"} icon={<LinkedInIcon />} />
          </nav>
      </motion.div>
    )}
    </div>
  )
}

export default NavBar;