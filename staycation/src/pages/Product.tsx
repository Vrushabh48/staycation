import Navbar from "../components/Navbar"
import pawna from '../assets/pawna.jpeg'
import Icons from "../components/Icons"
import ImgSection from "../components/ImgSection"
import Amenities from "../components/Amenities"
import Room from "../components/Room"
import Details from "../components/Details"
import Booking from "../components/Booking"
import Footer from '../components/Footer'

export default function Product(){
    return(
        <div className="bg-[#331906]">
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
                className="h-screen flex flex-col justify-center items-center relative"
                style={{
                    backgroundImage: `linear-gradient(to top, #331906 15%, transparent 85%), url(${pawna})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* First h1 centered */}
                <h1 className="text-white text-5xl font-cinzel z-10 space-x-1 mb-36">
                    Oskar 5BHK
                </h1>

                {/* Second h1 moved up */}
                <h1 className="flex flex-col gap-4 absolute text-5xl font-cinzel font-normal px-4 py-2 leading-10 text-center text-white drop-shadow-lg tracking-wider z-10" style={{ top: '65%' }}>
                    DESIGNED TO BRING
                    <span className="font-italiano font-normal">Luxury</span>
                </h1>
            </div>
            <div className="bg-[#331906] flex flex-col items-center py-16">
  <h1 className="text-white text-5xl font-cinzel z-10 space-x-1 mb-10 md:mb-16">
    Oskar 5BHK
  </h1>
  <div className="w-full md:w-[1177px] h-auto text-2xl text-white font-lexend text-center px-4">
    <h1>
      Experience luxury at Villa Oscar in Lonavla, featuring spacious rooms, a
      private pool, and stunning views. Escape to tranquility and modern comfort
      in this serene retreat.
    </h1>
  </div>
  <Icons />
  <ImgSection />
</div>

            <h1 className="font-cinzel text-white text-4xl ml-40 mt-16 mb-8">Amenities</h1>
            <div className="bg-[#331906] flex flex-col items-center">
                <Amenities />
            </div>
            <div>
                <Room />
            </div>
            <div>
                <Details
                title="MEAL PACKAGES"
                p1="The Standard food menu starts at Rs. 1500/- per person per night and may go up to Rs. 2500/- per person per night."
                p2="Food requests and chef services are subject to availability."
                p3="Meal plans will only get confirmed once the payment is made." />
                <Details
                title="ADDITIONAL AMENITIES"
                p1="Towels & Soaps are provided (Subject to availability)"
                p2="Wi-Fi is available"
                p3="Guests can use wardrobes" />
                <Details title="MANAGEMENT POLICIES"
                p1="No Cancellation/Refund policies available"
                p2="Inappropriate behavior or violation of any of the House Rules will invite a polite refusal to accept a Booking. If already checked in, Management reserves the right to ask guests to leave"
                p3="All Guests must carry government approved Original ID proof" />
                <Details
                title="THINGS TO NOTE"
                p1="Lift is not functional"
                p2="Indoor kitchen is not functional. Only Microwave, Induction and Fridge can be used"
                p3="No House Parties allowed" />
            </div>
            <div className="bg-[#996E50]">
                <Booking />
            </div>
            <div className="bg-[#0A142F] text-white py-16 px-10">
        <Footer />
        </div>
        </div>
    )
}
