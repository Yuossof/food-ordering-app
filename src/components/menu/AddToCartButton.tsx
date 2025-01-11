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

const sizes = [
    { id: crypto.randomUUID, name: "Small", price: 0 },
    { id: crypto.randomUUID, name: "Medium", price: 4 },
    { id: crypto.randomUUID, name: "Small", price: 8 },

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
                        <PickSize sizes={sizes} />
                    </div>
                    <div>
                        Size
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

}



function PickSize({ sizes }: { sizes: any }) {

    return (
        <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Compact</Label>
            </div>
        </RadioGroup>
    )
}

export default AddToCartButton