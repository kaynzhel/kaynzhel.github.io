import React from 'react';

const GenLayout = ({children, className=""}) => {
    return (
        <div className={`${className} w-full h-full inline-block p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8`}>
            {children}
        </div>
    )
}

export default GenLayout