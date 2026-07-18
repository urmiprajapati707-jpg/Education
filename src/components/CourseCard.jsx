import React from 'react';
import { motion } from 'motion/react';

const CourseCard = ({ course, onEnroll, onCardClick }) => {
  return (
    <motion.div
      layout
      className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
    >
      {/*  Image */}
      <div 
        className="relative aspect-video overflow-hidden bg-slate-100 cursor-pointer" 
        onClick={() => onCardClick(course)}
      >
        <img
          src={course.image}
          alt={course.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
        />
      </div>

      {/* Course Card  */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
        <div className="space-y-3 mb-6">
          {/* Title */}
          <h3
            onClick={() => onCardClick(course)}
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 cursor-pointer leading-tight"
          >
            {course.title}
          </h3>

         
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed line-clamp-3">
            {course.description}
          </p>
        </div>

        {/* Button */}
        <button
          onClick={() => onCardClick(course)}
          className="w-full py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm sm:text-base rounded-lg transition-colors text-center cursor-pointer shadow-sm hover:shadow"
        >
          See more...
        </button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
