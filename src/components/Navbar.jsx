import React from 'react';
import { Menu } from 'lucide-react';

function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-full bg-emerald-600 inline-flex items-center justify-center text-white font-bold">G</span>
          <span className="font-semibold text-emerald-900">Grove Grooming</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-emerald-900/80">
          <a href="#collection" className="hover:text-emerald-900">Collection</a>
          <a href="#about" className="hover:text-emerald-900">About</a>
          <a href="#contact" className="hover:text-emerald-900">Contact</a>
        </nav>
        <button className="md:hidden p-2 rounded-full border border-emerald-900/10 text-emerald-900" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
