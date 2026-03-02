import { motion } from "motion/react";
import { 
  ArrowRight, Shield, Settings, Users, 
  Building2, CheckCircle2, Factory, 
  Package, Hammer, Briefcase, 
  ChevronRight, Star, Quote
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import SEO from "../components/SEO";

const Home = () => {
  const slogans = [
    "Kim Khí NGDV - Vững Bước Công Trình, Bền Bỉ Thời Gian",
    "Giải Pháp Kim Khí Toàn Diện - Chất Lượng Chuẩn Công Nghiệp",
    "NGDV: Uy Tín Từ Tâm - Chất Lượng Xứng Tầm",
    "Kết Nối Bền Chặt, Kiến Tạo Tương Lai Cùng Kim Khí NGDV",
    "Sản Xuất Đột Phá - Gia Công Tinh Xảo - Kim Khí NGDV"
  ];

  const advantages = [
    { title: "Chất lượng đạt chuẩn", desc: "Sản phẩm sản xuất theo tiêu chuẩn ISO, DIN, JIS khắt khe.", icon: Shield },
    { title: "Giá gốc tại xưởng", desc: "Trực tiếp sản xuất và phân phối, tối ưu chi phí cho khách hàng.", icon: Factory },
    { title: "Giao hàng thần tốc", desc: "Hệ thống vận tải riêng, đảm bảo tiến độ cho mọi công trình.", icon: Package },
    { title: "Gia công theo yêu cầu", desc: "Đội ngũ kỹ thuật tay nghề cao, xử lý mọi bản vẽ phức tạp.", icon: Hammer },
    { title: "Năng lực cung ứng lớn", desc: "Kho hàng 2000m2, sẵn sàng đáp ứng đơn hàng số lượng lớn.", icon: Building2 },
    { title: "Tư vấn kỹ thuật 24/7", desc: "Hỗ trợ giải pháp tối ưu vật tư, tiết kiệm ngân sách dự án.", icon: Settings },
    { title: "Bảo hành dài hạn", desc: "Cam kết đổi trả 1-1 nếu phát hiện lỗi do nhà sản xuất.", icon: CheckCircle2 },
  ];

  const steps = [
    { number: "01", title: "Tiếp nhận yêu cầu", desc: "Khách hàng gửi thông tin sản phẩm hoặc bản vẽ kỹ thuật." },
    { number: "02", title: "Tư vấn & Báo giá", desc: "Đội ngũ kỹ thuật phân tích và gửi báo giá tối ưu sau 30 phút." },
    { number: "03", title: "Sản xuất & Kiểm định", desc: "Tiến hành sản xuất và kiểm tra chất lượng nghiêm ngặt từng lô." },
    { number: "04", title: "Giao hàng tận nơi", desc: "Vận chuyển đến kho hoặc chân công trình theo đúng hẹn." },
    { number: "05", title: "Hậu mãi & Bảo hành", desc: "Lắng nghe phản hồi và hỗ trợ kỹ thuật trong suốt quá trình sử dụng." },
  ];

  const projects = [
    { title: "Cung cấp vật tư Chợ Bao Bì Mỹ Hào", image: "https://picsum.photos/seed/factory1/800/600", category: "Khu công nghiệp" },
    { title: "Dự án Vinhomes Ocean Park 2", image: "https://picsum.photos/seed/building1/800/600", category: "Xây dựng dân dụng" },
    { title: "Gia công kết cấu thép Nhà máy Samsung", image: "https://picsum.photos/seed/metal1/800/600", category: "Gia công cơ khí" },
  ];

  const testimonials = [
    { name: "Ông Nguyễn Văn Hùng", role: "Giám đốc Công ty Xây dựng Hưng Phát", text: "Kim Khí NGDV là đối tác tin cậy của chúng tôi trong 5 năm qua. Bu lông và phụ kiện của họ luôn đạt chuẩn, giúp công trình của chúng tôi luôn bền vững." },
    { name: "Bà Lê Thị Mai", role: "Chủ đại lý vật tư Mai Anh", text: "Giá cả cạnh tranh và chính sách chiết khấu tốt là lý do tôi chọn NGDV. Đặc biệt là dịch vụ giao hàng rất nhanh chóng." },
    { name: "Anh Trần Quốc Tuấn", role: "Kỹ sư trưởng Dự án KĐT Ecopark", text: "Khả năng gia công theo bản vẽ của NGDV rất tuyệt vời. Những chi tiết khó đều được xử lý chính xác tuyệt đối." },
  ];

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Kim Khí NGDV - Sản Xuất & Thương Mại Kim Khí Hưng Yên" 
        description="Chuyên cung cấp bu lông, ốc vít, vật tư cơ khí và gia công kim loại theo yêu cầu tại Hưng Yên. Uy tín, chất lượng, giá tại xưởng."
      />
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/industrial-hero/1920/1080" 
            alt="Industrial Background" 
            className="w-full h-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block bg-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
              Chuyên gia Kim khí Hưng Yên
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Sản Xuất & Cung Ứng <span className="text-blue-400">Kim Khí Công Nghiệp</span> Hàng Đầu
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Cung cấp giải pháp vật tư cơ khí, bu lông ốc vít và gia công kim loại chất lượng cao cho các nhà thầu, xưởng sản xuất và đại lý trên toàn quốc.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/lien-he" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all shadow-xl shadow-blue-600/20">
                NHẬN BÁO GIÁ NGAY <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/san-pham" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all">
                XEM SẢN PHẨM
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slogan Marquee Placeholder */}
      <div className="bg-slate-100 py-4 border-y border-slate-200 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...slogans, ...slogans].map((slogan, i) => (
            <span key={i} className="text-slate-500 font-bold text-sm uppercase tracking-wider mx-12 flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-2 text-blue-600" /> {slogan}
            </span>
          ))}
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/factory-intro/800/600" 
                  alt="NGDV Factory" 
                  className="rounded-2xl shadow-2xl relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-900 rounded-2xl -z-0 hidden md:block"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                  <p className="text-4xl font-bold text-blue-900">10+</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Năm kinh nghiệm</p>
                </div>
              </div>
            </motion.div>
            
            <div>
              <h2 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">Về chúng tôi</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Kim Khí NGDV - Đối Tác Tin Cậy Của Mọi Công Trình
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Được thành lập với sứ mệnh trở thành "cánh tay nối dài" cho các doanh nghiệp xây dựng và sản xuất, Công ty Cổ phần Sản xuất và Thương mại Kim khí NGDV đã không ngừng đầu tư vào công nghệ và con người. Chúng tôi tự hào là đơn vị cung ứng kim khí hàng đầu tại Hưng Yên và khu vực phía Bắc.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Với nhà xưởng hiện đại, quy trình sản xuất khép kín và đội ngũ kỹ sư giàu kinh nghiệm, NGDV cam kết mang đến những sản phẩm bu lông, ốc vít, vật tư cơ khí đạt tiêu chuẩn quốc tế với mức giá cạnh tranh nhất thị trường. Chúng tôi không chỉ bán sản phẩm, chúng tôi cung cấp giải pháp kỹ thuật tối ưu cho khách hàng.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><CheckCircle2 className="w-5 h-5" /></div>
                  <span className="font-bold text-slate-800">Chất lượng ISO</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><CheckCircle2 className="w-5 h-5" /></div>
                  <span className="font-bold text-slate-800">Giá tại xưởng</span>
                </div>
              </div>
              <Link to="/gioi-thieu" className="text-blue-600 font-bold flex items-center hover:translate-x-2 transition-transform">
                TÌM HIỂU THÊM <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">Tại sao chọn NGDV?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">7 Lợi Thế Cạnh Tranh Vượt Trội</h3>
            <p className="text-slate-600">Chúng tôi thấu hiểu những khó khăn của nhà thầu và đại lý, từ đó xây dựng hệ sinh thái dịch vụ hoàn hảo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group"
              >
                <div className="bg-slate-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  <adv.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{adv.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800/20 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-4">Quy trình chuyên nghiệp</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">5 Bước Làm Việc Tối Ưu</h3>
            <p className="text-blue-200">Quy trình tinh gọn giúp tiết kiệm thời gian và đảm bảo độ chính xác tuyệt đối cho mọi đơn hàng.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-px bg-blue-700 z-0"></div>
                )}
                <div className="relative z-10 flex flex-col items-center md:items-start">
                  <div className="w-20 h-20 bg-blue-800 border-2 border-blue-600 rounded-full flex items-center justify-center text-3xl font-black mb-6 shadow-2xl">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-center md:text-left">{step.title}</h4>
                  <p className="text-blue-300 text-sm text-center md:text-left leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">Dự án tiêu biểu</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Khẳng Định Vị Thế Qua Từng Công Trình</h3>
              <p className="text-slate-600">Sản phẩm của NGDV hiện diện tại hàng trăm dự án trọng điểm trên khắp cả nước.</p>
            </div>
            <Link to="/du-an" className="hidden md:flex items-center text-blue-600 font-bold hover:translate-x-2 transition-transform mt-6 md:mt-0">
              XEM TẤT CẢ DỰ ÁN <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-blue-900">
                    {project.category}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{project.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-4">Khách hàng nói gì?</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Niềm Tin Từ Đối Tác</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative">
                <Quote className="absolute top-6 right-8 w-12 h-12 text-blue-600/20" />
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                </div>
                <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-lg">{t.name}</p>
                  <p className="text-blue-400 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
            Sẵn Sàng Cho Dự Án Tiếp Theo Của Bạn?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Liên hệ ngay với đội ngũ kỹ thuật của NGDV để nhận tư vấn giải pháp vật tư tối ưu và báo giá cạnh tranh nhất.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/lien-he" className="bg-white text-blue-600 px-10 py-5 rounded-xl font-black text-lg hover:bg-blue-50 transition-all shadow-2xl">
              NHẬN BÁO GIÁ NGAY
            </Link>
            <a href="tel:0987654321" className="bg-blue-900 text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-blue-950 transition-all border border-blue-500/30">
              GỌI KỸ THUẬT: 0987.654.321
            </a>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Home;
