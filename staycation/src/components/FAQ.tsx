import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What are the Check-in & Check-out timings?",
        answer: "Check-in: 2 PM, Check-out: 11 AM",
    },
    {
        question: "What formalities are needed during check-in and check-out?",
        answer: "As required by law, all adults have to provide their government-approved Photo IDs (that clearly show their residential address) at the time of Check-in.",
    },
    {
        question: "What are Pool timings?",
        answer: "Pool timings are from 8 AM to 8 PM.",
    },
];

export default function FAQ(): JSX.Element {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mx-4 md:ml-24 mt-16 text-white max-w-[1174px] rounded-lg p-4 space-y-4">
  {faqs.map((faq, index) => (
    <div key={index} className="bg-[#996D51] rounded-lg">
      {/* Question Section */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => toggleFaq(index)}
      >
        <h2 className="font-lexend font-normal text-white text-sm md:text-base">
          {faq.question}
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          className={`transform transition-transform ${
            openIndex === index ? "rotate-180" : ""
          }`}
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m7 10l5 5m0 0l5-5"
          ></path>
        </svg>
      </div>

      {/* Answer Section */}
      {openIndex === index && (
        <div className="p-4 bg-[#D8B49C] text-[#1A1B1D] rounded-b-lg text-sm md:text-base">
          {faq.answer}
        </div>
      )}
    </div>
  ))}
</div>

    );
}
