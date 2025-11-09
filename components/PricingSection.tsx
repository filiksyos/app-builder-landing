"use client";

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    description: 'Perfect for getting started',
    features: [
      '5 Apps',
      'Basic templates',
      'Community support',
      'Mobile responsive',
      '1 GB storage'
    ],
    popular: false
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For serious builders',
    features: [
      'Unlimited apps',
      'Premium templates',
      'Priority support',
      'Custom domain',
      '10 GB storage',
      'Advanced features',
      'Team collaboration'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For large organizations',
    features: [
      'Everything in Pro',
      'Dedicated support',
      'Custom integrations',
      'Unlimited storage',
      'SSO & security',
      'SLA guarantee',
      'White-label options'
    ],
    popular: false
  }
];

export function PricingSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="relative"
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-medium rounded-full">
              Most Popular
            </div>
          )}
          <div className={`h-full p-8 bg-white dark:bg-neutral-dark rounded-xl border-2 ${
            plan.popular 
              ? 'border-primary dark:border-primary-light shadow-xl' 
              : 'border-slate-200 dark:border-slate-700 shadow-lg'
          }`}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {plan.name}
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              {plan.description}
            </p>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-slate-900 dark:text-white">
                {plan.price}
              </span>
              <span className="ml-1 text-slate-600 dark:text-slate-300">
                {plan.period}
              </span>
            </div>
            <ul className="mt-6 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-primary dark:text-primary-light flex-shrink-0 mt-0.5" />
                  <span className="ml-3 text-slate-600 dark:text-slate-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <button className={`mt-8 w-full py-3 rounded-lg font-medium transition-colors ${
              plan.popular
                ? 'bg-primary hover:bg-primary-dark text-white'
                : 'bg-slate-100 dark:bg-neutral-darker hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
            }`}>
              Get Started
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}