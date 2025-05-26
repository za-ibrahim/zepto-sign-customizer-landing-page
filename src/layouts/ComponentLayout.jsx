import React from 'react'

const ComponentLayout = ({ children }) => {
    return (
        <div className='max-w-6xl mx-auto px-4'>
            {children}
        </div>
    )
}

export default ComponentLayout