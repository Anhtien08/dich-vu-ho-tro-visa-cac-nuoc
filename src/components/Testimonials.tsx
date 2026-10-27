import React from 'react';
import { TESTIMONIALS } from '../data/visaData';

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f9ff] py-16 lg:py-24 border-t border-[#e2e8f0]" id="danh-gia">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-[#0060aa] uppercase tracking-widest">
            TRẢI NGHIỆM THỰC TẾ
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#002552] tracking-tight">
            Cảm Nhận Của Khách Hàng
          </h2>
          <p className="text-[15px] text-[#64748b] leading-relaxed">
            Niềm tự hào lớn nhất của VISA5S là sự an tâm và hài lòng của khách hàng trên mỗi chuyến đi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#e2e8f0] flex flex-col justify-between gap-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex flex-col gap-3">
                {/* 5-star cluster */}
                <div className="flex items-center gap-1 text-[#ea580c]">
                  {[...Array(item.stars)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>

                <p className="text-[14px] text-[#1e293b] italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#f1f5f9]">
                <div className="w-11 h-11 rounded-full bg-[#eff4ff] text-[#002552] flex items-center justify-center font-extrabold text-[15px] shrink-0 border border-[#d3e4fe]">
                  {item.initials}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[14px] text-[#002552]">{item.name}</span>
                  <span className="text-[12px] text-[#64748b]">
                    {item.location} • <strong className="text-[#0060aa] font-semibold">{item.visaAchieved}</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
