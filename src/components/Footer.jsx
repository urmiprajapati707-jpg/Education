import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer({ onNavClick }) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavClick('home')}>
              <div className="p-2 bg-indigo-600 rounded-xl text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight font-sans">
                Edu<span className="text-indigo-400">Pulse</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm font-normal leading-relaxed max-w-sm">
              Publishing verified, masterclass-quality bootcamps designed strictly around modern development pipelines, design frameworks, and risk matrices.
            </p>
            {/* Social handles */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" aria-label="Facebook" className="p-2 bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white rounded-lg transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white rounded-lg transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white rounded-lg transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white rounded-lg transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="GitHub" className="p-2 bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white rounded-lg transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <button onClick={() => onNavClick('home')} className="hover:text-indigo-400 hover:translate-x-0.5 transition-all text-slate-400">
                  Home Portal
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('courses')} className="hover:text-indigo-400 hover:translate-x-0.5 transition-all text-slate-400">
                  Bootcamps Grid
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('instructors')} className="hover:text-indigo-400 hover:translate-x-0.5 transition-all text-slate-400">
                  Elite Faculty
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('pricing-faq')} className="hover:text-indigo-400 hover:translate-x-0.5 transition-all text-slate-400">
                  Pricing & FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Curated Domains */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Bootcamps</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <button onClick={() => onNavClick('courses')} className="hover:text-indigo-400 hover:translate-x-0.5 transition-all text-slate-400">
                  Software Bootcamp
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('courses')} className="hover:text-indigo-400 hover:translate-x-0.5 transition-all text-slate-400">
                  UI/UX Masterclass
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('courses')} className="hover:text-indigo-400 hover:translate-x-0.5 transition-all text-slate-400">
                  Growth Marketing
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('courses')} className="hover:text-indigo-400 hover:translate-x-0.5 transition-all text-slate-400">
                  Finance Portfolios
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-4 col-span-2 lg:col-span-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Support</h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-slate-400">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>support@edupulse.edu</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>+1 (555) 234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright and scroll top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[11px] text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} EduPulse Inc. All rights reserved. Made for professional continuous education.
          </p>

          <button
            onClick={handleScrollTop}
            className="p-2.5 bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white rounded-xl transition-colors flex items-center space-x-1.5 text-xs font-semibold shadow-md"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
