"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const backdropRef = useRef(null);

  // GSAP animation for opening and closing the menu
  useEffect(() => {
    if (isOpen) {
      // Fade in the mobile menu with a slight scale effect
      gsap.to(menuRef.current, {
        opacity: 1,
        scaleY: 1,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      // Fade out the mobile menu
      gsap.to(menuRef.current, {
        opacity: 0,
        scaleY: 0.5,
        duration: 0.5,
        ease: "power3.in",
      });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  // Handle clicking outside the menu to close it
  useEffect(() => {
    const closeMenu = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        backdropRef.current &&
        !backdropRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  return (
    <nav className="fixed w-full bg-opacity-30 bg-gray-800 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white text-xl">Your Logo</h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-center space-x-6">
            <Link
              href="/Ayaz-Ahmed.pdf"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-lg transition duration-200 ease-in-out"
            >
              Resume
            </Link>
            <Link
              href="/skills"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-lg transition duration-200 ease-in-out"
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-lg transition duration-200 ease-in-out"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-lg transition duration-200 ease-in-out"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          ref={backdropRef}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          style={{ opacity: 0 }}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 backdrop-blur-lg z-50 flex flex-col items-center justify-center"
        style={{ opacity: 0, scaleY: 0.5 }}
      >
        <Link
          href="/resume"
          className="text-white px-6 py-3 text-lg font-medium"
          onClick={() => setIsOpen(false)}
        >
          Resume
        </Link>
        <Link
          href="/skills"
          className="text-white px-6 py-3 text-lg font-medium"
          onClick={() => setIsOpen(false)}
        >
          Skills
        </Link>
        <Link
          href="/projects"
          className="text-white px-6 py-3 text-lg font-medium"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="text-white px-6 py-3 text-lg font-medium"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
