import Navbar from "../components/Navbar";
import img1 from "../assets/img1.jpeg";

export default function LandingPage() {
  return (
    <>
      <div className="relative h-screen">
        {/* Navbar with Gradient Background */}
        <div
          className="absolute top-0 left-0 w-full z-10 h-16 bg-gradient-to-b"
          style={{
            backgroundImage: "linear-gradient(to bottom, #331906, transparent)",
          }}
        >
          <Navbar />
        </div>

        {/* Background Image with Increased Gradient */}
        <div
          className="h-full w-full relative"
          style={{
            backgroundImage: `linear-gradient(to top, #331906 15%, transparent 85%), url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Centered Content */}
          <div className="absolute bottom-44 left-1/2 transform -translate-x-1/2 text-center text-white">
            <h1 className="text-4xl font-cinzel font-normal px-4 py-2 leading-10 drop-shadow-lg tracking-wider">
              Transform your Staycation Game
            </h1>
          </div>
        </div>

        {/* Subsequent Section with Background Color */}
        <div className="bg-[#331906] text-white py-16 text-center relative">
          <div className="w-[909.14px] h-[2545px] mt-868 mr-228">
            {/* White Vertical Line */}
            <div className="w-1 h-[235px] bg-white absolute left-1/2 transform -translate-x-1/2 top-[30px]"></div>
            {/* Text Below the Line */}
            <div className="mt-[260px] ml-[525px]">
              <h1 className="w-[500px] text-4xl font-cinzel font-normal px-4 py-2 leading-10 drop-shadow-lg tracking-wider">
                Experience the elegance of a Perfect Staycation
              </h1>
            </div>
             {/* White Vertical Line */}
             <div className="w-1 h-[235px] bg-white absolute left-1/2 transform -translate-x-1/2 top-[525px]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
