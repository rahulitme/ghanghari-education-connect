
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const AdmissionsPreview = () => {
  return (
    <section className="py-16 bg-school-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our School Family</h2>
          <p className="text-lg">
            We are now accepting applications for the upcoming academic year. 
            Secure your child's future with quality education at Mansarovar Public School.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4 text-school-gold">Why Choose Us</h3>
            <ul className="space-y-3">
              {[
                'Quality education with modern teaching methods',
                'Safe and nurturing environment',
                'Qualified and experienced teaching staff',
                'Well-equipped classrooms and facilities',
                'Focus on character building and values'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-school-gold mt-0.5 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4 text-school-gold">Admission Process</h3>
            <ol className="space-y-4">
              {[
                'Fill out the application form',
                'Submit required documents',
                'Entrance assessment (if applicable)',
                'Personal interview',
                'Confirmation of admission'
              ].map((item, index) => (
                <li key={index} className="flex">
                  <span className="bg-school-gold text-school-blue font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/admissions" 
            className="inline-block bg-school-gold hover:bg-amber-500 text-school-blue font-bold px-8 py-3 rounded-md transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsPreview;
