import React from 'react'
import { fromatCurrency } from '@/lib/formatters'
import Image from 'next/image'
import AddToCartButton from './AddToCartButton'

interface ItemProps {
    image: string,
    name: string,
    basePrice: number,
    description: string
}

function MenuItem({ item }: { item: ItemProps }) {
    return (
        <li className='border-2 rounded-lg shadow-sm bg-slate-50 p-3'>
            <div className='relative w-48 h-48 mx-auto'>
                <Image src={item.image} alt={item.name} className='object-cover' fill />
            </div>
            <div className='flex-1 flex flex-col gap-3'>
                <div className='flex flex-col mb-3'>
                    <div className='font-semibold flex items-center justify-between text-xl mt-3'>
                        <h4 className='font-semibold text-xl my-3'>{item.name}</h4>
                        <strong className='text-accent'>
                            {fromatCurrency(item.basePrice)}
                        </strong>
                    </div>
                    <div className='text-accent'>
                        <p>{item.description}</p>
                    </div>
                </div>
                <AddToCartButton item={item} />
            </div>
        </li>
    )
}

export default MenuItem