"use client"

import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

type SalesData = {
    date: Date
    revenue: number
    productCategory: string
    region: string
}

type SalesChartProps = {
    data: SalesData[]
}

function SaleBarChart({ data }: SalesChartProps) {
    return (
        <Card className='mb-8'>
            <CardHeader>
                <CardTitle>Sales by Revenue</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={400} className='mb-8'>
                    <BarChart width={730} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date"
                            tickFormatter={(date) => new Date(date).toLocaleDateString('en-IN')} />
                        <YAxis type="number" domain={[0, 100000]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="revenue" fill="#8884d8" />
                        <Bar dataKey="productCategory" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}

export default SaleBarChart
