import React from 'react';
import { motion } from 'motion/react';
import heroBg from '@/assets/hero_bg.jpg';

export default function Hero({ onCtaclick }) {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-36 lg:pb-32 bg-slate-900 overflow-hidden"
    >
      {/* Background Image of typing/working */}
      <div 
        className="absolute inset-0 bg-cover bg-center -z-20 scale-105 filter blur-[1px]"
        style={{
          backgroundImage: `url(${heroBg})`
        }}
      />

      {/* Teal / Ocean Blue Gradient Overlay exactly like the screenshot */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d6b79]/95 via-[#157d8c]/92 to-[#1d9bb1]/75 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl space-y-6 text-left">
          
          {/* Top Pill Badge: On-Demand Video Training */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2.5"
          >
            {/* Orange circle with white play triangle */}
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#ff9138] shadow-sm">
              <svg className="w-2.5 h-2.5 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-white text-xs sm:text-sm font-extrabold tracking-widest uppercase font-sans">
              On-Demand Video Training
            </span>
          </motion.div>

          {/* Huge Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-sans text-white tracking-tight leading-[1.1]"
          >
            Build Skills That<br />
            Build Your<br />
            Future
          </motion.h1>

          {/* Subheading text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl font-sans"
          >
            From coding basics to full website creation, everything starts right here. Gain the knowledge you need to grow, build, and succeed online.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6 pt-4 flex-wrap"
          >
            {/* Start Course Button (Orange background, rounded-full, white text, uppercase) */}
            <button
              onClick={() => onCtaclick('courses')}
              className="bg-[#ff9138] hover:bg-[#e67e2a] text-white font-extrabold uppercase px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-102 cursor-pointer text-xs sm:text-sm tracking-wider"
            >
              Start Course
            </button>

            {/* All Courses Button (Inline text-white with custom play triangle) */}
            <button
              onClick={() => onCtaclick('courses')}
              className="group text-white hover:text-amber-200 font-extrabold uppercase transition-all duration-300 flex items-center space-x-1.5 cursor-pointer text-xs sm:text-sm tracking-widest"
            >
              <svg className="w-2.5 h-2.5 text-white fill-current transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>All Courses</span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
