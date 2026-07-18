import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Menu, X, LogIn, UserPlus, Info, Phone, ArrowRight, User, Lock, Eye, EyeOff } from 'lucide-react';

export default function Navbar({ onNavClick, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [authModal, setAuthModal] = useState(null);
  const [infoModal, setInfoModal] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Courses', id: 'courses' },
    { label: 'Instructors', id: 'instructors' },
    { label: 'Pricing & FAQ', id: 'pricing-faq' },
  ];

  const handleLinkClick = (id) => {
    onNavClick(id);
    setIsOpen(false);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setAuthModal(null);
      setFormSubmitted(false);
      setEmail('');
      setPassword('');
      setName('');
    }, 2000);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setInfoModal(null);
      setFormSubmitted(false);
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }, 2000);
  };

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => handleLinkClick('home')}
            >
              <div className="p-2 bg-indigo-600 rounded-xl text-white shadow-indigo-200 shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold font-sans tracking-tight text-slate-900">
                Edu<span className="text-indigo-600">Pulse</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`font-sans text-sm font-medium transition-colors hover:text-indigo-600 relative py-1 ${
                    activeSection === item.id ? 'text-indigo-600' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}

              {/* Auxiliary Modal Links */}
              <button
                onClick={() => setInfoModal('about')}
                className="font-sans text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => setInfoModal('contact')}
                className="font-sans text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setAuthModal('login')}
                className="flex items-center space-x-1 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </button>
              <button
                onClick={() => setAuthModal('signup')}
                className="flex items-center space-x-1 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-md shadow-indigo-100 hover:shadow-indigo-200"
              >
                <UserPlus className="w-4 h-4" />
                <span>Get Started</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-indigo-600 hover:bg-slate-50 focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`block w-full text-left px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                      activeSection === item.id
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Secondary Mobile links */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setInfoModal('about');
                  }}
                  className="block w-full text-left px-4 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                >
                  About Us
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setInfoModal('contact');
                  }}
                  className="block w-full text-left px-4 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                >
                  Contact Support
                </button>

                <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setAuthModal('login');
                    }}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-base font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Sign In</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setAuthModal('signup');
                    }}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md transition-colors"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Get Started</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Auth Modal (Login / Sign Up) */}
      <AnimatePresence>
        {authModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAuthModal(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 p-6 sm:p-8"
            >
              <button
                onClick={() => setAuthModal(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <div className="inline-flex p-3 bg-indigo-50 text-indigo-600 rounded-2xl mb-3">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {authModal === 'login' ? 'Welcome Back!' : 'Create Your Account'}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {authModal === 'login'
                    ? 'Sign in to access your dashboard and courses'
                    : 'Start your learning journey with EduPulse today'}
                </p>
              </div>

              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4" />
                  <p className="text-indigo-600 font-semibold text-lg">
                    {authModal === 'login' ? 'Signing you in...' : 'Registering account...'}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">
                    Connecting to secure platform servers
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAuthSubmit} className="space-y-4">
                  {authModal === 'signup' && (
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="Jane Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all text-slate-800"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <LogIn className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all text-slate-800"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {authModal === 'login' && (
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="text-xs font-semibold text-indigo-600 hover:underline"
                      >
                        Forgot Password?
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-md shadow-indigo-100 flex items-center justify-center space-x-2"
                  >
                    <span>{authModal === 'login' ? 'Sign In' : 'Create Account'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-500">
                  {authModal === 'login' ? (
                    <>
                      Don't have an account?{' '}
                      <button
                        onClick={() => setAuthModal('signup')}
                        className="font-bold text-indigo-600 hover:underline"
                      >
                        Sign Up
                      </button>
                    </>
                  ) : (
                    <>
                      Already have an account?{' '}
                      <button
                        onClick={() => setAuthModal('login')}
                        className="font-bold text-indigo-600 hover:underline"
                      >
                        Sign In
                      </button>
                    </>
                  )}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {infoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInfoModal(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 p-6 sm:p-8"
            >
              <button
                onClick={() => setInfoModal(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              {infoModal === 'about' ? (
                <div>
                  <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-2xl mb-4">
                    <Info className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">About EduPulse</h3>
                  <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                    <p>
                      Founded in 2024, EduPulse is a leading online learning environment dedicated to making masterclass-quality education accessible globally. We partner with elite industry practitioners to publish curated, highly practical bootcamps.
                    </p>
                    <p>
                      Our curriculum is built on an **active-learning model**, fusing video lectures with actual sandboxed workspace trials, community feedback circles, and direct instructor reviews.
                    </p>
                    <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                      <div className="p-3 bg-slate-50 rounded-xl">
                        <div className="text-xl font-bold text-indigo-600">25K+</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Students</div>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl">
                        <div className="text-xl font-bold text-indigo-600">50+</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Courses</div>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl">
                        <div className="text-xl font-bold text-indigo-600">4.9★</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Avg Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="inline-flex p-3 bg-amber-50 text-amber-600 rounded-2xl mb-4">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Contact Support</h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Have questions about our syllabus or pricing tiers? Drop us a line.
                  </p>

                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center bg-slate-50 rounded-2xl">
                      <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">✓</div>
                      <p className="text-slate-800 font-semibold">Inquiry Sent Successfully!</p>
                      <p className="text-slate-500 text-xs mt-1">Our academic guides will follow up in 12-24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all text-slate-800"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all text-slate-800"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                          Your Message
                        </label>
                        <textarea
                          required
                          rows={3}
                          placeholder="Write your questions here..."
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all text-slate-800 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-md shadow-indigo-100 flex items-center justify-center space-x-2"
                      >
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
