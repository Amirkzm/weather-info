import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6 lg:mb-0">
              <Image src="/logo.png" alt="Logo" width={200} height={100} />
            </div>
            <p className="mt-4 text-sm">
              Your trusted partner in oceanic and atmospheric insights. Explore
              data, drive sustainability, and make impactful decisions.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#features" className="hover:text-blue-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#blog" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#documentation" className="hover:text-blue-400">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-blue-400">
                  Support
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Subscribe to Our Newsletter
            </h4>
            <p className="mt-4 text-sm">
              Stay updated with the latest insights and features from AquaLens.
            </p>
            <form className="mt-4 flex items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 text-gray-800 bg-white rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-r-lg transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} AquaLens. All Rights Reserved.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
