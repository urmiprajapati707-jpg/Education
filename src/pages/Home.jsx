import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import PopularCourses from '../components/PopularCourses';
import Features from '../components/Features';
import Instructors from '../components/Instructors';
import PricingFAQ from '../components/PricingFAQ';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('');

  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  
  useEffect(() => {
    const sectionIds = ['home', 'courses', 'instructors', 'pricing-faq'];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section occupies near half-view
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/20 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar onNavClick={handleScrollToSection} activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero onCtaclick={handleScrollToSection} />

        {/* Categories Spotlight Cards */}
        <Categories
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />

        {/* Popular Courses Search/Sort/Grid Catalog */}
        <PopularCourses
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Multi-Value Features Column */}
        <Features />

        {/* Professional Instructors Grid */}
        <Instructors />

        {/* Subscription Tiers & FAQs */}
        <PricingFAQ />

        {/*  Quote Cards */}
        <Testimonials />

        {/* Subscription Card Banner */}
        <CTA />
      </main>

      {/* Footer Branding, Social, Contact & Quick Links */}
      <Footer onNavClick={handleScrollToSection} />
    </div>
  );
}
