import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or default to false
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800 dark:text-white">
        MySite
      </div>

      <ul className="flex space-x-6 text-gray-700 dark:text-gray-300">
        <li>
          <a href="#home" className="hover:text-blue-500 dark:hover:text-blue-400">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400">
            Contact
          </a>
        </li>
      </ul>

      <button
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Dark Mode"
        className="text-gray-700 dark:text-gray-300 focus:outline-none"
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="yellow"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m8.485-8.485h-1M4.515 12h-1m15.364 5.364l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728l-.707-.707M6.343 17.657l-.707-.707M12 5a7 7 0 000 14 7 7 0 000-14z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
            />
          </svg>
        )}
      </button>
    </nav>
  );
}
