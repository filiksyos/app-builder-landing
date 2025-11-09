"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  bgGradient: string;
  index: number;
  inView: boolean;
}

export function FeatureCard({ title, description, icon, bgGradient, index, inView }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="relative p-6 bg-white dark:bg-neutral-dark rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-colors shadow-lg">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}