"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LanguageSelector from "./LanguageSelector";
import { TbGridDots } from "react-icons/tb";
import { FiUser, FiSettings, FiLogOut, FiHome } from "react-icons/fi";
import { MdRealEstateAgent } from "react-icons/md";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null); // Updated type
  const router = useRouter();

  // Mock user data (Replace with real user data)
  const user = {
    name: "John Doe",
    profileImage: "/user.png",
    isAuthenticated: true, // Change this based on authentication
  };

  // Toggle dropdown function
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout function
  const handleLogout = () => {
    console.log("Logging out...");

    // Clear user session (Replace this with real logout logic)
    setDropdownOpen(false); // Close dropdown
    router.push("/Login"); // Redirect to login page
  };

  return (
    <nav className="w-full relative">
      <ul className="flex items-center justify-end space-x-4 p-3 sm:p-4 text-sm mr-2">
        {/* Home link */}
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>

        {/* Contact link */}
        <li>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </li>

        {/* Select Language */}
        <li className="p-2">
          <LanguageSelector />
        </li>

        {/* Grid icon */}
        <li>
          <button
            className="p-2 rounded-full hover:bg-gray-200 transition duration-200"
            aria-label="Open Menu"
          >
            <TbGridDots size={20} />
          </button>
        </li>

        {/* Profile Dropdown */}
        {user.isAuthenticated && (
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="p-1 rounded-full hover:bg-gray-200 transition duration-200 flex items-center"
              aria-label="User Profile"
            >
              <Image
                src={user.profileImage}
                alt="User Profile Picture"
                width={30}
                height={30}
                className="rounded-full object-cover w-8 h-8"
                priority
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                {/* Profile Info */}
                <div className="p-3 flex items-center border-b">
                  <Image
                    src={user.profileImage}
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <p className="ml-3 font-medium">{user.name}</p>
                </div>

                {/* Dropdown Menu Items */}
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <Link
                      href="/profileSetting"
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <FiUser className="mr-2" /> Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/myAgent"
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <MdRealEstateAgent className="mr-2" /> My Agents
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/myProperty"
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <FiHome className="mr-2" /> My Properties
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/profileSetting"
                      className="w-full text-left flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <FiSettings className="mr-2" /> Profile Settings
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/"
                      className="w-full text-left flex items-center px-4 py-2 text-red-500 hover:bg-gray-100"
                    >
                      <FiLogOut className="mr-2" /> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
