import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Package, Settings, Hammer, Building2, 
  ChevronRight, ArrowRight, CheckCircle2, 
  Download, Info, Filter, Search, Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import SEO from "../components/SEO";

const categories = [
  {
    id: "bulong",
    name: "Bu lông - Ốc vít",
    icon: Settings,
    description: "Hệ thống bu lông, ốc vít cường độ cao, bu lông neo, bu lông móng đạt chuẩn ISO, DIN.",
    items: [
      { name: "Bu lông cường độ cao 8.8, 10.9, 12.9", specs: "M6 - M64", material: "Thép hợp kim", finish: "Đen mộc, Mạ kẽm" },
      { name: "Bu lông neo (L, J, V, U)", specs: "Phi 12 - Phi 56", material: "Thép CT3, C45", finish: "Mạ kẽm nhúng nóng" },
      { name: "Thanh ren, Ty ren", specs: "1m, 2m, 3m", material: "Thép, Inox 201/304", finish: "Mạ điện phân" },
      { name: "Ốc vít inox, vít tự khoan", specs: "Đa dạng", material: "Inox 304, 316", finish: "Sáng bóng" },
    ]
  },
  {
    id: "phukien",
    name: "Phụ kiện kim loại",
    icon: Building2,
    description: "Phụ kiện phục vụ xây dựng dân dụng và công nghiệp, kết cấu thép.",
    items: [
      { name: "Bản mã, mặt bích", specs: "Theo bản vẽ", material: "Thép tấm", finish: "Cắt plasma/laser" },
      { name: "U-bolt, đai ôm ống", specs: "Phi 21 - Phi 500", material: "Thép mạ kẽm", finish: "Mạ điện" },
      { name: "Long đen, vòng đệm", specs: "M6 - M64", material: "Thép, Inox", finish: "Phẳng, vênh" },
      { name: "Nở sắt, nở đạn", specs: "M6 - M20", material: "Thép mạ", finish: "Vàng, trắng" },
    ]
  },
  {
    id: "vattu",
    name: "Vật tư cơ khí",
    icon: Package,
    description: "Các loại vật tư tiêu hao, thiết bị phụ trợ cho xưởng cơ khí và nhà máy.",
    items: [
      { name: "Que hàn, dây hàn", specs: "2.5mm, 3.2mm, 4.0mm", material: "Thép", finish: "Kim Tín, Atlantic" },
      { name: "Đá cắt, đá mài", specs: "100mm, 125mm, 350mm", material: "Hợp kim", finish: "Hải Dương, Bosch" },
      { name: "Thiết bị nâng hạ (Cáp, Xích)", specs: "1 tấn - 20 tấn", material: "Thép chịu lực", finish: "Hàn Quốc, Trung Quốc" },
      { name: "Dụng cụ cầm tay", specs: "Đa dạng", material: "Thép CR-V", finish: "Kingtony, Stanley" },
    ]
  },
  {
    id: "giacong",
    name: "Gia công theo bản vẽ",
    icon: Hammer,
    description: "Dịch vụ gia công cơ khí chính xác, cắt, chấn, hàn theo yêu cầu kỹ thuật riêng.",
    items: [
      { name: "Cắt Laser/Plasma CNC", specs: "Dày đến 50mm", material: "Thép, Inox, Nhôm", finish: "Chính xác cao" },
      { name: "Chấn, gấp CNC", specs: "Dài đến 4m", material: "Thép tấm", finish: "Góc cạnh sắc nét" },
      { name: "Hàn kết cấu", specs: "MIG/TIG/Que", material: "Thép, Inox", finish: "Mối hàn đẹp, bền" },
      { name: "Tiện, phay CNC", specs: "Chi tiết máy", material: "Đa dạng", finish: "Độ bóng cao" },
    ]
  }
];

