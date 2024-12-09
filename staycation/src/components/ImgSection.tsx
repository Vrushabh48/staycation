import oskar from '../assets/oskar.jpeg'

export default function ImgSection(){
    return(
        <div className=' md:flex justify-between md:w-[1177px] md:h-[314px] md:mt-10 mt-48'>
            <div className='w-[408px] h-[301px] rounded-2xl p-1'>
                <img className='rounded-2xl hover:scale-105' src={oskar} alt="" />
            </div>
            <div className='w-[408px] h-[301px] rounded-2xl p-1'>
                <img className='rounded-2xl hover:scale-105' src={oskar} alt="" />
            </div>
            <div className='w-[408px] h-[301px] rounded-2xl p-1'>
                <img className='rounded-2xl hover:scale-105' src={oskar} alt="" />
            </div>
        </div>
    )
}