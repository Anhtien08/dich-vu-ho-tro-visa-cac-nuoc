import React, { useState } from 'react';

interface HeaderProps {
  onOpenConsultModal: (countryId?: string) => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-[0_1px_8px_rgba(16,59,115,0.05)]">
      <div className="h-20 max-w-[1240px] mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand / Logo Zone */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="/assets/aistudio/Image_6_5c5c9cf5.png"
              alt="VISA5S Logo"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col leading-none">
              <div className="flex items-center text-[22px] font-extrabold tracking-tight">
                <span className="text-[#192a72]">VISA</span>
                <span className="text-[#E51923]">5S</span>
                <span className="text-[10px] text-[#192a72] align-top ml-0.5 font-bold">®</span>
              </div>
              <span className="text-[11px] italic text-[#192a72] font-semibold tracking-wide mt-0.5">
                Hãy Đến Nơi Nào Bạn Muốn
              </span>
            </div>
          </a>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-7">
          <a
            href="#"
            className="text-[14px] font-semibold text-[#1e293b] hover:text-[#0060aa] transition-colors whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Trang chủ
          </a>
          <a
            href="#dich-vu-visa"
            className="text-[14px] font-medium text-[#434750] hover:text-[#0060aa] transition-colors whitespace-nowrap"
          >
            Dịch vụ visa
          </a>
          <a
            href="#quoc-gia"
            className="text-[14px] font-medium text-[#434750] hover:text-[#0060aa] transition-colors whitespace-nowrap"
          >
            Quốc gia
          </a>
          <a
            href="#quy-trinh"
            className="text-[14px] font-medium text-[#434750] hover:text-[#0060aa] transition-colors whitespace-nowrap"
          >
            Quy trình
          </a>
          <a
            href="#danh-gia"
            className="text-[14px] font-medium text-[#434750] hover:text-[#0060aa] transition-colors whitespace-nowrap"
          >
            Đánh giá
          </a>
          <a
            href="#faq"
            className="text-[14px] font-medium text-[#434750] hover:text-[#0060aa] transition-colors whitespace-nowrap"
          >
            Hỏi đáp (FAQ)
          </a>
          <a
            href="#lien-he"
            className="text-[14px] font-medium text-[#434750] hover:text-[#0060aa] transition-colors whitespace-nowrap"
          >
            Liên hệ
          </a>
        </nav>

        {/* Right CTA & Action Zone */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="tel:0911909686"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#eff4ff] text-[#0060aa] border border-[#d3e4fe] hover:bg-[#dce9ff] transition-colors whitespace-nowrap shadow-xs"
            title="Gọi Hotline tư vấn 24/7"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span className="text-[13px] font-bold text-[#002552]">0911.909.686</span>
          </a>

          <button
            type="button"
            onClick={() => onOpenConsultModal()}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#ea580c] text-white font-semibold text-[14px] hover:bg-[#c2410c] transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Tư vấn ngay
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-lg bg-[#f5f7fa] border border-[#e2e8f0] flex items-center justify-center text-[#002552] hover:bg-[#e5eeff] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#e2e8f0] px-4 py-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="py-2.5 px-3 rounded-lg text-[14px] font-semibold text-[#002552] hover:bg-[#eff4ff] flex items-center justify-between"
            >
              <span>Trang chủ</span>
              <span className="material-symbols-outlined text-[18px] text-[#64748b]">chevron_right</span>
            </a>
            <a
              href="#dich-vu-visa"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-[14px] font-medium text-[#1e293b] hover:bg-[#eff4ff] flex items-center justify-between"
            >
              <span>Dịch vụ Visa Chuyên Biệt</span>
              <span className="material-symbols-outlined text-[18px] text-[#64748b]">chevron_right</span>
            </a>
            <a
              href="#quoc-gia"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-[14px] font-medium text-[#1e293b] hover:bg-[#eff4ff] flex items-center justify-between"
            >
              <span>Dịch vụ Visa Các Nước</span>
              <span className="material-symbols-outlined text-[18px] text-[#64748b]">chevron_right</span>
            </a>
            <a
              href="#quy-trinh"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-[14px] font-medium text-[#1e293b] hover:bg-[#eff4ff] flex items-center justify-between"
            >
              <span>Quy Trình 4 Bước & Đánh Giá Hồ Sơ</span>
              <span className="material-symbols-outlined text-[18px] text-[#64748b]">chevron_right</span>
            </a>
            <a
              href="#danh-gia"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-[14px] font-medium text-[#1e293b] hover:bg-[#eff4ff] flex items-center justify-between"
            >
              <span>Đánh Giá Khách Hàng</span>
              <span className="material-symbols-outlined text-[18px] text-[#64748b]">chevron_right</span>
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-[14px] font-medium text-[#1e293b] hover:bg-[#eff4ff] flex items-center justify-between"
            >
              <span>Hỏi Đáp Visa (FAQ)</span>
              <span className="material-symbols-outlined text-[18px] text-[#64748b]">chevron_right</span>
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-[14px] font-medium text-[#1e293b] hover:bg-[#eff4ff] flex items-center justify-between"
            >
              <span>Liên Hệ Trực Tiếp & Văn Phòng</span>
              <span className="material-symbols-outlined text-[18px] text-[#64748b]">chevron_right</span>
            </a>

            <div className="pt-3 border-t border-[#e2e8f0] flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultModal();
                }}
                className="w-full h-11 flex items-center justify-center gap-2 bg-[#ea580c] text-white rounded-lg font-bold text-[14px] shadow-sm active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">edit_calendar</span>
                <span>Đăng ký tư vấn miễn phí</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
