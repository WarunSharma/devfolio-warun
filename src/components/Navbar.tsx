
'use client';

import { useState, useSyncExternalStore } from 'react';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

// Subscribe to browser scroll and resize events
function subscribeToViewport(callback: () => void) {
  window.addEventListener('scroll', callback, { passive: true });
  window.addEventListener('resize', callback);

  return () => {
    window.removeEventListener('scroll', callback);
    window.removeEventListener('resize', callback);
  };
}

// Determine whether the page has been scrolled
function getScrollSnapshot() {
  return window.scrollY > 20;
}

function getServerScrollSnapshot() {
  return false;
}

// Determine which section is currently visible
function getActiveSectionSnapshot() {
  const scrollPosition = window.scrollY + 100;

  for (let i = navItems.length - 1; i >= 0; i--) {
    const section = document.getElementById(navItems[i].id);

    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY;

      if (scrollPosition >= sectionTop) {
        return navItems[i].id;
      }
    }
  }

  return 'home';
}

function getServerActiveSectionSnapshot() {
  return 'home';
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrolled = useSyncExternalStore(
    subscribeToViewport,
    getScrollSnapshot,
    getServerScrollSnapshot
  );

  const activeSection = useSyncExternalStore(
    subscribeToViewport,
    getActiveSectionSnapshot,
    getServerActiveSectionSnapshot
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setIsOpen(false);
    }
  };

  const isActive = (id: string) => activeSection === id;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-200/50'
          : 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent hover:from-blue-700 hover:via-indigo-700 hover:to-blue-700 transition-all duration-300 cursor-pointer"
          >
            Warun Sharma
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  isActive(item.id)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-slate-200 bg-white">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-slate-700 rounded-lg transition-all duration-200 font-medium ${
                  isActive(item.id)
                    ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                    : 'hover:text-blue-600 hover:bg-blue-50/50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
