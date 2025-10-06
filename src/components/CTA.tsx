
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.13,
              },
            },
          }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-green-700 text-sm font-medium font-thicccboi">Beta Access Available</span>
            </div>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-thicccboi text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            Ready to revolutionize your
            <br />
            workflow?
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-thicccboi"
            initial={{ opacity: 0, y: 30 }}
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
            }}
          >
            Be among the first to experience Timeloom's powerful global tagging system. 
            Join our beta and help shape the future of productivity tools.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
            }}
          >
            <a href="https://app.timeloom.xyz/" className="group bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 font-semibold text-lg flex items-center gap-2 hover:scale-105 shadow-lg hover:shadow-xl font-thicccboi">
              Get access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="bg-gray-100 text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold text-lg hover:scale-105 font-thicccboi">
              Book a call
            </button>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-500 font-thicccboi"
            initial={{ opacity: 0, y: 20 }}
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } },
            }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Free beta access</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Early adopter benefits</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm">Shape the product</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
