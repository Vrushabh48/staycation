import Frame from "../components/Frame";
import Navbar from "../components/Navbar";
import img1 from "../assets/img1.jpeg";
import sky from "../assets/sky.jpeg";
import supreme from "../assets/supreme.jpeg";
import vedhic from "../assets/vedhic.jpeg";
import Footer from "../components/Footer";

export default function Alllocations() {
  return (
    <div className="bg-[#331906] pt-10">
      <div
        className="fixed top-0 left-0 w-full z-10 h-16 bg-gradient-to-b"
        style={{
          backgroundImage: "linear-gradient(to bottom, #331906, transparent)",
        }}
      >
        <Navbar />
      </div>
      <div className="font-cinzel text-white text-5xl ml-[180px] mt-24 w-[398px] h-[38px] mb-9">
        <h1>All Locations</h1>
      </div>
      <div className="flex flex-col items-center mb-32">
        <Frame name="Cabin 3BHK" src={img1} />
        <div className="w-1 h-[235px] bg-white"></div>
        <Frame name="Sky" src={sky} />
        <div className="w-1 h-[235px] bg-white"></div>
        <Frame name="Supreme" src={supreme} />
        <div className="w-1 h-[235px] bg-white"></div>
        <Frame name="Vedhic Hills" src={vedhic} />
      </div>
      <div className="bg-[#0A142F] text-white py-16 px-10">
        <Footer />
        </div>
    </div>
  );
}
