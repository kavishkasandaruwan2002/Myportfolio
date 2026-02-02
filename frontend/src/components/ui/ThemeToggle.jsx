import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.button
      onClick={toggleDarkMode}
      className="relative flex items-center justify-between w-16 h-8 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 p-1 shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-background"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Toggle Circle */}
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center z-10"
        initial={false}
        animate={{
          x: darkMode ? 32 : 0,
          rotate: darkMode ? 360 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {darkMode ? (
          <Moon className="w-3.5 h-3.5 text-primary-600" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-primary-600" />
        )}
      </motion.div>

      {/* Background Icons (subtle) */}
      <div className="flex items-center justify-between w-full px-2">
        <motion.div
          initial={false}
          animate={{
            opacity: darkMode ? 0.3 : 1,
            scale: darkMode ? 0.8 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="w-4 h-4 text-white" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            opacity: darkMode ? 1 : 0.3,
            scale: darkMode ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="w-4 h-4 text-white" />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;





