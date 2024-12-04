import { useNavigate } from 'react-router-dom';
import holaimg from '../assets/holaimg.png';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0A142F]">
      <div className="ml-20 text-2xl font-lexend font-semibold">
        <h1>Pune</h1>
      </div>
      <div className="ml-20 font-lexend font-normal mt-7 flex justify-between items-center">
        <div className="w-[264px] h-[261px] flex flex-col justify-between">
          <h1>AB Chowk, Beside Shaniwar Wada Pune, India</h1>
          <h1>Home: (+91) 932 566 2104</h1>
          <h1>Office: (+91) 955 254 3840</h1>
          <h1>Email: ashcnufnc124@gmail.com</h1>
        </div>
        <div className="flex justify-between items-center w-[271px] h-[242px] mr-36">
          <div className="flex flex-col items-center justify-between w-[271px] h-[242px]">
            <button onClick={() => navigate('/')} aria-label="Go to Home">Home</button>
            <button aria-label="Go to About">About</button>
            <button aria-label="Go to Featured">Featured</button>
            <button onClick={() => navigate('/locations')} aria-label="Go to Locations">Location</button>
            <button aria-label="Go to FAQ">FAQ</button>
          </div>
          <div className="flex flex-col items-center justify-between w-[271px] h-[242px]">
            <a href="https://www.facebook.com" aria-label="Go to Facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" aria-label="Go to Twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.linkedin.com" aria-label="Go to LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 bg-gray-700 p-4 rounded-md w-[1180px] h-[81px] ml-20 mt-14">
        <h1 className="font-lexend text-xl ml-2 mr-2">Write to Us</h1>
        <input
          type="email"
          placeholder="Enter your email..."
          className="flex-1 px-4 py-2 text-sm text-black bg-white border border-gray-600 rounded-md focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
        >
          Submit
        </button>
      </div>
      <div className='mt-8 ml-20 flex justify-between w-[1180px]'>
        <div className='w-[140px] h-[35px]'>
            <img src={holaimg} alt="Hola Staycations Logo" />
        </div>
        <div className='w-[350px] h-[17px] font-lato font-normal flex items-center'>
            <h1>© 2024 Hola Staycations  •  All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
}
