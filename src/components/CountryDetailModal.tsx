import React, { useState } from 'react';
import { CountryVisa } from '../data/visaData';

interface CountryDetailModalProps {
  country: CountryVisa | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (countryId: string) => void;
}

export const CountryDetailModal: React.FC<CountryDetailModalProps> = ({
  country,
  isOpen,
  onClose,
  onApply,
}) => {
  const [activeTab, setActiveTab] = useState<'requirements' | 'procedure' | 'types'>('requirements');

  if (!isOpen || !country) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#002552]/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#cbd5e1] overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200">
        {/* Modal Header with country image banner */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#002552]">
          <img
            src={country.heroImage}
            alt={country.name}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002552] via-[#002552]/50 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Country Title & Badges */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-col gap-1.5 text-white">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-white">
                {country.continentLabel}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#16a34a] text-[11px] font-bold text-white">
                Tỷ lệ đậu {country.successRate}
              </span>
            </div>
            <h3 className="text-[24px] sm:text-[30px] font-bold tracking-tight text-white leading-tight">
              {country.name}
            </h3>
            <p className="text-[13px] text-white/90 line-clamp-1">{country.badgeTime}</p>
          </div>
        </div>

        {/* Modal Quick Spec Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[#f8f9ff] border-b border-[#e2e8f0] px-6 py-3 text-center">
          <div className="p-1">
            <span className="text-[11px] font-semibold text-[#64748b] uppercase block">Thời gian xử lý</span>
            <span className="text-[13px] font-bold text-[#002552]">{country.processingTime}</span>
          </div>
          <div className="p-1 border-l border-[#e2e8f0]">
            <span className="text-[11px] font-semibold text-[#64748b] uppercase block">Thời hạn visa</span>
            <span className="text-[13px] font-bold text-[#002552]">{country.validity}</span>
          </div>
          <div className="p-1 border-t sm:border-t-0 sm:border-l border-[#e2e8f0]">
            <span className="text-[11px] font-semibold text-[#64748b] uppercase block">Thời gian lưu trú</span>
            <span className="text-[13px] font-bold text-[#002552]">{country.stayDuration}</span>
          </div>
          <div className="p-1 border-t sm:border-t-0 sm:border-l border-[#e2e8f0]">
            <span className="text-[11px] font-semibold text-[#64748b] uppercase block">Mức độ chuẩn bị</span>
            <span className="text-[13px] font-bold text-[#ea580c]">{country.difficulty}</span>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="flex border-b border-[#e2e8f0] px-6 bg-white shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('requirements')}
            className={`py-3 px-4 font-semibold text-[14px] border-b-2 cursor-pointer transition-colors ${
              activeTab === 'requirements'
                ? 'border-[#0060aa] text-[#0060aa]'
                : 'border-transparent text-[#64748b] hover:text-[#1e293b]'
            }`}
          >
            Hồ sơ & Giấy tờ cần thiết
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('procedure')}
            className={`py-3 px-4 font-semibold text-[14px] border-b-2 cursor-pointer transition-colors ${
              activeTab === 'procedure'
                ? 'border-[#0060aa] text-[#0060aa]'
                : 'border-transparent text-[#64748b] hover:text-[#1e293b]'
            }`}
          >
            Quy trình & Ưu điểm
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('types')}
            className={`py-3 px-4 font-semibold text-[14px] border-b-2 cursor-pointer transition-colors ${
              activeTab === 'types'
                ? 'border-[#0060aa] text-[#0060aa]'
                : 'border-transparent text-[#64748b] hover:text-[#1e293b]'
            }`}
          >
            Các diện thị thực
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {activeTab === 'requirements' && (
            <div className="space-y-4">
              <p className="text-[14px] text-[#64748b] leading-relaxed">
                {country.shortDesc} Dưới đây là danh mục hồ sơ chuẩn theo tiêu chuẩn của Đại sứ quán / Tổng Lãnh sự quán:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Nhân thân */}
                <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]">
                  <div className="flex items-center gap-2 mb-2.5 text-[#002552] font-bold text-[14px]">
                    <span className="material-symbols-outlined text-[#0060aa] text-[20px]">badge</span>
                    <span>1. Hồ sơ nhân thân</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-[#1e293b]">
                    {country.requirements.personal.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[#16a34a] text-[16px] shrink-0 mt-0.5">check</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Công việc */}
                <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]">
                  <div className="flex items-center gap-2 mb-2.5 text-[#002552] font-bold text-[14px]">
                    <span className="material-symbols-outlined text-[#0060aa] text-[20px]">work</span>
                    <span>2. Chứng minh công việc</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-[#1e293b]">
                    {country.requirements.employment.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[#16a34a] text-[16px] shrink-0 mt-0.5">check</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Tài chính */}
                <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]">
                  <div className="flex items-center gap-2 mb-2.5 text-[#002552] font-bold text-[14px]">
                    <span className="material-symbols-outlined text-[#0060aa] text-[20px]">account_balance</span>
                    <span>3. Năng lực tài chính</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-[#1e293b]">
                    {country.requirements.financial.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[#16a34a] text-[16px] shrink-0 mt-0.5">check</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Chuyến đi */}
                <div className="p-4 rounded-xl bg-[#f8f9ff] border border-[#e2e8f0]">
                  <div className="flex items-center gap-2 mb-2.5 text-[#002552] font-bold text-[14px]">
                    <span className="material-symbols-outlined text-[#0060aa] text-[20px]">flight</span>
                    <span>4. Kế hoạch chuyến đi</span>
                  </div>
                  <ul className="space-y-1.5 text-[13px] text-[#1e293b]">
                    {country.requirements.trip.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[#16a34a] text-[16px] shrink-0 mt-0.5">check</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'procedure' && (
            <div className="space-y-4">
              <h4 className="text-[16px] font-bold text-[#002552]">Ưu thế khi nộp qua VISA5S</h4>
              <div className="space-y-2">
                {country.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#eff4ff] border border-[#d3e4fe]">
                    <span className="material-symbols-outlined text-[#0060aa] text-[20px] shrink-0 mt-0.5">verified</span>
                    <span className="text-[13px] font-medium text-[#002552]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#f5f7fa] border border-[#e2e8f0] mt-4">
                <h5 className="text-[14px] font-bold text-[#1e293b] mb-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#ea580c] text-[18px]">info</span>
                  Lưu ý quan trọng từ VISA5S
                </h5>
                <p className="text-[13px] text-[#64748b] leading-relaxed">
                  Chúng tôi hỗ trợ thẩm định hồ sơ sơ bộ hoàn toàn miễn phí trước khi khách hàng ký hợp đồng dịch vụ. Nếu hồ sơ chưa đủ mạnh, chuyên viên sẽ hướng dẫn cách gia tăng tính thuyết phục hợp pháp thay vì nộp vội vàng.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'types' && (
            <div className="space-y-3">
              <h4 className="text-[16px] font-bold text-[#002552]">Các loại thị thực đang hỗ trợ</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {country.visaTypes.map((type, i) => (
                  <div key={i} className="p-3.5 rounded-lg border border-[#e2e8f0] bg-white flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#eff4ff] text-[#0060aa] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px]">verified_user</span>
                    </div>
                    <span className="text-[14px] font-semibold text-[#1e293b]">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Action */}
        <div className="px-6 py-4 bg-[#f8f9ff] border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-[13px] text-[#64748b]">
            <span className="font-semibold text-[#002552]">Cần hỗ trợ hồ sơ khẩn?</span> Gọi ngay{' '}
            <a href="tel:0911909686" className="font-bold text-[#0060aa] hover:underline">
              0911.909.686
            </a>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-[#cbd5e1] text-[#434750] text-[14px] font-semibold hover:bg-white transition-colors cursor-pointer"
            >
              Đóng lại
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onApply(country.id);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-[14px] font-bold transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Đăng ký tư vấn {country.name}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
