import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {

  const storedValue = localStorage.getItem("darkMode");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(storedValue ? JSON.parse(storedValue) : true);

  useEffect(() => {

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">

      <NavLink to="/" className="text-xl font-bold">
        <h1 >Social Feed</h1>
      </NavLink>
      <NavLink to="/bookMarks" className="text-xl font-bold">
        <h1>BookMarks</h1>
      </NavLink>

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="bg-gray-700 px-4 py-2 rounded-md"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
