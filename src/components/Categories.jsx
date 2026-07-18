import React from 'react';
import { motion } from 'motion/react';

export default function Categories({ onCategorySelect, selectedCategory }) {
  // Brand technology logos in grey vector style
  const techLogos = [
    {
      name: 'HTML5',
      category: 'Development',
      svg: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-current" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.3 6.1H5.2l.4 4.5h10.9l-.4 4.6-4.1 1.3-4.1-1.3-.3-2.8H5l.4 5.9 6.6 2.2 6.6-2.2.8-9.2z"/>
        </svg>
      )
    },
    {
      name: 'CSS3',
      category: 'Development',
      svg: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-current" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.2 6.1H8.1l.1 1.7h9.2l-.4 4.5-5 1.7-5-1.7-.3-3.2H4.1l.5 6 7.4 2.5 7.4-2.5.9-9z"/>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      category: 'Development',
      svg: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-current" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0zm19.5 19.3c0-1-.5-1.6-1.5-2.1-1-.4-2-.6-3-.8-.5-.1-1-.2-1.2-.5-.1-.2-.1-.4-.1-.6 0-.3.1-.6.4-.7.3-.2.8-.3 1.4-.3.6 0 1 .1 1.4.4.3.2.5.6.6 1.1h2.2c-.1-1-.6-1.8-1.5-2.3-.9-.4-2-.6-3.2-.6-1.3 0-2.3.3-3 .9s-1 1.4-1 2.4c0 .9.3 1.6 1 2.1.7.5 1.7.8 3 1 .6.1 1.2.2 1.6.4.3.1.4.3.4.6 0 .4-.2.6-.5.7s-.9.2-1.5.2c-.8 0-1.4-.1-1.8-.5-.4-.3-.6-.8-.7-1.5H9.6c.1 1.2.6 2.1 1.6 2.6.9.5 2.1.8 3.5.8 1.4 0 2.5-.3 3.2-.9s1.1-1.3 1.1-2.3zm-10.7-3.8H6.5v6.5c0 .7-.1 1.2-.4 1.5-.3.3-.8.4-1.5.4-.5 0-.9-.1-1.2-.3V22c.3.1.5.2.8.2.3 0 .4-.1.5-.2.1-.1.2-.3.2-.6v-8.1H8.8v1.7z"/>
        </svg>
      )
    },
    {
      name: 'Node.js',
      category: 'Development',
      svg: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-current" viewBox="0 0 24 24">
          <path d="M12 0L2.8 5.3v10.6L12 21.2l9.2-5.3V5.3L12 0zm7.1 14.8l-7.1 4.1-7.1-4.1V7.5l7.1-4.1 7.1 4.1v7.3zm-7.1-6.2c-.9 0-1.7.4-2.1 1.1-.4.7-.4 1.6 0 2.3.4.7 1.2 1.1 2.1 1.1.9 0 1.7-.4 2.1-1.1.4-.7.4-1.6 0-2.3-.4-.7-1.2-1.1-2.1-1.1z"/>
        </svg>
      )
    },
    {
      name: 'Vue',
      category: 'Development',
      svg: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-current" viewBox="0 0 24 24">
          <path d="M24,1.61H18.06L12,12L5.94,1.61H0L12,22.39L24,1.61Z M17.11,1.61H12L6.89,1.61L12,10.45L17.11,1.61Z"/>
        </svg>
      )
    },
    {
      name: 'React',
      category: 'Development',
      svg: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-current" viewBox="0 0 24 24">
          <path d="M12 8.7c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3-1.5-3.3-3.3-3.3zm0 5.4c-1.2 0-2.1-.9-2.1-2.1 0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1c0 1.2-.9 2.1-2.1 2.1zm11.2-3c-.1-.7-.4-1.4-.9-2-1-1.2-2.7-1.9-4.7-2-1.3-.1-2.6.2-3.8.7-1.1.5-2.2 1.2-3.1 2.1-.5.5-1 1-1.4 1.6-.4-.5-.9-1.1-1.4-1.6-.9-.9-2-1.6-3.1-2.1-1.2-.5-2.5-.8-3.8-.7-2 .1-3.7.8-4.7 2-.5.6-.8 1.3-.9 2-.2 1.2.1 2.6.9 3.8.5.8 1.2 1.6 2 2.2.9.7 1.9 1.3 3 1.7 1.2.4 2.5.6 3.8.5 2-.1 3.7-.8 4.7-2 .5-.6.8-1.3.9-2 .1-.7.1-1.4 0-2.1.1.7.1 1.4 0 2.1-.1.7-.4 1.4-.9 2-1 1.2-2.7 1.9-4.7 2-1.3.1-2.6-.2-3.8-.7-1.1-.5-2.2-1.2-3.1-2.1-.5-.5-1-1-1.4-1.6-.4.5-.9 1.1-1.4 1.6-.9.9-2 1.6-3.1 2.1-1.2.5-2.5.8-3.8.7-2-.1-3.7-.8-4.7-2-.5-.6-.8-1.3-.9-2.1.2-1.2.9-2.6 2-3.8.8-.9 1.7-1.7 2.8-2.2 1.1-.5 2.4-.7 3.7-.6 1.9.1 3.6.8 4.6 2 .4.5.7 1 .9 1.5.2-.5.5-1 .9-1.5 1-1.2 2.7-1.9 4.6-2 1.3-.1 2.6.1 3.7.6 1.1.5 2 1.3 2.8 2.2 1.1 1.2 1.8 2.6 2 3.8z"/>
        </svg>
      )
    },
    {
      name: 'Python',
      category: 'Development',
      svg: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-current" viewBox="0 0 24 24">
          <path d="M11.9 0C5.3 0 5.5 2.9 5.5 2.9h2.3s.1-1.4 1.4-1.4 2 .1 2 1.4v1.8H5.9S3 5 3 10.7c0 5.7 2.6 5.5 2.6 5.5h1.5v-2.1s-.1-2.5 2.5-2.5h5s2.5 0 2.5-2.5V3.8S17.3 0 11.9 0zm.1 24c6.6 0 6.4-2.9 6.4-2.9h-2.3s-.1 1.4-1.4 1.4-2-.1-2-1.4V19.3h5.3s2.9-.3 2.9-6c0-5.7-2.6-5.5-2.6-5.5h-1.5V10s.1 2.5-2.5 2.5H8.8s-2.5 0-2.5 2.5V20s-.2 4 5.6 4zm-2.7-20.5c.4 0 .8.3.8.7s-.3.7-.8.7-.7-.3-.7-.7.3-.7.7-.7zm5.4 17c.4 0 .8.3.8.7 0 .4-.4.7-.8.7s-.7-.3-.7-.7.3-.7.7-.7z"/>
        </svg>
      )
    },
    {
      name: 'Angular',
      category: 'Development',
      svg: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-current" viewBox="0 0 24 24">
          <path d="M12 0L1.4 3.8l1.6 14.5L12 24l9-5.7 1.6-14.5L12 0zm0 3.7l6.7 11.6h-2.1l-1.4-3.5H8.8l-1.4 3.5H5.3L12 3.7zm1.8 6.5L12 6.1l-1.8 4.1h3.6z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="categories" className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
          
          {/* Left Heading */}
          <div className="flex-shrink-0">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
              Technologies You<br />
              Will Learn
            </h2>
          </div>

          {/* Right Brand Logos Strip */}
          <div className="flex-grow">
            <div className="flex flex-wrap items-center justify-start lg:justify-end gap-8 sm:gap-10 md:gap-12 lg:gap-14 text-slate-300">
              {techLogos.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  onClick={() => {
                    onCategorySelect(tech.category);
                  }}
                  className="hover:text-slate-500 transition-colors duration-300 cursor-pointer transform hover:scale-105"
                  title={`Learn ${tech.name} in our bootcamps`}
                >
                  {tech.svg}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
