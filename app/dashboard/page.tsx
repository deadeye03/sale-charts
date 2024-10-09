import React from 'react'
import SaleLineChart from '@/components/sale-info/SaleLineChart'
import SalesDataForm from '@/components/sale-info/SalesDataForm'
import { getSalesData } from '../saleAction'
import { category } from '@prisma/client'
import SaleBarChart from '@/components/sale-info/SaleBarChart'
import SalePieChart from '@/components/sale-info/SalePieChart'


type dataProps = {
  revenue: number,
  productCategory: category,
  region: string,
  date: Date,
}
async function page() {
  const data: dataProps[] = await getSalesData();
  
  return (
    <div className='text-black dark:text-slate-600'>
      <div className=' flex justify-between'>
        <h1 className='text-2xl mb-8 font-sans font-semibold md:mb-12 md:text-5xl'>Sales Data Visualization</h1>
        <SalesDataForm />
       
      </div>
      {/* this is line chart */}

      <SaleLineChart data={data} />

      {/* bar chart */}
      <SaleBarChart data={data} />

      {/* pie chart */}
      <SalePieChart data={data} />
    </div>
  )
}

export default page
