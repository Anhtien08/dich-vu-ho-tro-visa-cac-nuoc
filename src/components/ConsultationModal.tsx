import React, { useState, useEffect } from 'react';
import { COUNTRIES } from '../data/visaData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCountryId?: string;
  defaultPurpose?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultCountryId,
  defaultPurpose,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [purpose, setPurpose] = useState('du-lich');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultCountryId && defaultCountryId !== 'all') {
      setCountry(defaultCountryId);
    }
    if (defaultPurpose) {
      setPurpose(defaultPurpose);
    }
  }, [defaultCountryId, defaultPurpose, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
    }, 500);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFullName('');
    setPhoneNumber('');
    setNotes('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-consult-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#002552]/80 backdrop-blur-sm transition-opacity"
        onClick={handleResetAndClose}
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200">
        {/* Mobile drag handle */}
        <div className="flex justify-center pt-2 sm:hidden">
          <div className="w-12 h-1.5 bg-[#cbd5e1] rounded-full"></div>
        </div>

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e2e8f0]">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <h3 className="text-[18px] font-bold text-[#002552]" id="modal-consult-title">
                Đăng Ký Tư Vấn Nhanh
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-[#ea580c]/10 text-[#ea580c] text-[11px] font-bold">
                15 phút
              </span>
            </div>
            <p className="text-[13px] text-[#64748b]">
              Chuyên viên VISA5S tư vấn giải pháp tối ưu & miễn phí
            </p>
          </div>

          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Đóng modal"
            className="w-9 h-9 rounded-full bg-[#f5f7fa] hover:bg-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:text-[#002552] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center gap-3 py-6 text-center animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-[#eff4ff] text-[#16a34a] flex items-center justify-center mb-1 border border-[#bce3f7]">
                <span className="material-symbols-outlined text-[36px]">check_circle</span>
              </div>
              <h4 className="text-[20px] font-bold text-[#002552]">Tiếp Nhận Thành Công!</h4>
              <p className="text-[13px] text-[#64748b] max-w-xs leading-relaxed">
                Cảm ơn bạn đã đăng ký. Chuyên viên hồ sơ VISA5S sẽ liên hệ qua điện thoại hoặc Zalo để hỗ trợ bạn trong vòng 15 phút.
              </p>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="mt-3 px-6 py-2.5 rounded-lg bg-[#002552] text-white text-[13px] font-bold cursor-pointer"
              >
                Hoàn tất & Đóng lại
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Full name */}
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-[#1e293b]" htmlFor="modal_fullname">
                  Họ và tên <span className="text-[#ba1a1a]">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-[#64748b] text-[20px] pointer-events-none">
                    person
                  </span>
                  <input
                    id="modal_fullname"
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn A"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full h-11 pl-10 pr-4 bg-[#f8f9ff] text-[#1e293b] text-[14px] rounded-lg border border-[#e2e8f0] outline-none transition-all placeholder:text-[#64748b]/60 focus:bg-white focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-[#1e293b]" htmlFor="modal_phone">
                  Số điện thoại / Zalo <span className="text-[#ba1a1a]">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-[#64748b] text-[20px] pointer-events-none">
                    call
                  </span>
                  <input
                    id="modal_phone"
                    type="tel"
                    required
                    placeholder="0912 xxx xxx"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full h-11 pl-10 pr-4 bg-[#f8f9ff] text-[#1e293b] text-[14px] rounded-lg border border-[#e2e8f0] outline-none transition-all placeholder:text-[#64748b]/60 focus:bg-white focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20"
                  />
                </div>
              </div>

              {/* Country Selection */}
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-[#1e293b]" htmlFor="modal_country">
                  Quốc gia cần xin visa <span className="text-[#ba1a1a]">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-[#64748b] text-[20px] pointer-events-none">
                    public
                  </span>
                  <select
                    id="modal_country"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full h-11 pl-10 pr-8 bg-[#f8f9ff] text-[#1e293b] text-[14px] rounded-lg border border-[#e2e8f0] outline-none transition-all focus:bg-white focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Chọn quốc gia bạn muốn nộp hồ sơ</option>
                    {COUNTRIES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                    <option value="khac">Quốc gia khác...</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 text-[#64748b] text-[20px] pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Purpose radio grid */}
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-[#1e293b]">Mục đích chuyến đi</label>
                <div className="grid grid-cols-2 gap-2">
                  <label className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${purpose === 'du-lich' ? 'bg-[#eff4ff] border-[#0060aa] text-[#002552]' : 'bg-[#f8f9ff] border-[#e2e8f0] text-[#1e293b]'}`}>
                    <input
                      type="radio"
                      name="modal_purpose"
                      value="du-lich"
                      checked={purpose === 'du-lich'}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="accent-[#0060aa]"
                    />
                    <span className="text-[12px] font-medium">Du lịch</span>
                  </label>

                  <label className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${purpose === 'cong-tac' ? 'bg-[#eff4ff] border-[#0060aa] text-[#002552]' : 'bg-[#f8f9ff] border-[#e2e8f0] text-[#1e293b]'}`}>
                    <input
                      type="radio"
                      name="modal_purpose"
                      value="cong-tac"
                      checked={purpose === 'cong-tac'}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="accent-[#0060aa]"
                    />
                    <span className="text-[12px] font-medium">Công tác / TM</span>
                  </label>

                  <label className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${purpose === 'tham-than' ? 'bg-[#eff4ff] border-[#0060aa] text-[#002552]' : 'bg-[#f8f9ff] border-[#e2e8f0] text-[#1e293b]'}`}>
                    <input
                      type="radio"
                      name="modal_purpose"
                      value="tham-than"
                      checked={purpose === 'tham-than'}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="accent-[#0060aa]"
                    />
                    <span className="text-[12px] font-medium">Thăm thân nhân</span>
                  </label>

                  <label className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${purpose === 'dinh-cu-du-hoc' ? 'bg-[#eff4ff] border-[#0060aa] text-[#002552]' : 'bg-[#f8f9ff] border-[#e2e8f0] text-[#1e293b]'}`}>
                    <input
                      type="radio"
                      name="modal_purpose"
                      value="dinh-cu-du-hoc"
                      checked={purpose === 'dinh-cu-du-hoc'}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="accent-[#0060aa]"
                    />
                    <span className="text-[12px] font-medium">Du học / Khác</span>
                  </label>
                </div>
              </div>

              {/* Extra notes */}
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-[#1e293b]" htmlFor="modal_notes">
                  Ghi chú hồ sơ (Không bắt buộc)
                </label>
                <textarea
                  id="modal_notes"
                  rows={2}
                  placeholder="Ví dụ: Cần làm visa khẩn cấp, từng bị từ chối 1 lần, đi cả gia đình..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-2.5 bg-[#f8f9ff] text-[#1e293b] text-[13px] rounded-lg border border-[#e2e8f0] outline-none focus:bg-white focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="mt-1 w-full h-12 flex items-center justify-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-lg font-bold text-[14px] shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer disabled:opacity-75"
              >
                <span>{loading ? 'ĐANG GỬI THÔNG TIN...' : 'GỬI YÊU CẦU TƯ VẤN NGAY'}</span>
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[#64748b] text-center pt-0.5">
                <span className="material-symbols-outlined text-[16px] text-[#16a34a]">verified_user</span>
                <span className="text-[12px]">Cam kết bảo mật 100% • Không thu phí trước</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
