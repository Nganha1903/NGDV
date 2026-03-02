import { motion } from "motion/react";
import { MapPin, Calendar, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const projects = [
  {
    id: 1,
    title: "Cung cấp bu lông neo cho Chợ Bao Bì Mỹ Hào",
    client: "Tập đoàn Xây dựng Hòa Bình",
    location: "Mỹ Hào, Hưng Yên",
    date: "Tháng 05/2025",
    image: "https://picsum.photos/seed/project1/800/600",
    category: "Khu công nghiệp",
    desc: "Cung cấp hơn 50.000 bộ bu lông neo M24, M36 mạ kẽm nhúng nóng cho hệ thống nhà xưởng sản xuất linh kiện điện tử."
  },
  {
    id: 2,
    title: "Gia công kết cấu thép Dự án Vinhomes Ocean Park 2",
    client: "Công ty CP Xây dựng Coteccons",
    location: "Văn Giang, Hưng Yên",
    date: "Tháng 12/2024",
    image: "https://picsum.photos/seed/project2/800/600",
    category: "Xây dựng dân dụng",
    desc: "Gia công và lắp đặt hệ thống lan can, cầu thang thoát hiểm và các chi tiết kim loại trang trí cho phân khu thấp tầng."
  },
  {
    id: 3,
    title: "Vật tư cơ khí cho Nhà máy Samsung Thái Nguyên",
    client: "Samsung Electronics Việt Nam",
    location: "Phổ Yên, Thái Nguyên",
    date: "Tháng 08/2024",
    image: "https://picsum.photos/seed/project3/800/600",
    category: "Nhà máy sản xuất",
    desc: "Cung ứng định kỳ các loại bu lông inox 304, ty ren và phụ kiện treo ống cho hệ thống phòng sạch nhà máy."
  },
  {
    id: 4,
    title: "Hệ thống giá kệ kho vận Logitem Việt Nam",
    client: "Logitem Vietnam Corp",
    location: "KCN Quang Minh, Hà Nội",
    date: "Tháng 03/2025",
    image: "https://picsum.photos/seed/project4/800/600",
    category: "Kho vận & Logistics",
    desc: "Gia công và lắp đặt hệ thống giá kệ hạng nặng chịu tải 2 tấn/pallet, sử dụng thép cường độ cao SS400."
  },
  {
    id: 5,
    title: "Cung cấp vật tư kim khí Cầu Vĩnh Tuy 2",
    client: "Tổng công ty Thăng Long",
    location: "Hà Nội",
    date: "Tháng 10/2023",
    image: "https://picsum.photos/seed/project5/800/600",
    category: "Hạ tầng giao thông",
    desc: "Cung cấp bu lông cường độ cao 10.9 và các chi tiết bản mã mạ kẽm cho hệ thống dầm thép và lan can cầu."
  },
  {
    id: 6,
    title: "Gia công vỏ tủ điện KCN Thăng Long II",
    client: "Công ty Thiết bị Điện ABB",
    location: "Yên Mỹ, Hưng Yên",
    date: "Tháng 01/2025",
    image: "https://picsum.photos/seed/project6/800/600",
    category: "Thiết bị điện",
    desc: "Sản xuất hàng loạt vỏ tủ điện công nghiệp bằng inox 304 cắt laser và chấn gấp CNC chính xác cao."
  }
];

const Projects = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="Dự Án Tiêu Biểu" 
        description="Các dự án cung cấp vật tư kim khí và gia công kết cấu thép trọng điểm mà NGDV đã thực hiện cho các đối tác lớn."
      />
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/projects-hero/1920/1080" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Dự Án Tiêu Biểu</h1>
            <p className="text-xl text-slate-300">Minh chứng cho năng lực sản xuất và uy tín của Kim Khí NGDV qua các công trình trọng điểm.</p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col h-full"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-blue-900 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center text-slate-400 text-xs mb-3 space-x-4">
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {project.date}</span>
                    <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-slate-500 mb-4">
                    <Building2 className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="font-medium">Chủ đầu tư: {project.client}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.desc}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-slate-100 mt-auto">
                  <div className="flex items-center text-green-600 text-xs font-bold uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4 mr-2" /> Đã hoàn thành & Bàn giao
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-black text-blue-900 mb-2">500+</p>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Dự án lớn nhỏ</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-blue-900 mb-2">20+</p>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Tỉnh thành</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-blue-900 mb-2">100%</p>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Đúng tiến độ</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-blue-900 mb-2">98%</p>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Khách hàng quay lại</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Bạn đang tìm kiếm nhà cung cấp cho dự án sắp tới?</h2>
          <p className="text-slate-600 mb-10">Hãy để NGDV đồng hành cùng bạn kiến tạo nên những công trình bền vững với thời gian.</p>
          <Link to="/lien-he" className="inline-flex items-center bg-blue-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20">
            LIÊN HỆ TƯ VẤN DỰ ÁN <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
