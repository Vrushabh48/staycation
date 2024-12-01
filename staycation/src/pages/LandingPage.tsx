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
        {/* Background Image */}
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Content goes here */}
        </div>
        <h1>This is H1 tag text.</h1>
      </div>
    </>
  );
}
