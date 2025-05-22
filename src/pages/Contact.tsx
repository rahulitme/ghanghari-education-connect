import React from 'react';
import Layout from '../components/layout/Layout';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <div className="bg-school-blue text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-3xl text-lg">
            We're here to address your questions and concerns. Reach out to us using the information below.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center">
            <div className="bg-school-blue bg-opacity-10 p-4 rounded-full mb-4">
              <MapPin className="h-8 w-8 text-school-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-school-blue">Our Location</h3>
            <p className="text-gray-700">
              Mansarovar Public School<br />
              5HQF+C2F, Ghangri, Dharhara,<br />
              Hazaribagh - 825323,<br />
              Jharkhand, India
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center">
            <div className="bg-school-blue bg-opacity-10 p-4 rounded-full mb-4">
              <Phone className="h-8 w-8 text-school-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-school-blue">Contact Numbers</h3>
            <p className="text-gray-700">
              Main Office: 7903763546<br />
              Admissions: 7903763546<br />
              <a href="mailto:info@mansarovarpublicschool.com" className="text-school-blue hover:underline">
                info@mansarovarpublicschool.com
              </a>
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center">
            <div className="bg-school-blue bg-opacity-10 p-4 rounded-full mb-4">
              <Clock className="h-8 w-8 text-school-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-school-blue">Office Hours</h3>
            <p className="text-gray-700">
              <span className="font-medium">School Hours:</span><br />
              Monday - Saturday: 8:00 AM - 3:00 PM<br /><br />
              <span className="font-medium">Office Hours:</span><br />
              Monday - Saturday: 9:00 AM - 4:00 PM
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-school-blue mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-blue"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-blue"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-blue"
                  placeholder="Your Phone Number"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-blue"
                  placeholder="Message Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-blue"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-school-blue hover:bg-blue-900 text-white font-medium px-6 py-3 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-school-blue mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 font-medium text-school-blue">
                  What are the school timings?
                </div>
                <div className="px-4 py-3 text-gray-700">
                  School hours are from 8:00 AM to 3:00 PM, Monday through Saturday.
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 font-medium text-school-blue">
                  How can I apply for admission?
                </div>
                <div className="px-4 py-3 text-gray-700">
                  You can visit our school office during working hours to collect the admission form or download it from our website. Please check our Admissions page for detailed information.
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 font-medium text-school-blue">
                  Is transportation available?
                </div>
                <div className="px-4 py-3 text-gray-700">
                  Yes, we provide transportation services for students from selected areas around Ghanghari. Please contact the school office for routes and fees.
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 font-medium text-school-blue">
                  What board is the school affiliated with?
                </div>
                <div className="px-4 py-3 text-gray-700">
                  Mansarovar Public School is affiliated with the State Board of Education.
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 font-medium text-school-blue">
                  Do you offer extracurricular activities?
                </div>
                <div className="px-4 py-3 text-gray-700">
                  Yes, we offer a variety of extracurricular activities including sports, arts, music, dance, and cultural programs to ensure holistic development of our students.
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-school-blue mb-4">Our Location</h2>
          <div className="aspect-video bg-gray-300 rounded-lg relative overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.512641090159!2d85.36269707517957!3d24.49971197807883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4fb19f2c19c0f%3A0x178e6629cebaad59!2s5HQF%2BC2F%20Mansarovar%20Public%20School%2C%20Ghangri%2C%20Dharhara%2C%20Jharkhand%20825323!5e0!3m2!1sen!2sin!4v1716371721753!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Mansarovar Public School Location"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
