import React from 'react';
import {
  FaShieldAlt,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaShieldAlt className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">SecureGuard Insurance</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Protecting what matters most since 1985. Your trusted partner in comprehensive insurance solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors underline-slide">Dashboard</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors underline-slide">My Policies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors underline-slide">Claims</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors underline-slide">Premium Calculator</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors underline-slide">Policy Renewal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors underline-slide">Customer Support</a></li>
            </ul>
          </div>

          {/* Insurance Types */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Insurance Types</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors underline-slide">Health Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors underline-slide">Life Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors underline-slide">Motor Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors underline-slide">Home Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors underline-slide">Travel Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors underline-slide">Business Insurance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <FaPhone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">24/7 Helpline</p>
                  <p className="text-white font-medium">+880 1710497133</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Email Support</p>
                  <p className="text-white font-medium">support@secureguard.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Head Office</p>
                  <p className="text-white font-medium">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaClock className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Business Hours</p>
                  <p className="text-white font-medium">9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">Subscribe to our newsletter for insurance tips and updates</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-400 text-white"
              />
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-r-lg transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-6 mb-2 md:mb-0">
            <p>&copy; {new Date().getFullYear()} SecureGuard Insurance. All rights reserved.</p>
            <span className="text-gray-600">|</span>
            <p>License No: INS-2024-001234</p>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors underline-slide">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors underline-slide">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors underline-slide">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors underline-slide">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
