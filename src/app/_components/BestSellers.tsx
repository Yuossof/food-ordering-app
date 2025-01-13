import MainHeading from '@/components/main-heading/MainHeading'
import Menu from '@/components/menu/Menu'
import { db } from '@/lib/prisma'
import React from 'react'

async function BestSellers() {
    const bestSeller = await db.product.findMany()

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