
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-12 h-12 bg-gradient-to-br from-school-blue via-blue-500 to-school-gold rounded-full flex items-center justify-center shadow-lg overflow-hidden">
        <div className="relative w-full h-full">
          <div className="absolute w-full h-full bg-gradient-to-tr from-school-blue to-transparent opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-school-gold rounded-full"></div>
        </div>
      </div>
      <div>
        <h1 className="text-school-blue font-bold text-xl">Mansarovar</h1>
        <p className="text-xs text-gray-600 italic">Public School</p>
      </div>
    </div>
  );
};

export default Logo;
