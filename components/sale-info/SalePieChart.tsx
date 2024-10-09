"use client"

import React, { useMemo } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

type SalesData = {
  date: Date
  revenue: number
  productCategory: string
  region: string
}

type SalesChartProps = {
  data: SalesData[]
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export default function SalePieChart({ data }: SalesChartProps) {
  const { chartData, totalRevenue } = useMemo(() => {
    const categoryTotals = data.reduce((acc, sale) => {
      acc[sale.productCategory] = (acc[sale.productCategory] || 0) + sale.revenue
      return acc
    }, {} as Record<string, number>)

    const chartData = Object.entries(categoryTotals).map(([name, value]) => ({ name, value }))
    const totalRevenue = chartData.reduce((sum, item) => sum + item.value, 0)

    return { chartData, totalRevenue }
  }, [data])

  const downloadCSV = () => {
    const headers = ['Date', 'Revenue', 'Product Category', 'Region']
    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        [
          new Date(row.date).toISOString().split('T')[0],
          row.revenue,
          row.productCategory,
          row.region
        ].join(',')
      )
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', 'sales_data.csv')
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  if (chartData.length === 0) {
    return <div>No data available</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Sales by Product Category</span>
          
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold">Total Revenue</h3>
          <p className="text-3xl font-bold text-green-600">${totalRevenue.toFixed(2)}</p>
        </div>
        <ResponsiveContainer width="100%" height={400} className='h-[300px] w-[300px]'>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}