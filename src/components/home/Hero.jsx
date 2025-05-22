
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero-section text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t('welcomeTo')}
          </h1>
          <p className="text-xl mb-8">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/admissions" 
              className="bg-school-gold hover:bg-amber-500 text-school-blue font-bold px-6 py-3 rounded-md transition-colors inline-block text-center"
            >
              {t('applyForAdmission')}
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-school-blue font-bold px-6 py-3 rounded-md transition-colors inline-block text-center"
            >
              {t('learnMore')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
