
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 text-school-blue">
      <Globe size={20} />
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-transparent text-sm cursor-pointer focus:outline-none"
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
