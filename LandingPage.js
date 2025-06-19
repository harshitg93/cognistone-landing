
import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white font-sans">
      <header className="px-6 py-4 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-wide">Cognistone</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#vision" className="hover:text-gray-300">Vision</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>
      </header>

      <main className="px-6 md:px-20 lg:px-32 py-20 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Intelligence that Thinks Ahead.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Cognistone builds predictive AI systems designed to anticipate, adapt, and act — enabling organizations to make smarter, faster, and future-ready decisions.
        </p>
        <div className="mt-10">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-xl">
            Get in Touch
          </a>
        </div>
      </main>

      <section id="about" className="bg-gray-900 py-16 px-6 md:px-20 lg:px-32 text-gray-300">
        <h3 className="text-3xl font-semibold mb-4">What We Do</h3>
        <p>
          We architect intelligent, modular systems that combine the strengths of machine learning, causal reasoning, and systems engineering. From prototype to production, Cognistone’s AI platforms deliver actionable insight and operational clarity.
        </p>
      </section>

      <section id="vision" className="bg-gray-950 py-16 px-6 md:px-20 lg:px-32 text-gray-300">
        <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
        <p>
          In a world driven by uncertainty, we envision AI that doesn’t just react — it foresees. Cognistone aims to be the cornerstone of adaptive intelligence in enterprise ecosystems.
        </p>
      </section>

      <section id="contact" className="bg-gray-900 py-16 px-6 md:px-20 lg:px-32 text-gray-300">
        <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
        <p className="mb-4">Email us at <a className="text-blue-400 underline" href="mailto:hello@cognistone.com">hello@cognistone.com</a></p>
      </section>

      <footer className="text-center text-gray-500 py-6 border-t border-gray-700">
        © {new Date().getFullYear()} Cognistone Inc. All rights reserved.
      </footer>
    </div>
  );
}
