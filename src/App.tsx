import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, X, Phone, Mail, MapPin, 
  ChevronRight, ArrowRight, Shield, 
  Settings, Users, Building2, 
  CheckCircle2, MessageSquare, 
  Send, Loader2, Bot, 
  Factory, Package, Hammer, 
  Briefcase, Newspaper, Info
} from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import Markdown from "react-markdown";
import { cn } from "./utils/cn";

// Components
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import CustomProcessing from "./pages/CustomProcessing";
import News from "./pages/News";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Trang chủ", path: "/" },
    { name: "Giới thiệu", path: "/gioi-thieu" },
    { name: "Sản phẩm", path: "/san-pham" },
    { name: "Gia công", path: "/gia-cong" },
    { name: "Dự án", path: "/du-an" },
    { name: "Tin tức", path: "/tin-tuc" },
    { name: "Liên hệ", path: "/lien-he" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:0987654321" className="flex items-center hover:text-blue-400 transition-colors">
              <Phone className="w-4 h-4 mr-2" /> 0987.654.321
            </a>
            <a href="mailto:info@ngdv.vn" className="flex items-center hover:text-blue-400 transition-colors">
              <Mail className="w-4 h-4 mr-2" /> info@ngdv.vn
            </a>
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" /> Chợ Bao Bì, Mỹ Hào, Hưng Yên
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Giờ làm việc: 08:00 - 17:30 (T2 - T7)</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-3" : "bg-white/95 py-5"
      )}>
        <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-900 text-white p-2 rounded-lg font-bold text-xl">NGDV</div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 leading-none tracking-tight">KIM KHÍ NGDV</span>
              <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">Industrial Solutions</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-blue-700",
                  location.pathname === link.path ? "text-blue-700" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/lien-he" 
              className="bg-blue-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20"
            >
              NHẬN BÁO GIÁ
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "block text-lg font-medium",
                      location.pathname === link.path ? "text-blue-700" : "text-slate-600"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to="/lien-he" 
                  className="block bg-blue-900 text-white text-center py-3 rounded-lg font-bold"
                >
                  NHẬN BÁO GIÁ
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white text-blue-900 p-2 rounded-lg font-bold text-xl">NGDV</div>
              <span className="font-bold text-xl tracking-tight">KIM KHÍ NGDV</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              CÔNG TY CỔ PHẦN SẢN XUẤT VÀ THƯƠNG MẠI KIM KHÍ NGDV - Đơn vị hàng đầu tại Hưng Yên chuyên sản xuất, cung cấp bu lông, ốc vít và vật tư cơ khí công nghiệp chất lượng cao.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="font-bold">z</span>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="font-bold">y</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3">Sản phẩm chính</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/san-pham" className="hover:text-white transition-colors">Bu lông - Ốc vít công nghiệp</Link></li>
              <li><Link to="/san-pham" className="hover:text-white transition-colors">Phụ kiện kim loại xây dựng</Link></li>
              <li><Link to="/san-pham" className="hover:text-white transition-colors">Vật tư cơ khí tổng hợp</Link></li>
              <li><Link to="/gia-cong" className="hover:text-white transition-colors">Gia công theo bản vẽ</Link></li>
              <li><Link to="/san-pham" className="hover:text-white transition-colors">Thiết bị nâng hạ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3">Liên kết nhanh</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/gioi-thieu" className="hover:text-white transition-colors">Về chúng tôi</Link></li>
              <li><Link to="/du-an" className="hover:text-white transition-colors">Dự án tiêu biểu</Link></li>
              <li><Link to="/tin-tuc" className="hover:text-white transition-colors">Tin tức & Kiến thức</Link></li>
              <li><Link to="/lien-he" className="hover:text-white transition-colors">Chính sách bảo hành</Link></li>
              <li><Link to="/lien-he" className="hover:text-white transition-colors">Tuyển dụng</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3">Thông tin liên hệ</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <span>Chợ Bao Bì, Mỹ Hào, Hưng Yên</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <span>0987.654.321</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <span>contact@ngdv.vn</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>© 2026 CÔNG TY CỔ PHẦN SẢN XUẤT VÀ THƯƠNG MẠI KIM KHÍ NGDV. All rights reserved.</p>
          <p className="mt-2 italic">Thiết kế & Marketing bởi Chuyên gia B2B</p>
        </div>
      </footer>

      <AIChatbox />
    </div>
  );
};

const AIChatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    { role: "ai", text: "Xin chào! Tôi là trợ lý ảo của Kim Khí NGDV. Tôi có thể giúp gì cho bạn về sản phẩm bu lông, ốc vít hoặc yêu cầu gia công?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Bạn là trợ lý ảo chuyên nghiệp của Công ty Kim Khí NGDV (Hưng Yên). 
        Lĩnh vực: Sản xuất bu lông, ốc vít, vật tư cơ khí, gia công kim loại.
        Phong cách: Chuyên nghiệp, tận tâm, am hiểu kỹ thuật.
        Nhiệm vụ: Tư vấn sản phẩm, báo giá sơ bộ, hướng dẫn khách để lại thông tin liên hệ.
        Câu hỏi của khách: ${userMsg}`,
      });
      
      setMessages(prev => [...prev, { role: "ai", text: response.text || "Xin lỗi, tôi gặp sự cố. Vui lòng liên hệ hotline 0987.654.321." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "ai", text: "Hệ thống đang bận. Bạn vui lòng gọi hotline để được hỗ trợ ngay nhé!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 h-[500px] flex flex-col border border-slate-200 mb-4 overflow-hidden"
          >
            <div className="bg-blue-900 p-4 text-white flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-500 p-1.5 rounded-lg">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm">Trợ lý Kim Khí NGDV</p>
                  <p className="text-[10px] text-blue-300">Đang trực tuyến</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, i) => (
                <div key={i} className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}>
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm",
                    msg.role === "user" ? "bg-blue-600 text-white rounded-tr-none" : "bg-white text-slate-700 shadow-sm rounded-tl-none border border-slate-100"
                  )}>
                    {msg.role === "ai" ? (
                      <div className="markdown-body-chat">
                        <Markdown>{msg.text}</Markdown>
                      </div>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-slate-100 flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Nhập tin nhắn..."
                className="flex-grow bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-800 transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-900 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat với chuyên gia
          </span>
        )}
      </button>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/gia-cong" element={<CustomProcessing />} />
          <Route path="/du-an" element={<Projects />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/lien-he" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
