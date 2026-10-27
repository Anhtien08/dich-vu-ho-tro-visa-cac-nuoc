import React from 'react';
import { VISA_PURPOSES } from '../data/visaData';

interface VisaCategoriesProps {
  onSelectPurpose: (purposeId: string) => void;
}

export const VisaCategories: React.FC<VisaCategoriesProps> = ({ onSelectPurpose }) => {
  return (
    <section className="w-full bg-[#f8f9ff] py-16 lg:py-24 border-t border-[#e2e8f0]" id="dich-vu-visa">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-[#0060aa] uppercase tracking-widest">
            MỤC ĐÍCH CHUYẾN ĐI
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#002552] tracking-tight">
            Các Diện Hồ Sơ Visa Chuyên Biệt
          </h2>
          <p className="text-[15px] text-[#64748b] leading-relaxed">
            Từng diện hồ sơ yêu cầu bộ giải trình và chứng từ chứng minh khác nhau để thuyết phục viên chức lãnh sự.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VISA_PURPOSES.map((category) => (
            <div
              key={category.id}
              className="bg-white p-6 rounded-2xl border border-[#e2e8f0] flex flex-col justify-between gap-6 shadow-xs hover:shadow-xl transition-all duration-200"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#0060aa] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">{category.icon}</span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-[18px] font-bold text-[#002552]">{category.title}</h3>
                  <p className="text-[13px] text-[#64748b] leading-relaxed min-h-[40px]">
                    {category.subtitle}
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-2 border-t border-[#f1f5f9]">
                  {category.checklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[#1e293b] text-[13px]">
                      <span className="material-symbols-outlined text-[#16a34a] text-[18px] shrink-0 mt-0.5">
                        check
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectPurpose(category.id)}
                className="w-full py-2.5 rounded-lg bg-[#f5f7fa] hover:bg-[#002552] hover:text-white text-[#002552] font-semibold text-[13px] text-center transition-colors border border-[#e2e8f0] cursor-pointer"
              >
                Đăng ký diện này
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
