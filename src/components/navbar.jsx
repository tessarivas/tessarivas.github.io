import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Icons
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
// Components
import ContactButton from "./contactButton.jsx";

// Navigation Menus
const navMenus = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Skills", link: "/skills" },
  { name: "Projects", link: "/projects" },
];

// Navbar Component
const Navbar = ({ theme, setTheme }) => {
  // State
  const [showMenu, setShowMenu] = useState(false);

  // Functions
  const toggleMenu = () => setShowMenu(!showMenu);

  // Effects
  // Set theme on page load
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setShowMenu(false);
      }
    };
    // Event Listener for resize window
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className={`bg-gradient-to-r ${
          theme === "dark"
            ? "from-[#610C9F] via-[#DA0C81] to-[#ffd900]"
            : "from-[#BB9FDC] via-[#F0BBD9] to-[#F2D8A7]"
        } w-full z-60 py-1 relative`}
      >
        {/* MAIN CONTAINER */}
        <div className="flex justify-between items-center p-4 sm:p-2">
          {/* left side */}
          <div className="ml-4">
            {theme === "dark" ? (
              <BiSolidSun
                className="text-2xl cursor-pointer hover:text-yellow-300 hover:filter hover:drop-shadow-[0_0_10px_#facc15] transition-all duration-300"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className="text-2xl cursor-pointer hover:text-purple-700 hover:filter hover:drop-shadow-[0_0_10px_#7c00ff] transition-all duration-300"
                onClick={() => setTheme("dark")}
              />
            )}
          </div>

          {/* - Desktop Menu - */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex justify-center items-center gap-6">
              {navMenus.map((menu) => (
                <li key={menu.name}>
                  <Link
                    to={menu.link}
                    className={`text-xl font-semibold px-4 py-4 md:py-6 inline-block ${
                      theme === "dark"
                        ? "text-white hover:text-[#390062]"
                        : "text-[#8F669F] hover:text-[#5c2670]"
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* right side */}
          <div className="hidden sm:block mr-2">
            <ContactButton theme={theme} />
          </div>

          {/* - Mobile Menu - */}
          <div className="flex items-center sm:hidden mr-4">
            <FiMenu className="text-2xl cursor-pointer" onClick={toggleMenu} />
          </div>
        </div>

        {showMenu && (
          <div
            className={`bg-gradient-to-r ${
              theme === "dark"
                ? "from-[#610C9F] via-[#DA0C81] to-[#ffd900]"
                : "from-[#BB9FDC] via-[#F0BBD9] to-[#F2D8A7]"
            } fixed top-16 left-0 right-0 z-50 py-4 sm:hidden`}
          >
            <ul className="flex flex-col items-center gap-4">
              {navMenus.map((menu) => (
                <li key={menu.name}>
                  <Link
                    to={menu.link}
                    className={`text-xl font-semibold px-4 py-4 md:py-6 inline-block ${
                      theme === "dark"
                        ? "text-white hover:text-[#251435]"
                        : "text-[#8F669F] hover:text-[#5c2670]"
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
