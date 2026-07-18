import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ChevronDown } from 'lucide-react';
import { courses } from '../data/courses';
import CourseCard from './CourseCard';

export default function PopularCourses({ selectedCategory, onCategoryChange }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [successEnroll, setSuccessEnroll] = useState(null);

  // States for custom details modal
  const [expandedModules, setExpandedModules] = useState([]);
  const [communityEmail, setCommunityEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEnroll = (course) => {
    setSuccessEnroll(course);
    setTimeout(() => {
      setSuccessEnroll(null);
    }, 4000);
  };

  const handleCardClick = (course) => {
    // Reset modal state on open
    setExpandedModules([]);
    setCommunityEmail('');
    setSubscribed(false);
    setSelectedCourse(course);
  };

  const toggleModule = (moduleTitle) => {
    if (expandedModules.includes(moduleTitle)) {
      setExpandedModules(prev => prev.filter(t => t !== moduleTitle));
    } else {
      setExpandedModules(prev => [...prev, moduleTitle]);
    }
  };

  const toggleAllModules = (modules) => {
    const allTitles = modules.map(m => m.moduleTitle);
    const areAllOpen = allTitles.every(title => expandedModules.includes(title));
    if (areAllOpen) {
      setExpandedModules([]);
    } else {
      setExpandedModules(allTitles);
    }
  };

  const areAllModulesOpen = (modules) => {
    return modules.every(m => expandedModules.includes(m.moduleTitle));
  };

  return (
    <section id="courses" className="py-20 bg-slate-50/30 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Course Header with Vertical Divider & View All Courses button */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 mb-16 pb-8 border-b border-slate-100">
          
          {/* Left Block: Subtitle + Main Title */}
          <div className="flex-shrink-0 space-y-1">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 block font-sans">
              Top Categories
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-sans leading-none">
              Popular Courses
            </h2>
          </div>
          
          {/* Orange Vertical Divider */}
          <div className="hidden lg:block w-[1.5px] h-16 bg-[#ff9138] self-center" />
          
          {/* Middle: Custom Description Text */}
          <div className="flex-grow max-w-2xl">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Discover focused learning paths designed for real-world results. Select a category and begin mastering the tools of modern web creation. Every category is crafted to help you grow step by step.
            </p>
          </div>

          {/* Right side: Orange View All Courses button */}
          <div className="flex-shrink-0">
            <button
              onClick={() => {
                const coursesSection = document.getElementById('courses');
                if (coursesSection) {
                  coursesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto bg-[#ff9138] hover:bg-[#e67e2a] text-white font-extrabold uppercase px-6 py-3.5 rounded-xl transition-all duration-300 shadow-sm text-xs sm:text-sm tracking-wider cursor-pointer"
            >
              View All Courses
            </button>
          </div>
        </div>

        {/* Dynamic Enrollment Success Alert banner */}
        <AnimatePresence>
          {successEnroll && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-xl mb-8 flex items-start justify-between"
            >
              <div className="flex space-x-3">
                <div className="p-1 bg-emerald-500 rounded-lg text-white">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Successfully Registered!</h4>
                  <p className="text-slate-600 text-xs mt-0.5">
                    Welcome aboard to <span className="font-bold">"{successEnroll.title}"</span>. We have sent the initial syllabus to your mailbox.
                  </p>
                </div>
              </div>
              <button onClick={() => setSuccessEnroll(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Courses Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEnroll={handleEnroll}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      {/* Course Detail Modal Dialog */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]"
            >
              {/* Close Button floating at top right */}
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-slate-900/50 backdrop-blur-md text-white hover:bg-slate-900/80 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Modal Content */}
              <div className="p-6 sm:p-12 overflow-y-auto space-y-8">
                
                {/* Course Thumbnail Image */}
                <div className="relative aspect-video w-full bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src={selectedCourse.image}
                    alt={selectedCourse.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#ff9138] text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                    {selectedCourse.category}
                  </div>
                </div>

                {/* Course Description Section */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
                    Course Description
                  </h3>
                  <div className="space-y-4 text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                    {selectedCourse.detailedDescription.split('\n\n').map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Key Concepts Covered Include */}
                <div className="space-y-3">
                  <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 font-sans">
                    Key Concepts Covered Include:
                  </h4>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
                    {selectedCourse.keyConcepts.map((concept, idx) => (
                      <li key={idx}>{concept}</li>
                    ))}
                  </ul>
                  {selectedCourse.extraDescription && (
                    <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed mt-4">
                      {selectedCourse.extraDescription}
                    </p>
                  )}
                </div>

                {/* Course Content Section */}
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                    <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans">
                      Course Content
                    </h4>
                    <button
                      onClick={() => toggleAllModules(selectedCourse.modules)}
                      className="bg-[#ff9138] hover:bg-[#e67e2a] text-white font-extrabold text-xs px-4 py-2 rounded-full transition-all duration-300 shadow-sm flex items-center space-x-1 uppercase tracking-wider cursor-pointer"
                    >
                      <span>{areAllModulesOpen(selectedCourse.modules) ? 'Collapse All' : 'Expand All'}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${areAllModulesOpen(selectedCourse.modules) ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {selectedCourse.modules.map((module) => {
                      const isExpanded = expandedModules.includes(module.moduleTitle);
                      return (
                        <div
                          key={module.moduleTitle}
                          className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                            isExpanded
                              ? 'border-slate-200 bg-white shadow-sm'
                              : 'border-slate-100 bg-white hover:border-slate-200'
                          }`}
                        >
                          {/* Module Accordion Header */}
                          <button
                            onClick={() => toggleModule(module.moduleTitle)}
                            className="w-full flex items-center justify-between p-5 text-left cursor-pointer focus:outline-none"
                          >
                            <div className="flex items-center space-x-4 pr-4">
                              {/* Circle outline icon */}
                              <div className="w-5 h-5 rounded-full border-2 border-slate-200 flex-shrink-0 bg-white" />
                              <div>
                                <span className="text-sm sm:text-base font-bold text-slate-700 block leading-snug">
                                  {module.moduleTitle}
                                </span>
                                <span className="text-xs text-slate-400 font-medium">
                                  {module.topicsCount} Topics
                                </span>
                              </div>
                            </div>

                            {/* Expand toggle trigger */}
                            <div className="flex items-center space-x-1.5 text-xs font-extrabold text-[#ff9138] flex-shrink-0">
                              <span className="uppercase tracking-wider hidden sm:inline">
                                {isExpanded ? 'Collapse' : 'Expand'}
                              </span>
                              <div className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center">
                                <ChevronDown
                                  className={`w-3 h-3 text-[#ff9138] transition-transform duration-300 ${
                                    isExpanded ? 'rotate-180' : 'rotate-0'
                                  }`}
                                />
                              </div>
                            </div>
                          </button>

                          {/* Module Topics content */}
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                              >
                                <div className="px-5 pb-5 pl-14 sm:pl-14 border-t border-slate-50 pt-3 bg-slate-50/20 space-y-2">
                                  {module.topics.map((topic, tIdx) => (
                                    <div key={tIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                                      <span className="w-1.5 h-1.5 bg-[#ff9138] rounded-full mt-1.5 flex-shrink-0" />
                                      <span>{topic}</span>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Join Our Community Newsletter */}
                <div className="border-t border-slate-100 pt-10 mt-12 mb-4 text-center">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
                    Join Our Community
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-lg mx-auto leading-relaxed">
                    Enter your email address to register to our newsletter subscription delivered on regular basis!
                  </p>

                  {subscribed ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-6 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl max-w-md mx-auto flex items-center justify-center space-x-2 text-emerald-800 text-xs sm:text-sm font-bold"
                    >
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Thank you for subscribing to our newsletter!</span>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (communityEmail.trim()) {
                          setSubscribed(true);
                          setCommunityEmail('');
                        }
                      }}
                      className="mt-6 flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-md mx-auto"
                    >
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={communityEmail}
                        onChange={(e) => setCommunityEmail(e.target.value)}
                        className="flex-grow border border-slate-200 bg-slate-50 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff9138] focus:bg-white transition-all font-sans"
                      />
                      <button
                        type="submit"
                        className="bg-[#ff9138] hover:bg-[#e67e2a] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap"
                      >
                        SUBSCRIBE
                      </button>
                    </form>
                  )}
                </div>

              </div>

              {/* Action Banner Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between flex-shrink-0">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Lifetime Access Price
                  </span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-extrabold text-slate-950">${selectedCourse.price}</span>
                    <span className="text-xs text-slate-400 line-through">${selectedCourse.originalPrice}</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      setSelectedCourse(null);
                    }}
                    className="px-5 py-3 border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold text-sm rounded-xl transition-all cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      handleEnroll(selectedCourse);
                      setSelectedCourse(null);
                    }}
                    className="px-6 py-3 bg-[#ff9138] hover:bg-[#e67e2a] text-white font-bold text-sm rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    Enroll & Start Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
