import { motion } from 'framer-motion';

const stats = [
  { value: '12,000+', label: 'Emails managed per mo.' },
  { value: '98%', label: 'Tagging accuracy' },
  { value: '3,500', label: 'Events organized per mo.' },
  { value: 'X8', label: 'Productivity boost' },
  { value: '99.9%', label: 'Sync reliability' },
];

const StatsSection = () => {
  return (
    <section className="w-full flex flex-col items-center bg-white pt-28 md:pt-60 pb-12 px-2">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center mb-10">
        <motion.h2
          className="text-3xl md:text-4xl font-thicccboi font-extrabold text-[#1a1a1a] text-center mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Powerful productivity stats that bring real results
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-gray-500 text-center font-thicccboi mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          On average, Timeloom users achieve the following numbers
        </motion.p>
      </div>
      <motion.div
        className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {stats.slice(0, 3).map((stat) => (
          <motion.div
            key={stat.label}
            className="bg-gray-50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-10 min-h-[160px] md:min-h-[180px] md:text-left text-center md:col-span-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-5xl md:text-6xl font-thicccboi font-extrabold text-[#1a1a1a] mb-2">{stat.value}</div>
            <div className="text-lg text-gray-500 font-thicccboi text-center font-medium">{stat.label}</div>
          </motion.div>
        ))}
        <div className="md:col-span-3 flex flex-col md:flex-row gap-8 w-full mt-0">
          {stats.slice(3).map((stat) => (
            <motion.div
              key={stat.label}
              className="flex-1 bg-gray-50 rounded-2xl shadow-sm flex flex-col items-center justify-center p-10 min-h-[160px] md:min-h-[180px] md:text-left text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-5xl md:text-6xl font-thicccboi font-extrabold text-[#1a1a1a] mb-2">{stat.value}</div>
              <div className="text-lg text-gray-500 font-thicccboi text-center font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.button
        className="mt-4 px-8 py-3 rounded-xl bg-[#6349f8] text-white font-thicccboi font-bold text-lg shadow hover:bg-[#4b36c8] transition-all"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Start free trial
      </motion.button>
    </section>
  );
};

export default StatsSection; 