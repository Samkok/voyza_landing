import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  colorIndex?: number
}

const colorVariants = [
  'from-primary-500 to-primary-600',
  'from-accent-500 to-accent-600',
  'from-teal-500 to-teal-600',
  'from-orange-500 to-orange-600',
  'from-pink-500 to-pink-600',
  'from-blue-500 to-indigo-600',
]

export default function FeatureCard({ icon, title, description, colorIndex = 0 }: FeatureCardProps) {
  const bgGradient = colorVariants[colorIndex % colorVariants.length]
  
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md border-2 border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
      <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${bgGradient} rounded-xl mb-4 shadow-lg`}>
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
