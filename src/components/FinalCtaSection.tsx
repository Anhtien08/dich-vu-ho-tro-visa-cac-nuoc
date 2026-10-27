import React, { useState } from 'react';

export const FinalCtaSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setDestination('');
    }, 1500);
  };

  return (
    <section className="w-full bg-[#002552] text-white py-16 lg:py-24 relative overflow-hidden" id="lien-he">
      {/* Ambient glowing graphics */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#0060aa]/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#ea580c]/15 blur-3xl"></div>

      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#eff4ff] text-[#002552]">
              <span className="material-symbols-outlined text-[18px] text-[#0060aa]">flight_takeoff</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#002552]">
                KHỞI ĐẦU HÀNH TRÌNH THUẬN LỢI
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-[32px] sm:text-[40px] font-extrabold text-white tracking-tight leading-tight">
                Sẵn sàng cho hành trình tiếp theo của bạn?
              </h2>
              <p className="text-[16px] text-white/85 max-w-xl leading-relaxed">
                Để lại thông tin hoặc liên hệ trực tiếp qua đường dây nóng để nhận báo giá chi tiết và tư vấn định hướng hồ sơ hoàn toàn miễn phí.
              </p>
            </div>

            {/* Hotline Direct and Trust Highlights */}
            <div className="flex flex-row items-center flex-wrap gap-4 pt-2 text-white/80 text-[13px]">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="material-symbols-outlined text-[18px] text-[#16a34a]">check_circle</span>
                <span>Hỗ trợ khách hàng toàn quốc</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0"></div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="material-symbols-outlined text-[18px] text-[#16a34a]">support_agent</span>
                <span>Tư vấn tận tâm 1-kèm-1</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0"></div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="material-symbols-outlined text-[18px] text-[#16a34a]">lock</span>
                <span>Bảo mật 100% thông tin cá nhân</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="tel:0911909686"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-[14px] backdrop-blur-sm transition-colors"
              >
                <span className="material-symbols-outlined text-[20px] text-[#ea580c]">phone_in_talk</span>
                <span>Hotline 24/7: 0911.909.686</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quick Form Card */}
          <div className="lg:col-span-5 bg-white text-[#0b1c30] p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/10 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-[20px] font-bold text-[#002552]">Gửi Nhanh Yêu Cầu</h3>
              <p className="text-[13px] text-[#64748b]">
                Chúng tôi cam kết bảo mật thông tin và phản hồi sớm nhất.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Họ và tên của bạn"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-12 px-4 bg-[#f8f9ff] text-[#1e293b] text-[14px] rounded-lg border border-[#e2e8f0] outline-none focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20"
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại hoặc Zalo"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-12 px-4 bg-[#f8f9ff] text-[#1e293b] text-[14px] rounded-lg border border-[#e2e8f0] outline-none focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Nước cần xin visa & thời gian dự kiến"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full h-12 px-4 bg-[#f8f9ff] text-[#1e293b] text-[14px] rounded-lg border border-[#e2e8f0] outline-none focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 flex items-center justify-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-lg font-bold text-[14px] shadow-md transition-all active:scale-95 cursor-pointer mt-1"
              >
                <span>GỬI YÊU CẦU TƯ VẤN</span>
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>

              {isSent && (
                <div className="p-3 rounded-lg bg-[#eff4ff] border border-[#d3e4fe] text-[#002552] flex items-center gap-2 animate-in fade-in">
                  <span className="material-symbols-outlined text-[#16a34a] text-[20px]">check_circle</span>
                  <span className="text-[13px] font-medium">
                    Cảm ơn bạn! Chuyên viên visa sẽ liên lạc lại trong ít phút.
                  </span>
                </div>
              )}
            </form>

            <a
              href="https://zalo.me/0911909686"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0060aa] text-[13px] font-bold transition-colors border border-[#d3e4fe]"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Trò chuyện Zalo: 0911 909 686</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
