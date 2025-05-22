
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const AboutPreview = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-school-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="aspect-video bg-gray-300 rounded-lg shadow-lg relative overflow-hidden">
              {/* Placeholder for school building image */}
              <div className="absolute inset-0 flex items-center justify-center bg-school-blue bg-opacity-20">
                <span className="text-white text-xl font-medium">School Building</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="section-title">{t('aboutOurSchool')}</h2>
            <p className="mb-4 text-gray-700">
              {t('aboutDesc1')}
            </p>
            <p className="mb-6 text-gray-700">
              {t('aboutDesc2')}
            </p>
            <Link 
              to="/about" 
              className="inline-block bg-school-blue hover:bg-blue-900 text-white font-medium px-6 py-2 rounded-md transition-colors"
            >
              {t('readMore')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
