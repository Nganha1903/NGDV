import { motion } from "motion/react";
import { Calendar, User, ChevronRight, Search, Tag, Newspaper, BookOpen, Info } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const posts = [
  {
    id: 1,
    title: "Cách Phân Biệt Bu Lông Cường Độ Cao 8.8, 10.9 và 12.9",
    excerpt: "Hướng dẫn chi tiết cách đọc ký hiệu trên đầu bu lông và lựa chọn cấp độ bền phù hợp cho từng loại kết cấu thép công nghiệp.",
    date: "25/05/2025",
    author: "Kỹ sư NGDV",
    category: "Kiến thức kỹ thuật",
    image: "https://picsum.photos/seed/news1/800/600"
  },
  {
    id: 2,
    title: "Thị Trường Kim Khí Hưng Yên 2026: Cơ Hội Và Thách Thức",
    excerpt: "Phân tích xu hướng giá thép và nhu cầu vật tư kim khí tại các khu công nghiệp trọng điểm Phố Nối A, Phố Nối B và Thăng Long II.",
    date: "12/05/2025",
    author: "Ban biên tập",
    category: "Thị trường",
    image: "https://picsum.photos/seed/news2/800/600"
  },
  {
    id: 3,
    title: "NGDV Đầu Tư Dây Chuyền Cắt Laser Fiber 12kW Hiện Đại",
    excerpt: "Nâng cao năng lực gia công kim loại tấm với hệ thống máy cắt laser công suất lớn, đáp ứng tiến độ cho các dự án trọng điểm.",
    date: "05/05/2025",
    author: "NGDV News",
    category: "Tin công ty",
    image: "https://picsum.photos/seed/news3/800/600"
  },
  {
    id: 4,
    title: "Quy Trình Mạ Kẽm Nhúng Nóng Đạt Chuẩn ASTM A123",
    excerpt: "Tìm hiểu về quy trình bảo vệ bề mặt kim loại bằng phương pháp mạ kẽm nhúng nóng để tăng tuổi thọ công trình lên đến 50 năm.",
    date: "28/04/2025",
    author: "Phòng kỹ thuật",
    category: "Kiến thức kỹ thuật",
    image: "https://picsum.photos/seed/news4/800/600"
  },
  {
    id: 5,
    title: "Top 5 Loại Bu Lông Neo Phổ Biến Trong Xây Dựng Nhà Xưởng",
    excerpt: "So sánh ưu nhược điểm của bu lông neo chữ L, J, V và U trong việc liên kết hệ thống cột thép với nền móng bê tông.",
    date: "15/04/2025",
    author: "Kỹ sư NGDV",
    category: "Kiến thức kỹ thuật",
    image: "https://picsum.photos/seed/news5/800/600"
  },
  {
    id: 6,
    title: "NGDV Đồng Hành Cùng Doanh Nghiệp B2B Tối Ưu Chi Phí Vật Tư",
    excerpt: "Chia sẻ chiến lược quản lý kho và đặt hàng vật tư kim khí giúp doanh nghiệp giảm thiểu lãng phí và tăng hiệu quả sản xuất.",
    date: "02/04/2025",
    author: "Ban biên tập",
    category: "Tư vấn giải pháp",
    image: "https://picsum.photos/seed/news6/800/600"
  }
];

const News = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="Tin Tức & Kiến Thức Kim Khí" 
        description="Cập nhật xu hướng thị trường, kiến thức kỹ thuật về bu lông ốc vít và các hoạt động mới nhất của Kim Khí NGDV."
      />
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/news-hero/1920/1080" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Tin Tức & Kiến Thức</h1>
            <p className="text-xl text-slate-300">Cập nhật xu hướng thị trường, kiến thức kỹ thuật chuyên sâu và các hoạt động mới nhất của Kim Khí NGDV.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Posts Grid */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {posts.map((post, i) => (
                  <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/10] shadow-md">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-blue-900 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-slate-400 text-xs mb-3 space-x-4">
                      <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                      <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link to={`/tin-tuc/${post.id}`} className="text-blue-600 font-bold text-sm flex items-center hover:translate-x-2 transition-transform">
                      ĐỌC TIẾP <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </motion.article>
                ))}
              </div>

              {/* Pagination Placeholder */}
              <div className="mt-16 flex justify-center space-x-2">
                <button className="w-10 h-10 rounded-lg bg-blue-900 text-white font-bold">1</button>
                <button className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 font-bold hover:bg-slate-200">2</button>
                <button className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 font-bold hover:bg-slate-200">3</button>
                <button className="px-4 h-10 rounded-lg bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 flex items-center">TIẾP <ChevronRight className="ml-1 w-4 h-4" /></button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-12">
              {/* Search */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-6 flex items-center uppercase tracking-widest text-sm">
                  <Search className="w-5 h-5 mr-2 text-blue-600" /> Tìm kiếm
                </h4>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Nhập từ khóa..." 
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-6 flex items-center uppercase tracking-widest text-sm">
                  <Tag className="w-5 h-5 mr-2 text-blue-600" /> Chuyên mục
                </h4>
                <ul className="space-y-3">
                  {["Kiến thức kỹ thuật", "Thị trường kim khí", "Tin tức công ty", "Dự án mới", "Tư vấn giải pháp"].map((cat, i) => (
                    <li key={i}>
                      <button className="w-full flex justify-between items-center text-slate-600 hover:text-blue-600 font-medium text-sm py-2 group">
                        <span>{cat}</span>
                        <span className="bg-white px-2 py-0.5 rounded-md text-[10px] font-bold text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">12</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Featured Posts */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-6 flex items-center uppercase tracking-widest text-sm">
                  <Newspaper className="w-5 h-5 mr-2 text-blue-600" /> Tin nổi bật
                </h4>
                <div className="space-y-6">
                  {posts.slice(0, 3).map((post, i) => (
                    <div key={i} className="flex space-x-4 group cursor-pointer">
                      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h5>
                        <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-wider">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-900 p-8 rounded-3xl text-white shadow-xl shadow-blue-900/20">
                <BookOpen className="w-10 h-10 text-blue-400 mb-6" />
                <h4 className="text-xl font-bold mb-4">Đăng ký nhận tin</h4>
                <p className="text-blue-200 text-sm mb-6 leading-relaxed">Nhận ngay các kiến thức kỹ thuật và báo giá vật tư mới nhất qua email hàng tuần.</p>
                <input 
                  type="email" 
                  placeholder="Email của bạn..." 
                  className="w-full bg-blue-800 border-none rounded-xl px-4 py-3 text-sm mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-colors">
                  ĐĂNG KÝ NGAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
