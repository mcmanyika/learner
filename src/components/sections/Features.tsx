import {
  Sparkles,
  BarChart3,
  Calendar,
  Users,
  MessageSquare,
  Shield,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Smart Analytics',
    description: 'Get real-time insights into student performance and institutional metrics.',
    icon: BarChart3,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'AI-Powered Learning',
    description: 'Personalized learning paths adapted to each student\'s unique needs.',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Seamless Scheduling',
    description: 'Intelligent timetabling and resource management system.',
    icon: Calendar,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Community Hub',
    description: 'Connect students, teachers, and parents in one collaborative platform.',
    icon: Users,
    gradient: 'from-orange-500 to-yellow-500'
  },
  {
    name: 'Real-time Communication',
    description: 'Instant messaging and notifications for better coordination.',
    icon: MessageSquare,
    gradient: 'from-red-500 to-rose-500'
  },
  {
    name: 'Advanced Security',
    description: 'Enterprise-grade security to protect sensitive educational data.',
    icon: Shield,
    gradient: 'from-indigo-500 to-violet-500'
  }
];

export function Features() {
  return (
    <div id="features" className="py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base font-semibold leading-7 text-primary uppercase"
          >
            Powerful Features
          </motion.h2>
        </motion.div>
        <div className="mx-auto max-w-2xl mt-10 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="flex flex-col rounded-2xl border border-gray-100 p-8 hover:shadow-lg"
              >
                <motion.dt 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "rounded-lg p-2 bg-gradient-to-br",
                      feature.gradient
                    )}
                  >
                    <feature.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </motion.div>
                  {feature.name}
                </motion.dt>
                <motion.dd 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600"
                >
                  <p className="flex-auto">{feature.description}</p>
                </motion.dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}