"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Download } from 'lucide-react'

type SalesData = {
  date: Date
  revenue: number
  productCategory: string
  region: string
}

type SalesChartProps = {
  data: SalesData[]
}

export default function SaleLineChart({ data }: SalesChartProps) {

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

  return (
    <Card className='mb-8'>
      <CardHeader>
        <CardTitle className='flex justify-between items-center'>Sales by Date
        {/* download csv button */}
        
        <Button onClick={()=>downloadCSV()} variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Download CSV
        </Button>

        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400} className='mb-8'>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date"
              tickFormatter={(date) => new Date(date).toLocaleDateString('en-IN')} />
            <YAxis type="number" domain={[0, 100000]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            <Line type="monotone" dataKey="region" stroke="#82ca9d" />
            <Line type="monotone" dataKey="productCategory" stroke="#b52e45" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
