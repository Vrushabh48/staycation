import holaimg from '../assets/holaimg.png';

export default function Navbar() {
    return (
        <>
            <div className="w-full h-14 flex items-center justify-between px-24">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img src={holaimg} alt="Hola Staycations" className="h-6" />
                </div>
                
                {/* Navigation Links */}
                <div className="flex gap-[80px] text-white font-lexend text-sm">
                    <button className="">About Us</button>
                    <button className="">Featured</button>
                    <button className="">Locations</button>
                    <button className="">FAQ</button>
                </div>
                
                {/* Right-side Icon */}
                <div className="flex items-center">
                </div>
            </div>
        </>
    );
}
