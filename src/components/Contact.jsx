import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded"
            />
          </div>
          {/* Add more form fields here */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;