import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

const CustomNavBarIcon = ({className = "", href, icon}) => {
  return (
    <motion.a
      href={href}
      target={"_blank"}
      whileHover={{scale: 1.5}}
      whileTap={{scale: 0.9}}
      className={className}
    >
      {icon}
    </motion.a>
  )
}

const CustomNavBarLink = ({className= "", href, title}) => {
  // TODO: ${window.location.hash === href ? 'w-full' : 'w-0'}

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0`}>
        &nbsp;
      </span>
    </Link>
  )
}

const CustomNavBarMobileLink = ({className= "", href, title, toggle }) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  }

  // TODO: ${pathname === href ? 'w-full' : 'w-0'}
  return (
    <Link href={href} className={`${className} relative group my-2`} onClick={handleClick}>
      {title}

      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0`}>
        &nbsp;
      </span>
    </Link>
  )
}

export { CustomNavBarIcon, CustomNavBarLink, CustomNavBarMobileLink };