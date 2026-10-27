import React from 'react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-[#e2e8f0]">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-[#0060aa] uppercase tracking-widest">
            GIÁ TRỊ KHÁC BIỆT
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#002552] tracking-tight">
            Tại Sao Hàng Ngàn Khách Hàng Tin Chọn VISA5S?
          </h2>
          <p className="text-[15px] text-[#64748b] leading-relaxed">
            Chúng tôi kết hợp sự tỉ mỉ chuẩn xác của quy trình pháp lý với thái độ phục vụ tận tâm, văn minh và hiện đại.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#F5F7FA] border border-[#e2e8f0] flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
            <div className="w-14 h-14 rounded-xl bg-[#002552] text-white flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[28px]">psychology</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] font-bold text-[#002552]">
                Tư Vấn & Đánh Giá Cá Nhân Hóa
              </h3>
              <p className="text-[13px] text-[#64748b] leading-relaxed">
                Phân tích chi tiết từng điểm mạnh yếu trong hồ sơ công việc, tài chính và lịch sử du lịch để đưa ra phương án tối ưu nhất, không áp dụng khuôn mẫu chung.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#F5F7FA] border border-[#e2e8f0] flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
            <div className="w-14 h-14 rounded-xl bg-[#002552] text-white flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[28px]">fact_check</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] font-bold text-[#002552]">
                Kiểm Tra Hồ Sơ & Dịch Thuật Chuẩn Xác
              </h3>
              <p className="text-[13px] text-[#64748b] leading-relaxed">
                Xử lý hồ sơ công chứng tư pháp, dịch thuật chuẩn ngôn ngữ đích, điền tờ khai chuẩn form đại sứ quán, tuyệt đối không để xảy ra sai sót thông tin.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#F5F7FA] border border-[#e2e8f0] flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
            <div className="w-14 h-14 rounded-xl bg-[#002552] text-white flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[28px]">price_check</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] font-bold text-[#002552]">
                Chi Phí Minh Bạch & Báo Giá Rõ Ràng
              </h3>
              <p className="text-[13px] text-[#64748b] leading-relaxed">
                Liệt kê chi tiết lệ phí lãnh sự và phí dịch vụ hoàn tất ngay từ ban đầu. Cam kết hợp đồng rõ ràng, không phát sinh bất kỳ khoản phụ phí ẩn nào.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#F5F7FA] border border-[#e2e8f0] flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
            <div className="w-14 h-14 rounded-xl bg-[#002552] text-white flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[28px]">update</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] font-bold text-[#002552]">
                Đồng Hành & Cập Nhật Tiến Độ Xuyên Suốt
              </h3>
              <p className="text-[13px] text-[#64748b] leading-relaxed">
                Cung cấp mã tra cứu tiến độ thời gian thực, chủ động nhắc lịch lăn tay phỏng vấn và hỗ trợ giao nhận kết quả hộ chiếu an toàn tận tay khách hàng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
