import oskar from '../assets/oskar.jpeg'

export default function ImgSection(){
    return(
        <div className='flex justify-between w-[1177px] h-[314px] mt-10'>
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