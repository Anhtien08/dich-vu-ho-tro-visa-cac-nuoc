import React, { useState } from 'react';
import { COUNTRIES } from '../data/visaData';

interface HeroSectionProps {
  onSuccessSubmit?: (data: { name: string; phone: string; country: string; purpose: string }) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSuccessSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    destinationCountry: '',
    purpose: 'du-lich',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccessSubmit) {
        onSuccessSubmit({
          name: formData.fullName,
          phone: formData.phoneNumber,
          country: formData.destinationCountry,
          purpose: formData.purpose,
        });
      }
      setFormData({
        fullName: '',
        phoneNumber: '',
        destinationCountry: '',
        purpose: 'du-lich',
      });
    }, 600);
  };

  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] pb-16 lg:pb-24 pt-8 lg:pt-14">
      {/* Ambient layered backdrop glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#61a9fd]/15 blur-3xl"></div>
      <div className="pointer-events-none absolute top-1/2 right-[-15%] h-[500px] w-[500px] rounded-full bg-[#103b73]/10 blur-3xl"></div>

      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#eff4ff] text-[#002552] border border-[#d3e4fe] shadow-xs">
              <span className="material-symbols-outlined text-[18px] text-[#0060aa]">verified_user</span>
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#002552]">
                DỊCH VỤ VISA QUỐC TẾ CHUYÊN NGHIỆP
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-[34px] sm:text-[44px] lg:text-[50px] font-extrabold text-[#002552] tracking-tight leading-[1.15]">
                Gỡ Rối Hồ Sơ Visa – <br />
                <span className="text-[#ea580c]">Mở Lối Hành Trình</span>
              </h1>
              <p className="text-[16px] lg:text-[17px] text-[#64748b] max-w-2xl leading-relaxed">
                Đồng hành cùng bạn trong từng bước hoàn thiện hồ sơ: thẩm định năng lực hồ sơ miễn phí, hỗ trợ dịch thuật công chứng, luyện phỏng vấn chuẩn đại sứ quán và cập nhật tiến độ minh bạch 24/7.
              </p>
            </div>

            {/* Benefit Bullets */}
            <div className="flex flex-col gap-3.5 pt-1">
              <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl shadow-xs border border-[#e2e8f0]/80 hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#eff4ff] text-[#0060aa] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">analytics</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[15px] text-[#1e293b]">
                    Thẩm định hồ sơ chính xác & tối ưu tỷ lệ thành công
                  </span>
                  <span className="text-[13px] text-[#64748b] leading-normal mt-0.5">
                    Bóc tách hồ sơ chi tiết theo tiêu chuẩn của từng cơ quan đại diện lãnh sự.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl shadow-xs border border-[#e2e8f0]/80 hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#eff4ff] text-[#0060aa] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">bolt</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[15px] text-[#1e293b]">
                    Thủ tục tinh gọn, hỗ trợ xử lý hỏa tốc theo lịch trình
                  </span>
                  <span className="text-[13px] text-[#64748b] leading-normal mt-0.5">
                    Hỗ trợ hồ sơ khẩn, hoàn tất dịch thuật và nộp lịch hẹn trong 24 giờ.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl shadow-xs border border-[#e2e8f0]/80 hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#eff4ff] text-[#0060aa] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">receipt_long</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[15px] text-[#1e293b]">
                    Chi phí minh bạch trọn gói, không phát sinh phụ phí
                  </span>
                  <span className="text-[13px] text-[#64748b] leading-normal mt-0.5">
                    Báo giá rõ ràng gồm lệ phí lãnh sự và phí dịch vụ hoàn tất.
                  </span>
                </div>
              </div>
            </div>

            {/* Trust highlights */}
            <div className="flex flex-row items-center flex-wrap gap-4 pt-2 text-[#64748b] text-[13px]">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="material-symbols-outlined text-[18px] text-[#16a34a]">check_circle</span>
                <span className="font-medium text-[#1e293b]">Hỗ trợ khách hàng toàn quốc</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#cbd5e1] shrink-0"></div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="material-symbols-outlined text-[18px] text-[#16a34a]">support_agent</span>
                <span className="font-medium text-[#1e293b]">Tư vấn tận tâm 1-kèm-1</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#cbd5e1] shrink-0"></div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="material-symbols-outlined text-[18px] text-[#16a34a]">lock</span>
                <span className="font-medium text-[#1e293b]">Bảo mật 100% thông tin cá nhân</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Form Card */}
          <div className="lg:col-span-5" id="tu-van">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-[#e2e8f0] flex flex-col gap-4">
              <div className="flex flex-col gap-1 pb-1">
                <div className="inline-flex items-center gap-1.5 text-[#ea580c] text-[11px] font-bold uppercase tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-ping"></span>
                  <span>Tư vấn trực tuyến 24/7</span>
                </div>
                <h2 className="text-[22px] font-bold text-[#002552] tracking-tight">
                  Đăng Ký Tư Vấn Hồ Sơ Miễn Phí
                </h2>
                <p className="text-[13px] text-[#64748b]">
                  Chuyên viên Visa5S phản hồi giải pháp tối ưu trong vòng 15 phút
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Full name */}
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-semibold text-[#1e293b]" htmlFor="hero_fullname">
                    Họ và tên <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-[#64748b] text-[20px] pointer-events-none">
                      person
                    </span>
                    <input
                      id="hero_fullname"
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full h-12 pl-10 pr-4 bg-[#f8f9ff] text-[#1e293b] text-[15px] rounded-lg border border-[#e2e8f0] outline-none transition-all placeholder:text-[#64748b]/60 focus:bg-white focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-semibold text-[#1e293b]" htmlFor="hero_phone">
                    Số điện thoại / Zalo <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-[#64748b] text-[20px] pointer-events-none">
                      call
                    </span>
                    <input
                      id="hero_phone"
                      type="tel"
                      required
                      placeholder="0912 xxx xxx"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full h-12 pl-10 pr-4 bg-[#f8f9ff] text-[#1e293b] text-[15px] rounded-lg border border-[#e2e8f0] outline-none transition-all placeholder:text-[#64748b]/60 focus:bg-white focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20"
                    />
                  </div>
                </div>

                {/* Country dropdown */}
                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-semibold text-[#1e293b]" htmlFor="hero_country">
                    Quốc gia muốn đến <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-[#64748b] text-[20px] pointer-events-none">
                      public
                    </span>
                    <select
                      id="hero_country"
                      required
                      value={formData.destinationCountry}
                      onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                      className="w-full h-12 pl-10 pr-10 bg-[#f8f9ff] text-[#1e293b] text-[15px] rounded-lg border border-[#e2e8f0] outline-none transition-all focus:bg-white focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Chọn quốc gia bạn muốn nộp hồ sơ</option>
                      {COUNTRIES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({c.badgeTime.replace('Thời gian: ', '')})
                        </option>
                      ))}
                      <option value="khac">Quốc gia khác...</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 text-[#64748b] text-[20px] pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Purpose radio options */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-[#1e293b]">Mục đích xin visa</label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-colors ${formData.purpose === 'du-lich' ? 'bg-[#eff4ff] border-[#0060aa] text-[#002552]' : 'bg-[#f8f9ff] border-[#e2e8f0] text-[#1e293b] hover:bg-[#e5eeff]'}`}>
                      <input
                        type="radio"
                        name="hero_purpose"
                        value="du-lich"
                        checked={formData.purpose === 'du-lich'}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="accent-[#0060aa]"
                      />
                      <span className="text-[13px] font-medium">Du lịch</span>
                    </label>

                    <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-colors ${formData.purpose === 'cong-tac' ? 'bg-[#eff4ff] border-[#0060aa] text-[#002552]' : 'bg-[#f8f9ff] border-[#e2e8f0] text-[#1e293b] hover:bg-[#e5eeff]'}`}>
                      <input
                        type="radio"
                        name="hero_purpose"
                        value="cong-tac"
                        checked={formData.purpose === 'cong-tac'}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="accent-[#0060aa]"
                      />
                      <span className="text-[13px] font-medium">Công tác / TM</span>
                    </label>

                    <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-colors ${formData.purpose === 'tham-than' ? 'bg-[#eff4ff] border-[#0060aa] text-[#002552]' : 'bg-[#f8f9ff] border-[#e2e8f0] text-[#1e293b] hover:bg-[#e5eeff]'}`}>
                      <input
                        type="radio"
                        name="hero_purpose"
                        value="tham-than"
                        checked={formData.purpose === 'tham-than'}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="accent-[#0060aa]"
                      />
                      <span className="text-[13px] font-medium">Thăm thân nhân</span>
                    </label>

                    <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-colors ${formData.purpose === 'dinh-cu-du-hoc' ? 'bg-[#eff4ff] border-[#0060aa] text-[#002552]' : 'bg-[#f8f9ff] border-[#e2e8f0] text-[#1e293b] hover:bg-[#e5eeff]'}`}>
                      <input
                        type="radio"
                        name="hero_purpose"
                        value="dinh-cu-du-hoc"
                        checked={formData.purpose === 'dinh-cu-du-hoc'}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="accent-[#0060aa]"
                      />
                      <span className="text-[13px] font-medium">Du học / Khác</span>
                    </label>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-1 w-full h-12 flex items-center justify-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-lg font-bold text-[14px] shadow-md hover:shadow-lg transition-all duration-150 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer disabled:opacity-75"
                >
                  <span>{isSubmitting ? 'ĐANG GỬI THÔNG TIN...' : 'ĐĂNG KÝ TƯ VẤN MIỄN PHÍ'}</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>

                {/* Success feedback */}
                {isSubmitted && (
                  <div className="p-3 rounded-lg bg-[#eff4ff] border border-[#d3e4fe] text-[#002552] flex items-center gap-2.5 animate-in fade-in">
                    <span className="material-symbols-outlined text-[#16a34a] text-[22px]">check_circle</span>
                    <span className="text-[13px] font-medium">
                      Đã tiếp nhận yêu cầu! Chuyên viên VISA5S sẽ gọi bạn ngay trong 15 phút.
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-center gap-1.5 text-[#64748b] text-center pt-1">
                  <span className="material-symbols-outlined text-[16px] text-[#16a34a]">verified</span>
                  <p className="text-[12px] text-[#64748b]">
                    Bảo mật thông tin 100% • Không thu phí trước thẩm định hồ sơ.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
