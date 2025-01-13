"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogFooter,
    DialogHeader,
    DialogContent,
    DialogDescription,
    DialogTrigger,
    DialogTitle
} from '../ui/dialog'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from 'next/image'
import { Label } from '../ui/label'
import { fromatCurrency } from '@/lib/formatters'
import { Checkbox } from '../ui/checkbox'

const sizes = [
    { id: crypto.randomUUID(), name: "Small", price: 0 },
    { id: crypto.randomUUID(), name: "Medium", price: 4 },
    { id: crypto.randomUUID(), name: "Small", price: 8 },

]

const extras = [
    { id: crypto.randomUUID(), name: "Cheese", price: 3 },
    { id: crypto.randomUUID(), name: "Onion", price: 1 },
    { id: crypto.randomUUID(), name: "Tomato", price: 2 },
]

function AddToCartButton({ item }: { item: any }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button type='button' size='lg' className='text-white'>Add to cart</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
                <DialogHeader className='flex items-center'>
                    <Image src={item.image} alt={item.name} width={200} height={200} />
                    <DialogTitle className='!mt-5'>{item.name}</DialogTitle>
                    <DialogDescription>
                        {item.description}
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-10">
                    <div className='space-y-4 text-center'>
                        <Label htmlFor='pick-size'>Pick your size</Label>
                        <PickSize sizes={sizes} item={item} />
                    </div>
                    <div className='space-y-4 text-center'>
                        <Label>Any extras?</Label>
                        <Extras extras={extras} item={item} />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" className='w-full h-10'>Add to cart </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

}



function PickSize({ sizes, item }: { sizes: any, item: any }) {

    return (
        <RadioGroup defaultValue="comfortable">
            {sizes.map((size) => (
                <label htmlFor={size.id} key={size.id} className="flex items-center space-x-2 p-4 border-gray-200 border-2 rounded-md">
                    <RadioGroupItem value="default" id={size.id} />
                    <Label htmlFor={size.id}>{size.name} {fromatCurrency(size.price + item.basePrice)}</Label>
                </label>
            ))}
        </RadioGroup>
    )
}

function Extras({ extras, item }: { extras: any, item: any }) {

    return (
        extras.map((extra) => (
            <label htmlFor={extra.id} key={extra.id} className='flex items-center space-x-2 p-4 border-gray-200 border-2 rounded-md mt-2'>
                <Checkbox id={extra.id} />
                <label htmlFor={extra.id} className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed'>{extra.name} {fromatCurrency(extra.price + item.basePrice)}</label>
            </label>
        ))
    )
}


export default AddToCartButton