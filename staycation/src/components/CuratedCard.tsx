import { useNavigate } from 'react-router-dom';
import cardimg from '../assets/cardimg.png';

interface CuratedCardProps {
  name: string;
}

export default function CuratedCard({ name }: CuratedCardProps) {
  const navigate = useNavigate();
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg w-[300px] h-[400px]">
      {/* Background Image */}
      <img onClick={()=> navigate('/product')}
        src={cardimg}
        alt="Luxury Villa"
        className="w-full h-full object-cover brightness-110 hover:scale-105"
      />

      {/* Text Section at the Bottom */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 text-center">
        {/* Title */}
        <h2 className="text-2xl font-normal font-cinzel">{name}</h2>
        {/* Price */}
        <p className="text-lg mt-1 font-cinzel font-normal">Rs. 18,000/- onwards</p>
        {/* Details */}
        <div className="flex justify-around items-center mt-2 text-sm">
          {/* Left Section */}
          <div className="flex flex-col items-center">
            <span className="font-normal text-xl font-cinzel">4 Bedrooms</span>
          </div>
          {/* Divider */}
          <div className="h-8 w-[2px] bg-white mx-4"></div>
          {/* Right Section */}
          <div className="flex flex-col items-center">
            <span className="font-normal text-xl font-cinzel">Goa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