const Products = () => {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const activeCategory = categories.find(c => c.id === activeTab)!;

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Sản Phẩm Kim Khí" 
        description="Danh mục sản phẩm bu lông, ốc vít, phụ kiện kim loại và vật tư cơ khí công nghiệp đạt chuẩn ISO, DIN tại NGDV."
      />
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/products-bg/1920/1080" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Danh Mục Sản Phẩm</h1>
            <p className="text-xl text-slate-300">Cung cấp hệ thống vật tư kim khí đa dạng, đạt chuẩn chất lượng quốc tế cho mọi nhu cầu công nghiệp.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Tabs */}
            <div className="lg:w-1/4">
              <div className="sticky top-32 space-y-2">
                <div className="flex items-center space-x-2 mb-6 px-4">
                  <Filter className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-slate-900 uppercase tracking-widest text-sm">Danh mục</span>
                </div>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-6 py-4 rounded-xl font-bold transition-all text-left",
                      activeTab === cat.id 
                        ? "bg-blue-900 text-white shadow-lg shadow-blue-900/20" 
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    )}
                  >
                    <div className="flex items-center">
                      <cat.icon className={cn("w-5 h-5 mr-3", activeTab === cat.id ? "text-blue-400" : "text-slate-400")} />
                      {cat.name}
                    </div>
                    {activeTab === cat.id && <ChevronRight className="w-4 h-4" />}
                  </button>
                ))}
                
                <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-3">Tải Catalogue</h4>
                  <p className="text-xs text-blue-700 mb-4">Xem đầy đủ thông số kỹ thuật và danh mục sản phẩm 2026.</p>
                  <button className="w-full flex items-center justify-center bg-blue-900 text-white py-2.5 rounded-lg text-sm font-bold hover:bg-blue-800 transition-colors">
                    <Download className="w-4 h-4 mr-2" /> DOWNLOAD PDF
                  </button>
                </div>
              </div>
            </div>

            {/* Product Display */}
            <div className="lg:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{activeCategory.name}</h2>
                    <p className="text-slate-600 leading-relaxed max-w-3xl">{activeCategory.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {activeCategory.items.map((item, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                          <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" /> {item.name}
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between py-2 border-b border-slate-50">
                            <span className="text-slate-500">Quy cách:</span>
                            <span className="font-semibold text-slate-800">{item.specs}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-slate-50">
                            <span className="text-slate-500">Vật liệu:</span>
                            <span className="font-semibold text-slate-800">{item.material}</span>
                          </div>
                          <div className="flex justify-between py-2">
                            <span className="text-slate-500">Bề mặt:</span>
                            <span className="font-semibold text-slate-800">{item.finish}</span>
                          </div>
                        </div>
                        <button className="mt-6 w-full text-blue-600 font-bold text-sm flex items-center justify-center py-2 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
                          YÊU CẦU BÁO GIÁ <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Why NGDV for this category */}
                  <div className="bg-slate-900 rounded-3xl p-10 text-white">
                    <h3 className="text-2xl font-bold mb-8">Tại sao nên chọn {activeCategory.name} tại NGDV?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-4">
                        <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center">
                          <Shield className="w-6 h-6" />
                        </div>
                        <h5 className="font-bold">Độ bền vượt trội</h5>
                        <p className="text-slate-400 text-sm">Sản phẩm chịu lực tốt, chống ăn mòn cao trong mọi điều kiện thời tiết.</p>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center">
                          <Settings className="w-6 h-6" />
                        </div>
                        <h5 className="font-bold">Đúng thông số</h5>
                        <p className="text-slate-400 text-sm">Cam kết sai số kỹ thuật ở mức thấp nhất, đảm bảo lắp ghép chính xác.</p>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center">
                          <Package className="w-6 h-6" />
                        </div>
                        <h5 className="font-bold">Sẵn hàng số lượng lớn</h5>
                        <p className="text-slate-400 text-sm">Kho hàng luôn đầy đủ các quy cách phổ thông, giao ngay trong ngày.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">Bạn không tìm thấy quy cách mình cần?</h3>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">Chúng tôi nhận sản xuất và gia công theo yêu cầu riêng với mọi kích thước và vật liệu đặc thù.</p>
          <Link to="/gia-cong" className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20">
            TƯ VẤN GIA CÔNG THEO YÊU CẦU <Hammer className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
