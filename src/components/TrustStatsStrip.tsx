import React from 'react';

export const TrustStatsStrip: React.FC = () => {
  return (
    <section className="w-full bg-white py-4 sm:py-8 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-2 sm:px-4">
        <div className="relative w-full overflow-hidden transition-all duration-300 hover:scale-[1.005]">
          <img
            src="/assets/aistudio/image_7339e444.png"
            alt="Thống kê uy tín VISA5S: 23,868 Hồ sơ · 9,886 Khách hàng · 312 Đối tác, đại lý · 150 Quốc Gia"
            className="w-full h-auto object-contain block mx-auto select-none"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};
