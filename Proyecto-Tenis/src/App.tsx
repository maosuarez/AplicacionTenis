// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeRanking from "./pages/HomeRanking";
import HomeTorneo from "./pages/HomeTorneo";
import Home from "./pages/Home";
import Sesion from "./pages/Sesion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home/ranking" element={<HomeRanking />} />
        <Route path="/home/torneos" element={<HomeTorneo />} />
        <Route path="/sesion" element={<Sesion />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

/*
import React, { useState, useEffect } from 'react';
import Loader from './Loader'; // Importa tu componente de Loader

const DatosAsync = () => {
  const [data, setData] = useState(null); // Estado para almacenar los datos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/datos'); // URL de la API
        if (!response.ok) {
          throw new Error('Error en la llamada a la API');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false); // Cambia el estado de carga a false cuando la llamada finalice
      }
    };

    fetchData();
  }, []); // El array vacío asegura que esto solo se ejecute cuando el componente se monte

  if (loading) return <Loader />; // Muestra el loader mientras se cargan los datos
  if (error) return <div>Error: {error.message}</div>; // Muestra un mensaje de error si ocurre algún problema

  return (
    <div>
      <h1>Datos desde la API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
*/
