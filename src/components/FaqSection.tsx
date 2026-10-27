import React, { useState } from 'react';
import { FAQS } from '../data/visaData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-[#e2e8f0]" id="faq">
      <div className="max-w-[960px] mx-auto px-4 lg:px-8 flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-2">
          <span className="text-[11px] font-bold text-[#0060aa] uppercase tracking-widest">
            HỎI ĐÁP PHỔ BIẾN
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#002552] tracking-tight">
            Giải Đáp Thắc Mắc Thường Gặp (FAQ)
          </h2>
          <p className="text-[15px] text-[#64748b]">
            Những câu hỏi được khách hàng quan tâm nhiều nhất khi chuẩn bị hồ sơ visa.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#F5F7FA] border border-[#e2e8f0] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left gap-4 hover:bg-[#eff4ff]/60 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] font-bold text-[#002552] leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[#64748b] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#0060aa]' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-[#434750] text-[14px] leading-relaxed border-t border-[#e2e8f0]/60 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
