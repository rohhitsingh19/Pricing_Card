"use client"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$0/month",
    subtitle: "Perfect For Small Teams",
    features: ["3 Projects", "AI Applicant Screening", "AI Recruiter"],
    button: "Start Hiring",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$99/month",
    subtitle: "Perfect For Growing Teams",
    features: ["Unlimited Projects", "AI Applicant Screening", "AI Recruiter", "Risk-Free Guarantee"],
    button: "Start Hiring",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    subtitle: "For Large Organizations",
    features: ["Unlimited Projects", "AI Applicant Screening", "Custom Skill Assessments", "Custom AI Recruiter"],
    button: "Contact Us",
    highlight: false,
  },
]

export default function PricingPlans() {
  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center px-6 mb-4">Pricing plans</h2>
        <p className="text-black text-center mb-12">Choose the right plan for your needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: plan.highlight ? 1.05 : 1.03 }}
              className={`rounded-2xl shadow-lg p-6 md:p-8 flex flex-col hover:shadow-2xl transition-shadow duration-300`}
            >
             <div className="bg-white rounded-2xl flex flex-col justify-between h-full shadow-lg overflow-hidden">
  {/* Header Section */}
  <div className={`px-6 py-8 rounded-t-2xl flex flex-col ${
    plan.highlight 
      ? "bg-gradient-to-br from-indigo-300 via-white to-blue-300 border-b border-indigo-100" 
      : "bg-gradient-to-br from-gray-500 to-gray-100 border-b border-gray-200"
    }`}>
    
    {/* Plan Badge */}
    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full self-start mb-4 ${
      plan.highlight
        ? "bg-indigo-100 text-indigo-700 border border-indigo-200"
        : "bg-gray-200 text-gray-600 border border-gray-300"
    }`}>
      {plan.name}
    </span>
    
    {/* Price */}
    <h3 className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</h3>
    
    {/* Subtitle */}
    <p className={`text-sm leading-relaxed ${plan.highlight? "text-gray-700" : "text-shadow-indigo-50"} `}>{plan.subtitle}</p>
  </div>

  {/* Features List */}
  <div className="px-6 py-6 flex-grow">
    <ul className="space-y-3">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
          <span className="leading-relaxed">{feature}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* CTA Button */}
  <div className="px-6 pb-6">
    <button className={`w-full font-semibold rounded-xl py-3 px-6 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    plan.highlight 
      ? "bg-gradient-to-br from-indigo-300 via-white to-indigo-100 border-b border-indigo-200" 
      : "bg-gradient-to-br from-gray-500 to-gray-100 border-b border-gray-100"
    }`}>
      {plan.button}
    </button>
  </div>
</div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
