import React from 'react';

const GenLayout = ({children, className=""}) => {
  return (
    <div className={`${className} w-full h-full inline-block max-w-[1400px] mx-auto px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8`}>
      {children}
    </div>
  )
}

export default GenLayout;