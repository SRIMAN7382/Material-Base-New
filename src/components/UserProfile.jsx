import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LogOut, Mail, Calendar, ChevronDown } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const UserProfile = () => {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  if (!user) return null

  const handleLogout = () => {
    logout()
    setIsOpen(false)
  }

  return (
    <div className="relative">
      {/* Profile Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-gradient-to-r from-white/80 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-full shadow-xl border dark:border-gray-700 px-3 py-2 hover:shadow-2xl transition-all duration-300 backdrop-blur"
      >
        <img
          src={user.picture}
          alt={user.name}
          className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600"
        />
        <span className="hidden md:block text-sm font-semibold text-gray-800 dark:text-gray-200">
          {user.name.split(' ')[0]}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border dark:border-gray-700 z-50 overflow-hidden"
            >
              {/* User Info Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-5 text-white relative">
                <div className="flex items-center space-x-4">
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="w-14 h-14 rounded-full border-2 border-white/30 shadow-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold truncate">{user.name}</h3>
                    <p className="text-sm text-indigo-100 truncate">{user.email}</p>
                    <p className="text-xs text-indigo-200">SASTRA University</p>
                  </div>
                </div>
              </div>

              {/* User Details */}
              <div className="py-4 space-y-3">
                <div className="px-5 space-y-3">
                  <div className="flex items-center space-x-4 text-sm text-gray-700 dark:text-gray-300">
                    <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40">
                      <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-300" />
                    </div>
                    <span className="font-medium">Verified College Account</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-700 dark:text-gray-300">
                    <div className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40">
                      <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-300" />
                    </div>
                    <span className="font-medium">Logged in: {new Date(user.loginTime).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="border-t dark:border-gray-700 mt-2 pt-2">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-4 px-5 py-4 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 rounded-b-3xl"
                  >
                    <div className="p-2 rounded-full bg-red-100 dark:bg-red-900/40">
                      <LogOut className="w-4 h-4 text-red-600 dark:text-red-400" />
                    </div>
                    <span className="font-semibold">Sign Out</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default UserProfile