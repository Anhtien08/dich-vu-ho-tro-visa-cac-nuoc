import React from 'react';

export const FloatingContactWidget: React.FC = () => {
  return (
    <aside
      className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-50 flex flex-col gap-3 items-center group/floating"
      id="floating-contact-widget"
      aria-label="Kênh liên hệ nhanh"
    >
      {/* 1. Email Button */}
      <div className="relative flex items-center group/btn">
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-white text-[#002552] text-[12px] font-bold shadow-lg border border-[#e2e8f0] whitespace-nowrap opacity-0 pointer-events-none group-hover/btn:opacity-100 transition-opacity duration-200">
          Gửi Email: visa5giay@gmail.com
        </span>
        <a
          href="mailto:visa5giay@gmail.com"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          style={{ backgroundColor: '#00a5f4' }}
          title="Gửi Email: visa5giay@gmail.com"
          aria-label="Gửi Email"
        >
          <span className="material-symbols-outlined text-[24px]">mail</span>
        </a>
      </div>

      {/* 2. Zalo Button */}
      <div className="relative flex items-center group/btn">
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-white text-[#002552] text-[12px] font-bold shadow-lg border border-[#e2e8f0] whitespace-nowrap opacity-0 pointer-events-none group-hover/btn:opacity-100 transition-opacity duration-200">
          Chat Zalo: 0911 909 686
        </span>
        <a
          href="https://zalo.me/0911909686"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer overflow-hidden font-bold text-[14px] tracking-tight"
          style={{ backgroundColor: '#0088ff' }}
          title="Chat Zalo"
          aria-label="Chat Zalo"
        >
          <span className="font-sans font-extrabold text-[15px] select-none">Zalo</span>
        </a>
      </div>

      {/* 3. Phone Call Button with ripple effect */}
      <div className="relative flex items-center group/btn">
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-white text-[#002552] text-[12px] font-bold shadow-lg border border-[#e2e8f0] whitespace-nowrap opacity-0 pointer-events-none group-hover/btn:opacity-100 transition-opacity duration-200">
          Hotline: 0911 909 686
        </span>
        <div className="relative flex items-center justify-center">
          <span
            className="absolute w-12 h-12 rounded-full animate-ping pointer-events-none opacity-40"
            style={{ backgroundColor: '#00155a' }}
          ></span>
          <a
            href="tel:0911909686"
            className="relative w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            style={{ backgroundColor: '#00155a' }}
            title="Gọi Hotline: 0911 909 686"
            aria-label="Gọi điện thoại"
          >
            <span className="material-symbols-outlined text-[24px]">call</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
