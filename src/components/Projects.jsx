import React from 'react';

const Projects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Project 1</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              View Project
            </a>
          </div>
          {/* Add more project cards here */}
        </div>
      </div>
    </section>
  );
};

export default Projects;