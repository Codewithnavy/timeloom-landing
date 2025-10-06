
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Timeloom's global tagging system work?",
      answer: "Timeloom creates a unified tagging system across all your productivity tools. You can tag emails, calendar events, and project items with the same tags, then view everything related to that tag in a single dashboard view. This creates powerful connections between your different workflows."
    },
    {
      question: "Is my email and calendar data secure?",
      answer: "Yes. Timeloom only uses your email and calendar data to enable core functionality like tagging and unified dashboards. We request official Google API permissions to read and modify emails and calendar events, but we do not store the actual content of your emails or calendar entries. All processing is done locally, and only essential metadata (such as tag associations and IDs) is stored securely. Your data is transmitted over encrypted connections, and we follow strict security standards including OAuth 2.0 and regular audits. Plus, Timeloom is fully open source, so you can verify our data handling practices anytime."
    },
    {
      question: "What Google permissions does Timeloom need?",
      answer: "Timeloom requires Gmail and Google Calendar permissions to read emails, modify labels, and access calendar events. These permissions allow us to create the tagging associations, but we never store your actual email content or event details."
    },
    {
      question: "Can I use Timeloom offline?",
      answer: "Yes! Once you've synced your data, you can view your dashboard, create custom cards, and manage tags offline. However, you'll need an internet connection to sync new emails and calendar events or to update your Gmail labels."
    },
    {
      question: "Is Timeloom really open source?",
      answer: "Yes, Timeloom is completely open source! You can view our code, contribute features, report issues, and even host your own instance. We believe in transparency and community-driven development."
    },
    {
      question: "How do I get started with Timeloom?",
      answer: "Simply sign up with your Google account, grant the necessary permissions, and start tagging! Timeloom will guide you through creating your first tags and setting up your dashboard. The whole process takes less than 5 minutes."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-thicccboi text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Frequently Asked
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Questions</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 font-thicccboi"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Everything you need to know about Timeloom and how it works.
          </motion.p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4 font-thicccboi">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed font-thicccboi">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
