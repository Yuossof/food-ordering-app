import React from 'react'
import MenuItem from './MenuItem'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Menu({ bestSeller }: { bestSeller: any }) {


    return (
        <ul className='grid grid-cols-4 gap-4 w-full'>
            {bestSeller.map(item => (
                <MenuItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export default Menu