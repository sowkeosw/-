import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Academics', path: '/academics' },
    { label: 'Campus Life', path: '/campus-life' },
    { label: 'Health & Safety', path: '/health-safety' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-silverwood-green text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <GraduationCap className="h-8 w-8 text-silverwood-gold group-hover:text-white transition-colors" />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wide leading-none">SILVERWOOD</span>
              <span className="text-xs text-silverwood-gold uppercase tracking-widest leading-none mt-1">University</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-silverwood-gold bg-black/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button className="bg-silverwood-gold text-silverwood-green px-5 py-2 rounded-sm font-bold text-sm hover:bg-white transition-colors">
                MY PORTAL
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-silverwood-green border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-silverwood-gold bg-black/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full text-left bg-silverwood-gold text-silverwood-green px-3 py-3 mt-4 rounded-sm font-bold hover:bg-white">
              MY PORTAL
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;