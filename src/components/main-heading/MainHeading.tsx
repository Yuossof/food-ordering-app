import React from 'react'

function MainHeading({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <>
            <span className='uppercase text-accent font-semibold leading-4'>{subtitle}</span>
            <h1 className='text-primary font-bold text-4xl italic'>{title}</h1>
        </>
    )
}

export default MainHeading