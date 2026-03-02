import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, Mail, MapPin, Clock, 
  Send, MessageSquare, CheckCircle2, 
  HelpCircle, ChevronDown, Facebook, 
  Twitter, Linkedin, Youtube, ArrowRight
} from "lucide-react";
import { useState } from "react";
import { cn } from "../utils/cn";
import SEO from "../components/SEO";

const faqs = [
  {
    q: "Kim Khí NGDV có nhận gia công số lượng ít không?",
    a: "Chúng tôi ưu tiên các đơn hàng số lượng lớn cho doanh nghiệp và dự án. Tuy nhiên, với các chi tiết gia công phức tạp đòi hỏi kỹ thuật cao, chúng tôi vẫn nhận gia công số lượng ít để hỗ trợ khách hàng."
  },
  {
    q: "Thời gian giao hàng trung bình là bao lâu?",
    a: "Với các mặt hàng có sẵn trong kho (bu lông, ốc vít phổ thông), chúng tôi giao hàng trong vòng 24h. Với hàng gia công, thời gian từ 3-7 ngày tùy vào độ phức tạp của bản vẽ."
  },
  {
    q: "NGDV có cung cấp đầy đủ chứng chỉ CO/CQ không?",
    a: "Tất cả sản phẩm xuất xưởng của NGDV đều đi kèm đầy đủ chứng chỉ xuất xưởng, chứng chỉ chất lượng nguyên liệu đầu vào và kết quả kiểm định độ bền nếu khách hàng yêu cầu."
  },
  {
    q: "Chính sách thanh toán và công nợ như thế nào?",
    a: "Chúng tôi áp dụng chính sách thanh toán linh hoạt. Với khách hàng dự án và đối tác lâu năm, NGDV hỗ trợ chính sách công nợ từ 15-30 ngày tùy theo giá trị hợp đồng."
  }
];

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Liên Hệ NGDV" 
        description="Thông tin liên hệ, địa chỉ nhà máy tại Hưng Yên và form yêu cầu báo giá vật tư kim khí NGDV."
      />
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/contact-hero/1920/1080" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Liên Hệ Với Chúng Tôi</h1>
            <p className="text-xl text-slate-300">Đội ngũ kỹ thuật của NGDV luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-20">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 text-center group hover:-translate-y-2 transition-all">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                <Phone className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Hotline & Zalo</h4>
              <p className="text-blue-600 font-black text-2xl mb-2">0987.654.321</p>
              <p className="text-slate-500 text-sm">Hỗ trợ kỹ thuật & Báo giá 24/7</p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 text-center group hover:-translate-y-2 transition-all">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                <Mail className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Email Liên Hệ</h4>
              <p className="text-blue-600 font-bold text-xl mb-2">contact@ngdv.vn</p>
              <p className="text-slate-500 text-sm">Gửi bản vẽ & Yêu cầu báo giá</p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 text-center group hover:-translate-y-2 transition-all">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Địa Chỉ Nhà Máy</h4>
              <p className="text-slate-700 font-medium mb-2">Chợ Bao Bì, Mỹ Hào, Hưng Yên</p>
              <p className="text-slate-500 text-sm">Chào đón khách hàng tham quan xưởng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Gửi Tin Nhắn Cho Chúng Tôi</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Bạn có câu hỏi về sản phẩm hoặc muốn nhận báo giá cho dự án? Hãy để lại thông tin, chuyên viên của chúng tôi sẽ liên hệ lại ngay lập tức.
              </p>

              {formStatus === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 p-10 rounded-3xl text-center"
                >
                  <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-4">Gửi yêu cầu thành công!</h3>
                  <p className="text-green-700 mb-8">Cảm ơn bạn đã quan tâm. Đội ngũ NGDV sẽ liên hệ với bạn trong vòng 30 phút tới.</p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors"
                  >
                    GỬI YÊU CẦU KHÁC
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Họ và tên *</label>
                      <input required type="text" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Nguyễn Văn A" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Số điện thoại *</label>
                      <input required type="tel" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="09xx xxx xxx" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email (nếu có)</label>
                    <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Chủ đề quan tâm</label>
                    <select className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
                      <option>Báo giá bu lông - ốc vít</option>
                      <option>Yêu cầu gia công theo bản vẽ</option>
                      <option>Hợp tác đại lý vật tư</option>
                      <option>Tư vấn kỹ thuật dự án</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Nội dung yêu cầu *</label>
                    <textarea required className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all h-32" placeholder="Vui lòng mô tả chi tiết yêu cầu của bạn..."></textarea>
                  </div>
                  <button 
                    disabled={formStatus === "sending"}
                    className="w-full bg-blue-900 text-white font-bold py-5 rounded-2xl hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {formStatus === "sending" ? (
                      <span className="flex items-center"><Send className="w-5 h-5 mr-2 animate-pulse" /> ĐANG GỬI...</span>
                    ) : (
                      <span className="flex items-center">GỬI YÊU CẦU NGAY <ArrowRight className="ml-2 w-5 h-5" /></span>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-white p-4 rounded-3xl shadow-lg border border-slate-100 h-[400px] overflow-hidden relative group">
                {/* Map Placeholder */}
                <img 
                  src="https://picsum.photos/seed/map-hung-yen/800/800" 
                  alt="Map Location" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-2xl border-4 border-blue-900 animate-bounce">
                  <MapPin className="w-8 h-8 text-blue-900" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg">
                  <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-1">Vị trí nhà máy</p>
                  <p className="text-sm font-medium text-slate-700">Chợ Bao Bì, Mỹ Hào, Hưng Yên</p>
                </div>
              </div>

              <div className="bg-slate-900 p-10 rounded-3xl text-white">
                <h4 className="text-xl font-bold mb-8 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-blue-400" /> Giờ Làm Việc
                </h4>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-slate-800 pb-3">
                    <span className="text-slate-400">Thứ 2 - Thứ 6:</span>
                    <span className="font-bold">08:00 - 17:30</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-3">
                    <span className="text-slate-400">Thứ 7:</span>
                    <span className="font-bold">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Chủ nhật:</span>
                    <span className="text-blue-400 font-bold">Nghỉ</span>
                  </div>
                </div>
                
                <div className="mt-10 pt-10 border-t border-slate-800">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Theo dõi chúng tôi</p>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
                    <a href="#" className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-400 transition-colors"><Twitter className="w-5 h-5" /></a>
                    <a href="#" className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a href="#" className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-red-600 transition-colors"><Youtube className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">Giải đáp thắc mắc</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Câu Hỏi Thường Gặp</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className={cn(
                    "w-full flex items-center justify-between p-6 text-left transition-colors",
                    activeFaq === i ? "bg-blue-50" : "bg-white hover:bg-slate-50"
                  )}
                >
                  <div className="flex items-center">
                    <HelpCircle className={cn("w-5 h-5 mr-3", activeFaq === i ? "text-blue-600" : "text-slate-400")} />
                    <span className={cn("font-bold", activeFaq === i ? "text-blue-900" : "text-slate-700")}>{faq.q}</span>
                  </div>
                  <ChevronDown className={cn("w-5 h-5 transition-transform", activeFaq === i ? "rotate-180 text-blue-600" : "text-slate-400")} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 bg-blue-50 text-slate-600 text-sm leading-relaxed border-t border-blue-100/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
