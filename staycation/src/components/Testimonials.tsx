import testimonial from "../assets/testimonial.jpeg";

export default function Testimonials() {
  return (
    <div className="bg-[#996E50] w-full max-w-[489px] h-auto rounded-lg p-6 md:w-[489px] md:h-[426px]">
      <div className="flex items-center mt-4 md:mt-14">
        <div>
          <img
            className="w-14 h-14 md:w-16 md:h-16 rounded-full"
            src={testimonial}
            alt="Akashi Kumari"
          />
        </div>
        <div className="ml-4">
          <h1 className="text-xl font-lexend font-semibold text-black md:text-2xl">
            Akashi Kumari
          </h1>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-[#1A1B1D] text-base font-lexend md:text-lg">
          "My stay at the Grand Vista Hotel was absolutely incredible! From the
          moment I stepped through the door, I was greeted with warmth and
          professionalism. The room was immaculate, the amenities top-notch, and
          the staff went above and beyond to ensure my comfort. I can't wait to
          return!"
        </p>
      </div>
      <div className="mt-8 text-center md:mt-20">
        <h3 className="text-[#B9B9B9] text-sm font-semibold font-lexend md:text-base">
          4/5 | 2021.03.02
        </h3>
      </div>
    </div>
  );
}
