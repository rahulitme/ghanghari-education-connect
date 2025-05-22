
import React from 'react';
import Layout from '../components/layout/Layout';
import { Calendar, FileText, UserCheck, FileSpreadsheet } from 'lucide-react';

const Admissions = () => {
  return (
    <Layout>
      <div className="bg-school-blue text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="max-w-3xl text-lg">
            Join the Mansarovar Public School family and give your child the foundation for a successful future.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-school-blue mb-6">Admission Process</h2>
            <p className="text-gray-700 mb-6">
              Mansarovar Public School follows a straightforward admission process designed to assess 
              each student's readiness for our academic program and ensure they will thrive in our 
              learning environment.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-school-gold rounded-full p-3 mr-4 flex-shrink-0">
                  <FileText className="h-6 w-6 text-school-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-school-blue mb-2">Step 1: Application Form</h3>
                  <p className="text-gray-700">
                    Obtain and complete the application form from the school office or download it from our website. 
                    Submit the completed form along with the application fee.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-school-gold rounded-full p-3 mr-4 flex-shrink-0">
                  <FileSpreadsheet className="h-6 w-6 text-school-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-school-blue mb-2">Step 2: Document Submission</h3>
                  <p className="text-gray-700">
                    Submit all required documents including birth certificate, previous school records, 
                    passport-sized photographs, and any other specified documents.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-school-gold rounded-full p-3 mr-4 flex-shrink-0">
                  <UserCheck className="h-6 w-6 text-school-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-school-blue mb-2">Step 3: Assessment & Interview</h3>
                  <p className="text-gray-700">
                    Students applying for admission may be required to take an entrance assessment appropriate for their 
                    age and grade level. Parents and students will also be invited for an interview with the principal or 
                    designated staff member.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-school-gold rounded-full p-3 mr-4 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-school-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-school-blue mb-2">Step 4: Confirmation</h3>
                  <p className="text-gray-700">
                    Selected candidates will receive an admission offer. To confirm enrollment, parents must pay the 
                    required fees within the specified timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
              <h3 className="text-xl font-bold text-school-blue mb-4">Required Documents</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-school-gold rounded-full mr-2"></span>
                  Birth Certificate (original and photocopy)
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-school-gold rounded-full mr-2"></span>
                  Transfer Certificate from previous school (if applicable)
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-school-gold rounded-full mr-2"></span>
                  Report Card from previous school (if applicable)
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-school-gold rounded-full mr-2"></span>
                  4 recent passport-sized photographs
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-school-gold rounded-full mr-2"></span>
                  Aadhar Card (photocopy)
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-school-gold rounded-full mr-2"></span>
                  Residential proof
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-school-gold rounded-full mr-2"></span>
                  Immunization records
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-school-blue mb-4">Age Criteria</h3>
              <p className="text-gray-700 mb-4">
                As of April 1st of the academic year:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-school-gold rounded-full mr-2 mt-2"></span>
                  <div>
                    <span className="font-medium">Nursery:</span> 3 years
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-school-gold rounded-full mr-2 mt-2"></span>
                  <div>
                    <span className="font-medium">LKG:</span> 4 years
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-school-gold rounded-full mr-2 mt-2"></span>
                  <div>
                    <span className="font-medium">UKG:</span> 5 years
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-school-gold rounded-full mr-2 mt-2"></span>
                  <div>
                    <span className="font-medium">Class I:</span> 6 years
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-school-gold rounded-full mr-2 mt-2"></span>
                  <div>
                    <span className="font-medium">Higher Classes:</span> Corresponding age progression
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-school-blue text-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Apply?</h3>
              <p className="max-w-2xl">
                Contact our admissions office to schedule a visit or to request more information about 
                the application process.
              </p>
            </div>
            <a 
              href="tel:7903763546" 
              className="mt-6 md:mt-0 bg-school-gold hover:bg-amber-500 text-school-blue font-bold px-8 py-3 rounded-md transition-colors"
            >
              Call: 7903763546
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admissions;
