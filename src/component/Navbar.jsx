import { useState, useEffect } from "react";
import { FiSearch, FiMenu, FiX, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 ${
        scroll ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center text-white relative">
        {/* Brand Logo (Hidden when search is open) */}
        {!searchOpen && <h1 className="text-2xl font-bold">Brand</h1>}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {!searchOpen ? (
            <>
              <Link to="/" className="hover:text-pink-400">Home</Link>
              <Link to="/services" className="hover:text-pink-400">Services</Link>
              <Link to="/about" className="hover:text-pink-400">About</Link>
              <Link to="/testimonial" className="hover:text-pink-400">Testimonial</Link>
              <Link to="/contact" className="hover:text-pink-400">Contact</Link>
              <FiSearch
                className="text-xl cursor-pointer hover:text-pink-400 transition duration-300 "
                onClick={() => setSearchOpen(true)}
              />
            </>
          ) : (
            // Search Bar (Full-width inside navbar)
            <div className="absolute top-0 left-0 w-full  bg-[#EEEEEE] flex items-center  px-4 py-2  rounded-md shadow-md transition-transform duration-300 transform translate-x-0">
              {/* Back Button */}
              <FiArrowLeft
                className="text-black text-2xl cursor-pointer mr-3"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchText("");
                }}
              />
              <div className="flex items-center bg-white mx-auto  w-[50%] ml-auto shadow-md ">
              <FiSearch className="text-gray-600 mr-3 ml-3 text-xl " />
              <input
                type="text"
                placeholder="Search..."
                className="w-full  bg-white text-black p-2  text-lg  outline-none"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              {/* Clear Button */}
              {searchText && (
                <FiX
                  className="text-black text-2xl cursor-pointer ml-2 mr-3"
                  onClick={() => setSearchText("")}
                />
              )}
              </div>
              {/* Search Input */}
              
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          <FiX className="text-2xl" />
        </button>
        <div className="flex flex-col mt-16 space-y-6 p-6">
          <a href="#" className="hover:text-pink-400">Home</a>
          <a href="#" className="hover:text-pink-400">Testimonial</a>
          <a href="#" className="hover:text-pink-400">About</a>
          <a href="#" className="hover:text-pink-400">Services</a>
          <a href="#" className="hover:text-pink-400">Contact</a>
          <FiSearch className="text-xl cursor-pointer hover:text-pink-400" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
