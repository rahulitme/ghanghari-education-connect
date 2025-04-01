
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Lightbulb, Trophy } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="text-school-blue h-10 w-10" />,
    title: 'Comprehensive Curriculum',
    description: 'Our curriculum is designed to provide students with a well-rounded education in all subjects.'
  },
  {
    icon: <Users className="text-school-blue h-10 w-10" />,
    title: 'Experienced Faculty',
    description: 'Our teachers are highly qualified and dedicated to bringing out the best in every student.'
  },
  {
    icon: <Lightbulb className="text-school-blue h-10 w-10" />,
    title: 'Modern Teaching Methods',
    description: 'We employ innovative teaching techniques to make learning engaging and effective.'
  },
  {
    icon: <Trophy className="text-school-blue h-10 w-10" />,
    title: 'Extracurricular Activities',
    description: 'We offer a variety of activities to develop students\' talents beyond academics.'
  }
];

const AcademicsPreview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block">Academic Excellence</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            At Mansarovar Public School, we strive for academic excellence while ensuring 
            holistic development of our students.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-center mb-2 text-school-blue">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/academics" 
            className="inline-block bg-school-blue hover:bg-blue-900 text-white font-medium px-6 py-2 rounded-md transition-colors"
          >
            Explore Our Academics
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademicsPreview;
