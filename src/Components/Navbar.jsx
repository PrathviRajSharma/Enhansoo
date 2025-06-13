import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Scroll down = hide
      } else {
        setShowNavbar(true); // Scroll up = show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Blur overlay for main page */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <motion.nav
        className={`w-full fixed top-0 left-0 z-50 backdrop-blur-md px-6 md:px-12 py-3 transition-all duration-300 shadow-sm ${
          showNavbar ? "opacity-100" : "opacity-0 -translate-y-full"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ zIndex: 100 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left: Logo */}
          <Link to="/">
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-white tracking-widest text-xl font-['Helvetica']">
                Enhansoo
              </h1>
            </motion.div>
          </Link>

          {/* Center: Social Icons */}
          <motion.div
            className="hidden md:flex gap-4 justify-center flex-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a
              href="https://www.instagram.com/prathvisharma__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-gray-200 text-sm hover:text-pink-400 transition duration-300" />
            </a>
            <a
              href="https://github.com/PrathviRajSharma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-200 text-sm hover:text-white transition duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/prathvi-sharma-7a7851334/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-gray-200 text-sm hover:text-blue-400 transition duration-300" />
            </a>
          </motion.div>

          {/* Right: Nav Links */}
          <motion.div
            className="hidden items-end justify-end sm:flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/about">
              <motion.span
                className="text-sm text-gray-300 hover:text-white tracking-wide"
                whileHover={{ scale: 1.1 }}
              >
                About
              </motion.span>
            </Link>
            <Link to="/contact">
              <motion.span
                className="text-sm text-gray-300 hover:text-white tracking-wide"
                whileHover={{ scale: 1.1 }}
              >
                Contact
              </motion.span>
            </Link>
            <Link to="/privacy">
              <motion.span
                className="text-sm text-gray-300 hover:text-white tracking-wide"
                whileHover={{ scale: 1.1 }}
              >
                Privacy
              </motion.span>
            </Link>
          </motion.div>

          {/* Mobile Icon */}
          <div className="md:hidden">
            <button className="text-white text-2xl" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Bottom shadow separator */}
        <div className="w-full h-[1px] mt-2 bg-white/10 backdrop-blur-sm"></div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-[70%] bg-[#1a1a1a] backdrop-blur-md z-[1000] shadow-lg"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Title and Close Icon */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <h2 className="text-white text-xl font-semibold">Menu</h2>
              <button
                className="text-white text-2xl z-[1001]"
                onClick={toggleMobileMenu}
              >
                <FaTimes />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col p-6 space-y-4">
              <Link to="/about" onClick={toggleMobileMenu}>
                <motion.span
                  className="text-sm text-gray-300 hover:text-white tracking-wide"
                  whileHover={{ scale: 1.1 }}
                >
                  About
                </motion.span>
              </Link>
              <Link to="/contact" onClick={toggleMobileMenu}>
                <motion.span
                  className="text-sm text-gray-300 hover:text-white tracking-wide"
                  whileHover={{ scale: 1.1 }}
                >
                  Contact
                </motion.span>
              </Link>
              <Link to="/privacy" onClick={toggleMobileMenu}>
                <motion.span
                  className="text-sm text-gray-300 hover:text-white tracking-wide"
                  whileHover={{ scale: 1.1 }}
                >
                  Privacy
                </motion.span>
              </Link>
            </div>

            {/* Social Icons at the Bottom */}
            <div className="absolute bottom-0 left-0 w-full p-6 border-t border-white/10">
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.instagram.com/prathvisharma__/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-gray-200 text-lg hover:text-pink-400 transition duration-300" />
                </a>
                <a
                  href="https://github.com/PrathviRajSharma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-gray-200 text-lg hover:text-white transition duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prathvi-sharma-7a7851334/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-gray-200 text-lg hover:text-blue-400 transition duration-300" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
