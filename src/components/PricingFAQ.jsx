import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Sparkles, X, ArrowRight } from 'lucide-react';
import { faqs } from '../data/faq';

const tiers = [
  {
    name: 'Basic Learner',
    price: 19,
    period: 'mo',
    description: 'Perfect for enthusiasts exploring fundamental technical domains.',
    popular: false,
    color: 'text-indigo-600',
    bgColor: 'bg-white',
    borderColor: 'border-slate-200/80',
    btnStyle: 'bg-slate-50 text-slate-800 hover:bg-slate-100 border border-slate-200',
    features: [
      { name: 'Access to 5 entry-level courses', included: true },
      { name: 'Standard community Q&A forum', included: true },
      { name: 'Verifiable digital certificates', included: true },
      { name: '1080p standard HD video stream', included: true },
      { name: 'Offline resource slides download', included: false },
      { name: 'Weekly Live instructor AMAs', included: false },
      { name: '1-on-1 monthly portfolio review', included: false },
    ],
  },
  {
    name: 'Pro scholar',
    price: 39,
    period: 'mo',
    description: 'Our most popular tier. Unlimited access for active career switchers.',
    popular: true,
    color: 'text-white',
    bgColor: 'bg-slate-900',
    borderColor: 'border-slate-900',
    btnStyle: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-100',
    features: [
      { name: 'Unlimited access to all 50+ bootcamps', included: true },
      { name: 'Priority community Q&A forums', included: true },
      { name: 'Verifiable digital certificates', included: true },
      { name: '1080p standard HD video stream', included: true },
      { name: 'Offline resource slides download', included: true },
      { name: 'Weekly Live instructor AMAs', included: true },
      { name: '1-on-1 monthly portfolio review', included: false },
    ],
  },
  {
    name: 'Enterprise VIP',
    price: 79,
    period: 'mo',
    description: 'Bespoke mentorship tailored around accelerated industry promotion.',
    popular: false,
    color: 'text-indigo-600',
    bgColor: 'bg-white',
    borderColor: 'border-slate-200/80',
    btnStyle: 'bg-slate-900 hover:bg-slate-850 text-white',
    features: [
      { name: 'Unlimited access to all 50+ bootcamps', included: true },
      { name: 'Priority community Q&A forums', included: true },
      { name: 'Verifiable digital certificates', included: true },
      { name: '1080p standard HD video stream', included: true },
      { name: 'Offline resource slides download', included: true },
      { name: 'Weekly Live instructor AMAs', included: true },
      { name: '1-on-1 monthly portfolio review', included: true },
    ],
  },
];

export default function PricingFAQ() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [openId, setOpenId] = useState('f1'); // Default open first FAQ item

  const discountRate = 0.8; // 20% discount on annual subscriptions

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="pricing-faq" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==========================================
            PRICING HALF
            ========================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 block">
            Flexible Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Transparent, Value-Focused Tiers
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal">
            Choose a plan that matches your current learning objective. Cancel, upgrade, or downgrade anytime with a single click.
          </p>

          {/* Billing Cycle Switch */}
          <div className="flex items-center justify-center pt-4">
            <div className="bg-slate-100 p-1 rounded-xl flex items-center space-x-1 border border-slate-200">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('annually')}
                className={`relative px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center space-x-1.5 ${
                  billingCycle === 'annually'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <span>Annual Billing</span>
                <span className="bg-emerald-100 text-emerald-700 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto mb-28">
          {tiers.map((tier, idx) => {
            const displayPrice =
              billingCycle === 'annually'
                ? Math.floor(tier.price * discountRate)
                : tier.price;

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between border transition-all duration-300 ${
                  tier.popular
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/10 scale-105 lg:z-10'
                    : 'bg-white text-slate-950 border-slate-100 hover:shadow-lg'
                }`}
              >
                {/* Popularity Badge floating banner */}
                {tier.popular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 fill-current animate-pulse" />
                    <span>Highly Recommended</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Tier Header */}
                  <div>
                    <h3 className={`text-xs font-bold uppercase tracking-wider ${tier.popular ? 'text-indigo-400' : 'text-indigo-600'}`}>
                      {tier.name}
                    </h3>
                    <p className={`text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 ${tier.popular ? 'text-white' : 'text-slate-950'}`}>
                      ${displayPrice}
                      <span className={`text-xs font-medium uppercase tracking-wider ml-1 ${tier.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                        / {tier.period}
                      </span>
                    </p>
                    <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${tier.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                      {tier.description}
                    </p>
                  </div>

                  {/* Bullet features list */}
                  <ul className="space-y-3 pt-6 border-t border-slate-100/10">
                    {tier.features.map((feat) => (
                      <li key={feat.name} className="flex items-start space-x-2.5 text-xs sm:text-sm">
                        {feat.included ? (
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feat.included ? (tier.popular ? 'text-slate-300' : 'text-slate-700') : 'text-slate-400 line-through'}>
                          {feat.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call-to-action Button */}
                <div className="pt-8 mt-6 border-t border-slate-100/10">
                  <button
                    className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 ${tier.btnStyle}`}
                  >
                    <span>Get Started Today</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ==========================================
            FAQ HALF (Matching reference layout exactly)
            ========================================== */}
        <div className="max-w-7xl mx-auto pt-20 border-t border-slate-200/60">
          
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            
            {/* FAQ Left Block */}
            <div className="space-y-4 lg:sticky lg:top-24">
              <span className="text-base font-extrabold text-slate-900 block tracking-tight font-sans">
                Have Any Questions?
              </span>
              <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-none font-sans">
                FAQ's
              </h2>
              <p className="text-slate-500 text-sm sm:text-base font-normal max-w-sm leading-relaxed">
                Find quick answers to the most common questions about our courses and platform.
              </p>
            </div>

            {/* FAQs Accordion Column */}
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openId === faq.id;

                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? 'border-slate-200 bg-white shadow-md'
                        : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm'
                    }`}
                  >
                    {/* Trigger Button */}
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 ml-2">
                        <svg
                          className={`w-3 h-3 text-slate-900 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>

                    {/* Collapsible Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                        >
                          <div className="px-5 pb-6 sm:px-6 sm:pb-8 pl-5 sm:pl-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100/50 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
