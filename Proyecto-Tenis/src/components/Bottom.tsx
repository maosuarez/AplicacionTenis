import { Link } from "react-router-dom";

function Bottom() {
  return (
    <div>
      <nav className="fixed bottom-0 left-0 w-full bg-gray-200 shadow-lg">
        <ul className="container mx-auto flex justify-around p-4">
          <li className="p-2">
            <Link
              to="/"
              className="text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/home/torneos"
              className="text-gray-700 hover:bg-green-500 hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out"
            >
              Torneos
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="/home/ranking"
              className="text-gray-700 hover:bg-red-500 hover:text-white px-4 py-2 rounded transition duration-300 ease-in-out"
            >
              Ranking
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Bottom;
