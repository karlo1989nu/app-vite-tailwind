import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
// This is a simple button component using Tailwind CSS for styling.
