import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const getInitials = (name) => {
  const parts = name.replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.)\s+/i, '').split(' ');
  const initials = parts.map(p => p[0]).filter(Boolean).slice(0, 2).join('');
  return initials.toUpperCase() || 'EP';
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 block">
            Alumni Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Trusted by Ambitious Professionals
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal">
            Read how other students transitioned into engineering, UI design, or marketing positions with our verified masterclass bootcamps.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 p-2 bg-indigo-50/30 text-indigo-200 rounded-full">
                <Quote className="w-6 h-6 rotate-180" />
              </div>

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center space-x-0.5 text-amber-500">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Review Copy */}
                <p className="text-slate-600 text-xs sm:text-sm italic font-normal leading-relaxed">
                  "{test.content}"
                </p>
              </div>

              {/* Student Metadata footer */}
              <div className="flex items-center space-x-3.5 mt-8 pt-4 border-t border-slate-50">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${idx % 3 === 0 ? 'from-indigo-500 to-purple-600' : idx % 3 === 1 ? 'from-emerald-400 to-teal-600' : 'from-orange-400 to-rose-600'} text-white font-sans font-bold text-sm flex items-center justify-center ring-2 ring-indigo-50 select-none flex-shrink-0`}>
                  {getInitials(test.name)}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900 leading-tight">
                    {test.name}
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold leading-none mt-1">
                    {test.role}
                  </span>
                  <span className="text-[9px] text-indigo-600 font-bold uppercase tracking-wider mt-1">
                    {test.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
