import React from 'react';
import GenLayout from "@/app/components/GenLayout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={"w-full border-t-2 border-solid border-dark font-medium text-lg text-dark"}>
            <GenLayout className={"py-8 flex items-center justify-between"}>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className={"flex items-center"}>
                    <span className={"text-2xl text-primary"}>&#9825;</span>
                    <p className={"underline underline-offset-2 mx-2"}>Kaye Ena Crayzhel Misay</p>
                </div>
                <Link
                    className={"underline underline-offset-2 hover:text-primary"}
                    href={"mailto:kayeena.misay@gmail.com?subject=Hi Kaye, I would like to connect!"}
                    target={"_blank"}
                >
                    Get in touch
                </Link>
            </GenLayout>
        </footer>
    )
}

export default Footer