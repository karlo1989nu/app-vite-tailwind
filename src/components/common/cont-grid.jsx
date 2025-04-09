import React from "react";

const GridContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <div className="bg-blue-500 text-white p-4 rounded-lg">Elemento 1</div>
      <div className="bg-green-500 text-white p-4 rounded-lg">Elemento 2</div>
      <div className="bg-red-500 text-white p-4 rounded-lg">Elemento 3</div>
      <div className="bg-yellow-500 text-white p-4 rounded-lg">Elemento 4</div>
    </div>
  );
};

export default GridContainer;
