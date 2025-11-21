import React from 'react';
import Hero from './components/Hero';
import HorizontalScroller from './components/HorizontalScroller';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen w-full bg-emerald-50 text-emerald-950">
      <Navbar />
      <Hero />
      <HorizontalScroller />

      {/* Footer */}
      <footer id="contact" className="bg-emerald-900 text-emerald-50">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold">Grove Grooming</h3>
            <p className="mt-2 text-emerald-100/80">Naturally refined care for everyday elegance.</p>
          </div>
          <form className="grid gap-3">
            <label className="text-sm">Join our newsletter</label>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-lg text-emerald-900 placeholder-emerald-900/60" />
              <button className="px-5 py-3 rounded-lg bg-amber-400 text-emerald-950 font-medium hover:bg-amber-300 transition">Subscribe</button>
            </div>
          </form>
        </div>
        <div className="border-t border-emerald-700/40 py-6 text-center text-emerald-200 text-sm">
          © {new Date().getFullYear()} Grove Grooming. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
