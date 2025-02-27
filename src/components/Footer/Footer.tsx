import React from 'react';

const Footer: React.FC = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  // Data for the left and right section links
  const leftLinks = ["About", "Advertising", "Business", "How Search Works"];
  const rightLinks = ["Privacy", "Terms", "Settings"];

  // Common classes for the links
  const linkClasses = "hover:underline text-sm text-gray-600";

  return (
    <footer className="bg-gray-100 w-full py-4">
      {/* Top section with left alignment */}
      <div className="flex justify-start px-6 pb-2">
        <div className="text-sm text-gray-600">
          Copyright@{currentYear} - Aranest. All Rights Reserved.
        </div>
      </div>
      <hr className="w-full border-gray-300" />

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-2 px-6">
        {/* Left section links */}
        <nav className="flex space-x-4 mb-4 md:mb-0">
          {leftLinks.map((link, index) => (
            <a href="#" key={index} className={linkClasses}>
              {link}
            </a>
          ))}
        </nav>

        {/* Right section links */}
        <nav className="flex space-x-4">
          {rightLinks.map((link, index) => (
            <a href="#" key={index} className={linkClasses}>
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
