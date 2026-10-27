export interface CountryVisa {
  id: string;
  name: string;
  continent: 'asia' | 'europe' | 'america' | 'australia';
  continentLabel: string;
  badgeTime: string;
  heroImage: string;
  shortDesc: string;
  tags: string[];
  visaTypes: string[];
  processingTime: string;
  validity: string;
  stayDuration: string;
  successRate: string;
  difficulty: 'Dễ' | 'Trung bình' | 'Cần chuẩn bị kỹ' | 'Phỏng vấn kỹ';
  requirements: {
    personal: string[];
    employment: string[];
    financial: string[];
    trip: string[];
  };
  highlights: string[];
}

export const COUNTRIES: CountryVisa[] = [
  {
    id: 'han-quoc',
    name: 'Visa Hàn Quốc',
    continent: 'asia',
    continentLabel: 'CHÂU Á',
    badgeTime: 'Thời gian: 5 - 7 ngày làm việc',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfzl8odmLqTLx7i8lwdElucttF8Ubd3nu73YoBePHxQBv8T79k4cfu4oMymZa9plAXGJo8pVs0piGqwZO4gcUzbR8HWf80ePySlfTzHuhHux04lp2NBnkihZSdfSDaIuqDxckGYGyTzSezqbWguXjCx5iZ2itwSONihMzwit9U8qPGiBH9H49d9qDfI4Xr-b4Uv7IlUqd43PTo2Y0kflQlW8EtAsAlto4hMI4dGWqwRaqlQg7HXflB',
    shortDesc: 'Visa diện C-3-9 du lịch tự túc, thương mại kinh doanh ngắn hạn và hỗ trợ chứng minh tài chính linh hoạt.',
    tags: ['Tỷ lệ đậu 99%', 'Hỗ trợ hồ sơ yếu'],
    visaTypes: ['C-3-9 Du lịch tự túc', 'C-3-4 Thương mại ngắn hạn', 'C-3-1 Thăm thân', 'Multiple 5 năm / 10 năm'],
    processingTime: '5 - 7 ngày làm việc',
    validity: '3 tháng (1 lần) hoặc 5 - 10 năm (nhiều lần)',
    stayDuration: 'Tối đa 30 - 90 ngày/lần nhập cảnh',
    successRate: '99%',
    difficulty: 'Trung bình',
    requirements: {
      personal: ['Hộ chiếu gốc còn hạn trên 6 tháng', 'Căn cước công dân gắn chip bản sao', '2 ảnh thẻ 3.5x4.5cm nền trắng chuẩn quốc tế', 'Đăng ký kết hôn / Giấy khai sinh con (nếu đi cùng gia đình)'],
      employment: ['Hợp đồng lao động song ngữ hoặc tiếng Anh', 'Bảng lương hoặc sao kê lương 3-6 tháng gần nhất', 'Đơn xin nghỉ phép đi du lịch có dấu mộc công ty', 'Đối với chủ DN: Giấy phép ĐKKD & biên lai nộp thuế 3 tháng gần nhất'],
      financial: ['Sổ tiết kiệm tối thiểu 100 - 150 triệu VND (gửi từ 1 tháng trở lên)', 'Xác nhận số dư tài khoản ngân hàng thời điểm hiện tại', 'Giấy tờ sở hữu nhà đất, ô tô (nếu có để gia tăng uy tín)'],
      trip: ['Lịch trình chuyến đi chi tiết theo từng ngày', 'Booking vé máy bay khứ hồi (chưa cần thanh toán)', 'Booking phòng khách sạn tương ứng lịch trình'],
    },
    highlights: ['Ủy thác nộp hồ sơ tại Trung tâm Đăng ký Thị thực KVAC', 'Hỗ trợ hoàn thiện hồ sơ khẩn theo lịch khởi hành', 'Miễn chứng minh tài chính cho đối tượng có sổ hộ khẩu đô thị lớn hoặc đã từng đi OECD'],
  },
  {
    id: 'nhat-ban',
    name: 'Visa Nhật Bản',
    continent: 'asia',
    continentLabel: 'CHÂU Á',
    badgeTime: 'Thời gian: 6 - 8 ngày làm việc',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqZ6YwlbasMm7-b1gUZOZDsdysQI1ZvoPh7nyzoYIanux9wiCPeOChGFd_Io7X67cbBoMhr9Ko3bc-VFp36rfdm0dfOtomYS40lrd9tcnT9HSi2-1R3IyICFyIo5dVdn4ATSzLSQNtdni0GcGx8mOJBehlgbzPdta5N6CNrAYqgJUjGlZIGtJjEkNpPRtZy0RhiHVHwbsyEtnmB5oqT5DLUuROWoPmtCt1ktpSpUxnlAFgZLio3vSk',
    shortDesc: 'Visa du lịch tự túc, thư mời người thân, visa thương mại nhiều lần (multiple entry) đơn giản hóa thủ tục.',
    tags: ['Ủy thác lãnh sự', 'Miễn phỏng vấn'],
    visaTypes: ['Visa Du lịch tự túc Single', 'Visa Thương mại ngắn hạn', 'Visa Thăm người thân tại Nhật', 'Visa Nhiều lần (Multiple 1 - 3 - 5 năm)'],
    processingTime: '6 - 8 ngày làm việc',
    validity: '3 tháng (1 lần) hoặc 3 - 5 năm (nhiều lần)',
    stayDuration: '15 ngày hoặc 30 ngày',
    successRate: '98.5%',
    difficulty: 'Trung bình',
    requirements: {
      personal: ['Hộ chiếu bản gốc còn hạn ít nhất 6 tháng', 'Tờ khai xin visa có dán ảnh 4.5x4.5cm chuẩn ICAO', 'Căn cước công dân gắn chip & thông tin nhân khẩu VNeID'],
      employment: ['Hợp đồng lao động / Giấy xác nhận công tác có đóng dấu', 'Sao kê tài khoản nhận lương 6 tháng gần nhất', 'Giấy phép kinh doanh đối với chủ doanh nghiệp'],
      financial: ['Sao kê tài khoản ngân hàng số dư tối thiểu 120 triệu VND', 'Sổ tiết kiệm hoặc xác nhận số dư tài chính', 'Giấy tờ sở hữu bất động sản (nếu có)'],
      trip: ['Hành trình chi tiết (Lưu trình du lịch theo mẫu tiếng Nhật/Anh)', 'Xác nhận đặt vé máy bay và khách sạn'],
    },
    highlights: ['VISA5S là đối tác đại lý được chỉ định nộp hồ sơ ủy thác', 'Không cần trực tiếp lên Đại sứ quán xếp hàng', 'Hỗ trợ giải trình tài chính và dịch thuật chuẩn tiếng Nhật'],
  },
  {
    id: 'trung-quoc',
    name: 'Visa Trung Quốc',
    continent: 'asia',
    continentLabel: 'CHÂU Á',
    badgeTime: 'Thời gian: 4 - 6 ngày (Có gói hỏa tốc)',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-uyDIcJzYbzvn01iLt-C6ZMJyk3eQCzxXJKoCpdDkbozcUolWZNC1aTHcyPfxGYOcXpyofxJvE3kAaWSDs-TOb1V3NwngTdKXlndUOBcU5Z0AXw6vQL9x7wtO_B8eHkMlkAVq83LzSk3TWD4vIxlidZ9SILNfiFggYp0vPkjAro7uZqRVbrVD91WhL5_iCaxLo0wvSCjy4ingOYyYB6KzBwPkC0Vd-ZKFrF3RGxvSG-7jcV4XaH4g',
    shortDesc: 'Visa Thương mại diện M, Visa Du lịch diện L, tham dự hội chợ triển lãm Canton Fair và công tác khẩn cấp.',
    tags: ['Hỗ trợ thư mời', 'Nhanh chóng'],
    visaTypes: ['Visa Du lịch diện L (1 lần / 2 lần)', 'Visa Thương mại diện M (Hội chợ, đàm phán)', 'Visa Thăm thân diện Q1 / Q2', 'Visa 6 tháng nhiều lần / 1 năm nhiều lần'],
    processingTime: '4 - 6 ngày làm việc (Gói khẩn 2-3 ngày)',
    validity: '3 tháng (1 lần/2 lần) hoặc 1 năm nhiều lần',
    stayDuration: '30 ngày/lần',
    successRate: '99.2%',
    difficulty: 'Dễ',
    requirements: {
      personal: ['Hộ chiếu gốc còn hạn trên 6 tháng và trang trống', 'Ảnh 3.3x4.8cm nền trắng áo màu sẫm', 'Tờ khai xin thị thực trực tuyến CVASC'],
      employment: ['Quyết định cử đi công tác (đối với diện M)', 'Thư mời từ đối tác bên phía Trung Quốc', 'Bản sao CCCD và Hộ chiếu người mời'],
      financial: ['Xác nhận số dư tài khoản ngân hàng từ 50 - 100 triệu VND', 'Sao kê tài khoản 3 tháng gần nhất'],
      trip: ['Xác nhận đặt vé máy bay khứ hồi và phòng khách sạn', 'Lịch trình công tác hoặc du lịch'],
    },
    highlights: ['Có suất nộp hồ sơ hỏa tốc lấy visa trong 48 - 72 giờ', 'Hỗ trợ soạn thảo mẫu thư mời công tác đúng chuẩn Lãnh sự', 'Đặt lịch hẹn lăn tay ưu tiên không phải chờ đợi lâu'],
  },
  {
    id: 'uc',
    name: 'Visa Úc (Australia)',
    continent: 'australia',
    continentLabel: 'CHÂU ÚC',
    badgeTime: 'Thời hạn: Lên tới 3 năm nhiều lần',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDL_8D6m12yiIE45p_6C33XtOg0y5Yrz8YBq7lV-i7izS_PgEcakLERkz8tYxVc672PDbEZ-dhJj3bCjBAglF6iBVRje5jCjZW53UXsZdoUTCwhehSd53wLKX4ncqC36NeYSyXD6pFTSaTi0vRtADSQ2kHRO7fJ7FXtTYxegDcXJyyjvR2ojmpnrTLZkiXjbxijWkWiR2udaLsMk5DPl_HFuZKcMyLjedN2eGuHbTYhfa4O-z1TfXM',
    shortDesc: 'Visa Subclass 600 du lịch, công tác hoặc thăm người thân. Nộp E-visa trực tuyến, không giữ hộ chiếu gốc.',
    tags: ['Nộp E-visa Online', 'Thời hạn dài'],
    visaTypes: ['Visitor visa (Subclass 600) - Tourist stream', 'Business Visitor stream (Công tác, hội thảo)', 'Sponsored Family stream (Người thân bảo lãnh)'],
    processingTime: '15 - 25 ngày làm việc',
    validity: '1 năm hoặc lên đến 3 năm nhiều lần',
    stayDuration: 'Tối đa 3 tháng/lần nhập cảnh',
    successRate: '98%',
    difficulty: 'Cần chuẩn bị kỹ',
    requirements: {
      personal: ['Bản scan màu toàn bộ trang hộ chiếu có dấu thị thực', 'Giấy khai sinh, CCCD, sổ hộ khẩu dịch thuật công chứng', 'Tờ khai chi tiết thân nhân Form 54'],
      employment: ['Hợp đồng lao động, bảng lương 6 tháng, đơn xin nghỉ phép', 'Đối với chủ doanh nghiệp: Giấy phép kinh doanh, tờ khai thuế VAT', 'Đối với hưu trí: Quyết định nghỉ hưu, sổ nhận lương hưu'],
      financial: ['Sao kê tài khoản ngân hàng giao dịch 6 tháng gần nhất', 'Xác nhận số dư tiết kiệm từ 200 triệu VND trở lên', 'Giấy chứng nhận quyền sở hữu nhà đất, xe hơi, cổ phiếu'],
      trip: ['Bản tường trình kế hoạch du lịch chi tiết', 'Bảo hiểm du lịch quốc tế quyền lợi tối thiểu 50,000 USD'],
    },
    highlights: ['Nộp hồ sơ 100% online trên ImmiAccount của Bộ Nội vụ Úc', 'Khách hàng không bị giữ hộ chiếu gốc trong suốt thời gian xét duyệt', 'Hỗ trợ đặt lịch lấy sinh trắc học VFS Global nhanh nhất'],
  },
  {
    id: 'my',
    name: 'Visa Mỹ (Hoa Kỳ)',
    continent: 'america',
    continentLabel: 'CHÂU MỸ',
    badgeTime: 'Luyện phỏng vấn 1-kèm-1',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4iRmFDApOjRCBS9-FR1agtVjxDpx5TtNbD8jfnrUJKtWaV1onfAJf_T8BdRz8Dq3Bc3Fl51wVph5phhHCkFfFTgeajTCHcSIgaml0jdCQzVUv2uBDOB5m1_lUqZ0HshPXiz3GlIs9XY2Bw4W7X8YSyEjIXMd62bc2OFnXIzfrwB-F880M_KlD5hgH9C0aBQFyvrYj04VLh2Y1tY-TtSzbmr7ykTQbO7rUIrXHrv5nNbUV-uDscZMX',
    shortDesc: 'Visa diện B1/B2 du lịch, hội nghị, công tác. Khai form DS-160 chuẩn xác và rèn luyện kỹ năng phỏng vấn thực chiến.',
    tags: ['DS-160 chuẩn', 'Lấy lịch hẹn nhanh'],
    visaTypes: ['Visa B1 (Công tác, hội thảo, thương thảo)', 'Visa B2 (Du lịch, khám chữa bệnh, thăm người thân)', 'Visa B1/B2 Kết hợp (Phổ biến nhất)', 'Gia hạn visa Mỹ qua đường bưu điện'],
    processingTime: 'Có kết quả ngay sau buổi phỏng vấn (Hộ chiếu gửi về sau 2-3 ngày)',
    validity: '1 năm nhiều lần (Gia hạn liên tục không cần phỏng vấn lại)',
    stayDuration: 'Lãnh sự/Hải quan cấp tối đa 6 tháng/lần',
    successRate: '96.8%',
    difficulty: 'Phỏng vấn kỹ',
    requirements: {
      personal: ['Hộ chiếu còn hạn trên 6 tháng tính từ ngày dự kiến rời Mỹ', 'Trang xác nhận tờ khai trực tuyến DS-160 có mã vạch', 'Giấy hẹn phỏng vấn đóng lệ phí lãnh sự (185 USD)', '1 ảnh thẻ chuẩn Mỹ 5x5cm chụp không quá 6 tháng (tai rõ, không đeo kính)'],
      employment: ['Hồ sơ chứng minh công việc vững chắc tại Việt Nam', 'Hợp đồng, bảng lương, quyết định cử đi công tác hoặc giấy phép ĐKKD'],
      financial: ['Sổ tiết kiệm, sao kê tài khoản ngân hàng, giấy tờ nhà đất để chứng minh khả năng chi trả và ràng buộc'],
      trip: ['Lịch trình dự kiến tại Mỹ, thông tin người thân hoặc đối tác liên hệ'],
    },
    highlights: ['Luyện phỏng vấn 1-kèm-1 cùng chuyên viên kỳ cựu: giải mã câu hỏi khó, thái độ tự tin', 'Khai form DS-160 chuẩn chỉnh từng câu chữ, logic không mâu thuẫn', 'Hỗ trợ săn lịch hẹn phỏng vấn sớm theo nhu cầu chuyến đi'],
  },
  {
    id: 'schengen',
    name: 'Visa Châu Âu (Schengen)',
    continent: 'europe',
    continentLabel: 'CHÂU ÂU',
    badgeTime: 'Tự do đi lại 29 quốc gia',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhf6CcIAyaGRuRxkVPjdp8a9QnC-DsCcrCuBCEOZKp4t3Nwm7ZUlLWqAqg4D91bcrHClXzFJAJ-wDaSEkFPFXNoVoMzqhJPMJtUj9lnMC9aCtZwr8iBb34clgAGRJIyUvLGjrAevZbun9wwR3tJ0ARF3_YCuU8-NTndCtx7Y_pUDLiS-ZwB9pHRrROtKyvSZzzhS6Z_YPLeUjuxGADgnZCp9w1sS1oOKOtRNSRdGYebP3Txn_m1WEa',
    shortDesc: 'Nộp qua Lãnh sự quán Pháp, Đức, Ý, Hà Lan... Lập lịch trình du lịch logic và giải trình công việc chặt chẽ.',
    tags: ['Lịch trình logic', 'Bảo hiểm du lịch'],
    visaTypes: ['Visa Du lịch tự túc Schengen Type C', 'Visa Công tác / Thương mại', 'Visa Thăm thân nhân (Có thư bảo lãnh)', 'Visa Nhiều lần (Multiple 1 - 5 năm)'],
    processingTime: '15 - 20 ngày làm việc',
    validity: 'Theo lịch trình hoặc lên tới 90 ngày trong chu kỳ 180 ngày',
    stayDuration: 'Tối đa 90 ngày',
    successRate: '97.5%',
    difficulty: 'Cần chuẩn bị kỹ',
    requirements: {
      personal: ['Hộ chiếu gốc còn hạn trên 3 tháng kể từ ngày rời Schengen', '2 ảnh 3.5x4.5cm nền trắng chuẩn sinh trắc học', 'CCCD và trích lục tư pháp/hôn nhân'],
      employment: ['Hợp đồng lao động, sao kê lương 6 tháng, đơn xin nghỉ phép', 'Xác nhận quá trình đóng BHXH (App VssID chụp màn hình)'],
      financial: ['Sao kê tài khoản ngân hàng số dư tối thiểu 200 triệu VND', 'Sổ tiết kiệm, giấy tờ sở hữu tài sản cố định'],
      trip: ['Lịch trình chi tiết từng ngày di chuyển giữa các nước Schengen', 'Vé máy bay khứ hồi và booking phòng khách sạn toàn chặng', 'Bảo hiểm du lịch quốc tế mức bồi thường tối thiểu 30,000 EUR'],
    },
    highlights: ['Lập lộ trình chọn đúng Đại sứ quán thụ lý có tỷ lệ xét duyệt cao nhất', 'Hỗ trợ hợp đồng bảo hiểm du lịch quốc tế chuẩn quy định khối Schengen', 'Xây dựng đơn giải trình hành trình (Cover Letter) tăng tỷ lệ đậu'],
  },
  {
    id: 'canada',
    name: 'Visa Canada',
    continent: 'america',
    continentLabel: 'CHÂU MỸ',
    badgeTime: 'Thời hạn theo hạn hộ chiếu (tới 10 năm)',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARjmEQb6PfnIdUFnUdnd0cm2Ajszg7qwbHgXFVmfvBl4Zg2V1yNXOQQCj4FmRWdNEJJTwNOyo9D0lKYChlc4PaSh_mEWkHaYmBIkSCCoQMnjg5ruWMbLDmVL6nFJjYy8n5vHbkdJ41JH5ShQixioYT2Jgjz1_PxImsMIQV_0JC_dwKmXesEkzqniGlHmyc3onhwCBWPIhR-FHWgFYruYhlGhR2BO9E6KyEEWKBnoWqVL--lszMjaUo',
    shortDesc: 'Visa diện V-1 du lịch, công tác, thăm con cái du học. Hỗ trợ xây dựng hồ sơ tài chính và mối quan hệ ràng buộc tại Việt Nam.',
    tags: ['Visa 10 năm', 'Tài chính chuyên sâu'],
    visaTypes: ['Visitor Visa (V-1) Du lịch tự túc', 'Super Visa cho Cha Mẹ/Ông Bà (Hạn tới 10 năm)', 'Business Visitor (Công tác, hội chợ thương mại)', 'Visa du học / lao động'],
    processingTime: '20 - 35 ngày làm việc',
    validity: 'Lên tới 10 năm (hết hạn cùng hộ chiếu)',
    stayDuration: 'Tối đa 6 tháng/lần nhập cảnh',
    successRate: '95.5%',
    difficulty: 'Cần chuẩn bị kỹ',
    requirements: {
      personal: ['Hộ chiếu gốc còn hạn trên 6 tháng và các hộ chiếu cũ có visa', 'Ảnh thẻ 3.5x4.5cm định dạng kỹ thuật số', 'Tờ khai gia đình Family Information Form IMM5645'],
      employment: ['Hợp đồng lao động, giấy xác nhận chức vụ và mức lương', 'Biên lai thuế thu nhập cá nhân hoặc doanh nghiệp'],
      financial: ['Hồ sơ chứng minh tài chính toàn diện: sổ tiết kiệm, sao kê dòng tiền 6 tháng, tài sản nhà đất, cổ phần doanh nghiệp'],
      trip: ['Mục đích chuyến đi rõ ràng, thư mời (nếu thăm thân/công tác) và lịch trình lưu trú'],
    },
    highlights: ['Nộp trực tuyến qua cổng IRCC mới của Chính phủ Canada', 'Thời hạn visa cấp dài bằng thời hạn còn lại của hộ chiếu (tối đa 10 năm)', 'Chuyên sâu giải quyết các bộ hồ sơ tài chính phức tạp, dòng tiền tự do'],
  },
  {
    id: 'anh-quoc',
    name: 'Visa Anh Quốc (UK)',
    continent: 'europe',
    continentLabel: 'CHÂU ÂU',
    badgeTime: 'Standard Visitor Visa',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQY0ImeJejOLiQwNWXpJTTYwZDDoQdF8e8bW6rlMwWzFmYd520PKzqVAELB9DUUMT_zR2mmDRItRjIC3wFHfaxfnUYQUno0DWJgLlkac2QVvRHdtFeu_wJsVVlFD1-S-cAMqFNZy4kqfatVgH6wn11PDLK_cwVAFQ1j_QBHxo6JiK3rY7gat_VFWhoO-zlueijsTgKuCbS4nluZmcLg9voJP80Nvyixk3CcWNTFmQXi9YGEsuzNBuF',
    shortDesc: 'Khai báo tài khoản UK Visas and Immigration (UKVI), kiểm tra chứng minh dòng tiền sao kê và đặt lịch lấy sinh trắc học VFS.',
    tags: ['Chuẩn hóa sao kê', 'Hỗ trợ lịch lăn tay'],
    visaTypes: ['Standard Visitor Visa (6 tháng / 2 năm / 5 năm / 10 năm)', 'Business Visit Visa', 'Family Visitor Visa'],
    processingTime: '15 - 20 ngày làm việc (Có dịch vụ khẩn 5 ngày)',
    validity: '6 tháng, 2 năm, 5 năm hoặc 10 năm',
    stayDuration: 'Tối đa 180 ngày/năm',
    successRate: '97%',
    difficulty: 'Cần chuẩn bị kỹ',
    requirements: {
      personal: ['Hộ chiếu gốc còn ít nhất 2 trang trống', 'Căn cước công dân gắn chip', 'Tờ khai visa hoàn thành trên trang UKVI'],
      employment: ['Hợp đồng lao động, giấy xác nhận công tác', 'Sao kê tài khoản trả lương 6 tháng khớp với tiền gửi vào'],
      financial: ['Sao kê tài khoản ngân hàng thể hiện nguồn gốc tài chính minh bạch', 'Sổ tiết kiệm và tài sản cố định'],
      trip: ['Lịch trình dự kiến tại Vương quốc Anh, booking khách sạn và vé máy bay'],
    },
    highlights: ['Kiểm tra chi tiết từng dòng sao kê ngân hàng tránh nghi vấn dòng tiền ảo', 'Dịch thuật công chứng chuẩn tư pháp toàn bộ giấy tờ sang tiếng Anh', 'Đặt lịch hẹn VFS Global VIP / giờ ngoài hành chính theo yêu cầu'],
  },
  {
    id: 'dai-loan',
    name: 'Visa Đài Loan',
    continent: 'asia',
    continentLabel: 'CHÂU Á',
    badgeTime: 'Thời gian: 3 - 5 ngày làm việc',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBANmPRWk-CRQf-VGBpQn74qFHRYpMdGlY5JJmH3vHXT4hejjCB6Kf7xqgVEYt8ZuLsFNj6jwoUaEYRWzrAkqLar2G0dXgMinUm3VUiRwJWPmRNZRvh9uZVbvPTonvUDqcSzh6cjWaKkm6c8Z1YQxabpImK1NHDnOq6_f5hcZjfnpPH0bxGNjBaHFh_mFjTV2YU5nCr7vyiBc7fr10jeEPhPaQU8J4QUjtZqtqH85UrJ9Th2EC0jTz2',
    shortDesc: 'Thực hiện E-visa tiên tiến (khi có visa các nước phát triển), visa Quan Hồng theo đoàn và visa dán tại Văn phòng Kinh tế Văn hóa Đài Bắc.',
    tags: ['E-visa tiện lợi', 'Chi phí tiết kiệm'],
    visaTypes: ['E-visa có điều kiện (Miễn thị thực nhập cảnh)', 'Visa Quan Hồng (Theo đoàn du lịch)', 'Visa Du lịch tự túc dán', 'Visa Thương mại / Thăm thân'],
    processingTime: 'E-visa trong ngày; Visa dán 3 - 5 ngày làm việc',
    validity: '3 tháng (1 lần hoặc nhiều lần)',
    stayDuration: '14 ngày hoặc 30 ngày',
    successRate: '99.5%',
    difficulty: 'Dễ',
    requirements: {
      personal: ['Hộ chiếu gốc còn hạn trên 6 tháng', '2 ảnh thẻ 4x6cm nền trắng', 'CCCD và giấy tờ tùy thân'],
      employment: ['Hợp đồng lao động & bảo hiểm y tế/xã hội', 'Giấy phép kinh doanh (nếu là chủ doanh nghiệp)'],
      financial: ['Sổ tiết kiệm từ 100 triệu VND hoặc sao kê ngân hàng', 'Hoặc sở hữu visa còn/hết hạn của Mỹ, Canada, Nhật, Úc, Schengen'],
      trip: ['Vé máy bay khứ hồi và lịch trình du lịch tại Đài Loan'],
    },
    highlights: ['Kiểm tra điều kiện E-visa miễn phí trong vòng 5 phút', 'Tư vấn chuyển đổi phương án visa dán nhanh chóng khi E-visa bị từ chối', 'Chi phí tiết kiệm, thủ tục tối giản'],
  },
];

