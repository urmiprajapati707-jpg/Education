import React from 'react';
import { motion } from 'motion/react';
import avatar1 from '@/assets/avtar 1.jpg';
import avatar2 from '@/assets/avtar 2.jpg';
import avatar3 from '@/assets/avtar3.jpg';
import avatar4 from '@/assets/avtar4.jpg';

const instructors = [
  {
    id: 'inst-1',
    name: 'Deborah Holmes',
    role: 'HTML5/CSS3 Instructor',
    image: avatar1,
    bio: 'Deborah is a passionate web developer with extensive experience in HTML5 and CSS3. Her hands-on teaching style makes learning web design easy, fun, and practical.'
  },
  {
    id: 'inst-2',
    name: 'Bruce Stevens',
    role: 'Marketing Instructor',
    image: avatar2,
    bio: 'Bruce is a seasoned marketing expert known for turning strategies into real, measurable results. He teaches practical techniques that help learners understand, apply, and excel in modern marketing.'
  },
  {
    id: 'inst-3',
    name: 'Michelle Baker',
    role: 'WordPress Instructor',
    image: avatar3,
    bio: 'Michelle is a skilled WordPress specialist who brings clarity and confidence to every lesson. She guides learners through building and managing websites with simple, practical, step-by-step teaching.'
  },
  {
    id: 'inst-4',
    name: 'Diana Sterling, CFA',
    role: 'Quantitative Investment Instructor',
    image: avatar4,
    bio: 'Diana is a Former Wall Street Analyst & Fund Manager. With over a decade of portfolio management at leading quantitative funds, she decodes complex finance models, risk management, and microeconomic trends.'
  }
];

export default function Instructors() {
  return (
    <section id="instructors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 block">
            Expert Faculty
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Learn From Industry Leaders
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-normal">
            Our courses are exclusively designed and taught by elite practitioners actively leading software, design, and financial institutions worldwide.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((inst, idx) => (
            <motion.div
              key={inst.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-slate-50/60 hover:bg-white rounded-3xl p-6 border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="relative mb-5 overflow-hidden rounded-2xl aspect-[1.37] w-full bg-slate-100">
                  <img
                    src={inst.image}
                    alt={inst.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                {/* Role / Tag */}
                <span className="text-xs font-bold text-slate-800 block tracking-wide font-sans">
                  {inst.role}
                </span>

                {/* Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mt-2 font-sans tracking-tight leading-tight">
                  {inst.name}
                </h3>

                {/* Biography */}
                <p className="text-slate-500 text-xs sm:text-sm font-normal mt-3 leading-relaxed font-sans">
                  {inst.bio}
                </p>
              </div>

              {/* View Profile link */}
              <div className="mt-6 flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#ff9138] group-hover:text-[#e67e2a] transition-colors uppercase select-none cursor-pointer">
                <svg className="w-2 h-2 fill-current text-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>View Profile</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

