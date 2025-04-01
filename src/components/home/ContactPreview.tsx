
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block">Get in Touch</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Have questions? We're here to help. Reach out to us for any inquiries about admissions,
            curriculum, or school activities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center">
            <div className="bg-school-blue bg-opacity-10 p-3 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-school-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-school-blue">Address</h3>
            <p className="text-center text-gray-600">
              Ghanghari, Barkattha,<br />
              Hazaribagh - 825405,<br />
              Jharkhand, India
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center">
            <div className="bg-school-blue bg-opacity-10 p-3 rounded-full mb-4">
              <Phone className="h-6 w-6 text-school-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-school-blue">Contact Us</h3>
            <p className="text-center text-gray-600">
              Phone: 7903763546<br />
              Email: info@mansarovarpublicschool.com
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center">
            <div className="bg-school-blue bg-opacity-10 p-3 rounded-full mb-4">
              <Clock className="h-6 w-6 text-school-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-school-blue">Office Hours</h3>
            <p className="text-center text-gray-600">
              Monday - Saturday<br />
              9:00 AM - 4:00 PM
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/contact" 
            className="inline-block bg-school-blue hover:bg-blue-900 text-white font-medium px-6 py-2 rounded-md transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
