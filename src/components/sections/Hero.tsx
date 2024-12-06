import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* Background gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-blue-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </motion.div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex"
            >
              <div className="relative flex items-center gap-x-2 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                Revolutionizing Education Management 
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary to-blue-600"
            >
              Transform Your Educational Institution
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Empower your institution with our comprehensive school management system. 
              Streamline operations, enhance learning experiences, and drive student success 
              with Smart Learner's cutting-edge system.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex items-center gap-x-6"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-opacity gap-2" 
                asChild
              >
                
                  <Link to="/register">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
              </Button>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
          >
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6,
                  hover: { duration: 0.2 }
                }}
                className="relative" 
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/glenview2-b3d45.appspot.com/o/general%2Fweb%2Fstudents%2FDSC_8739.jpg?alt=media&token=4c1ad891-71f2-4ba0-8bf0-5ab698df5e95"
                  alt="Student studying"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </motion.div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8,
                  hover: { duration: 0.2 }
                }}
                className="relative"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/divaris-3e59f.appspot.com/o/images%2FDSC_5873.jpg?alt=media&token=4e9e2efa-bc11-4c7e-944e-dc63b5209f51"
                  alt="Teacher in classroom"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1,
                  hover: { duration: 0.2 }
                }}
                className="relative"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/glenview2-b3d45.appspot.com/o/general%2Fweb%2Fstudents%2FDSC_8761.jpg?alt=media&token=61d6ab1f-f3e5-4e58-be6b-57501e257f94"
                  alt="School building"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}