"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IoCloseCircleOutline } from "react-icons/io5";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { addRevenue } from '@/app/saleAction';
import { category } from '@prisma/client';
import toast from 'react-hot-toast';
export default function SalesDataForm() {
    const [date, setDate] = useState('')
    const [revenue, setRevenue] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [region, setRegion] = useState('')
    const [openForm, setOpenForm] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log('cateogy in client',category[productCategory as keyof typeof category])
        console.log('hii category',productCategory)
        const response = await addRevenue(parseFloat(revenue), category[productCategory as keyof typeof category], region, new Date(date))
        if (response) {
            // Reset form or show success message
            toast.success('Data is added successfully')
            setDate('')
            setRevenue('')
        }
        else{
            toast.error('Unable to add data');
        }
    }

    return (
        <div>
            <Button onClick={(prev) => setOpenForm((prev) => !prev)}> {openForm ? <span className='flex items-center justify-center gap-6'>Close <IoCloseCircleOutline className='h-6 w-6 dark:text-white' /> </span> : 'Add new revenue'}   </Button>
            {openForm && <form onSubmit={handleSubmit} className="space-y-4 mt-2 transition-all duration-500">
                <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <Input
                    type="number"
                    placeholder="Revenue"
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    required
                />
                <Select onValueChange={setProductCategory} required>
                    <SelectTrigger>
                        <SelectValue placeholder="Select product category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Electronic">Electronics</SelectItem>
                        <SelectItem value="Clothing">Clothing</SelectItem>
                        <SelectItem value="Books">Books</SelectItem>
                        <SelectItem value="Foods">Foods</SelectItem>
                        <SelectItem value="Toy">Toys</SelectItem>
                    </SelectContent>
                </Select>
                <Select onValueChange={setRegion} required>
                    <SelectTrigger>
                        <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="north">North</SelectItem>
                        <SelectItem value="south">South</SelectItem>
                        <SelectItem value="east">East</SelectItem>
                        <SelectItem value="west">West</SelectItem>
                    </SelectContent>
                </Select>
                <Button type="submit">Add Sales Data</Button>
            </form>}
        </div>
    )
}