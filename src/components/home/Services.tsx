
import React from 'react';
import { Bus, BookOpen, Video, Wifi } from 'lucide-react';

const serviceItems = [
  {
    icon: <Bus className="w-12 h-12 text-school-blue" />,
    title: "School Bus Service",
    description: "Safe and reliable transportation for students with experienced drivers and well-maintained buses covering all major routes."
  },
  {
    icon: <BookOpen className="w-12 h-12 text-school-blue" />,
    title: "Online Learning Platform",
    description: "Access to digital learning resources, interactive lessons, and educational content for continuous learning beyond the classroom."
  },
  {
    icon: <Video className="w-12 h-12 text-school-blue" />,
    title: "Virtual Classrooms",
    description: "Interactive virtual classroom sessions with live teacher interaction, designed to complement traditional classroom learning."
  },
  {
    icon: <Wifi className="w-12 h-12 text-school-blue" />,
    title: "Digital Library",
    description: "Extensive digital library with e-books, research materials, and educational videos to support academic excellence."
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block">Our Services</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Comprehensive services designed to enhance the educational experience at Mansarovar Public School
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-school-gold bg-opacity-20 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-school-blue mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
