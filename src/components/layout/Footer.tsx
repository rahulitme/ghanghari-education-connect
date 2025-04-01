
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-school-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mansarovar Public School</h3>
            <p className="mb-4">Providing quality education since establishment</p>
            <div className="flex items-center space-x-2 mb-2">
              <MapPin size={18} />
              <span>Ghanghari, Barkattha, Hazaribagh - 825405</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Phone size={18} />
              <span>7903763546</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} />
              <span>info@mansarovarpublicschool.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-school-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-school-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-school-gold transition-colors">Academics</Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-school-gold transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-school-gold transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* School Timings */}
          <div>
            <h3 className="text-xl font-bold mb-4">School Hours</h3>
            <div className="mb-2">
              <p className="font-medium">Monday - Saturday</p>
              <p>8:00 AM - 3:00 PM</p>
            </div>
            <div>
              <p className="font-medium">Office Hours</p>
              <p>9:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Mansarovar Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
