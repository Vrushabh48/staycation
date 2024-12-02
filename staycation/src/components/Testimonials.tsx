import testimonial from '../assets/testimonial.jpeg'


export default function Testimonials(){
    return(
        <div className="bg-[#996E50] w-[489px] h-[426px] rounded-lg">
        <div className='flex mt-14 items-center ml-28'>
            <div>
                <img className='w-16 h-16 rounded-full' src={testimonial} alt="" />
            </div>
            <div>
                <h1 className='ml-4 text-2xl font-lexend font-semibold text-black mt-3'>Akashi Kumari</h1>
            </div>
        </div>
        <div className='w-[359px] h-[154px] ml-[70px] mt-4'>
            <p className='text-[#1A1B1D] text-lg font-lexend'>"My stay at the Grand Vista Hotel was absolutely incredible! From the moment I stepped through the door, I was greeted with warmth and professionalism. The room was immaculate, the amenities top-notch, and the staff went above and beyond to ensure my comfort. I can't wait to return!"</p>
        </div>
        <div className='w-[165px] h-[22px] mt-20 ml-[175px]'>
            <h3 className='text-[#B9B9B9] font-semibold font-lexend'>4/5 | 2021.03.02</h3>
        </div>
        </div>
    )
}