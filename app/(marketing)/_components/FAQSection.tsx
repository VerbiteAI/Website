'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  "What is included in each pricing plan?",
  "Is there a free trial available before choosing a plan?",
  "How many articles or product descriptions can I generate per month?",
  "Can I upgrade, downgrade, or cancel my plan at any time?",
  "Do unused credits roll over to the next month?",
  "Are there any additional fees beyond the listed prices?",
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Frequently asked questions</h2>
        <div className="space-y-2">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-md"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 focus:outline-none"
              >
                <span className="text-left text-sm sm:text-base">{question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-sm text-gray-300">
                  {/* Placeholder answer */}
                  Answer to: {question}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
