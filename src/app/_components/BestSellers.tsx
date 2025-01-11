import MainHeading from '@/components/main-heading/MainHeading'
import Menu from '@/components/menu/Menu'

import React from 'react'

function BestSellers() {
    const bestSeller = [
        { id: crypto.randomUUID(), name: "Pizza 1", description: "this is a pizza", basePrice: 12, image: "/assets/images/pizza.png" },
        { id: crypto.randomUUID(), name: "Pizza 1", description: "this is a pizza", basePrice: 12, image: "/assets/images/pizza.png" },
        { id: crypto.randomUUID(), name: "Pizza 1", description: "this is a pizza", basePrice: 12, image: "/assets/images/pizza.png" },
        { id: crypto.randomUUID(), name: "Pizza 1", description: "this is a pizza", basePrice: 12, image: "/assets/images/pizza.png" },
        { id: crypto.randomUUID(), name: "Pizza 1", description: "this is a pizza", basePrice: 12, image: "/assets/images/pizza.png" },
        { id: crypto.randomUUID(), name: "Pizza 1", description: "this is a pizza", basePrice: 12, image: "/assets/images/pizza.png" },
    ]

    return (
        <section className='w-full flex justify-center section-gap'>
            <div className="container">
                <div className='text-center mb-4'>
                    <MainHeading title={"Our Best Sellers"} subtitle={"checkOut"} />
                </div>
                <Menu bestSeller={bestSeller} />
            </div>
        </section>
    )
}

export default BestSellers