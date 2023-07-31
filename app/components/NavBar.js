"use client"
import React from 'react';
import Logo from "@/app/components/Logo";
import { GitHubIcon, LinkedInIcon } from "@/app/components/icons/NavBarIcons";
import { CustomNavBarIcon, CustomNavBarLink } from "@/app/components/helpers/NavBarHelpers";

const NavBar = () => {
    const navOptionClass = "mx-4 text-light";
    const navIconClass = "w-6 mx-3";

    return (
        <header className={"w-full px-32 py-8 font-medium flex items-center justify-between"}>
            <nav>
                {/*<CustomNavBarLink className={navOptionClass} href={"/"} title={"Home"} />*/}
                {/*<CustomNavBarLink className={navOptionClass} href={"/about"} title={"About"} />*/}
                {/*<CustomNavBarLink className={navOptionClass} href={"/projects"} title={"Projects"} />*/}
                {/*<CustomNavBarLink className={navOptionClass} href={"/blog"} title={"Blog"} />*/}
            </nav>
            <nav className={"flex items-center justify-center flex-wrap"}>
                <CustomNavBarIcon className={navIconClass} href={"https://github.com/kaynzhel"} icon={<GitHubIcon />} />
                <CustomNavBarIcon className={navIconClass} href={"https://www.linkedin.com/in/kaye-ena-crayzhel-misay/"} icon={<LinkedInIcon />} />
            </nav>
            <div className={"absolute left-[50%] top-2 translate-x-[50%]"}>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar