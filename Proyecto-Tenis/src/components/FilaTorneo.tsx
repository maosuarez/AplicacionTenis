import React from "react";

const Torneo = (props: {
  torneo: {
    nombre: string;
    lugar: string;
    horarios: string;
    categorias: Array<string>;
    costo: string;
  };
  key: number;
}) => {
  return (
    <div className="max-w-screen-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-8">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {props.torneo.nombre}
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">
            Lugar de Juego:
          </h3>
          <p className="text-gray-600">{props.torneo.lugar}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Horarios:</h3>
          <p className="text-gray-600">{props.torneo.horarios}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Categorías:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {props.torneo.categorias.map((categoria, index) => (
              <li key={index}>{categoria}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Valor:</h3>
          <p className="text-gray-600">{props.torneo.costo}</p>
        </div>
      </div>
    </div>
  );
};

export default Torneo;
