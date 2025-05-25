import React from 'react'

const Heading = ({ className, subHeading, children }) => {
    return (
        <div className='text-center flex flex-col items-center justify-center gap-6'>
            <h1 className={`text-5xl leading-16 font-extrabold text-text mt-10 font-hero ${className}`}>
                {children}
            </h1>
            <p>{subHeading}</p>
        </div>
    )
}

export default Heading