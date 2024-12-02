import { useState } from "react";

interface Props {
  content: string;
  src: string;
}

export default function Textimg({ content, src }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Left Section */}
      <div className="flex flex-col justify-between space-y-4 p-8">
        {/* Content Section */}
        <p className="text-lg text-[#CECECECC] font-lexend font-medium flex-1">
          {isExpanded ? content : `${content.substring(0, 368)}...`}
        </p>
        {/* Read More Button */}
        <button
          onClick={toggleContent}
          className="mt-4 text-[#CECECECC] font-normal font-lexend text-left"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="flex justify-center items-start p-8">
        <img
          src={src}
          alt="Image"
          className="w-[631px] h-[471px] rounded-lg border-b border-[#854414] shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
