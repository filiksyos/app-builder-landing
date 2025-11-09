"use client";

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link as ScrollLink } from 'react-scroll';
import { 
  Layers, 
  Zap, 
  Smartphone, 
  Code2,
  Palette,
  Database,
  Rocket,
  CheckCircle2
} from 'lucide-react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { TypewriterEffect } from '@/components/TypewriterEffect';
import { VideoModal } from '@/components/VideoModal';
import { PricingSection } from '@/components/PricingSection';
import { FeatureCard } from '@/components/FeatureCard';
import { DemoBuilder } from '@/components/DemoBuilder';

const sections = [
  { id: "hero", title: "Home" },
  { id: "features", title: "Features" },
  { id: "builder", title: "Builder" },
  { id: "pricing", title: "Pricing" },
  { id: "cta", title: "Get Started" }
];

const features = [
  {
    title: "Drag & Drop Builder",
    description: "Build your app visually with our intuitive drag-and-drop interface",
    icon: <Layers className="h-6 w-6 text-primary" />,
    bgGradient: "from-blue-500/10 to-purple-500/10"
  },
  {
    title: "Lightning Fast",
    description: "Deploy your apps instantly with optimized performance out of the box",
    icon: <Zap className="h-6 w-6 text-primary" />,
    bgGradient: "from-yellow-500/10 to-orange-500/10"
  },
  {
    title: "Mobile Responsive",
    description: "Your apps look perfect on any device, automatically",
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    bgGradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    title: "No Code Required",
    description: "Build powerful applications without writing a single line of code",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    bgGradient: "from-pink-500/10 to-rose-500/10"
  },
  {
    title: "Beautiful Templates",
    description: "Start with professionally designed templates and customize them",
    icon: <Palette className="h-6 w-6 text-primary" />,
    bgGradient: "from-violet-500/10 to-purple-500/10"
  },
  {
    title: "Database Integration",
    description: "Connect to any database and manage your data seamlessly",
    icon: <Database className="h-6 w-6 text-primary" />,
    bgGradient: "from-cyan-500/10 to-blue-500/10"
  }
];

const buildSteps = [
  "Design your interface",
  "Connect your data",
  "Customize logic",
  "Deploy instantly"
];

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] relative">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-darker/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">AppBuilder</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <ScrollLink
                  key={section.id}
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => setActiveSection(section.id)}
                  className={`cursor-pointer transition-colors ${
                    activeSection === section.id
                      ? 'text-primary dark:text-primary-light font-medium'
                      : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light'
                  }`}
                >
                  {section.title}
                </ScrollLink>
              ))}
            </div>
            <button className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-accent-light/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pt-20 pb-16 sm:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
                <span className="block">Build Apps Without Code</span>
                <span className="block text-primary dark:text-primary-light mt-2">Launch in Minutes</span>
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                Create professional applications with our powerful drag-and-drop builder.
                No coding skills required. Just drag, drop, and deploy.
              </p>
              
              <div className="mt-10 flex gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Watch Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white dark:bg-neutral-dark hover:bg-slate-50 dark:hover:bg-neutral-darker text-primary dark:text-primary-light border-2 border-primary dark:border-primary-light rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Start Building
                </motion.button>
              </div>
            </motion.div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <pre className="relative rounded-xl bg-slate-900 p-8 shadow-2xl">
                  <code className="text-sm sm:text-base text-slate-100">
                    <TypewriterEffect text={`// Build Your Dream App\nconst app = useAppBuilder({\n  name: 'MyApp',\n  features: ['auth', 'database', 'api']\n});\n\napp.deploy({\n  platform: 'cloud',\n  status: '🚀 Live in 60 seconds'\n});`} />
                  </code>
                </pre>
              </motion.div>

              <div className="grid grid-cols-1 gap-4">
                {buildSteps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative p-4 bg-white/5 dark:bg-neutral-dark border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm rounded-xl shadow-lg"
                  >
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary dark:bg-primary-light text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div className="ml-8">
                      <h3 className="font-semibold text-slate-900 dark:text-white">{step}</h3>
                      <div className="flex items-center mt-1">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm text-slate-600 dark:text-slate-300">Ready to use</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-20 bg-white dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              className="text-3xl font-bold text-slate-900 dark:text-white"
            >
              Everything You Need to Build Amazing Apps
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-slate-600 dark:text-slate-300"
            >
              Powerful features that make app building simple and fun
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} inView={featuresInView} />
            ))}
          </div>
        </div>
      </section>

      {/* Builder Demo Section */}
      <section id="builder" className="py-20 bg-slate-50 dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              See the Builder in Action
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Drag, drop, and watch your app come to life
            </p>
          </div>

          <DemoBuilder />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white dark:bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Choose the plan that works for you
            </p>
          </div>

          <PricingSection />
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-2xl p-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="relative text-center">
              <h2 className="text-3xl font-bold text-white">
                Ready to Build Your Dream App?
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Join thousands of creators building apps without code
              </p>
              
              <div className="mt-10 flex gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white hover:bg-slate-100 text-primary rounded-lg shadow-lg hover:shadow-xl transition-all font-medium"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-lg transition-all font-medium"
                >
                  Watch Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-darker py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Rocket className="h-6 w-6 text-primary-light" />
              <span className="text-lg font-bold text-white">AppBuilder</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-primary-light transition-colors">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-light transition-colors">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-light transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-slate-400 text-sm">
            © 2025 AppBuilder. Built with ❤️ using Next.js
          </div>
        </div>
      </footer>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="dQw4w9WgXcQ"
      />
    </div>
  );
}