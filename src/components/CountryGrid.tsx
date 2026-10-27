import React, { useState, useMemo } from 'react';
import { COUNTRIES, CountryVisa } from '../data/visaData';
import { CountryDetailModal } from './CountryDetailModal';

interface CountryGridProps {
  onSelectCountryForConsult: (countryId: string) => void;
}

export const CountryGrid: React.FC<CountryGridProps> = ({ onSelectCountryForConsult }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'asia' | 'europe' | 'america' | 'australia'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<CountryVisa | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const filteredCountries = useMemo(() => {
    return COUNTRIES.filter((country) => {
      const matchesFilter = activeFilter === 'all' || country.continent === activeFilter;
      const matchesSearch =
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const handleOpenDetail = (country: CountryVisa) => {
    setSelectedCountry(country);
    setIsDetailModalOpen(true);
  };

  return (
    <section className="w-full bg-[#f8f9ff] py-16 lg:py-24" id="quoc-gia">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8 flex flex-col gap-10">
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-[11px] font-bold text-[#0060aa] uppercase tracking-widest">
              Điểm Đến Phổ Biến
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#002552] tracking-tight leading-snug">
              Dịch vụ hỗ trợ hồ sơ Visa các nước tiêu biểu
            </h2>
            <p className="text-[15px] text-[#64748b]">
              Đa dạng hành trình du lịch, thương mại và thăm thân với lộ trình hoàn thiện hồ sơ chuẩn chỉnh nhất.
            </p>
          </div>

          {/* Filter Buttons & Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Quick Search */}
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-[#64748b] text-[18px]">
                search
              </span>
              <input
                type="text"
                placeholder="Tìm nước cần xin visa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-56 h-10 pl-9 pr-3 rounded-lg bg-white border border-[#e2e8f0] text-[13px] text-[#1e293b] outline-none focus:border-[#0060aa] focus:ring-2 focus:ring-[#0060aa]/20 shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 text-[#64748b] hover:text-[#1e293b]"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              )}
            </div>

            {/* Continent Tabs */}
            <div className="inline-flex p-1 rounded-xl bg-white shadow-xs border border-[#e2e8f0] overflow-x-auto self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-1.5 rounded-lg text-[13px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === 'all'
                    ? 'bg-[#002552] text-white shadow-xs'
                    : 'text-[#64748b] hover:text-[#002552]'
                }`}
              >
                Tất cả
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('asia')}
                className={`px-3.5 py-1.5 rounded-lg text-[13px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === 'asia'
                    ? 'bg-[#002552] text-white shadow-xs'
                    : 'text-[#64748b] hover:text-[#002552]'
                }`}
              >
                Châu Á
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('europe')}
                className={`px-3.5 py-1.5 rounded-lg text-[13px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === 'europe'
                    ? 'bg-[#002552] text-white shadow-xs'
                    : 'text-[#64748b] hover:text-[#002552]'
                }`}
              >
                Châu Âu
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('america')}
                className={`px-3.5 py-1.5 rounded-lg text-[13px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === 'america'
                    ? 'bg-[#002552] text-white shadow-xs'
                    : 'text-[#64748b] hover:text-[#002552]'
                }`}
              >
                Châu Mỹ
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('australia')}
                className={`px-3.5 py-1.5 rounded-lg text-[13px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeFilter === 'australia'
                    ? 'bg-[#002552] text-white shadow-xs'
                    : 'text-[#64748b] hover:text-[#002552]'
                }`}
              >
                Châu Úc
              </button>
            </div>
          </div>
        </div>

        {/* Country 3-column Grid */}
        {filteredCountries.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-xl border border-[#e2e8f0]">
            <span className="material-symbols-outlined text-[48px] text-[#64748b] mb-2">travel_explore</span>
            <p className="text-[16px] font-semibold text-[#002552]">Không tìm thấy quốc gia phù hợp</p>
            <p className="text-[13px] text-[#64748b] mt-1">
              Vui lòng thử tìm với từ khóa khác hoặc liên hệ hotline để được tư vấn bất kỳ nước nào trên thế giới.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#002552] text-white text-[13px] font-semibold"
            >
              Xem tất cả các nước
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCountries.map((country) => (
              <div
                key={country.id}
                className="flex flex-col bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl border border-[#e2e8f0] transition-all duration-200 group"
              >
                {/* Photo area */}
                <div className="relative h-48 w-full overflow-hidden bg-[#eff4ff]">
                  <img
                    src={country.heroImage}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Continent badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#002552] text-[11px] font-bold flex items-center gap-1.5 shadow-sm">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        country.continent === 'america' ? 'bg-[#ea580c]' : 'bg-[#0060aa]'
                      }`}
                    ></span>
                    <span>{country.continentLabel}</span>
                  </div>

                  {/* Processing time banner */}
                  <div className="absolute bottom-3 left-3 right-3 px-3 py-1 rounded-md bg-[#002552]/85 backdrop-blur-sm text-white text-[12px] font-semibold tracking-wide">
                    {country.badgeTime}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[18px] font-bold text-[#002552] group-hover:text-[#0060aa] transition-colors">
                      {country.name}
                    </h3>
                    <p className="text-[13px] text-[#64748b] leading-relaxed line-clamp-2">
                      {country.shortDesc}
                    </p>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {country.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-[#eff4ff] text-[#002552] font-semibold text-[11px] border border-[#d3e4fe]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-2 border-t border-[#f1f5f9] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleOpenDetail(country)}
                      className="inline-flex items-center gap-1 text-[#0060aa] text-[14px] font-bold group-hover:translate-x-1 transition-transform cursor-pointer"
                    >
                      <span>Tìm hiểu dịch vụ</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectCountryForConsult(country.id)}
                      className="px-2.5 py-1 rounded-md bg-[#ea580c]/10 hover:bg-[#ea580c] text-[#ea580c] hover:text-white text-[12px] font-bold transition-colors cursor-pointer"
                    >
                      Tư vấn ngay
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Action Footer for Countries */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={() => onSelectCountryForConsult('all')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#002552] text-white text-[14px] font-bold hover:bg-[#103b73] transition-colors shadow-sm cursor-pointer"
          >
            <span>Xem tất cả hơn 50+ quốc gia</span>
            <span className="material-symbols-outlined text-[18px]">travel_explore</span>
          </button>
          <a
            href="tel:0911909686"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-[#cbd5e1] text-[#0060aa] text-[14px] font-bold hover:bg-[#eff4ff] transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
            <span>Hỏi đáp tư vấn quốc gia khác</span>
          </a>
        </div>
      </div>

      {/* Country In-Depth Details Modal */}
      <CountryDetailModal
        country={selectedCountry}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onApply={(countryId) => onSelectCountryForConsult(countryId)}
      />
    </section>
  );
};
