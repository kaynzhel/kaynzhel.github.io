import React from 'react';

const GenLayout = ({children, className=""}) => {
    return (
        <div className={`${className} w-full h-full inline-block z-0 p-32`}>
            {children}
        </div>
    )
}

export default GenLayout