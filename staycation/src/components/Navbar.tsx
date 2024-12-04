import { useNavigate } from "react-router-dom";
import holaimg from "../assets/holaimg.png";

export default function Navbar() {
    const navigate = useNavigate();
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
      <div className="flex gap-[80px] text-white font-lexend text-sm">
        <button onClick={() => scrollToSection("about-section")}>About Us</button>
        <button onClick={() => scrollToSection("featured-section")}>Featured</button>
        <button onClick={() => navigate('/locations')}>
          Locations
        </button>
        <button onClick={() => scrollToSection("faq-section")}>FAQ</button>
      </div>

      {/* Right-side Icon */}
      <div className="flex items-center"></div>
    </div>
  );
}
