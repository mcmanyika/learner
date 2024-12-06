import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "20+ years of experience in online development",
  "24/7 dedicated support team",
  "Regular updates and feature improvements",
  "Customizable solutions for your needs",
  "Data security and privacy compliance"
];

export function AboutUs() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:pr-8 lg:pt-4"
          >
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">About Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Empowering Education Through Technology
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Smart Learner, we're passionate about transforming education through innovative technology solutions. 
                Our mission is to make education management simpler, more efficient, and more effective.
              </p>
              <dl className="mt-10 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-9"
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <CheckCircle2 className="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true" />
                    </dt>
                    <dd className="inline">{benefit}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              src="https://firebasestorage.googleapis.com/v0/b/glenview2-b3d45.appspot.com/o/general%2Fweb%2Fstudents%2FDSC_8739.jpg?alt=media&token=4c1ad891-71f2-4ba0-8bf0-5ab698df5e95"
              alt="Team collaboration"
              className="rounded-xl bg-gray-900/5 object-cover w-full h-full max-h-80"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              src="https://firebasestorage.googleapis.com/v0/b/divaris-3e59f.appspot.com/o/images%2FDSC_5873.jpg?alt=media&token=4e9e2efa-bc11-4c7e-944e-dc63b5209f51"
              alt="Office space"
              className="rounded-xl bg-gray-900/5 object-cover w-full h-full max-h-80"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 