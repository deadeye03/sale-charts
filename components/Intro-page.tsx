"use client"

import { motion } from "framer-motion"
import { BarChart, PieChart, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function IntroPage() {
 const router=useRouter();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br bg-white text-black dark:from-gray-900 dark:to-gray-800 dark:text-white flex flex-col items-center justify-center p-4">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">Welcome to Your Dashboard</h1>
        <p className="text-xl text-gray-300">Visualize your data like never before</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <BarChart className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-semibold">Bar Charts</h2>
          <p className="text-sm text-gray-400 text-center">Compare data across categories</p>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <LineChart className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-semibold">Line Charts</h2>
          <p className="text-sm text-gray-400 text-center">Track trends over time</p>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={itemVariants}>
          <PieChart className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-semibold">Pie Charts</h2>
          <p className="text-sm text-gray-400 text-center">Visualize data distribution</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        onClick={()=>router.push('/sign-in')} data-prevent-nprogress={false} >
          Get Started
        </Button>
      </motion.div>

      <motion.p
        className="mt-8 text-gray-400 max-w-md text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Dive into your data with real-time updates, multiple widgets, and interactive charts. Your insights are just a click away!
      </motion.p>
    </div>
  )
}