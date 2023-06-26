import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

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
    const pathname = usePathname();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
                ${pathname === href ? 'w-full' : 'w-0'}
            `}>
                &nbsp;
            </span>
        </Link>
    )
}

export { CustomNavBarIcon, CustomNavBarLink };