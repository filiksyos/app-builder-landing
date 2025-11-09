"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Square, Type, Image as ImageIcon, Layout } from 'lucide-react';

const components = [
  { id: 'button', icon: Square, label: 'Button', color: 'bg-blue-500' },
  { id: 'text', icon: Type, label: 'Text', color: 'bg-green-500' },
  { id: 'image', icon: ImageIcon, label: 'Image', color: 'bg-purple-500' },
  { id: 'container', icon: Layout, label: 'Container', color: 'bg-orange-500' }
];

export function DemoBuilder() {
  const [droppedComponents, setDroppedComponents] = useState<string[]>([]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Component Palette */}
      <div className="lg:col-span-1">
        <div className="bg-white dark:bg-neutral-dark rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
            Components
          </h3>
          <div className="space-y-3">
            {components.map((component) => {
              const Icon = component.icon;
              return (
                <motion.div
                  key={component.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDroppedComponents([...droppedComponents, component.id])}
                  className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-neutral-darker rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className={`${component.color} p-2 rounded-lg`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-slate-900 dark:text-white">
                    {component.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Canvas */}
      <div className="lg:col-span-3">
        <div className="bg-white dark:bg-neutral-dark rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600 p-8 min-h-[400px] shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Canvas
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Click components to add them to your app
            </p>
          </div>
          
          <div className="space-y-4">
            {droppedComponents.length === 0 ? (
              <div className="flex items-center justify-center h-64 text-slate-400 dark:text-slate-500">
                <div className="text-center">
                  <Layout className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Start building by clicking components</p>
                </div>
              </div>
            ) : (
              droppedComponents.map((componentId, index) => {
                const component = components.find(c => c.id === componentId);
                const Icon = component?.icon || Square;
                return (
                  <motion.div
                    key={`${componentId}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`flex items-center space-x-3 p-4 ${component?.color || 'bg-slate-500'}/10 rounded-lg border border-slate-200 dark:border-slate-700`}
                  >
                    <div className={`${component?.color || 'bg-slate-500'} p-2 rounded`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {component?.label || 'Component'} {droppedComponents.filter(id => id === componentId).length > 1 ? `#${droppedComponents.slice(0, index + 1).filter(id => id === componentId).length}` : ''}
                    </span>
                  </motion.div>
                );
              })
            )}
          </div>

          {droppedComponents.length > 0 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setDroppedComponents([])}
              className="mt-6 w-full py-2 bg-slate-100 dark:bg-neutral-darker hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg transition-colors"
            >
              Clear Canvas
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}