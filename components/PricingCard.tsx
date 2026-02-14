import { ReactNode } from 'react'

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  highlight?: boolean
  comingSoon?: boolean
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  highlight = false,
  comingSoon = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border-2 ${
        highlight 
          ? 'border-primary-500 shadow-2xl scale-105 bg-gradient-to-br from-primary-50 to-accent-50' 
          : 'border-gray-200'
      } hover:shadow-xl transition-all transform hover:-translate-y-1`}
    >
      {comingSoon && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-accent-500 to-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
          Coming Soon
        </div>
      )}
      {highlight && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className={`text-2xl font-bold mb-2 ${highlight ? 'bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent' : 'text-gray-900'}`}>
          {name}
        </h3>
        <div className="flex items-baseline gap-2 mb-2">
          <span className={`text-4xl font-bold ${highlight ? 'bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent' : 'text-gray-900'}`}>
            {price}
          </span>
        </div>
        <p className="text-gray-700 font-medium">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${highlight ? 'text-primary-600' : 'text-teal-600'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-700 font-medium">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`block w-full text-center py-4 px-6 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
          highlight
            ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-700 hover:to-accent-700'
            : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900 hover:from-gray-300 hover:to-gray-400'
        }`}
      >
        {cta}
      </a>
    </div>
  )
}
