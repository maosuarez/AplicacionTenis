const jugadoresJson = {
  jugadores: [
    { nombre: "Juan Pérez", edad: 25, puntos: 1500 },
    { nombre: "Ana García", edad: 22, puntos: 1800 },
    { nombre: "Carlos López", edad: 30, puntos: 1700 },
    { nombre: "María Rodríguez", edad: 28, puntos: 1600 },
    { nombre: "Pedro Sánchez", edad: 26, puntos: 1900 },
    { nombre: "Lucía Martínez", edad: 24, puntos: 1450 },
    { nombre: "Miguel Fernández", edad: 29, puntos: 1550 },
    { nombre: "Sofía González", edad: 23, puntos: 1750 },
    { nombre: "Daniela Gómez", edad: 27, puntos: 1650 },
    { nombre: "Tomás Ramírez", edad: 31, puntos: 1350 },
    { nombre: "Laura Torres", edad: 21, puntos: 2000 },
    { nombre: "Fernando Castillo", edad: 33, puntos: 1900 },
    { nombre: "Camila Morales", edad: 19, puntos: 1200 },
    { nombre: "Diego Navarro", edad: 35, puntos: 1100 },
    { nombre: "Isabel Rivas", edad: 22, puntos: 1250 },
    { nombre: "Gonzalo Vera", edad: 28, puntos: 1400 },
    { nombre: "Valentina Reyes", edad: 32, puntos: 1750 },
    { nombre: "Ricardo Aguirre", edad: 24, puntos: 1450 },
    { nombre: "Paula Fuentes", edad: 26, puntos: 1600 },
    { nombre: "Andrés Muñoz", edad: 29, puntos: 1550 },
  ],
};

function Ranking() {
  const jugadores = jugadoresJson.jugadores;
  const jugadoresOrdenados = jugadores.sort((a, b) => b.puntos - a.puntos);

  return (
    <div className="fixed top-20 bottom-20 left-0 right-0 mx-auto p-4 bg-white shadow-md border border-gray-300 overflow-y-scroll h-[calc(100vh-160px)] z-40">
      <h1 className="text-2xl font-bold mb-4">Ranking de Jugadores</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="border px-4 py-2" scope="col">
              #
            </th>
            <th className="border px-4 py-2" scope="col">
              Nombre
            </th>
            <th className="border px-4 py-2" scope="col">
              Edad
            </th>
            <th className="border px-4 py-2" scope="col">
              Puntos
            </th>
          </tr>
        </thead>
        <tbody>
          {jugadoresOrdenados.map((jugador, index) => (
            <tr
              key={index}
              className="text-center cursor-pointer hover:bg-gray-200 transition-colors"
              //onClick={() => handleRowClick(jugador.id)} // Usa el identificador del jugador para cambiar la ruta
            >
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{jugador.nombre}</td>
              <td className="border px-4 py-2">{jugador.edad}</td>
              <td className="border px-4 py-2">{jugador.puntos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ranking;
