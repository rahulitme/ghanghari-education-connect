
import React from 'react';
import Layout from '../components/layout/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-school-blue mb-8">About Mansarovar Public School</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-school-blue mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At Mansarovar Public School, our mission is to provide quality education that nurtures 
              intellectual curiosity, character development, and a lifelong love for learning. We aim to 
              prepare students to become responsible global citizens with strong values and leadership skills.
            </p>
            
            <h2 className="text-2xl font-bold text-school-blue mb-4 mt-8">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              Our vision is to create an educational institution that fosters academic excellence, 
              personal growth, and social responsibility. We strive to be a leading school that empowers 
              students to reach their full potential and make positive contributions to society.
            </p>
            
            <h2 className="text-2xl font-bold text-school-blue mb-4 mt-8">Our Values</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li><span className="font-medium">Excellence</span>: Striving for the highest standards in all endeavors</li>
              <li><span className="font-medium">Integrity</span>: Acting with honesty, ethics, and responsibility</li>
              <li><span className="font-medium">Respect</span>: Treating everyone with dignity and compassion</li>
              <li><span className="font-medium">Innovation</span>: Embracing creativity and forward-thinking approaches</li>
              <li><span className="font-medium">Inclusivity</span>: Celebrating diversity and creating an environment where everyone belongs</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-school-blue mb-4">School at a Glance</h2>
            <ul className="space-y-3">
              <li className="border-b border-gray-200 pb-2">
                <span className="font-medium">Founded:</span> 2010
              </li>
              <li className="border-b border-gray-200 pb-2">
                <span className="font-medium">Location:</span> Ghanghari, Barkattha, Hazaribagh
              </li>
              <li className="border-b border-gray-200 pb-2">
                <span className="font-medium">Campus Size:</span> 5 acres
              </li>
              <li className="border-b border-gray-200 pb-2">
                <span className="font-medium">Classes:</span> Nursery to Class X
              </li>
              <li className="border-b border-gray-200 pb-2">
                <span className="font-medium">Student-Teacher Ratio:</span> 25:1
              </li>
              <li className="border-b border-gray-200 pb-2">
                <span className="font-medium">Medium of Instruction:</span> English
              </li>
              <li>
                <span className="font-medium">Affiliation:</span> State Board
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-school-blue mb-4">Our History</h2>
          <p className="text-gray-700 mb-4">
            Mansarovar Public School was established with a vision to provide quality education to the 
            children of Ghanghari and surrounding areas. Over the years, the school has grown from a small 
            institution to a reputed educational center known for academic excellence and character building.
          </p>
          <p className="text-gray-700">
            Through dedicated leadership and the hard work of our faculty, we have continuously evolved 
            our teaching methods and infrastructure to create an optimal learning environment for our students.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-school-blue mb-4">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-school-blue mb-2">Academic Facilities</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Well-ventilated classrooms</li>
                <li>Modern computer lab</li>
                <li>Fully equipped science laboratories</li>
                <li>Library with diverse collection of books</li>
                <li>Smart classrooms with digital learning tools</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-school-blue mb-2">Sports & Recreation</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Spacious playground</li>
                <li>Indoor games facilities</li>
                <li>Sports equipment for various games</li>
                <li>Dedicated areas for cultural activities</li>
                <li>Art and music rooms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
