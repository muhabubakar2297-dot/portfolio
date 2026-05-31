import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto text-center py-16 glass p-10 rounded-3xl border border-gray-700">
        <h1 className="text-5xl font-extrabold mb-4">Muhammad Abubakar</h1>
        <p className="text-xl text-blue-400">Data Analyst | IT Assistant | AI Visual Artist</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="mailto:muhabubakar2297@gmail.com" className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition">Contact Me</a>
          <a href="https://www.linkedin.com/in/muhammad-abubakar-65240a3a1" className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">LinkedIn</a>
        </div>
      </header>

      {/* Skills & Experience */}
      <main className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-6">
        <section className="glass p-8 rounded-2xl border border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <ul className="text-gray-300 space-y-2">
            <li>• Data Analytics & Cleaning</li>
            <li>• MS Office Expert (Access, Excel, Word)</li>
            <li>• AI Workflows & ChatGPT Integration</li>
            <li>• Graphic Designing (Adobe/Canva)</li>
          </ul>
        </section>

        <section className="glass p-8 rounded-2xl border border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p className="text-gray-300">Diploma in Computer Operator (TEVTA)</p>
          <p className="text-gray-300">Matriculation (Science)</p>
        </section>
      </main>

      {/* Certifications Section */}
      <section className="max-w-4xl mx-auto mt-10 glass p-8 rounded-2xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-6">Google Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">Foundations: Data, Data, Everywhere</div>
          <div className="bg-gray-800 p-4 rounded-lg">Process Data from Dirty to Clean</div>
          <div className="bg-gray-800 p-4 rounded-lg">AI for Data Analysis</div>
          <div className="bg-gray-800 p-4 rounded-lg">AI and Digital Transformation</div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
