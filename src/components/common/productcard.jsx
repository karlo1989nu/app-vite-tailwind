import React, { useState } from "react";

function ProductCard() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <img
        src="https://via.placeholder.com/300"
        alt="Producto"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">Título del Producto</h3>
        <p className="text-gray-600 mt-2">
          Esta es una breve descripción del producto. ¡Es increíble!
        </p>
        <div className="mt-4 flex items-center justify-between btn">
          <button onClick={() => setLikes(likes + 1)} className="btn btn-blue">
            Me gusta ❤️
          </button>
          <span className="text-gray-700">{likes} Me gusta</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
