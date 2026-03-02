import { motion } from "motion/react";
import { 
  Hammer, Settings, Shield, CheckCircle2, 
  ArrowRight, Factory, Cpu, Layers, 
  FileText, PenTool, Zap, Ruler
} from "lucide-react";
import Markdown from "react-markdown";
import SEO from "../components/SEO";

const CustomProcessing = () => {
  const content = `
# Dịch Vụ Gia Công Kim Loại Theo Yêu Cầu - Chính Xác & Tối Ưu

Tại **Kim Khí NGDV**, chúng tôi hiểu rằng mỗi dự án công nghiệp đều có những yêu cầu kỹ thuật đặc thù mà các sản phẩm đại trà không thể đáp ứng. Đó là lý do chúng tôi đầu tư mạnh mẽ vào hệ thống máy móc CNC hiện đại và đội ngũ kỹ thuật tay nghề cao để cung cấp dịch vụ **gia công kim khí theo bản vẽ** chuyên nghiệp nhất tại Hưng Yên.

## 1. Năng Lực Gia Công Đa Dạng

Chúng tôi cung cấp giải pháp gia công trọn gói từ khâu thiết kế, lựa chọn vật liệu đến hoàn thiện bề mặt:

### Cắt Laser & Plasma CNC
Sở hữu máy cắt Laser Fiber công suất lớn, NGDV có khả năng cắt các tấm thép, inox, nhôm với độ dày lên đến 50mm. Đường cắt sắc nét, không bavia, sai số chỉ ±0.1mm, giúp tiết kiệm thời gian gia công tinh.

### Chấn, Gấp CNC Chính Xác
Hệ thống máy chấn thủy lực CNC cho phép tạo hình các chi tiết phức tạp với chiều dài lên đến 4000mm. Chúng tôi xử lý tốt các loại máng cáp, vỏ tủ điện, các chi tiết kết cấu thép đòi hỏi góc chấn chuẩn xác.

### Đột Dập & Tạo Hình
Nhận gia công đột lỗ, dập gân, tạo hình trên các tấm kim loại theo khuôn mẫu có sẵn hoặc thiết kế riêng. Phù hợp cho sản xuất hàng loạt các linh kiện phụ trợ công nghiệp.

### Hàn Kết Cấu Chuyên Nghiệp
Đội ngũ thợ hàn đạt chứng chỉ quốc tế, am hiểu các kỹ thuật hàn MIG, TIG, hàn que. Chúng tôi chuyên gia công các loại khung giá kệ, xe đẩy công nghiệp, bồn bể và kết cấu thép nhà xưởng.

## 2. Vật Liệu Gia Công

Chúng tôi có nguồn cung cấp vật liệu ổn định, đảm bảo chất lượng đầu vào cho mọi đơn hàng:
*   **Thép Carbon:** SS400, CT3, C45, Q235, Q345...
*   **Thép Không Gỉ (Inox):** SUS 201, 304, 316...
*   **Kim Loại Màu:** Nhôm, Đồng, Đồng thau...
*   **Thép Hợp Kim Đặc Biệt:** Theo yêu cầu cụ thể của khách hàng.

## 3. Tại Sao Nên Chọn Dịch Vụ Gia Công Tại NGDV?

1.  **Độ Chính Xác Tuyệt Đối:** Sử dụng máy móc CNC thế hệ mới nhất, đảm bảo sản phẩm đúng 100% so với bản vẽ kỹ thuật.
2.  **Tư Vấn Giải Pháp Tối Ưu:** Kỹ sư của chúng tôi sẽ tư vấn cách bố trí chi tiết trên tấm để tiết kiệm vật liệu nhất cho khách hàng.
3.  **Tiến Độ Nhanh Chóng:** Quy trình sản xuất 24/7 giúp đáp ứng các đơn hàng gấp trong thời gian ngắn nhất.
4.  **Giá Thành Cạnh Tranh:** Trực tiếp gia công tại xưởng, không qua trung gian, giúp khách hàng tối ưu hóa chi phí đầu tư.
5.  **Hoàn Thiện Bề Mặt Đa Dạng:** Cung cấp các dịch vụ mạ kẽm điện phân, mạ kẽm nhúng nóng, sơn tĩnh điện theo yêu cầu.

## 4. Quy Trình Đặt Hàng Gia Công

*   **Bước 1:** Khách hàng gửi bản vẽ (AutoCAD, SolidWorks, PDF) hoặc mẫu thực tế.
*   **Bước 2:** NGDV phân tích kỹ thuật, tính toán vật liệu và gửi báo giá chi tiết.
*   **Bước 3:** Chốt phương án, ký hợp đồng và tạm ứng.
*   **Bước 4:** Tiến hành gia công mẫu (nếu cần) và sản xuất hàng loạt.
*   **Bước 5:** Kiểm tra chất lượng, đóng gói và giao hàng tận nơi.

---

**Hãy để NGDV biến những bản vẽ của bạn thành hiện thực với chất lượng hoàn hảo nhất!**
  `;

  const services = [
    { title: "Cắt Laser CNC", icon: Zap, desc: "Cắt thép tấm dày đến 50mm, độ chính xác cực cao." },
    { title: "Chấn Gấp CNC", icon: Layers, desc: "Tạo hình chi tiết máy, vỏ tủ điện, máng cáp." },
    { title: "Hàn Kết Cấu", icon: Factory, desc: "Gia công khung nhà xưởng, giá kệ công nghiệp." },
    { title: "Tiện & Phay CNC", icon: Cpu, desc: "Gia công chi tiết máy đòi hỏi độ bóng bề mặt." },
  ];

  return (
    <div className="bg-white">
      <SEO 
        title="Gia Công Kim Loại Theo Yêu Cầu" 
        description="Dịch vụ gia công cắt laser CNC, chấn gấp, hàn kết cấu kim loại theo bản vẽ kỹ thuật tại Hưng Yên. Chính xác, nhanh chóng."
      />
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/processing-bg/1920/1080" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Gia Công Theo Bản Vẽ</h1>
            <p className="text-xl text-slate-300">Dịch vụ gia công kim khí chính xác, hiện đại, đáp ứng mọi yêu cầu khắt khe nhất của khách hàng B2B.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  <s.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="markdown-body">
              <Markdown>{content}</Markdown>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-900 p-8 rounded-3xl text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-blue-400" /> Yêu cầu báo giá
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">Họ và tên</label>
                  <input type="text" className="w-full bg-blue-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none" placeholder="Nguyễn Văn A" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">Số điện thoại</label>
                  <input type="tel" className="w-full bg-blue-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none" placeholder="09xx xxx xxx" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">Dịch vụ quan tâm</label>
                  <select className="w-full bg-blue-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none appearance-none">
                    <option>Cắt Laser CNC</option>
                    <option>Chấn Gấp CNC</option>
                    <option>Hàn Kết Cấu</option>
                    <option>Gia công tổng hợp</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">Ghi chú yêu cầu</label>
                  <textarea className="w-full bg-blue-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none h-24" placeholder="Mô tả sơ bộ yêu cầu của bạn..."></textarea>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-500/20">
                  GỬI YÊU CẦU NGAY
                </button>
              </form>
              <p className="text-[10px] text-blue-400 mt-4 text-center italic">Chúng tôi sẽ phản hồi trong vòng 30 phút làm việc.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-6">Tiêu chuẩn kỹ thuật</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm text-slate-600">
                  <Ruler className="w-5 h-5 text-blue-600" />
                  <span>Dung sai: ±0.1mm - ±0.5mm</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-600">
                  <PenTool className="w-5 h-5 text-blue-600" />
                  <span>Phần mềm: AutoCAD, SolidWorks</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span>Kiểm định: Thước kẹp, Panme, Máy đo 2D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomProcessing;
