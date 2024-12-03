export default function Booking() {
  return (
    <div className="bg-[#996E50] ml-[96px] px-10 py-10 rounded-lg">
      <div className="font-cinzel text-black text-3xl">
        <h1 className="font-extrabold">Request to Book</h1>
      </div>

      <div className="mt-10 flex justify-between mr-48 font-josefin">
        {/* Booking Dates */}
        <div>
          <h1 className="text-2xl font-lexend underline-offset-1 mb-4">
            Booking Dates
          </h1>
          <div className="flex gap-10">
            {/* Check In */}
            <div>
              <h2 className="text-lg ml-3 mb-3">Check in</h2>
              <h2 className="font-josefin p-3 bg-[#331906] w-[155px] rounded-3xl text-white text-center">
                12th May 2024
              </h2>
            </div>
            {/* Check Out */}
            <div>
              <h2 className="text-lg ml-3 mb-3">Check out</h2>
              <h2 className="font-josefin p-3 bg-[#331906] w-[155px] rounded-3xl text-white text-center">
                18th May 2024
              </h2>
            </div>
          </div>
        </div>

        {/* Number of Guests */}
        <div>
          <h1 className="text-2xl font-lexend underline-offset-1 mb-4">
            Number of Guests
          </h1>
          <div className="flex gap-10">
            {/* Adults */}
            <div>
              <h2 className="text-lg ml-2 mb-3">Adults (above 5)</h2>
              <select className="p-3 bg-[#331906] text-white rounded-3xl">
                <option>2</option>
                <option>1</option>
              </select>
            </div>
            {/* Children */}
            <div>
              <h2 className="text-lg ml-2 mb-3">Children (3-5 years)</h2>
              <select className="p-3 bg-[#331906] text-white rounded-3xl">
                <option>1</option>
                <option>0</option>
              </select>
            </div>
            {/* Infants */}
            <div>
              <h2 className="text-lg ml-2 mb-3">Infants</h2>
              <select className="p-3 bg-[#331906] text-white rounded-3xl">
                <option>2</option>
                <option>0</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Price and Book Now */}
      <div className="mt-10">
        <h1 className="text-2xl font-lexend underline-offset-1 mb-4">Price</h1>
        <div className="flex items-center">
          <h2 className="text-lg mr-20">Rs 22,000/-</h2>
          <button className="p-3 bg-[#D2B48C] text-black font-bold font-josefin w-[125px] rounded-2xl">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Note */}
      <p className="text-sm mt-4 w-[1174px] h-[40px] font-lexend">
        *The villa does not have a confirmed booking for this period but at
        present someone has a 'hold'. Charges mentioned above are prices before
        taxes. Please enter your details on the booking form above and we will
        get back to you within 24 hours.
      </p>
    </div>
  );
}
