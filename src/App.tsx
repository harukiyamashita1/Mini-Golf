import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Clock, 
  Camera, 
  CheckCircle, 
  Menu, 
  X, 
  MessageCircle, 
  ChevronRight, 
  Train, 
  Info, 
  Calendar, 
  ChevronDown, 
  Instagram, 
  Users, 
  Star, 
  Utensils,
  Check,
  User,
  Gift,
  LogOut,
  Flag,
  Sun,
  Trees,
  Coffee
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  // Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup' | 'mypage'>('login');

  // Booking State
  const [bookingStep, setBookingStep] = useState(1);
  const [partySize, setPartySize] = useState(2);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timeSlots = [
    "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", 
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"
  ];

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setAuthMode('mypage');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAuthMode('login');
    setIsAuthModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-haz-bg text-slate-700 selection:bg-haz-primary/30">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-soft py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="font-display text-3xl font-black tracking-tighter text-haz-primary">
            HAZBOMB<span className="text-haz-secondary">.</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#concept" className="text-slate-600 hover:text-haz-primary transition-colors">コンセプト</a>
            <a href="#course" className="text-slate-600 hover:text-haz-primary transition-colors">コース</a>
            <a href="#cafe" className="text-slate-600 hover:text-haz-primary transition-colors">カフェ</a>
            <a href="#pricing" className="text-slate-600 hover:text-haz-primary transition-colors">料金</a>
            <a href="#access" className="text-slate-600 hover:text-haz-primary transition-colors">アクセス</a>
            
            <button 
              onClick={() => {
                setAuthMode(isLoggedIn ? 'mypage' : 'login');
                setIsAuthModalOpen(true);
              }}
              className="flex items-center gap-2 text-slate-600 hover:text-haz-primary transition-colors"
            >
              <User size={18} />
              {isLoggedIn ? 'マイページ' : 'ログイン / 登録'}
            </button>

            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-haz-secondary hover:bg-haz-secondary/90 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              WEB予約
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-xl font-bold text-slate-800">
              <a href="#concept" onClick={() => setIsMobileMenuOpen(false)}>コンセプト</a>
              <a href="#course" onClick={() => setIsMobileMenuOpen(false)}>コース</a>
              <a href="#cafe" onClick={() => setIsMobileMenuOpen(false)}>カフェ</a>
              <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>料金</a>
              <a href="#access" onClick={() => setIsMobileMenuOpen(false)}>アクセス</a>
              <div className="h-px bg-slate-200 my-2"></div>
              
              <button 
                onClick={() => {
                  setAuthMode(isLoggedIn ? 'mypage' : 'login');
                  setIsAuthModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-haz-primary"
              >
                <User size={24} />
                {isLoggedIn ? 'マイページ' : 'ログイン / 無料会員登録'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80" 
            alt="Sunny Golf Course" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-haz-bg"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white/90 backdrop-blur-sm text-haz-primary font-bold px-4 py-1.5 rounded-full text-sm mb-6 shadow-sm border border-haz-primary/20">
              南麻布のオアシス・アドベンチャーパーク
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-slate-900 drop-shadow-md">
              HAZBOMB <br />
              <span className="text-haz-primary">ミニゴルフ</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-800 mb-10 font-bold drop-shadow-sm bg-white/60 inline-block px-4 py-2 rounded-xl backdrop-blur-sm">
              大自然とワクワクする冒険が待っている！<br className="hidden md:block" />
              家族や友達と最高の思い出を作ろう。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full sm:w-auto bg-haz-secondary hover:bg-haz-secondary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                空き状況を見る
              </button>
              <a 
                href="#course"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-md hover:shadow-lg border border-slate-200"
              >
                コースを見る
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-24 px-6 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-slate-900">CONCEPT</h2>
            <p className="text-slate-500">日常を忘れて、冒険の世界へ飛び込もう。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-soft flex flex-col"
            >
              <div className="w-16 h-16 bg-haz-primary/10 rounded-2xl flex items-center justify-center text-haz-primary mb-6">
                <Trees size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Theme Park Course</h3>
              <p className="text-slate-600 leading-relaxed">
                海賊船、巨大タコ、噴火する火山、そしてドラゴンの滝。18ホールのすべてがテーマパーク級のギミックで溢れています。
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-soft flex flex-col"
            >
              <div className="w-16 h-16 bg-haz-secondary/10 rounded-2xl flex items-center justify-center text-haz-secondary mb-6">
                <Sun size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Fun for Everyone</h3>
              <p className="text-slate-600 leading-relaxed">
                パターゴルフは年齢や経験を問いません。小さなお子様から大人まで、家族みんなで、あるいはデートで最高の笑顔になれます。
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-soft flex flex-col"
            >
              <div className="w-16 h-16 bg-haz-accent/10 rounded-2xl flex items-center justify-center text-haz-accent mb-6">
                <Coffee size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Cafe & Terrace</h3>
              <p className="text-slate-600 leading-relaxed">
                赤い屋根のクラブハウスには、開放的なテラス席をご用意。プレイの後は、美味しいハンバーガーと冷たいドリンクでリラックス。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Map Section */}
      <section id="course" className="py-24 px-6 bg-haz-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-slate-900">18 HOLES COURSE</h2>
            <p className="text-slate-500">初心者から上級者まで楽しめる、大自然とギミックの18ホール</p>
          </div>

          {/* 18 Holes Grid */}
          <div className="grid grid-cols-6 md:grid-cols-9 gap-3 md:gap-6 mb-16 max-w-4xl mx-auto">
            {[...Array(18)].map((_, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.1 }}
                className={`aspect-square rounded-full border-2 flex items-center justify-center font-display font-bold text-lg md:text-xl cursor-pointer transition-all shadow-sm ${
                  [7, 10, 15].includes(i) 
                    ? 'border-haz-secondary text-haz-secondary bg-haz-secondary/10' 
                    : 'border-haz-primary/30 text-haz-primary bg-white hover:bg-haz-primary hover:text-white hover:border-haz-primary'
                }`}
              >
                {i + 1}
              </motion.div>
            ))}
          </div>

          {/* Course Overview Image */}
          <div className="w-full max-w-5xl mx-auto bg-slate-100 rounded-3xl overflow-hidden shadow-soft border border-slate-200 relative min-h-[300px] flex items-center justify-center">
            <p className="absolute text-slate-400 font-bold">ここにコースマップ画像が表示されます</p>
            <img 
              src="/course-overview.jpg" 
              alt="Course Overview Map" 
              className="w-full h-auto object-cover relative z-10"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Cafe & Menu Section */}
      <section id="cafe" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-slate-900">CAFE & TERRACE</h2>
            <p className="text-slate-500">プレイの前後には、テラス席で美味しい食事とドリンクを。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "アドベンチャーバーガー", price: "¥1,200", desc: "ジューシーな100%ビーフパティと新鮮野菜の特製バーガー。", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80" },
              { name: "ボルケーノアイス", price: "¥800", desc: "火山をモチーフにした、ベリーソースたっぷりの山盛りアイス。", img: "https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?auto=format&fit=crop&q=80" },
              { name: "オアシスレモネード", price: "¥600", desc: "自家製シロップを使った、爽快感抜群のフレッシュレモネード。", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-soft group">
                <div className="h-48 w-full overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-slate-900">{item.name}</h3>
                    <span className="font-bold text-haz-secondary">{item.price}</span>
                  </div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Snapshot */}
      <section id="pricing" className="py-24 px-6 bg-haz-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-slate-900">PRICING</h2>
            <p className="text-slate-500">明朗会計。すべて税込価格です。</p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft mb-8">
            <div className="p-8 border-b border-slate-100 bg-haz-primary/5">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-2xl font-bold text-slate-900">1 Play (18 Holes)</h3>
                <div className="text-right">
                  <span className="text-sm text-slate-500 block">大人1名様</span>
                  <span className="text-4xl font-display font-bold text-slate-900">¥2,000<span className="text-lg font-sans font-normal text-slate-500"> (税込)</span></span>
                </div>
              </div>
              <p className="text-haz-primary text-sm font-medium">※クラブ・ボールのレンタル料込み</p>
            </div>
            
            <div className="p-8 grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-4 flex items-center gap-2 text-slate-800">
                  <Info size={18} className="text-haz-accent" /> その他の料金
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex justify-between border-b border-slate-100 pb-2">
                    <span>中学生・高校生 (要学生証)</span>
                    <span className="font-medium text-slate-900">¥1,500</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-100 pb-2">
                    <span>小学生以下</span>
                    <span className="font-medium text-slate-900">¥1,000</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-100 pb-2">
                    <span>追加 1プレイ (18 Holes)</span>
                    <span className="font-medium text-slate-900">¥1,000</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold mb-2 text-slate-900">団体予約・貸切プラン</h4>
                <p className="text-sm text-slate-600 mb-4">
                  子供会、遠足、会社のレクリエーションなど、10名様以上の団体割引や貸切プランもご用意しております。
                </p>
                <button className="text-haz-primary text-sm font-bold flex items-center gap-1 hover:underline">
                  詳細はお問い合わせください <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Membership Banner */}
          <div className="bg-gradient-to-r from-haz-primary to-haz-accent rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Gift size={20} className="text-haz-yellow" />
                  <span className="font-bold text-haz-yellow tracking-wider">MEMBERSHIP</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">10回プレイで1回無料！</h3>
                <p className="text-white/80 text-sm">
                  無料の会員登録でデジタルスタンプカードを発行。10回遊ぶと次回のプレイ代が無料になります。
                </p>
              </div>
              <button 
                onClick={() => {
                  setAuthMode('signup');
                  setIsAuthModalOpen(true);
                }}
                className="shrink-0 bg-white text-haz-primary hover:bg-slate-50 px-6 py-3 rounded-full font-bold transition-colors shadow-md"
              >
                無料で登録する
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-slate-900">REVIEWS</h2>
            <p className="text-slate-500">お客様からの嬉しいお声をご紹介します。</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "M.K 様", type: "ファミリー", text: "週末に子供たちと遊びに行きました！海賊船や火山のコースに大興奮で、あっという間の18ホールでした。カフェのハンバーガーも美味しくて大満足です。" },
              { name: "T.S 様", type: "カップル", text: "天気の良い日のデートに利用しました。コースのギミックが凝っていて、大人でも本気で楽しめます。写真映えするスポットも多くて楽しかったです！" },
              { name: "Y.A 様", type: "友人グループ", text: "友達4人で行きました。負けた人がジュースを奢るルールで大盛り上がり！クラブもボールも借りられるので、手ぶらで行けるのが良いですね。" }
            ].map((review, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-soft">
                <div className="flex text-haz-yellow mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">「{review.text}」</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-slate-900">{review.name}</span>
                  <span className="text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">{review.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-24 px-6 bg-haz-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-slate-900">ACCESS</h2>
            <p className="text-slate-500">南麻布のど真ん中。駐車場も完備。</p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.7301014152582!3d35.65342208020088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b775401a353%3A0x8f26a11116664201!2z5Y2X6bq75biD77yR5LiB55uu!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">HAZBOMB ADVENTURE GOLF</h3>
              
              <div className="space-y-4 text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="text-haz-primary shrink-0 mt-1" size={20} />
                  <p>〒106-0047<br />東京都港区南麻布1丁目X-X</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Train className="text-haz-primary shrink-0 mt-1" size={20} />
                  <div>
                    <p>麻布十番駅 徒歩8分</p>
                    <p>白金高輪駅 徒歩10分</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-haz-primary shrink-0 mt-1" size={20} />
                  <div>
                    <p>平日: 10:00 - 20:00</p>
                    <p>土日祝: 9:00 - 21:00</p>
                    <p className="text-sm text-slate-400 mt-1">※最終受付は閉店1時間前</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display text-2xl font-black tracking-tighter text-white">
            HAZBOMB<span className="text-haz-primary">.</span>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">運営会社</a>
            <a href="#" className="hover:text-white transition-colors">利用規約</a>
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">お問い合わせ</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-haz-primary hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-haz-primary hover:text-white transition-all">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
        <div className="text-center text-sm mt-12 text-slate-600">
          &copy; 2026 HAZBOMB ADVENTURE GOLF. All rights reserved.
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 z-40">
        <button 
          onClick={() => setIsBookingModalOpen(true)}
          className="w-full bg-haz-secondary text-white py-3.5 rounded-full font-bold text-lg shadow-lg flex items-center justify-center gap-2"
        >
          <Calendar size={20} />
          WEB予約はこちら
        </button>
      </div>

      {/* Booking Modal (Multi-step) */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="text-xl font-bold text-slate-900">
                  {bookingStep === 1 && "日時・人数の選択"}
                  {bookingStep === 2 && "お客様情報の入力"}
                  {bookingStep === 3 && "予約完了"}
                </h3>
                <button 
                  onClick={() => {
                    setIsBookingModalOpen(false);
                    setTimeout(() => setBookingStep(1), 300); // Reset after close animation
                  }} 
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto">
                {/* Step 1: Selection */}
                {bookingStep === 1 && (
                  <div className="space-y-8">
                    {/* Party Size */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">ご利用人数</label>
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => setPartySize(Math.max(1, partySize - 1))}
                          className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50"
                        >-</button>
                        <span className="text-2xl font-bold w-12 text-center text-slate-900">{partySize}</span>
                        <button 
                          onClick={() => setPartySize(Math.min(10, partySize + 1))}
                          className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50"
                        >+</button>
                        <span className="text-slate-500 ml-2">名様</span>
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">お日にち</label>
                      <input 
                        type="date" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-haz-primary focus:ring-1 focus:ring-haz-primary"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                      />
                    </div>

                    {/* Time Selection */}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-3">お時間</label>
                      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 rounded-lg text-sm font-medium transition-all ${
                              selectedTime === time 
                                ? 'bg-haz-primary text-white border border-haz-primary' 
                                : 'bg-slate-50 border border-slate-200 text-slate-600 hover:border-haz-primary/50'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Customer Info */}
                {bookingStep === 2 && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">お名前</label>
                      <input type="text" placeholder="山田 太郎" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-haz-primary focus:ring-1 focus:ring-haz-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">メールアドレス</label>
                      <input type="email" placeholder="example@hazbomb.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-haz-primary focus:ring-1 focus:ring-haz-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">電話番号</label>
                      <input type="tel" placeholder="090-XXXX-XXXX" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-haz-primary focus:ring-1 focus:ring-haz-primary" />
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mt-6">
                      <h4 className="font-bold text-sm mb-2 text-slate-900">予約内容の確認</h4>
                      <p className="text-sm text-slate-600">
                        {selectedDate || '未選択'} {selectedTime || '未選択'} / {partySize}名様
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 3: Success */}
                {bookingStep === 3 && (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-haz-primary/10 text-haz-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check size={40} />
                    </div>
                    <h4 className="text-2xl font-bold mb-2 text-slate-900">予約が完了しました</h4>
                    <p className="text-slate-600 mb-6">
                      ご登録のメールアドレスに予約完了メールを送信しました。<br />
                      当日は受付でお名前をお伝えください。
                    </p>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 inline-block text-left">
                      <p className="text-sm text-slate-500 mb-1">予約番号</p>
                      <p className="font-mono text-xl font-bold text-slate-900">HZB-8902</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                {bookingStep === 1 && (
                  <button 
                    onClick={() => setBookingStep(2)}
                    disabled={!selectedDate || !selectedTime}
                    className="w-full sm:w-auto bg-haz-secondary disabled:bg-slate-300 disabled:cursor-not-allowed hover:bg-haz-secondary/90 text-white px-8 py-3 rounded-full font-bold transition-colors"
                  >
                    次へ進む
                  </button>
                )}
                {bookingStep === 2 && (
                  <>
                    <button 
                      onClick={() => setBookingStep(1)}
                      className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-full font-bold transition-colors"
                    >
                      戻る
                    </button>
                    <button 
                      onClick={() => setBookingStep(3)}
                      className="w-full sm:w-auto bg-haz-secondary hover:bg-haz-secondary/90 text-white px-8 py-3 rounded-full font-bold transition-colors"
                    >
                      予約を確定する
                    </button>
                  </>
                )}
                {bookingStep === 3 && (
                  <button 
                    onClick={() => {
                      setIsBookingModalOpen(false);
                      setTimeout(() => setBookingStep(1), 300);
                    }}
                    className="w-full bg-haz-primary hover:bg-haz-primary/90 text-white px-8 py-3 rounded-full font-bold transition-colors"
                  >
                    閉じる
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auth Modal (Login/Signup/MyPage) */}
      <AnimatePresence>
        {isAuthModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="text-xl font-bold text-slate-900">
                  {authMode === 'login' && "ログイン"}
                  {authMode === 'signup' && "無料会員登録"}
                  {authMode === 'mypage' && "マイページ"}
                </h3>
                <button 
                  onClick={() => setIsAuthModalOpen(false)} 
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6">
                {authMode === 'mypage' ? (
                  // --- MY PAGE VIEW ---
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-haz-primary/10 rounded-full flex items-center justify-center text-haz-primary">
                        <User size={32} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">ようこそ</p>
                        <p className="text-xl font-bold text-slate-900">ゲスト 様</p>
                      </div>
                    </div>

                    {/* Digital Stamp Card */}
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl p-6 shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-slate-900 flex items-center gap-2">
                          <Gift size={18} className="text-haz-secondary" />
                          スタンプカード
                        </h4>
                        <span className="text-xs font-bold bg-haz-secondary text-white px-2 py-1 rounded-full">
                          あと3回で無料！
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-5 gap-2 mb-4">
                        {[...Array(10)].map((_, i) => {
                          const isStamped = i < 7; // Mocking 7 stamps
                          return (
                            <div 
                              key={i} 
                              className={`aspect-square rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                                isStamped 
                                  ? 'bg-haz-primary border-haz-primary text-white' 
                                  : 'bg-white border-slate-200 text-slate-300'
                              }`}
                            >
                              {isStamped ? <Check size={16} /> : i + 1}
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-xs text-slate-500 text-center">
                        10回プレイで次回1プレイ＆1ドリンク無料！
                      </p>
                    </div>

                    <button 
                      onClick={handleLogout}
                      className="w-full py-3 border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 mt-4"
                    >
                      <LogOut size={18} />
                      ログアウト
                    </button>
                  </div>
                ) : (
                  // --- LOGIN / SIGNUP VIEW ---
                  <form onSubmit={handleAuthSubmit} className="space-y-5">
                    <div className="bg-haz-primary/10 border border-haz-primary/20 text-haz-primary p-4 rounded-xl text-sm font-bold text-center mb-6 flex items-center justify-center gap-2">
                      <Gift size={18} />
                      10回プレイで1回無料！会員登録でお得に遊ぼう
                    </div>

                    {authMode === 'signup' && (
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">お名前</label>
                        <input type="text" required placeholder="山田 太郎" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-haz-primary focus:ring-1 focus:ring-haz-primary" />
                      </div>
                    )}
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">メールアドレス</label>
                      <input type="email" required placeholder="example@hazbomb.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-haz-primary focus:ring-1 focus:ring-haz-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">パスワード</label>
                      <input type="password" required placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-haz-primary focus:ring-1 focus:ring-haz-primary" />
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-haz-primary hover:bg-haz-primary/90 text-white py-3.5 rounded-xl font-bold transition-colors shadow-md mt-2"
                    >
                      {authMode === 'login' ? 'ログイン' : '登録してスタンプカードを作る'}
                    </button>

                    <div className="text-center mt-4">
                      <button 
                        type="button"
                        onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                        className="text-sm text-slate-500 hover:text-haz-primary font-medium"
                      >
                        {authMode === 'login' ? 'アカウントをお持ちでない方はこちら' : 'すでにアカウントをお持ちの方はこちら'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