export const VISA_PURPOSES = [
  {
    id: 'du-lich',
    title: 'Visa Du Lịch',
    subtitle: 'Khám phá cảnh quan thế giới, trải nghiệm kỳ nghỉ tuyệt vời cùng gia đình, bạn bè.',
    icon: 'luggage',
    checklist: [
      'Lịch trình bay & booking khách sạn',
      'Hồ sơ công việc & đơn xin nghỉ phép',
      'Xác nhận số dư & tài sản sở hữu',
    ],
    detailedRequirements: [
      'Chứng minh công việc ổn định (Hợp đồng lao động, quyết định bổ nhiệm)',
      'Chứng minh tài chính đủ khả năng chi trả cho toàn bộ chuyến đi',
      'Lịch trình di chuyển hợp lý, rõ ràng từng ngày và khách sạn tương ứng',
      'Mối quan hệ ràng buộc tại Việt Nam (Gia đình, nhà đất, tài sản)',
    ],
  },
  {
    id: 'cong-tac',
    title: 'Visa Công Tác & TM',
    subtitle: 'Ký kết hợp đồng, khảo sát thị trường, tham gia triển lãm hoặc công tác khẩn cấp.',
    icon: 'business_center',
    checklist: [
      'Thư mời công tác từ đối tác quốc tế',
      'Quyết định cử đi công tác từ công ty',
      'Hợp đồng hợp tác kinh doanh hai bên',
    ],
    detailedRequirements: [
      'Thư mời chính thức từ đối tác nước ngoài nêu rõ mục đích, thời gian và ai chi trả chi phí',
      'Quyết định cử đi công tác của công ty tại Việt Nam',
      'Hồ sơ pháp nhân doanh nghiệp (Giấy phép ĐKKD, sao kê tài khoản công ty, hóa đơn nộp thuế)',
      'Chứng từ chứng minh quan hệ thương mại (Hợp đồng, email trao đổi, bill vận chuyển)',
    ],
  },
  {
    id: 'tham-than',
    title: 'Visa Thăm Thân Nhân',
    subtitle: 'Đoàn tụ cùng người thân, cha mẹ, con cái đang sinh sống và làm việc ở nước ngoài.',
    icon: 'diversity_1',
    checklist: [
      'Thư bảo lãnh & mời thăm thân',
      'Chứng minh mối quan hệ ruột thịt',
      'Tư cách lưu trú của người mời',
    ],
    detailedRequirements: [
      'Thư mời và đơn bảo lãnh tài chính (nếu người mời chi trả)',
      'Bản sao hộ chiếu và thẻ cư trú hợp pháp của người mời tại nước sở tại',
      'Chứng minh tài chính và thu nhập của người mời (Bảng lương, giấy nộp thuế)',
      'Giấy tờ hộ tịch chứng minh quan hệ ruột thịt (Khai sinh, kết hôn, sổ hộ khẩu)',
    ],
  },
  {
    id: 'dinh-cu-du-hoc',
    title: 'Visa Du Học & Đào Tạo',
    subtitle: 'Chuẩn bị hành trang học thuật, chứng minh tài chính và lộ trình học tập logic.',
    icon: 'school',
    checklist: [
      'Thư chấp thuận nhập học (I-20, CAS...)',
      'Chứng minh tài chính phụ huynh/người bảo trợ',
      'Giải trình kế hoạch học tập logic',
    ],
    detailedRequirements: [
      'Thư mời nhập học chính thức từ trường đại học/cao đẳng có mã số hợp lệ',
      'Bằng cấp, bảng điểm các năm học gần nhất và chứng chỉ ngoại ngữ (IELTS/TOEFL)',
      'Hồ sơ tài chính người bảo trợ: Sổ tiết kiệm dài hạn và dòng thu nhập ổn định',
      'Kế hoạch học tập (Study Plan) giải trình lý do chọn ngành và cam kết sau tốt nghiệp',
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Tiếp Nhận & Thẩm Định Sơ Bộ',
    description: 'Tiếp nhận yêu cầu qua điện thoại, Zalo hoặc form đăng ký. Chuyên viên đánh giá điểm mạnh - yếu và đưa ra giải pháp xử lý miễn phí.',
    duration: '15 - 30 phút',
    actionText: 'Tư vấn sơ bộ',
  },
  {
    step: '02',
    title: 'Báo Giá & Chuẩn Bị Hồ Sơ',
    description: 'Ký kết thỏa thuận dịch vụ rõ ràng. Hướng dẫn danh mục giấy tờ cần thiết, thực hiện dịch thuật công chứng và điền đơn chuẩn xác.',
    duration: '1 - 2 ngày',
    actionText: 'Hoàn thiện hồ sơ',
  },
  {
    step: '03',
    title: 'Nộp Hồ Sơ & Sinh Trắc Học',
    description: 'Đặt lịch hẹn sớm nhất tại trung tâm tiếp nhận thị thực. Chuyên viên đồng hành hỗ trợ quý khách tại buổi chụp hình lăn tay hoặc phỏng vấn.',
    duration: 'Theo lịch hẹn',
    actionText: 'Hỗ trợ nộp hồ sơ',
  },
  {
    step: '04',
    title: 'Theo Dõi & Giao Nhận Visa',
    description: 'Theo dõi tình trạng xét duyệt theo thời gian thực. Nhận hộ chiếu kèm visa từ cơ quan lãnh sự và giao tận tay quý khách an toàn bảo mật.',
    duration: '3 - 15 ngày làm việc',
    actionText: 'Giao nhận tận tay',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Hồ sơ công ty tôi cần cử đoàn 3 người sang Las Vegas dự hội nghị gấp. Chuyên viên Visa5S hướng dẫn trả lời phỏng vấn rất thực tế và tự tin. Kết quả cả 3 đều được cấp visa Mỹ B1/B2 trong 1 tuần.',
    name: 'Doanh nhân Hoàng Minh',
    location: 'TP. Hồ Chí Minh',
    visaAchieved: 'Đậu Visa Mỹ B1/B2',
    initials: 'HM',
    stars: 5,
  },
  {
    quote: 'Hồ sơ du lịch gia đình 4 người của mình có con nhỏ và người lớn tuổi nên khá phức tạp về giải trình công việc. Đội ngũ Visa5S sắp xếp tài liệu rất logic, hồ sơ Schengen Pháp đậu nhanh sau 10 ngày.',
    name: 'Chị Thanh Trúc',
    location: 'Hà Nội',
    visaAchieved: 'Đậu Visa Schengen Pháp',
    initials: 'TT',
    stars: 5,
  },
  {
    quote: 'Thời gian xử lý nhanh, chăm sóc khách hàng rất chu đáo, cập nhật qua Zalo liên tục. Mình đã được cấp visa Úc 3 năm nhiều lần mà không hề gặp rắc rối phát sinh chi phí nào. Rất khuyến khích sử dụng dịch vụ!',
    name: 'Anh Quốc Bảo',
    location: 'Đà Nẵng',
    visaAchieved: 'Đậu Visa Úc Subclass 600',
    initials: 'QB',
    stars: 5,
  },
  {
    quote: 'Tôi từng bị từ chối visa Hàn Quốc 1 lần do công ty dịch vụ cũ khai thiếu giấy tờ thuế. May mắn tìm được VISA5S, các bạn đã làm lại giải trình rõ ràng và tôi đã được cấp visa thành công sau đúng 6 ngày.',
    name: 'Chị Mai Phương',
    location: 'Hải Phòng',
    visaAchieved: 'Đậu lại Visa Hàn Quốc C-3-9',
    initials: 'MP',
    stars: 5,
  },
];

export const FAQS = [
  {
    question: 'Chi phí dịch vụ làm visa tại VISA5S là bao nhiêu?',
    answer: 'Chi phí tại VISA5S được báo giá trọn gói và minh bạch, phụ thuộc vào từng quốc gia cụ thể và loại thị thực (du lịch, thương mại, thăm thân). Báo giá luôn tách bạch rõ ràng giữa: Lệ phí nộp bắt buộc cho cơ quan đại diện ngoại giao/Đại sứ quán và phí tư vấn hoàn thiện hồ sơ. Chúng tôi cam kết tuyệt đối không phát sinh chi phí ngoài hợp đồng.',
    category: 'Chi phí & Báo giá',
  },
  {
    question: 'Thời gian xét duyệt visa thường mất bao lâu?',
    answer: 'Thời gian xử lý trung bình từ 3 đến 15 ngày làm việc tùy vào quốc gia và thời điểm cao điểm du lịch trong năm. Các nước Châu Á như Hàn Quốc, Đài Loan mất khoảng 5 - 8 ngày. Các nước Châu Âu, Mỹ, Úc hoặc Canada thường dao động từ 10 - 25 ngày làm việc tính từ thời điểm lấy sinh trắc học hoặc phỏng vấn.',
    category: 'Thời gian',
  },
  {
    question: 'Trường hợp hồ sơ tài chính chưa mạnh có thể xin visa được không?',
    answer: 'Hoàn toàn có thể. Viên chức lãnh sự không chỉ nhìn vào số dư ngân hàng mà còn xem xét sự logic giữa công việc, nguồn thu nhập, lịch sử đóng bảo hiểm xã hội và sự ràng buộc quay về Việt Nam. Chuyên viên VISA5S sẽ giúp bạn khai thác những điểm mạnh khác trong hồ sơ để tạo lập sự thuyết phục hợp lý.',
    category: 'Điều kiện hồ sơ',
  },
  {
    question: 'Đã từng bị từ chối visa (rớt visa) có thể nộp lại được không?',
    answer: 'Có thể nộp lại bất kỳ lúc nào nếu bạn đã khắc phục được lý do từ chối trước đó. VISA5S có dịch vụ thẩm định chuyên sâu các bộ hồ sơ từng bị từ chối: chúng tôi phân tích thư từ chối (refusal letter), rà soát tờ khai cũ và soạn văn bản giải trình chi tiết để đại sứ quán có cái nhìn khách quan mới.',
    category: 'Hồ sơ rớt',
  },
  {
    question: 'VISA5S có cam kết 100% đậu visa không?',
    answer: 'Theo quy định pháp luật và thông lệ quốc tế, quyết định cấp thị thực hoàn toàn thuộc thẩm quyền chủ quyền của cơ quan đại diện ngoại giao (Đại sứ quán / Lãnh sự quán) của nước sở tại. Bất kỳ đơn vị nào cam kết 100% bao đậu đều là sai sự thật. VISA5S cam kết tối ưu hóa bộ hồ sơ đạt tiêu chuẩn cao nhất, khắc phục điểm yếu và nâng tỷ lệ thành công lên mức tối đa.',
    category: 'Cam kết chất lượng',
  },
];

export const OFFICE_LOCATIONS = [
  {
    title: 'Trụ sở chính',
    city: 'TP.HCM',
    badge: 'Trụ sở',
    address: '370 Đường 3/2, P. Hòa Hưng, TP.HCM',
    phone: '0911 909 686',
    hours: 'Thứ 2 - Thứ 7: 08:00 - 18:00',
  },
  {
    title: 'VP Chi nhánh',
    city: 'TP.HCM',
    badge: 'Chi nhánh',
    address: '16 Trần Đại Nghĩa, P. Đông Hòa, TPHCM',
    phone: '0967 686 101',
    hours: 'Thứ 2 - Thứ 7: 08:00 - 18:00',
  },
  {
    title: 'VP Hà Nội',
    city: 'Hà Nội',
    badge: 'Chi nhánh',
    address: '59 Vương Thừa Vũ, Q. Thanh Xuân, Hà Nội',
    phone: '0911 909 686',
    hours: 'Thứ 2 - Thứ 7: 08:00 - 18:00',
  },
];
