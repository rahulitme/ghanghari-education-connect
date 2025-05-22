
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const Principal = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="aspect-square bg-gray-200 rounded-full overflow-hidden shadow-lg relative">
              <div className="absolute inset-0 flex items-center justify-center bg-school-blue bg-opacity-10">
                <span className="text-school-blue text-xl font-medium">Principal's Photo</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="section-title mb-4">{t('messageFromPrincipal')}</h2>
            <h3 className="text-xl font-semibold text-school-blue mb-2">{t('principalName')}</h3>
            <p className="mb-4 text-gray-700">
              {t('principalMsg1')}
            </p>
            <p className="mb-6 text-gray-700">
              {t('principalMsg2')}
            </p>
            <Link 
              to="/about" 
              className="inline-block bg-school-gold hover:bg-amber-500 text-school-blue font-medium px-6 py-2 rounded-md transition-colors"
            >
              {t('readFullMessage')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principal;
