import { useNavigate } from "react-router-dom";
import holaimg from "../assets/holaimg.png";
import { useState } from "react";

export default function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Scroll to section by ID
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-14 flex items-center justify-between px-24">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={holaimg} alt="Hola Staycations" className="h-6" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-[80px] text-white font-lexend text-sm">
        <button onClick={() => scrollToSection("about-section")}>About Us</button>
        <button onClick={() => scrollToSection("featured-section")}>Featured</button>
        <button onClick={() => navigate('/locations')}>
          Locations
        </button>
        <button onClick={() => scrollToSection("faq-section")}>FAQ</button>
      </div>
      <div>

      
       {/* Hamburger Icon for Mobile */}
       <button
        className="text-white md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#331906] text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <button onClick={() => scrollToSection("about-section")}>
            About Us
          </button>
          <button onClick={() => scrollToSection("featured-section")}>
            Featured
          </button>
          <button onClick={() => navigate("/locations")}>
            Locations
          </button>
          <button onClick={() => navigate("/product")}>
            Product
          </button>
        </div>
      )}
      </div>
    </div>
  );
}
