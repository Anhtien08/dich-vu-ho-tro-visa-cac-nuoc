import React from 'react';
import { OFFICE_LOCATIONS } from '../data/visaData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-[#e2e8f0] pb-24 sm:pb-12">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#e2e8f0]">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/Image_6_5c5c9cf5.png"
                alt="VISA5S Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col leading-none">
                <div className="flex items-center text-[22px] font-extrabold tracking-tight">
                  <span className="text-[#192a72]">VISA</span>
                  <span className="text-[#E51923]">5S</span>
                  <span className="text-[10px] text-[#192a72] align-top ml-0.5 font-bold">®</span>
                </div>
                <span className="text-[11px] italic text-[#192a72] font-semibold tracking-wide mt-0.5">
                  “Hãy Đến Nơi Nào Bạn Muốn”
                </span>
              </div>
            </div>

            <p className="text-[14px] font-bold text-[#1e293b]">
              Công ty TNHH Tư vấn Đầu tư Asia Blue Sky
            </p>
            <p className="text-[13px] text-[#64748b] leading-relaxed">
              Đơn vị chuyên sâu tư vấn giải pháp hồ sơ visa xuất nhập cảnh, định cư diện doanh nhân, công tác và du lịch quốc tế với tỉ lệ phê duyệt tối ưu.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#eff4ff] text-[#002552] text-[11px] font-bold">
                <span className="material-symbols-outlined text-[16px] text-[#16a34a]">verified</span>
                CHỨNG NHẬN DOANH NGHIỆP
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#eff4ff] text-[#002552] text-[11px] font-bold">
                <span className="material-symbols-outlined text-[16px] text-[#0060aa]">security</span>
                BẢO MẬT SSL 256-BIT
              </div>
            </div>
          </div>

          {/* Column 2: Offices */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-[16px] font-bold text-[#002552] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0060aa] text-[20px]">apartment</span>
              Văn phòng đại diện
            </h4>
            <div className="flex flex-col gap-2.5">
              {OFFICE_LOCATIONS.map((loc, i) => (
                <div key={i} className="flex items-start gap-2.5 text-[13px]">
                  <span className="material-symbols-outlined text-[#0060aa] text-[18px] shrink-0 mt-0.5">
                    location_on
                  </span>
                  <div>
                    <p className="font-bold text-[#1e293b]">
                      {loc.title} <span className="text-[11px] font-semibold text-[#0060aa]">({loc.city})</span>
                    </p>
                    <p className="text-[#64748b]">{loc.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-[16px] font-bold text-[#002552] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0060aa] text-[20px]">contact_phone</span>
              Thông tin liên hệ
            </h4>
            <div className="flex flex-col gap-3 text-[13px]">
              <div className="flex items-center gap-2 text-[#1e293b]">
                <span className="material-symbols-outlined text-[#0060aa] text-[18px]">call</span>
                <span className="font-bold">0911 909 686 / 0967 686 101</span>
              </div>
              <div className="flex items-center gap-2 text-[#1e293b]">
                <span className="material-symbols-outlined text-[#0060aa] text-[18px]">mail</span>
                <a href="mailto:info@visa5s.com.vn" className="hover:text-[#0060aa] transition-colors">
                  info@visa5s.com.vn
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#64748b]">
                <span className="material-symbols-outlined text-[#0060aa] text-[18px]">schedule</span>
                <span>Thứ 2 - Thứ 7: 08:00 - 18:00</span>
              </div>
              <div className="flex items-center gap-2 text-[#64748b]">
                <span className="material-symbols-outlined text-[#16a34a] text-[18px]">support_agent</span>
                <span>Hỗ trợ trực tuyến 24/7 qua Zalo</span>
              </div>
            </div>
          </div>

          {/* Column 4: Useful Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-[16px] font-bold text-[#002552]">Liên kết hữu ích</h4>
            <ul className="flex flex-col gap-2 text-[13px] text-[#64748b]">
              <li>
                <a href="#chinh-sach" className="hover:text-[#0060aa] transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#dieu-khoan" className="hover:text-[#0060aa] transition-colors">
                  Điều khoản dịch vụ
                </a>
              </li>
              <li>
                <a href="#quoc-gia" className="hover:text-[#0060aa] transition-colors">
                  Bảng giá tham khảo
                </a>
              </li>
              <li>
                <a href="#khieu-nai" className="hover:text-[#0060aa] transition-colors">
                  Quy trình khiếu nại
                </a>
              </li>
              <li>
                <a href="#quy-trinh" className="hover:text-[#0060aa] transition-colors">
                  Tra cứu tiến độ hồ sơ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-xl bg-[#F5F7FA] border border-[#e2e8f0] mt-8 text-[12.5px] text-[#64748b] leading-relaxed">
          <strong className="text-[#1e293b] font-bold">Khuyến cáo pháp lý:</strong> Quyết định cấp thị thực thuộc thẩm quyền của cơ quan lãnh sự / đại sứ quán các nước. VISA5S hỗ trợ tư vấn hoàn thiện hồ sơ đạt tiêu chuẩn tối ưu nhất theo quy định pháp luật sở tại.
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#64748b] text-[13px]">
          <p>© 2025 VISA5S. All rights reserved. Thuộc sở hữu Asia Blue Sky Co., Ltd.</p>
          <div className="flex items-center gap-2 text-[#16a34a] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#16a34a] inline-block animate-pulse"></span>
            <span>Hệ thống tư vấn trực tuyến hoạt động 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
