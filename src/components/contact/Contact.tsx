import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-purple-600 to-pink-600 flex items-center justify-center py-12 px-6 lg:px-20 text-white">
      <div className="w-full max-w-4xl bg-opacity-90 backdrop-blur-md p-8 rounded-lg shadow-2xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 bg-opacity-80 border-0 text-white focus:ring-4 focus:ring-indigo-400 transition duration-300"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 bg-opacity-80 border-0 text-white focus:ring-4 focus:ring-indigo-400 transition duration-300"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-gray-900 bg-opacity-80 border-0 text-white focus:ring-4 focus:ring-indigo-400 transition duration-300"
                rows={5}
                placeholder="Your Message"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-lg font-semibold rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-pink-300">Contact Information</h3>
            <p className="text-gray-200">
              Feel free to reach out via email, phone.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-indigo-300 text-lg">📧</span>
                <span>meskatabusayed@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-300 text-lg">📞</span>
                <span>+8801754759899</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-yellow-300 text-lg">📍</span>
                <span>Kushtia , Bangladesh</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
