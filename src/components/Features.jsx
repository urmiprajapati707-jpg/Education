import React from 'react';
import { motion } from 'motion/react';
import { Users, Infinity as InfinityIcon, Award, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

const features = [
  {
    id: 'f-1',
    title: 'Expert Mentors',
    description: 'Learn from industry leads who build actual digital solutions daily.',
    icon: Users,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 border-indigo-100/50',
    points: ['CFA chartered analysts', 'Senior software leads', 'Figma design guides'],
  },
  {
    id: 'f-2',
    title: 'Lifetime Access',
    description: 'Enrolling triggers immediate, non-expiring entry to all syllabus guides.',
    icon: InfinityIcon,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50 border-emerald-100/50',
    points: ['On-demand review', 'Free curriculum updates', 'Downloadable source files'],
  },
  {
    id: 'f-3',
    title: 'Certificates',
    description: 'Download verified completion certs to enrich your resume and LinkedIn.',
    icon: Award,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 border-amber-100/50',
    points: ['Verified credential IDs', 'Direct LinkedIn share', 'Professional portfolio asset'],
  },
  {
    id: 'f-4',
    title: 'Flexible Learning',
    description: 'Perfect for active professionals. Study at the absolute pace you design.',
    icon: Calendar,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50 border-rose-100/50',
    points: ['Mobile responsive design', 'Adjustable streaming rates', 'Bite-sized modular lectures'],
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50/30 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual copy */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans leading-tight">
              An Educational Model Designed Around Your Absolute Growth
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              We did not build another passive playlist database. Our platform ensures actual skill translation through a carefully calibrated, high-fidelity experience.
            </p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 gap-4 pt-4 text-left max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <span className="text-sm font-bold text-slate-800">100% Risk Free Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <span className="text-sm font-bold text-slate-800">Verified Credentials</span>
              </div>
            </div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Feature Icon */}
                    <div className={`inline-flex p-3 rounded-xl border ${feature.bgColor} ${feature.color} group-hover:scale-105 transition-transform duration-300`}>
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                      <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="mt-6 space-y-2 border-t border-slate-50 pt-4">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-center space-x-2 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
