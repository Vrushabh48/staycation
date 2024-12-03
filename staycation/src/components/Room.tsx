import livingroom from '../assets/livingroom.jpeg';
import bedroom from '../assets/bedroom.jpeg';
import entertainment from '../assets/entertainment.jpeg';
import pool from '../assets/pool.jpeg';

export default function Room() {
    return (
        <div className="grid grid-cols-2 gap-y-12 mt-24 ml-10">
            {/* Living Room */}
            <div className="w-[422px] h-auto text-white ml-20">
                <h1 className="font-cinzel text-4xl mb-10">Living Room</h1>
                <img className="rounded-2xl" src={livingroom} alt="Living Room" />
                <ul className="font-lexend font-light text-xl mt-6 list-disc pl-5 space-y-4">
                    <li>Well-balanced modern interior design gives a clean and fresh look</li>
                    <li>Living room accommodates large groups in a comfortable, casual, and elegant atmosphere</li>
                </ul>
            </div>

            {/* Bedroom */}
            <div className="w-[422px] h-auto text-white ml-20">
                <h1 className="font-cinzel text-4xl mb-10">Bedroom</h1>
                <img className="rounded-2xl" src={bedroom} alt="Bedroom" />
                <ul className="font-lexend font-light text-xl mt-6 list-disc pl-5 space-y-4">
                    <li>Five AC bedrooms, that includes 1 kids bedroom. There’s one washroom that’s shared between two bedrooms</li>
                    <li>Extra mattresses are available</li>
                    <li>Fresh linen and pillows are provided in all rooms</li>
                </ul>
            </div>

            {/* Entertainment & Games */}
            <div className="w-[422px] h-auto text-white ml-20 mt-20">
                <h1 className="font-cinzel text-4xl mb-10 w-[477px] h-[36px]">Entertainment & Games</h1>
                <img className="rounded-2xl" src={entertainment} alt="Entertainment & Games" />
                <ul className="font-lexend font-light text-xl mt-6 list-disc pl-5 space-y-4">
                    <li>The living room is equipped with a Smart TV.</li>
                    <li>A music system is available</li>
                    <li>Indoor games are available</li>
                    <li>Free Wi-Fi available</li>
                </ul>
            </div>

            {/* Pool */}
            <div className="w-[422px] h-auto text-white ml-20 mt-[70px]">
                <h1 className="font-cinzel text-4xl mb-10">Pool</h1>
                <img className="rounded-2xl" src={pool} alt="Pool" />
                <ul className="font-lexend font-light text-xl mt-6 list-disc pl-5 space-y-4">
                    <li>The property has a huge private pool</li>
                    <li>Exterior space houses a 300 sq swimming pool and open garden with seating where you can admire our planted flora</li>
                </ul>
            </div>
        </div>
    );
}
