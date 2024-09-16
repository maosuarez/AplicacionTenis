import React, { useState } from "react";

const Login = (props: { setAccionLog: (arg: boolean) => void }) => {
  // Estado para manejar el email y la contraseña
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos
    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
    } else {
      setError("");
      // Aquí puedes hacer la lógica de autenticación
      console.log("Email:", email);
      console.log("Password:", password);

      // Si necesitas hacer una petición, puedes usar fetch o axios
      // Por ejemplo, puedes enviar los datos al servidor
      // fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) })
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
        <button onClick={() => props.setAccionLog(false)}>loguearse</button>
      </div>
    </div>
  );
};

export default Login;
