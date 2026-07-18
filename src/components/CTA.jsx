import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, Send, Mail } from 'lucide-react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      {/* Decorative background vectors */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white relative overflow-hidden border border-slate-800 shadow-2xl">
          {/* Animated decorative sparks */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600 rounded-full blur-3xl opacity-30" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-600 rounded-full blur-3xl opacity-20" />

          <div className="max-w-2xl mx-auto space-y-6 relative">
            <div className="inline-flex items-center space-x-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 fill-current animate-pulse text-indigo-400" />
              <span>Limited Offer: Get 20% Off Annual Subscriptions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans">
              Start Your Journey to Industry Mastery
            </h2>

            <p className="text-slate-400 text-xs sm:text-sm md:text-base font-normal leading-relaxed">
              Join over 25,000+ engineers, designers, and marketers who have accelerated their professional career with our vetted masterclasses.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="pt-4 max-w-md mx-auto">
              <AnimatePresence mode="wait">
                {subscribed ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="p-4 bg-emerald-50/10 border border-emerald-500/20 rounded-2xl text-emerald-300 flex items-center justify-center space-x-2 text-xs sm:text-sm font-semibold"
                  >
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>Inquiry sent! Enjoy your 20% syllabus voucher.</span>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubscribe}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col sm:flex-row gap-3 bg-slate-800/40 p-2.5 rounded-2xl border border-slate-700/50"
                  >
                    <div className="relative flex-grow">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent pl-10 pr-3 py-3 text-sm text-white focus:outline-none placeholder-slate-400"
                        disabled={loading}
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/50 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-indigo-600/10 flex items-center justify-center space-x-2 flex-shrink-0"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="w-4.5 h-4.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Secure Voucher</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
              <p className="text-[10px] text-slate-500 mt-2 font-medium">
                No credit card required. No spam. Unsubscribe with a single click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
