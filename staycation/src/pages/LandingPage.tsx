import Navbar from "../components/Navbar";
import img1 from "../assets/img1.jpeg";
import CuratedCard from "../components/CuratedCard";
import Location from "../components/Location";
import lonavala from '../assets/lonavala.jpeg';
import khandala from '../assets/khandala.jpeg';
import pawna from '../assets/pawna.jpeg';
import goa from '../assets/goa.jpeg';
import Textimg from "../components/Textimg";
import cardimg from '../assets/cardimg.png';
import hospitality from '../assets/hospitality.jpeg'
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <div className="relative w-full">
        {/* Navbar */}
        <div
          className="fixed top-0 left-0 w-full z-10 h-16 bg-gradient-to-b"
          style={{
            backgroundImage: "linear-gradient(to bottom, #331906, transparent)",
          }}
        >
          <Navbar />
        </div>

        {/* Hero Section */}
        <div
          className="h-screen flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(to top, #331906 15%, transparent 85%), url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className=" mt-80 text-4xl font-cinzel font-normal px-4 py-2 leading-10 text-center text-white drop-shadow-lg tracking-wider">
            Transform your Staycation Game
          </h1>
        </div>

        {/* Section 1: Description */}
        <div className="bg-[#331906] text-white py-16 text-center relative">
          <div className="relative flex flex-col items-center">
            {/* Top White Line */}
            <div className="w-1 h-[235px] bg-white"></div>
            {/* Text */}
            <h1 className="mt-10 text-4xl font-cinzel font-normal px-4 py-2 leading-10 drop-shadow-lg tracking-wider w-[500px] h-[142px]">
              Experience the elegance of a Perfect Staycation
            </h1>
            {/* Bottom White Line */}
            <div className="w-1 h-[235px] bg-white mt-10"></div>
          </div>
        </div>

        {/* Section 2: Curated by Experts */}
        <div className="bg-[#331906] text-white py-16 px-10 pr-24">
          <h1 className="text-5xl font-cinzel font-normal text-left ml-12">
            Curated by our Experts
          </h1>
          <div className="flex justify-start gap-8 mt-16 ml-12">
            <CuratedCard name="SKY" />
            <CuratedCard name="Oscar 5BHK" />
            <CuratedCard name="SKY" />
            <CuratedCard name="Oscar 5BHK" />
          </div>
        </div>

        {/* Section 3: Locations */}
        <div className="bg-[#331906] text-white py-16 px-10">
          <h1 className="text-5xl font-cinzel font-normal text-left ml-12">
            Locations
          </h1>
          {/* Add your location content here */}
          <div className="flex justify-start gap-20 mt-16 ml-12">
            <Location src={lonavala} location="Lonavala"/>
            <Location src={khandala} location="Khandala"/>
            <Location src={pawna} location="Pawna"/>
            <Location src={goa} location="Goa"/>
          </div>
        </div>
        {/* Section 4: Why */}
        <div className="bg-[#331906] text-white py-16 px-10">
        <h1 className="text-5xl font-normal font-cinzel w-[349px] text-white ml-12">Who are we?</h1>
          <Textimg src={cardimg} content="Hola Staycations is a young and dynamic company driven by a simple idea: to create a haven for connection. We believe vacations are all about spending quality time with loved ones, away from the pressures of daily life. That's why we handpick hidden gems - villas, homestays, and estates brimming with character and comfort. All this, conveniently located just a short drive from your city. At Hola Staycations, we redefine luxury. Forget the impersonal extravagance of traditional hotels. We focus on what truly matters: tranquility, captivating landscapes, and private spaces where you can unwind under the open sky. We're a passionate hospitality startup, driven by our founder Ankit's vision. Our mission? To curate escapes that seamlessly blend the luxurious amenities of a high-end hotel with the warmth and privacy of your own home. Welcome to Hola Staycations, where unforgettable memories are made. Let us help you craft your perfect escape. Book your staycation today!" />
        </div>
        <div className="bg-[#331906] text-white py-16 px-10">
        <h1 className="text-5xl font-normal font-cinzel w-[884px] text-white ml-12">Revolutionizing HOSPITALITY</h1>
          <Textimg src={hospitality} content="Experience unparalleled luxury and comfort with our villa service, where every moment is tailored to exceed your expectations. Nestled amidst breathtaking scenery, our villas offer a sanctuary of serenity, providing the perfect backdrop for your getaway. From personalized concierge services to meticulously curated amenities, we ensure that every aspect of your stay is flawlessly executed. Whether you desire a tranquil retreat or a vibrant escape, our dedicated team is committed to crafting an unforgettable experience, ensuring that your time with us is nothing short of extraordinary. Relax, unwind, and indulge in the epitome of hospitality with our villa service, where every detail is meticulously designed to surpass your every expectation.!" />
        </div>

        <div className="bg-[#331906] text-white relative flex flex-col items-center">
          <div className="w-[1px] bg-white h-[120px] items-center border-b-2"></div>
        </div>
        <div className="bg-[#331906] text-white py-16 px-10">
        <h1 className="text-5xl font-normal font-cinzel w-[349px] text-white ml-20">Why Us?</h1>
        <div className="flex flex-col items-center">
          <Features />
          <div className="w-1 h-[235px] bg-white mt-10"></div>
        </div>
        </div>
        <div className="bg-[#331906] text-white py-16 px-10">
        <h1 className="text-5xl font-normal font-cinzel w-[349px] text-white ml-20">Testimonials</h1>
        <div className="flex items-center justify-between mt-12">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m14 7l-5 5m0 0l5 5"></path></svg>
          <Testimonials />
          <Testimonials />
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m10 17l5-5m0 0l-5-5"></path></svg>
        </div>
        <div className="flex flex-col items-center">
        <div className="w-1 h-[235px] bg-white mt-10"></div>
        </div>
        </div>
         {/** FAQ Section */}
        <div className="bg-[#331906] text-white py-16 px-10">
        <h1 className="text-5xl font-normal font-cinzel w-[349px] text-white ml-20">FAQS</h1>
        <FAQ />
        <div className="flex ml-20 mt-5">
        <h3 className="text-[#96501D] font-lexend ">View all</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 10l5 5m0 0l5-5"></path></svg>
        </div>
        </div>
        <div className="bg-[#0A142F] text-white py-16 px-10">
        <Footer />
        </div>
      </div>
    </>
  );
}
