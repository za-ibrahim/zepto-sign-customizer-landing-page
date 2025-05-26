import React from 'react'

const Heading = ({ className, subHeading, children }) => {
    return (
        <div className='text-center flex flex-col items-center justify-center gap-6 py-10 px-4'>
            <h1 className={`lg:text-5xl md:text-4xl text-3xl lg:leading-16 md:leading-12 font-extrabold text-text font-hero ${className}`}>
                {children}
            </h1>
            <p>{subHeading}</p>
        </div>
    )
}

export default Heading