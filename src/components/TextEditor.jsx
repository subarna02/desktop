import React, { useState } from 'react';

const TextEditor = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Text Editor</h2>
      <textarea
        className="w-full h-64 p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here..."
      ></textarea>
      <div className="mt-4 flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default TextEditor;