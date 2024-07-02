"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import Button from "./button";
import Image from "next/image";
import hamburger from "@/public/Hamburger.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const NavLinks = ({
    className,
    onClick,
  }: {
    className: string;
    onClick?: () => void;
  }) => (
    <div className={className}>
      <Link href="/" onClick={onClick}>
        Home
      </Link>
      <Link href="#platform" onClick={onClick}>
        Platform
      </Link>
      <Link href="#about" onClick={onClick}>
        About Us
      </Link>
      <Link href="#Services" onClick={onClick}>
        Services
      </Link>
    </div>
  );

  return (
    <nav className="w-full bg-primary-green">
      <div className="container h-[96px] px-4">
        <div className="flex items-center justify-between h-full">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Image src={hamburger} alt="hamburger" />
          </button>
          <Logo />
          <NavLinks className="hidden md:flex gap-10 text-white nav-link" />
          <Button variant="sign-up">Sign Up</Button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Mobile menu content */}
        <div
          className={`fixed top-0 right-0 h-full w-[300px] bg-primary-green p-6 shadow-lg transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-8">
            <Logo />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white transition-transform duration-200 ease-in-out hover:scale-110"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <NavLinks
            className="flex flex-col gap-6 text-white text-lg"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="mt-auto pt-6">
            <Button variant="sign-up">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
