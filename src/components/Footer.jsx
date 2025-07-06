import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Sparkles } from 'lucide-react'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-10 transition-colors duration-500 shadow-inner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          {/* Logo + Title */}
          <div className="flex items-center justify-center space-x-3">
            <motion.div
              whileHover={{ rotate: 20, scale: 1.2 }}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
            >
              <BookOpen className="w-7 h-7 text-primary" />
            </motion.div>
            <motion.h1
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-md"
            >
              Material Base
            </motion.h1>
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-70"></div>

          {/* Copyright */}
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Material Base. All rights reserved.
          </p>

          {/* Content Credits */}
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-2">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span>Content curated from</span>
            <a
              href="https://instagram.com/materialhub_sastra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-blue-400 font-medium transition-colors duration-200"
            >
              Material Hub
            </a>
            <motion.div
              whileHover={{ scale: 1.4, rotate: -20 }}
              className="inline-flex"
            >
              <Heart className="w-4 h-4 text-red-500" />
            </motion.div>
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
