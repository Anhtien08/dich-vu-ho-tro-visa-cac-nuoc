import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/visaData';

interface ProcessTimelineProps {
  onOpenConsult: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenConsult }) => {
  // Interactive mini profile evaluator state
  const [evaluatorOpen, setEvaluatorOpen] = useState(false);
  const [evalDestination, setEvalDestination] = useState('schengen');
  const [evalTravelHistory, setEvalTravelHistory] = useState('2');
  const [evalJobType, setEvalJobType] = useState('contract');
  const [evalSavings, setEvalSavings] = useState('medium');
  const [evalResult, setEvalResult] = useState<{
    score: number;
    rating: string;
    advice: string;
  } | null>(null);

  const calculateScore = () => {
    let score = 50;
    if (evalTravelHistory === '0') score += 5;
    else if (evalTravelHistory === '1') score += 18;
    else if (evalTravelHistory === '2') score += 30;

    if (evalJobType === 'contract' || evalJobType === 'business') score += 15;
    else if (evalJobType === 'freelance') score += 8;

    if (evalSavings === 'high') score += 15;
    else if (evalSavings === 'medium') score += 10;
    else score += 5;

    let rating = 'Hồ sơ rất triển vọng (Tỷ lệ đạt ước tính ~95%)';
    let advice = 'Hồ sơ của bạn có nền tảng tốt. Chỉ cần sắp xếp chứng từ khoa học và dịch thuật chuẩn Lãnh sự là có thể tự tin nộp.';

    if (score < 70) {
      rating = 'Hồ sơ ở mức trung bình (Cần gia cố thêm ~75%)';
      advice = 'Bạn nên chuẩn bị thêm hợp đồng bảo hiểm du lịch quốc tế, giải trình nguồn thu nhập đều đặn hoặc có bảo lãnh người thân để tối ưu kết quả.';
    }

    setEvalResult({ score: Math.min(score, 99), rating, advice });
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-[#e2e8f0]" id="quy-trinh">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
          <span className="text-[11px] font-bold text-[#0060aa] uppercase tracking-widest">
            QUY TRÌNH DỊCH VỤ
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#002552] tracking-tight">
            4 Bước Tinh Gọn & Minh Bạch
          </h2>
          <p className="text-[15px] text-[#64748b] leading-relaxed">
            Quy trình làm việc chuẩn hóa giúp tiết kiệm tối đa thời gian và công sức của bạn.
          </p>
        </div>

        {/* Desktop 4-step row / Mobile vertical */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.step} className="flex flex-col gap-3 relative">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full font-extrabold text-[18px] flex items-center justify-center shadow-md ${
                    step.step === '04'
                      ? 'bg-[#ea580c] text-white'
                      : 'bg-[#002552] text-white'
                  }`}
                >
                  {step.step}
                </div>
                {idx < 3 && (
                  <div className="hidden md:block h-0.5 flex-1 bg-[#d3e4fe]"></div>
                )}
              </div>

              <div className="flex flex-col gap-1.5 pt-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-[17px] font-bold text-[#002552]">{step.title}</h3>
                </div>
                <p className="text-[13px] text-[#64748b] leading-relaxed">
                  {step.description}
                </p>
                <span className="text-[12px] font-semibold text-[#0060aa] mt-1">
                  ⏱ Ước tính: {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Profile Strength Quick Evaluator Tool (Interactive Expansion) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#f8f9ff] border border-[#d3e4fe]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-[#e2e8f0]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0060aa] text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">tune</span>
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-[#002552]">
                  Công cụ tự đánh giá sơ bộ năng lực hồ sơ (Online)
                </h4>
                <p className="text-[13px] text-[#64748b]">
                  Kiểm tra xem hồ sơ của bạn đạt mức độ tự tin bao nhiêu trước khi nộp vào Đại sứ quán
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setEvaluatorOpen(!evaluatorOpen);
                if (!evaluatorOpen && !evalResult) {
                  calculateScore();
                }
              }}
              className="self-start sm:self-auto px-4 py-2 rounded-lg bg-white border border-[#cbd5e1] text-[#0060aa] text-[13px] font-bold hover:bg-[#eff4ff] transition-colors cursor-pointer"
            >
              {evaluatorOpen ? 'Thu gọn công cụ' : 'Thử đánh giá ngay (30 giây)'}
            </button>
          </div>

          {evaluatorOpen && (
            <div className="pt-4 grid grid-cols-1 md:grid-cols-4 gap-4 animate-in fade-in duration-200">
              <div>
                <label className="text-[12px] font-semibold text-[#1e293b] block mb-1">
                  Nước muốn nộp:
                </label>
                <select
                  value={evalDestination}
                  onChange={(e) => setEvalDestination(e.target.value)}
                  className="w-full h-10 px-3 bg-white border border-[#e2e8f0] rounded-lg text-[13px] text-[#1e293b] outline-none"
                >
                  <option value="schengen">Châu Âu (Schengen)</option>
                  <option value="my">Mỹ (Visa B1/B2)</option>
                  <option value="uc">Úc (Subclass 600)</option>
                  <option value="han-quoc">Hàn Quốc (C-3-9)</option>
                  <option value="nhat-ban">Nhật Bản</option>
                  <option value="canada">Canada</option>
                </select>
              </div>

              <div>
                <label className="text-[12px] font-semibold text-[#1e293b] block mb-1">
                  Lịch sử xuất cảnh:
                </label>
                <select
                  value={evalTravelHistory}
                  onChange={(e) => setEvalTravelHistory(e.target.value)}
                  className="w-full h-10 px-3 bg-white border border-[#e2e8f0] rounded-lg text-[13px] text-[#1e293b] outline-none"
                >
                  <option value="2">Đã từng đi Châu Á phát triển / OECD</option>
                  <option value="1">Đã đi 2-3 nước Đông Nam Á (Thái, Sing...)</option>
                  <option value="0">Hộ chiếu trắng (Chưa từng xuất ngoại)</option>
                </select>
              </div>

              <div>
                <label className="text-[12px] font-semibold text-[#1e293b] block mb-1">
                  Tình trạng công việc:
                </label>
                <select
                  value={evalJobType}
                  onChange={(e) => setEvalJobType(e.target.value)}
                  className="w-full h-10 px-3 bg-white border border-[#e2e8f0] rounded-lg text-[13px] text-[#1e293b] outline-none"
                >
                  <option value="contract">Nhân viên có HĐLĐ & BHXH</option>
                  <option value="business">Chủ doanh nghiệp / Hộ kinh doanh</option>
                  <option value="freelance">Làm tự do / Kinh doanh online</option>
                </select>
              </div>

              <div>
                <label className="text-[12px] font-semibold text-[#1e293b] block mb-1">
                  Khả năng tài chính:
                </label>
                <div className="flex gap-2">
                  <select
                    value={evalSavings}
                    onChange={(e) => setEvalSavings(e.target.value)}
                    className="flex-1 h-10 px-3 bg-white border border-[#e2e8f0] rounded-lg text-[13px] text-[#1e293b] outline-none"
                  >
                    <option value="high">Trên 200 triệu + Bất động sản</option>
                    <option value="medium">Từ 100 - 200 triệu VND</option>
                    <option value="low">Dưới 100 triệu VND</option>
                  </select>
                  <button
                    type="button"
                    onClick={calculateScore}
                    className="px-3 h-10 rounded-lg bg-[#0060aa] text-white font-bold text-[12px] hover:bg-[#002552] transition-colors shrink-0"
                  >
                    Xem điểm
                  </button>
                </div>
              </div>

              {evalResult && (
                <div className="md:col-span-4 p-4 rounded-xl bg-white border border-[#d3e4fe] flex flex-col sm:flex-row items-center justify-between gap-4 mt-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#eff4ff] text-[#0060aa] font-black text-[20px] flex items-center justify-center shrink-0 border border-[#bce3f7]">
                      {evalResult.score}
                    </div>
                    <div>
                      <span className="text-[14px] font-bold text-[#16a34a] block">
                        {evalResult.rating}
                      </span>
                      <p className="text-[12px] text-[#64748b] leading-relaxed mt-0.5">
                        {evalResult.advice}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenConsult}
                    className="px-4 py-2 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white text-[13px] font-bold transition-all shadow-xs shrink-0 cursor-pointer"
                  >
                    Nhận tư vấn phương án cụ thể
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Quick Consultation Trigger banner */}
        <div className="p-6 rounded-2xl bg-[#eff4ff] border border-[#d3e4fe] flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white text-[#0060aa] flex items-center justify-center shrink-0 shadow-xs border border-[#e2e8f0]">
              <span className="material-symbols-outlined text-[28px]">contact_support</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] font-bold text-[#002552]">
                Bạn chưa rõ hồ sơ của mình cần chuẩn bị giấy tờ gì?
              </span>
              <span className="text-[13px] text-[#64748b]">
                Đừng ngần ngại, liên hệ ngay với VISA5S để được kiểm tra danh mục giấy tờ miễn phí.
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenConsult}
            className="px-6 py-2.5 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-[14px] transition-all shadow-sm active:scale-95 shrink-0 cursor-pointer"
          >
            Nhận danh mục hồ sơ
          </button>
        </div>
      </div>
    </section>
  );
};
