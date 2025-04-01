
import React from 'react';
import Layout from '../components/layout/Layout';
import { BookOpen, Award, GitBranch, Users } from 'lucide-react';

const Academics = () => {
  return (
    <Layout>
      <div className="bg-school-blue text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Academics</h1>
          <p className="max-w-3xl text-lg">
            At Mansarovar Public School, we provide a comprehensive educational experience 
            that emphasizes academic excellence, character development, and practical skills.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-school-blue mb-6">Curriculum</h2>
          <p className="text-gray-700 mb-4">
            Our curriculum is designed to provide a well-rounded education that develops students' 
            intellectual, physical, emotional, and social capacities. We follow the state board 
            curriculum enhanced with additional learning opportunities to ensure comprehensive development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <h3 className="text-xl font-bold text-school-blue mb-2">Primary Section (Classes Nursery to V)</h3>
              <p className="text-gray-700 mb-3">
                Our primary curriculum focuses on building a strong foundation in core subjects 
                while nurturing curiosity and creativity in young learners.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>English Language & Literature</li>
                <li>Hindi Language</li>
                <li>Mathematics</li>
                <li>Environmental Studies</li>
                <li>General Knowledge</li>
                <li>Computer Fundamentals</li>
                <li>Art & Craft</li>
                <li>Physical Education</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <h3 className="text-xl font-bold text-school-blue mb-2">Middle Section (Classes VI to X)</h3>
              <p className="text-gray-700 mb-3">
                The middle school curriculum expands to include more subjects and in-depth learning, 
                preparing students for higher education and future career paths.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>English Language & Literature</li>
                <li>Hindi Language & Literature</li>
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies (History, Geography, Civics)</li>
                <li>Computer Science</li>
                <li>General Knowledge & Current Affairs</li>
                <li>Physical Education</li>
                <li>Art Education</li>
                <li>Life Skills & Value Education</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-school-blue mb-6">Teaching Methodology</h2>
          <p className="text-gray-700 mb-6">
            We employ a blend of traditional and modern teaching methods to make learning engaging, 
            effective, and enjoyable for students of all learning styles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100 flex flex-col items-center text-center">
              <BookOpen className="text-school-blue h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold text-school-blue mb-2">Interactive Learning</h3>
              <p className="text-gray-700">
                Our teachers facilitate interactive classroom sessions that encourage 
                participation, critical thinking, and collaborative learning.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100 flex flex-col items-center text-center">
              <Award className="text-school-blue h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold text-school-blue mb-2">Activity-Based Learning</h3>
              <p className="text-gray-700">
                We integrate hands-on activities, projects, and experiments to help 
                students understand concepts through practical application.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100 flex flex-col items-center text-center">
              <GitBranch className="text-school-blue h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold text-school-blue mb-2">Technology Integration</h3>
              <p className="text-gray-700">
                Modern educational technology is used to enhance learning experiences 
                and prepare students for the digital world.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-school-blue mb-6">Faculty</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-4">
                Our teaching staff consists of dedicated and qualified professionals who are passionate 
                about education and committed to the holistic development of each student. Our teachers 
                regularly participate in professional development programs to stay updated with the 
                latest educational practices.
              </p>
              <p className="text-gray-700">
                The faculty at Mansarovar Public School creates a supportive learning environment where 
                students feel valued, respected, and motivated to achieve their full potential.
              </p>
            </div>
            
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow border border-gray-100 flex flex-col items-center">
              <Users className="text-school-blue h-16 w-16 mb-4" />
              <h3 className="text-xl font-bold text-school-blue mb-2">Our Team</h3>
              <ul className="w-full text-gray-700">
                <li className="border-b border-gray-100 py-2">
                  <span className="font-medium">Principal:</span> 1
                </li>
                <li className="border-b border-gray-100 py-2">
                  <span className="font-medium">Vice Principal:</span> 1
                </li>
                <li className="border-b border-gray-100 py-2">
                  <span className="font-medium">Teachers:</span> 25
                </li>
                <li className="border-b border-gray-100 py-2">
                  <span className="font-medium">Admin Staff:</span> 5
                </li>
                <li className="py-2">
                  <span className="font-medium">Support Staff:</span> 10
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Academics;
