import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Clock, 
  GlassWater, 
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
  Flag
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('今日');
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [partySize, setPartySize] = useState(2);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-haz-bg text-white pb-20 md:pb-0">
      {/* Navbar */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-haz-bg/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-display font-bold text-2xl tracking-tighter">
            HAZ<span className="text-haz-pink">BOMB</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#concept" className="hover:text-haz-cyan transition-colors">コンセプト</a>
            <a href="#how-to" className="hover:text-haz-cyan transition-colors">遊び方</a>
            <a href="#course" className="hover:text-haz-cyan transition-colors">コース</a>
            <a href="#pricing" className="hover:text-haz-cyan transition-colors">料金</a>
            <a href="#access" className="hover:text-haz-cyan transition-colors">アクセス</a>
            
            <button 
              onClick={() => setIsAuthModalOpen(true)} 
              className="flex items-center gap-2 hover:text-haz-cyan transition-colors"
            >
              <User size={18} /> {isLoggedIn ? 'マイページ' : 'ログイン / 登録'}
            </button>

            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-haz-pink hover:bg-haz-pink/80 text-white px-6 py-2.5 rounded-full font-bold transition-all glow-pink"
            >
              WEB予約
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-haz-bg/95 backdrop-blur-xl pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-6 text-xl font-bold">
            <a href="#concept" onClick={() => setIsMobileMenuOpen(false)}>コンセプト</a>
            <a href="#how-to" onClick={() => setIsMobileMenuOpen(false)}>遊び方</a>
            <a href="#course" onClick={() => setIsMobileMenuOpen(false)}>コース</a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>料金</a>
            <a href="#access" onClick={() => setIsMobileMenuOpen(false)}>アクセス</a>
            <div className="h-px bg-white/10 my-2"></div>
            <button 
              onClick={() => { setIsMobileMenuOpen(false); setIsAuthModalOpen(true); }}
              className="flex items-center gap-3 text-haz-cyan text-left"
            >
              <User size={24} /> {isLoggedIn ? 'マイページ' : 'ログイン / 無料会員登録'}
            </button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555448248-2571daf6344b?auto=format&fit=crop&q=80" 
            alt="Neon nightlife" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-haz-bg/40 via-transparent to-haz-bg"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-4"
          >
            Play the <span className="text-gradient-neon">Neon.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium mb-8 text-gray-300"
          >
            日常を忘れる、ネオン輝く大人の遊び場。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-haz-cyan hover:bg-haz-cyan/80 text-haz-bg px-8 py-4 rounded-full font-bold text-lg transition-all glow-cyan flex items-center justify-center gap-2"
            >
              空き状況を見る <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">NOT YOUR AVERAGE GOLF.</h2>
            <p className="text-haz-pink font-bold text-xl">パターゴルフの常識を覆す。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-haz-surface p-8 rounded-3xl border border-white/5 flex flex-col"
            >
              <div className="h-40 w-full rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-haz-pink/20 mix-blend-overlay z-10"></div>
                <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" alt="Cocktails" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-haz-pink/20 rounded-xl flex items-center justify-center text-haz-pink shrink-0">
                  <GlassWater size={24} />
                </div>
                <h3 className="text-2xl font-bold">Drink & Play</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                お酒を片手にプレイ可能。オリジナルカクテルやクラフトビールと共に、新感覚のデートや飲み会を。
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-haz-surface p-8 rounded-3xl border border-white/5 flex flex-col"
            >
              <div className="h-40 w-full rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-haz-cyan/20 mix-blend-overlay z-10"></div>
                <img src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80" alt="Neon Golf" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-haz-cyan/20 rounded-xl flex items-center justify-center text-haz-cyan shrink-0">
                  <Camera size={24} />
                </div>
                <h3 className="text-2xl font-bold">Insane Photo Spots</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                全9ホールが異なるネオンアート空間。どこを切り取ってもSNS映えする、非日常の没入体験。
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-haz-surface p-8 rounded-3xl border border-white/5 flex flex-col"
            >
              <div className="h-40 w-full rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-haz-yellow/20 mix-blend-overlay z-10"></div>
                <img src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?auto=format&fit=crop&q=80" alt="Golf Clubs" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-haz-yellow/20 rounded-xl flex items-center justify-center text-haz-yellow shrink-0">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-2xl font-bold">Empty-handed OK</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                クラブもボールも全て無料レンタル。ゴルフウェアも不要。いつもの服装で、手ぶらでふらっと立ち寄れます。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Play (3 Steps) */}
      <section id="how-to" className="py-24 px-6 bg-haz-surface/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">HOW TO PLAY</h2>
            <p className="text-gray-400">初めての方へ。遊び方はとても簡単です。</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-haz-pink to-haz-cyan -translate-y-1/2 z-0 opacity-30"></div>
            
            {[
              { step: '01', title: 'WEBで予約', desc: '待ち時間なしでスムーズに入店。当日予約も可能です。' },
              { step: '02', title: 'バーでドリンクを', desc: 'まずはカウンターでお好きなお酒をオーダー。' },
              { step: '03', title: 'プレイスタート！', desc: '光るパターとボールを受け取り、コースへGO！' }
            ].map((item, i) => (
              <div key={i} className="flex-1 relative z-10">
                <div className="bg-haz-bg border border-white/10 p-8 rounded-3xl text-center h-full">
                  <div className="font-display text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Map Section */}
      <section id="course" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">18 HOLES COURSE</h2>
            <p className="text-gray-400">初心者から上級者まで楽しめる、狂気のネオンコース18ホール</p>
          </div>

          {/* 18 Holes Grid */}
          <div className="grid grid-cols-6 md:grid-cols-9 gap-3 md:gap-6 mb-16 max-w-4xl mx-auto">
            {[...Array(18)].map((_, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.1 }}
                className={`aspect-square rounded-full border-2 flex items-center justify-center font-display font-bold text-lg md:text-xl cursor-pointer transition-all ${
                  [4, 11, 17].includes(i) 
                    ? 'border-haz-pink text-haz-pink bg-haz-pink/10 glow-pink' 
                    : 'border-haz-cyan/30 text-haz-cyan hover:bg-haz-cyan hover:text-haz-bg hover:border-haz-cyan'
                }`}
              >
                {i + 1}
              </motion.div>
            ))}
          </div>

          {/* Signature Holes */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { hole: 5, name: "The Blackhole", desc: "吸い込まれるような錯覚に陥る難関ホール。ブラックライトの錯視を攻略せよ。", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80" },
              { hole: 12, name: "Neon Maze", desc: "鏡とネオンが織りなす無限の迷路。ボールの軌道が予測不能なトリッキーなコース。", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80" },
              { hole: 18, name: "Hazbomb Final", desc: "最後のギミックをクリアしてホールインワンを狙え！成功すると特別な演出が...？", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80" }
            ].map((item, i) => (
              <div key={i} className="bg-haz-surface rounded-3xl overflow-hidden border border-white/10 group">
                <div className="h-48 w-full relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-haz-pink text-white font-bold px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Flag size={14} /> HOLE {item.hole}
                  </div>
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-haz-surface to-transparent"></div>
                </div>
                <div className="p-6 relative -mt-12">
                  <h3 className="font-bold text-xl mb-2 text-white">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Snapshot */}
      <section id="pricing" className="py-24 px-6 bg-haz-surface/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">PRICING</h2>
            <p className="text-gray-400">明朗会計。すべて税込価格です。</p>
          </div>

          <div className="bg-haz-surface rounded-3xl overflow-hidden border border-white/10">
            <div className="p-8 border-b border-white/10 bg-gradient-to-r from-haz-pink/10 to-transparent">
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-2xl font-bold">1 Play (9 Holes) + 1 Drink</h3>
                <div className="text-right">
                  <span className="text-sm text-gray-400 block">大人1名様</span>
                  <span className="text-4xl font-display font-bold">¥2,500<span className="text-lg font-sans font-normal text-gray-400"> (税込)</span></span>
                </div>
              </div>
              <p className="text-haz-pink text-sm font-medium">※クラブ・ボールのレンタル料込み</p>
            </div>
            
            <div className="p-8 grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-4 flex items-center gap-2 text-gray-300">
                  <Info size={18} /> その他の料金
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">学生 (要学生証)</span>
                    <span>¥2,000</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">追加 1プレイ</span>
                    <span>¥1,000</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">追加 ドリンク</span>
                    <span>¥600〜</span>
                  </li>
                </ul>
              </div>
              <div className="bg-haz-bg p-6 rounded-2xl border border-white/5 flex flex-col justify-center items-center text-center">
                <h4 className="font-bold mb-2">貸切・パーティー</h4>
                <p className="text-xs text-gray-400 mb-4">2次会や企業イベントに。飲み放題付きプランもご用意しております。</p>
                <button className="text-haz-cyan text-sm font-bold flex items-center gap-1 hover:underline">
                  詳細を見る <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Membership Banner */}
            <div className="p-6 border-t border-white/10 bg-gradient-to-r from-haz-pink/10 to-haz-cyan/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-haz-pink flex items-center gap-2 mb-1"><Gift size={18}/> メンバーシップ特典</h4>
                <p className="text-sm text-gray-300">無料会員登録でデジタルスタンプカードを発行。10回プレイすると<span className="text-white font-bold">次回1プレイ＆1ドリンクが無料</span>になります！</p>
              </div>
              <button 
                onClick={() => { setAuthMode('signup'); setIsAuthModalOpen(true); }} 
                className="shrink-0 bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full text-sm font-bold transition-colors"
              >
                無料で登録する
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-4xl font-bold mb-2">GALLERY</h2>
              <p className="text-gray-400">#Hazbomb で最高の夜を</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-haz-pink hover:text-haz-pink/80 font-bold transition-colors">
              <Instagram size={20} /> Instagramを見る
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80" alt="Neon Golf" className="w-full h-64 object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80" alt="Friends having fun" className="w-full h-64 object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80" alt="Party" className="w-full h-64 object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1556626605-6490d1821884?auto=format&fit=crop&q=80" alt="Neon sign" className="w-full h-64 object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-300" referrerPolicy="no-referrer" />
          </div>
          <button className="md:hidden mt-8 w-full flex items-center justify-center gap-2 text-haz-pink border border-haz-pink/30 rounded-xl py-3 font-bold">
            <Instagram size={20} /> Instagramを見る
          </button>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">CAFE & BAR</h2>
            <p className="text-gray-400">プレイを彩るオリジナルメニュー</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Neon Citrus Highball", price: "¥800", desc: "ブラックライトで光る当店シグネチャーカクテル。", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80" },
              { name: "Hazbomb Burger", price: "¥1,200", desc: "竹炭バンズを使用したボリューム満点の黒バーガー。", img: "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80" },
              { name: "Galaxy Macarons", price: "¥600", desc: "宇宙をイメージした3色のマカロンセット。", img: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80" }
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-haz-surface rounded-3xl overflow-hidden border border-white/10">
                <div className="h-48 w-full relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <span className="text-haz-cyan font-bold">{item.price}</span>
                  </div>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="text-haz-pink font-bold hover:underline flex items-center justify-center gap-1 mx-auto">
              <Utensils size={18} /> フード・ドリンクメニューをもっと見る
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-haz-surface/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">FAQ</h2>
            <p className="text-gray-400">よくあるご質問</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "ゴルフ未経験でも楽しめますか？", a: "はい、もちろんです！本格的なゴルフというよりは、エンターテインメント性を重視したコース設計になっています。初めての方でも盛り上がれる仕掛けがたくさんあります。" },
              { q: "服装に指定はありますか？", a: "ドレスコードはございません。ヒールやスカートなど、いつものお出かけの服装でそのままプレイしていただけます。" },
              { q: "予約なしでも入れますか？", a: "空きがあればご案内可能ですが、週末や夜間は混雑が予想されます。確実に入場いただくため、事前のWEB予約を強くおすすめしております。" },
              { q: "子供も入場できますか？", a: "18:00まではお子様（保護者同伴）もご入場いただけます。18:00以降は20歳未満の方のご入場をお断りしております。" }
            ].map((faq, i) => (
              <div key={i} className="bg-haz-bg border border-white/10 rounded-2xl overflow-hidden">
                <button 
                  className="w-full px-6 py-5 flex justify-between items-center text-left font-bold"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <ChevronDown className={`transition-transform ${openFaq === i ? 'rotate-180 text-haz-pink' : 'text-gray-500'}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">REVIEWS</h2>
            <p className="text-gray-400">お客様の声</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "@kana_tokyo", text: "デートで利用しました！ネオンが可愛くて写真がたくさん撮れました。お酒も美味しくて最高です！", rating: 5 },
              { name: "@golf_boy", text: "手ぶらで行けるのが良い。コースも意外と難しくて白熱しました笑。また友達と来ます。", rating: 5 },
              { name: "@takuya_99", text: "会社の飲み会の2次会で貸切利用。スタッフのノリも良くて大盛り上がりでした！コスパも◎", rating: 4 }
            ].map((review, i) => (
              <div key={i} className="bg-haz-surface p-8 rounded-3xl border border-white/5 relative">
                <div className="flex gap-1 text-haz-yellow mb-4">
                  {[...Array(review.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">
                    {review.name.charAt(1).toUpperCase()}
                  </div>
                  <span className="text-sm font-bold text-gray-400">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access / Location */}
      <section id="access" className="py-24 px-6 bg-haz-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">ACCESS</h2>
            <p className="text-gray-400">麻布十番駅から徒歩5分。雨の日でも安心です。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-haz-surface rounded-3xl overflow-hidden border border-white/10">
            <div className="h-[300px] md:h-auto bg-gray-800 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747309536033!2d139.733045315258!3d35.65345698020088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b7762635955%3A0x62804f58c4228c2e!2s1-ch%C5%8Dme-1%20Minamiazabu%2C%20Minato%20City%2C%20Tokyo%20106-0047%2C%20Japan!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
                className="absolute inset-0 w-full h-full grayscale invert opacity-80"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-display font-bold mb-6">HAZBOMB AZABU</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-haz-cyan shrink-0" />
                  <div>
                    <p className="font-medium">〒106-0047</p>
                    <p className="text-gray-300">東京都港区南麻布１丁目XX-XX<br/>ネオンビル B1F</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Train className="text-haz-cyan shrink-0" />
                  <div>
                    <p className="font-medium">電車でお越しの方</p>
                    <p className="text-gray-300">東京メトロ南北線・都営大江戸線<br/>「麻布十番駅」1番出口より徒歩5分</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-haz-cyan shrink-0" />
                  <div>
                    <p className="font-medium">営業時間</p>
                    <p className="text-gray-300">平日: 15:00 - 23:30<br/>土日祝: 11:00 - 23:30</p>
                    <p className="text-xs text-haz-pink mt-1">※最終入店 22:30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-haz-bg pt-20 pb-32 md:pb-10 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2">
            <div className="font-display font-bold text-3xl tracking-tighter mb-4">
              HAZ<span className="text-haz-pink">BOMB</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              日常を忘れる、ネオン輝く大人の遊び場。お酒を片手に新感覚のパターゴルフをお楽しみください。
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">MENU</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#concept" className="hover:text-white transition-colors">コンセプト</a></li>
              <li><a href="#how-to" className="hover:text-white transition-colors">遊び方</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">料金・メニュー</a></li>
              <li><a href="#access" className="hover:text-white transition-colors">アクセス</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">よくあるご質問</a></li>
              <li><a href="#" className="hover:text-white transition-colors">貸切・パーティー</a></li>
              <li><a href="#" className="hover:text-white transition-colors">運営会社</a></li>
              <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center text-xs text-gray-600 pt-8 border-t border-white/10">
          &copy; {new Date().getFullYear()} HAZBOMB. All rights reserved.
        </div>
      </footer>

      {/* Mobile Sticky Bottom CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-haz-surface/95 backdrop-blur-lg border-t border-white/10 p-4 z-50 flex gap-3">
        <button className="flex-1 bg-[#06C755] hover:bg-[#05b34c] text-white rounded-xl font-bold py-3 flex items-center justify-center gap-2 transition-colors">
          <MessageCircle size={20} />
          <span className="text-sm">LINEで質問</span>
        </button>
        <button 
          onClick={() => setIsBookingModalOpen(true)}
          className="flex-[1.5] bg-haz-pink hover:bg-haz-pink/90 text-white rounded-xl font-bold py-3 flex items-center justify-center gap-2 transition-colors glow-pink"
        >
          <span className="text-sm">WEB予約</span>
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Auth / My Page Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsAuthModalOpen(false)}
          ></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-md bg-haz-surface border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-haz-bg">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <User className="text-haz-cyan" size={24} />
                {isLoggedIn ? 'マイページ' : (authMode === 'login' ? 'ログイン' : '無料会員登録')}
              </h3>
              <button 
                onClick={() => setIsAuthModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              {isLoggedIn ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-gray-400 mb-4">ようこそ、<span className="text-white font-bold">ゲスト</span>様</p>
                    <div className="bg-gradient-to-br from-haz-pink/10 to-haz-cyan/10 p-6 rounded-2xl border border-white/10 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-haz-pink to-haz-cyan"></div>
                      <h4 className="font-bold text-lg mb-4 flex items-center justify-center gap-2">
                        <Gift className="text-haz-pink" /> デジタルスタンプカード
                      </h4>
                      <div className="grid grid-cols-5 gap-3 mb-6">
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <div key={num} className={`aspect-square rounded-full flex items-center justify-center text-sm font-bold border-2 ${num <= 7 ? 'bg-haz-cyan text-haz-bg border-haz-cyan glow-cyan' : 'border-white/20 text-gray-600'}`}>
                            {num <= 7 ? <Check size={16} /> : num}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm font-bold text-haz-cyan bg-haz-cyan/10 py-2 rounded-lg">あと3回で1プレイ＆1ドリンク無料！</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsLoggedIn(false)} 
                    className="w-full py-3 rounded-xl border border-white/10 text-gray-400 hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                  >
                    <LogOut size={18} /> ログアウト
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-haz-pink/10 border border-haz-pink/30 p-4 rounded-xl mb-6 text-center">
                    <p className="text-haz-pink font-bold text-sm mb-1">＼ 会員限定のお得な特典 ／</p>
                    <p className="text-white text-sm">10回プレイで<span className="text-haz-yellow font-bold text-base">次回1プレイ＆1ドリンク無料！</span></p>
                  </div>
                  
                  {authMode === 'signup' && (
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-300">お名前</label>
                      <input type="text" placeholder="山田 太郎" className="w-full bg-haz-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-haz-cyan transition-colors" />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-300">メールアドレス</label>
                    <input type="email" placeholder="example@hazbomb.com" className="w-full bg-haz-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-haz-cyan transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-300">パスワード</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-haz-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-haz-cyan transition-colors" />
                  </div>
                  
                  <button 
                    onClick={() => setIsLoggedIn(true)} 
                    className="w-full py-4 mt-4 rounded-xl font-bold transition-all bg-haz-cyan text-haz-bg hover:bg-haz-cyan/90 glow-cyan"
                  >
                    {authMode === 'login' ? 'ログインする' : '無料で登録する'}
                  </button>
                  
                  <div className="text-center mt-4">
                    <button 
                      onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')} 
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {authMode === 'login' ? '新規登録はこちら' : 'すでにアカウントをお持ちの方はこちら'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Booking / Availability Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => { setIsBookingModalOpen(false); setBookingStep(1); }}
          ></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-lg bg-haz-surface border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-haz-bg">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Calendar className="text-haz-cyan" size={24} />
                {bookingStep === 1 ? '空き状況・予約' : bookingStep === 2 ? 'お客様情報の入力' : '予約完了'}
              </h3>
              <button 
                onClick={() => { setIsBookingModalOpen(false); setBookingStep(1); }}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              {bookingStep === 1 && (
                <>
                  <p className="text-sm text-gray-400 mb-6">
                    ご希望の日時と人数を選択してください。
                    <span className="block mt-1">〇：空きあり　△：残りわずか　×：満席</span>
                  </p>

                  {/* Party Size */}
                  <div className="mb-6">
                    <label className="block text-sm font-bold mb-3 flex items-center gap-2"><Users size={16} className="text-haz-pink"/> 利用人数</label>
                    <div className="flex gap-3">
                      {[1, 2, 3, 4, '5+'].map((num) => (
                        <button
                          key={num}
                          onClick={() => setPartySize(num as number)}
                          className={`flex-1 py-2 rounded-xl border font-bold transition-all ${
                            partySize === num
                              ? 'border-haz-pink bg-haz-pink/20 text-white'
                              : 'border-white/10 bg-haz-bg text-gray-400 hover:border-white/30'
                          }`}
                        >
                          {num}名
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date Selector */}
                  <div className="mb-6">
                    <label className="block text-sm font-bold mb-3">日付</label>
                    <div className="flex gap-3 overflow-x-auto pb-2 snap-x scrollbar-hide">
                      {['今日', '明日', '10/26', '10/27', '10/28'].map((day, i) => (
                        <button 
                          key={i}
                          onClick={() => { setSelectedDate(day); setSelectedTime(null); }}
                          className={`shrink-0 snap-center w-20 py-3 rounded-2xl border ${
                            selectedDate === day 
                              ? 'border-haz-cyan bg-haz-cyan/10 text-haz-cyan' 
                              : 'border-white/10 bg-haz-bg text-gray-400 hover:border-white/30'
                          } flex flex-col items-center justify-center gap-1 transition-colors`}
                        >
                          <span className="text-xs font-bold">{day}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-sm font-bold mb-3">時間</label>
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { time: '15:00', status: '〇' },
                        { time: '16:00', status: '〇' },
                        { time: '17:00', status: '△' },
                        { time: '18:00', status: '×' },
                        { time: '19:00', status: '×' },
                        { time: '20:00', status: '△' },
                        { time: '21:00', status: '〇' },
                        { time: '22:00', status: '〇' },
                      ].map((slot, i) => {
                        const isFull = slot.status === '×' || (selectedDate === '明日' && i % 2 === 0);
                        const status = isFull ? '×' : slot.status;
                        const isSelected = selectedTime === slot.time;

                        return (
                          <button 
                            key={i}
                            disabled={isFull}
                            onClick={() => setSelectedTime(slot.time)}
                            className={`py-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                              isFull
                                ? 'border-white/5 bg-white/5 text-gray-600 cursor-not-allowed' 
                                : isSelected
                                ? 'border-haz-pink bg-haz-pink/20 text-white shadow-[0_0_15px_rgba(255,0,255,0.4)]'
                                : status === '△'
                                ? 'border-haz-yellow/30 bg-haz-yellow/5 text-haz-yellow hover:bg-haz-yellow/20'
                                : 'border-haz-cyan/30 bg-haz-cyan/5 text-haz-cyan hover:bg-haz-cyan/20'
                            }`}
                          >
                            <span className="text-sm font-bold">{slot.time}</span>
                            <span className="text-lg leading-none">{status}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {bookingStep === 2 && (
                <div className="space-y-4">
                  <div className="bg-haz-bg p-4 rounded-xl border border-white/5 mb-6">
                    <p className="text-sm text-gray-400 mb-1">予約内容</p>
                    <p className="font-bold text-lg">{selectedDate} {selectedTime} 〜 ({partySize}名)</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-300">お名前</label>
                    <input type="text" placeholder="山田 太郎" className="w-full bg-haz-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-haz-cyan transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-300">メールアドレス</label>
                    <input type="email" placeholder="example@hazbomb.com" className="w-full bg-haz-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-haz-cyan transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-300">電話番号</label>
                    <input type="tel" placeholder="090-XXXX-XXXX" className="w-full bg-haz-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-haz-cyan transition-colors" />
                  </div>
                </div>
              )}

              {bookingStep === 3 && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-haz-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6 text-haz-cyan glow-cyan">
                    <Check size={40} />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">予約が完了しました！</h4>
                  <p className="text-gray-400 mb-6">
                    ご入力いただいたメールアドレスに<br/>予約完了メールを送信しました。
                  </p>
                  <div className="bg-haz-bg p-4 rounded-xl border border-white/5 inline-block text-left">
                    <p className="text-sm text-gray-400 mb-1">予約番号: <span className="text-white font-mono">HZB-{Math.floor(Math.random() * 10000)}</span></p>
                    <p className="font-bold">{selectedDate} {selectedTime} ({partySize}名)</p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-white/10 bg-haz-bg flex gap-3">
              {bookingStep === 2 && (
                <button 
                  onClick={() => setBookingStep(1)}
                  className="px-6 py-4 rounded-xl font-bold transition-all bg-gray-800 text-white hover:bg-gray-700"
                >
                  戻る
                </button>
              )}
              
              {bookingStep === 1 ? (
                <button 
                  disabled={!selectedTime}
                  onClick={() => setBookingStep(2)}
                  className={`flex-1 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                    selectedTime 
                      ? 'bg-haz-pink text-white hover:bg-haz-pink/90 glow-pink' 
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {selectedTime ? `次へ進む` : '時間を選択してください'}
                </button>
              ) : bookingStep === 2 ? (
                <button 
                  onClick={() => setBookingStep(3)}
                  className="flex-1 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 bg-haz-cyan text-haz-bg hover:bg-haz-cyan/90 glow-cyan"
                >
                  予約を確定する
                </button>
              ) : (
                <button 
                  onClick={() => { setIsBookingModalOpen(false); setBookingStep(1); }}
                  className="w-full py-4 rounded-xl font-bold transition-all bg-haz-pink text-white hover:bg-haz-pink/90 glow-pink"
                >
                  閉じる
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
