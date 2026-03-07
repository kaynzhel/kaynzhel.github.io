import React from 'react';
import GenLayout from "@/app/components/GenLayout";

const Footer = () => {
  return (
    <footer className={"w-full border-t border-solid border-light/20 font-medium text-base text-light md:text-sm"}>
      <GenLayout className={"py-6 flex items-center justify-between lg:flex-col lg:items-center lg:gap-2 lg:py-4"}>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className={"flex items-center"}>
          <span className={"text-lg text-light md:text-base"}>&#9825;</span>
          <p className={"mx-2"}>Kaye Ena Crayzhel Misay</p>
        </div>
      </GenLayout>
    </footer>
  )
}

export default Footer
