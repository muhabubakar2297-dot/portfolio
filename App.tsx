import React from 'react';

// Main Portfolio Component
export default function Portfolio() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      
      {/* 1. Hero Section: Intro */}
      <section className="text-center py-20">
        <h1 className="text-6xl font-bold mb-4">Muhammad Abubakar</h1>
        <p className="text-xl text-blue-400">Data Analyst | AI Developer | Graphic Designer</p>
      </section>

      {/* 2. Professional Summary */}
      <section className="max-w-4xl mx-auto glass p-8 rounded-2xl mb-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300">
          Google Certified Data Analyst and IT Assistant based in Gujrat, Pakistan[cite: 1, 8]. 
          Specializing in AI-powered workflows, data visualization, and professional graphic design[cite: 8].
        </p>
      </section>

      {/* 3. Skills Grid */}
      <section className="max-w-4xl mx-auto grid grid-cols-2 gap-4 mb-8">
        <div className="glass p-6 rounded-xl">
          <h3 className="font-bold">Data & IT</h3>
          <p className="text-sm">MS Office Expert, Data Cleaning, SQL, Reporting[cite: 1, 7]</p>
        </div>
        <div className="glass p-6 rounded-xl">
          <h3 className="font-bold">AI & Design</h3>
          <p className="text-sm">AI Workflows, Photoshop, Illustrator, Canva[cite: 8, 9]</p>
        </div>
      </section>

      {/* 4. Certifications */}
      <section className="max-w-4xl mx-auto glass p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Certifications</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Google Data Analytics Professional Certificate[cite: 1, 2, 3]</li>
          <li>AI and Digital Transformation (Oxford/UNESCO)[cite: 8, 9]</li>
          <li>Urdu AI Master Class[cite: 8]</li>
        </ul>
      </section>

    </div>
  );
}
