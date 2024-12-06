import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-gray-300 py-10">
      <div className="container mx-auto px-5">
        {/* Footer Content */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Brand and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">GrabTube</h2>
            <p className="mt-3 text-gray-400">
              The simplest, fastest, and most reliable YouTube video downloader. 
              Save your favorite videos in high quality with zero distractions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links and Contributions */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4 mt-3">
              <a
                href="https://www.instagram.com/ganesh_sharmaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="https://x.com/_The_Storywala_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/ganesh-sharmaz/" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
            <p className="mt-3 text-gray-400">
              Contribute to our project on{" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:no-underline"
              >
                GitHub
              </a>{" "}
              and help us grow!
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} GrabTube. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
