// components/Header.tsx
'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react"; // Optional: install lucide-react for icons

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 md:px-16 py-6 flex justify-between items-center bg-foreground relative">
      <Image src="/images/logo.svg" width={200} height={100} alt="Logo" />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-primary font-medium">
        <Link href="#">Home</Link>
        <Link href="#">Experiences</Link>
        <Link href="#">Guide</Link>
        <Link href="#">Itineraries</Link>
        <Link href="#">FAQ</Link>
      </nav>

      {/* Call to Action Button */}
      <Button className="hidden md:block bg-primary text-white rounded-xl cursor-pointer hover:bg-green-800">
        Book a call
      </Button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-primary cursor-pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="absolute top-full text-primary left-0 w-full bg-foreground z-50 flex flex-col space-y-4 p-6 md:hidden shadow-lg">
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>Experiences</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>Guide</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>Itineraries</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
          <Button
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary text-white rounded-xl hover:bg-green-800"
          >
            Book a call
          </Button>
        </div>
      )}
    </header>
  );
}
