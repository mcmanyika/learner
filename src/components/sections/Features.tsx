import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { 
  GraduationCap, 
  LineChart, 
  Calendar,  
  CreditCard, 
  Users,
  Bell
} from 'lucide-react';

const features = [
  {
    name: 'Student Management',
    description: 'Comprehensive student profiles, attendance tracking, and academic progress monitoring.',
    icon: GraduationCap,
    bgColor: 'bg-blue-500',
    hoverColor: 'group-hover:bg-blue-600',
  },
  {
    name: 'Analytics & Reporting',
    description: 'Detailed insights into academic performance, attendance patterns, and institutional metrics.',
    icon: LineChart,
    bgColor: 'bg-green-500',
    hoverColor: 'group-hover:bg-green-600',
  },
  {
    name: 'Schedule Management',
    description: 'Efficient timetable creation and management for classes, teachers, and resources.',
    icon: Calendar,
    bgColor: 'bg-purple-500',
    hoverColor: 'group-hover:bg-purple-600',
  },
  {
    name: 'Fee Management',
    description: 'Streamlined fee collection, tracking, and automated payment reminders.',
    icon: CreditCard,
    bgColor: 'bg-orange-500',
    hoverColor: 'group-hover:bg-orange-600',
  },
  {
    name: 'Staff Management',
    description: 'Complete HR management system for teaching and non-teaching staff.',
    icon: Users,
    bgColor: 'bg-teal-500',
    hoverColor: 'group-hover:bg-teal-600',
  },
  {
    name: 'Notifications',
    description: 'Real-time alerts and notifications for important updates and events.',
    icon: Bell,
    bgColor: 'bg-indigo-500',
    hoverColor: 'group-hover:bg-indigo-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Features() {
  useEffect(() => {
    // Handle direct navigation to #features
    if (window.location.hash === '#features') {
      const element = document.getElementById('features');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <section 
      id='features' 
      className="bg-white py-24 sm:py-32 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">
            Comprehensive Solution
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your institution
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform provides all the tools and features needed to streamline your educational institution's operations
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div 
                key={feature.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col rounded-xl border border-gray-200 p-6 hover:shadow-lg"
              >
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 ${feature.bgColor} ${feature.hoverColor}`}>
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}