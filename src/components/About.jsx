import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-8">
          Hello, I'm John Doe, a skilled web developer with a strong passion for creating beautiful and user-friendly applications. With years of experience in the industry, I specialize in React and Tailwind CSS.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default About;