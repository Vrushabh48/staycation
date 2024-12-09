interface FrameProps {
    name: string;
    src: string;
  }
  
  export default function Frame({ src, name }: FrameProps) {
    return (
      <div
  className="w-[400px] md:w-[1174px] h-[300px] md:h-[495px] rounded-3xl flex flex-col justify-center items-center relative mt-2 group overflow-hidden"
  style={{
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div
    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 scale-100 group-hover:scale-110"
    style={{
      backgroundImage: `url(${src})`,
    }}
  ></div>

  {/* Centered h1 */}
  <h1 className="z-10 text-3xl md:text-[84px] font-cinzel font-normal leading-snug md:leading-10 text-white drop-shadow-lg tracking-wider text-center px-4">
    {name}
  </h1>

  {/* Bottom-right h2 and button */}
  <div className="absolute bottom-4 md:bottom-7 right-4 md:right-8 flex flex-col md:flex-row items-center justify-between z-10">
    <h2 className="text-white font-cinzel font-semibold text-base md:text-xl mb-2 md:mb-0 md:mr-4">
      From INR 22,000 /-
    </h2>
    <button className="px-4 py-2 bg-[#EE9D65] text-black font-semibold rounded-lg shadow-md font-cinzel">
      Book Now
    </button>
  </div>
</div>

    );
  }
  