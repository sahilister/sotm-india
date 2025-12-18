'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const pathname = usePathname();
  const isRegisterPage = pathname === '/register';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#speakers', label: 'Speakers' },
    { href: '#venue', label: 'Venue' },
    { href: '#sponsors', label: 'Sponsors' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-accent/20 text-white shadow-lg font-sans">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:text-accent transition-colors" onClick={closeMenu}>
          <img src={`${basePath}/images/logo.svg`} alt="SOTM India 2026 Logo" className="h-8 w-auto" />
          <span className="hidden sm:inline">SOTM India 2026</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {!isRegisterPage && (
            <Link 
              href="/register" 
              className="hidden md:block px-5 py-2 bg-accent text-secondary font-bold rounded-full shadow-lg hover:bg-highlight hover:shadow-xl transition-all transform hover:scale-105"
            >
              Register Now
            </Link>
          )}
          <button 
            className="md:hidden p-2 text-white hover:text-accent transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed top-16 left-0 right-0 bg-primary/98 backdrop-blur-md border-b border-accent/20 shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-white hover:text-accent transition-colors"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          {!isRegisterPage && (
            <Link
              href="/register"
              className="block px-5 py-2 bg-accent text-secondary font-bold rounded-full shadow-lg hover:bg-highlight transition-all text-center mt-4"
              onClick={closeMenu}
            >
              Register Now
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

