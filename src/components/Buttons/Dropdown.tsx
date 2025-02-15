"use client";

import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

// Dropdown component to reuse
interface DropdownProps {
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onOptionSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown and set the Z-index to max when an option is selected
  const handleOptionClick = (option: string) => {
    onOptionSelect(option);
    setIsOpen(false); // Close dropdown when an option is selected
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between px-4 py-2 w-full sm:w-36 md:w-44 lg:w-48 bg-gray-200 text-gray-700 rounded-md focus:outline-none hover:bg-gray-300"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {selectedOption}
        <FaChevronDown className="ml-2" />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 w-full sm:w-36 md:w-44 lg:w-48 mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg z-50"
          role="listbox"
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              role="option"
              aria-selected={selectedOption === option}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
