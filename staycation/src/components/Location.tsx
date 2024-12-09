interface Locationimg {
    src: string;
    location: string;
  }
  
  export default function Location({ src, location }: Locationimg) {
    return (
      <div
        className="relative w-[172px] h-[128px] md:w-[279px] md:h-[488px] rounded-xl overflow-hidden shadow-lg hover:scale-105"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Centered Location Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-medium font-lexend text-2xl md:text-3xl">
          {location}
        </div>
      </div>
    );
  }
  