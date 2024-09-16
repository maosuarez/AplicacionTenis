import FilaTorneo from "./FilaTorneo";
import React, { useState } from "react";

const torneosJson = {
  torneos: [
    {
      nombre: "Torneo Internacional de Tenis",
      lugar: "Club de Tenis Ciudadela",
      horarios: "5 - 7 de octubre, 10:00 AM - 6:00 PM",
      categorias: ["Adultos", "Júnior", "Veteranos"],
      costo: "$50 por jugador",
    },
    {
      nombre: "Campeonato Nacional de Ajedrez",
      lugar: "Hotel Gran Plaza",
      horarios: "12 - 14 de noviembre, 9:00 AM - 8:00 PM",
      categorias: ["Principiantes", "Intermedios", "Avanzados"],
      costo: "$30 por jugador",
    },
    {
      nombre: "Torneo de Fútbol Infantil",
      lugar: "Estadio Municipal",
      horarios: "20 - 22 de septiembre, 8:00 AM - 5:00 PM",
      categorias: ["Sub-10", "Sub-12", "Sub-14"],
      costo: "$40 por equipo",
    },
    {
      nombre: "Maratón de Running Urbana",
      lugar: "Parque Central",
      horarios: "3 de diciembre, 7:00 AM - 1:00 PM",
      categorias: ["5K", "10K", "21K"],
      costo: "$25 por corredor",
    },
    {
      nombre: "Torneo de Baloncesto Universitario",
      lugar: "Gimnasio Deportivo",
      horarios: "15 - 17 de octubre, 2:00 PM - 10:00 PM",
      categorias: ["Hombres", "Mujeres"],
      costo: "$60 por equipo",
    },
    {
      nombre: "Competencia de Natación en Piscina Olímpica",
      lugar: "Centro Acuático Regional",
      horarios: "28 - 30 de noviembre, 9:00 AM - 6:00 PM",
      categorias: ["Estilo Libre", "Mariposa", "Espalda", "Pecho"],
      costo: "$35 por evento",
    },
    {
      nombre: "Torneo de Vóley Playa",
      lugar: "Playa Azul",
      horarios: "8 - 10 de diciembre, 10:00 AM - 4:00 PM",
      categorias: ["Masculino", "Femenino", "Mixto"],
      costo: "$45 por equipo",
    },
    {
      nombre: "Campeonato de Golf Amateur",
      lugar: "Campo de Golf El Roble",
      horarios: "18 - 20 de octubre, 8:00 AM - 3:00 PM",
      categorias: ["Aficionados", "Expertos"],
      costo: "$70 por jugador",
    },
    {
      nombre: "Torneo de Rugby Regional",
      lugar: "Campo Deportivo Regional",
      horarios: "22 - 24 de noviembre, 11:00 AM - 6:00 PM",
      categorias: ["Masculino", "Femenino"],
      costo: "$55 por equipo",
    },
    {
      nombre: "Competencia de Artes Marciales",
      lugar: "Centro de Convenciones",
      horarios: "5 - 7 de diciembre, 9:00 AM - 8:00 PM",
      categorias: ["Kárate", "Judo", "Taekwondo"],
      costo: "$40 por disciplina",
    },
    {
      nombre: "Torneo de Esports",
      lugar: "Arena Virtual",
      horarios: "10 - 12 de octubre, 12:00 PM - 10:00 PM",
      categorias: ["FPS", "MOBA", "RPG"],
      costo: "$50 por equipo",
    },
  ],
};

function Torneo() {
  const torneos = torneosJson.torneos;

  const [tipoTorneo, setTipoTorneo] = React.useState("Proximos");

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (e: Event) => {
    if (e.target.closest(".dropdown") === null) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div className="fixed top-20 bottom-20 left-0 right-0 mx-auto p-4 bg-white shadow-md border border-gray-300 overflow-y-scroll h-[calc(100vh-160px)] z-40">
      <div className="flex justify-around items-center">
        <h2 className="text-3xl font-bold mb-4">Torneos {tipoTorneo}</h2>
        <nav className="relative inline-block text-left dropdown">
          <div className="group">
            <button
              onClick={() => {
                toggleMenu();
              }}
              className="px-4 py-2 bg-slate-300 border-gray-400 text-black rounded-md hover:bg-slate-400 focus:outline-none focus:ring-2 focus:bg-slate-400"
            >
              Selecciona
            </button>
            {isOpen && (
              <div className="absolute bg-white border border-gray-200 rounded-md shadow-lg mt-2 w-48">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setTipoTorneo("Proximos");
                  }}
                >
                  Proximos
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setTipoTorneo("Anteriores");
                  }}
                >
                  Anteriores
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
      {torneos.map(
        (
          fichaTorneo: {
            nombre: string;
            lugar: string;
            horarios: string;
            categorias: Array<string>;
            costo: string;
          },
          index
        ) => (
          <FilaTorneo key={index} torneo={fichaTorneo} />
        )
      )}
    </div>
  );
}

export default Torneo;
