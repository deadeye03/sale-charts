"use server"

import prisma from "@/lib/prisma"
import { category } from "@prisma/client"
import { revalidatePath } from "next/cache"


export const addRevenue = async (revenue: number, productCategory: category, region: string,date:Date) => {
    console.log('category is ',productCategory)
    try {
        const saleData = await prisma.salesData.create({
            data: {
                revenue,
                productCategory,
                region,
                date
            }
        })
        //if data is successfull added return true
        revalidatePath('/dashboard')
        return true;
    } catch (error) {
        console.log('Error during creating Data',error);
        return false;
    }
}

export const getSalesData=async()=>{
    try {
        const salesData=await prisma.salesData.findMany({
            orderBy:{
                date:'asc'
            }
        })
        return salesData;
        
    } catch (error:any) {
        console.log('unable to get data',error)
        throw new Error('unable ot get Data',error)
    }
}