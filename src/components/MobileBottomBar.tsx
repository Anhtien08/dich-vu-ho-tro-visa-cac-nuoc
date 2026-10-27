import React from 'react';

interface MobileBottomBarProps {
  onOpenConsultModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenConsultModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e2e8f0] p-2.5 sm:hidden flex items-center gap-2 shadow-[0_-4px_16px_rgba(16,59,115,0.12)]">
      <a
        href="tel:0911909686"
        className="flex-1 h-11 flex items-center justify-center gap-1.5 rounded-lg bg-[#002552] text-white text-[13px] font-bold shadow-xs active:scale-95 transition-transform"
      >
        <span className="material-symbols-outlined text-[18px] text-[#ea580c]">phone_in_talk</span>
        <span>Gọi tư vấn ngay</span>
      </a>

      <button
        type="button"
        onClick={onOpenConsultModal}
        className="flex-1 h-11 flex items-center justify-center gap-1.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-[13px] font-bold shadow-sm active:scale-95 transition-transform cursor-pointer"
      >
        <span className="material-symbols-outlined text-[18px]">edit_calendar</span>
        <span>Đăng ký tư vấn</span>
      </button>
    </div>
  );
};
