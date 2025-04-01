
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to Mansarovar Public School
          </h1>
          <p className="text-xl mb-8">
            Building the foundation for a lifetime of success through knowledge, character, and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/admissions" 
              className="bg-school-gold hover:bg-amber-500 text-school-blue font-bold px-6 py-3 rounded-md transition-colors inline-block text-center"
            >
              Apply for Admission
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-school-blue font-bold px-6 py-3 rounded-md transition-colors inline-block text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
