'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // próg scrolla
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white-800/60 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <nav className="w-full mx-auto flex justify-between items-center px-4 md:px-6 py-4 text-white">
          {/* Logo */}
          <Link href="/" aria-label="Go to homepage">
            <Image
              src={logo}
              alt="Verbite Logo"
              width={140}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 text-sm text-gray-300 font-medium items-center">
            <Link href="#features" className="hover:text-white transition text-base">Features</Link>
            <Link href="#why" className="hover:text-white transition text-base">Why Verbite</Link>
            <Link href="#testimonials" className="hover:text-white transition text-base">Testimonials</Link>
            <Link href="#faq" className="hover:text-white transition text-base">FAQ</Link>
            <Link href="#pricing" className="hover:text-white transition text-base">Pricing</Link>
            <Link href="#blog" className="hover:text-white transition text-base">Blog</Link>
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex gap-4 items-center">
            <Link
              href="https://verbite.vercel.app/"
              className="px-4 py-2 text-sm rounded-md bg-white/10 hover:bg-white/20 transition"
            >
              Log in
            </Link>
            <Link
              href="https://verbite.vercel.app/signup"
              className="px-4 py-2 text-sm rounded-md bg-[#53C9A9] text-black hover:bg-emerald-400 transition"
            >
              Start free trial
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            aria-label="Toggle mobile menu"
            onClick={toggleMobileMenu}
            className="lg:hidden text-white focus:outline-none z-[51]"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-90 backdrop-blur-xl transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center pt-24 px-6 gap-8 text-lg font-medium text-gray-200">
          <Link href="#features" onClick={toggleMobileMenu} className="hover:text-white">Features</Link>
          <Link href="#why" onClick={toggleMobileMenu} className="hover:text-white">Why Verbite</Link>
          <Link href="#testimonials" onClick={toggleMobileMenu} className="hover:text-white">Testimonials</Link>
          <Link href="#faq" onClick={toggleMobileMenu} className="hover:text-white">FAQ</Link>
          <Link href="#pricing" onClick={toggleMobileMenu} className="hover:text-white">Pricing</Link>
          <Link href="#blog" onClick={toggleMobileMenu} className="hover:text-white">Blog</Link>

          <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
            <Link
              href="/login"
              onClick={toggleMobileMenu}
              className="block w-full text-center px-4 py-3 bg-white/10 rounded-md hover:bg-white/20 transition"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={toggleMobileMenu}
              className="block w-full text-center px-4 py-3 bg-emerald-500 text-black rounded-md hover:bg-emerald-400 transition"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
