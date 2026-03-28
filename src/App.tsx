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
  Info
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <a href="#pricing" className="hover:text-haz-cyan transition-colors">料金</a>
            <a href="#access" className="hover:text-haz-cyan transition-colors">アクセス</a>
            <button className="bg-haz-pink hover:bg-haz-pink/80 text-white px-6 py-2.5 rounded-full font-bold transition-all glow-pink">
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
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>料金</a>
            <a href="#access" onClick={() => setIsMobileMenuOpen(false)}>アクセス</a>
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
            <button className="bg-haz-cyan hover:bg-haz-cyan/80 text-haz-bg px-8 py-4 rounded-full font-bold text-lg transition-all glow-cyan flex items-center justify-center gap-2">
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
              className="bg-haz-surface p-8 rounded-3xl border border-white/5"
            >
              <div className="w-14 h-14 bg-haz-pink/20 rounded-2xl flex items-center justify-center mb-6 text-haz-pink">
                <GlassWater size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Drink & Play</h3>
              <p className="text-gray-400 leading-relaxed">
                お酒を片手にプレイ可能。オリジナルカクテルやクラフトビールと共に、新感覚のデートや飲み会を。
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-haz-surface p-8 rounded-3xl border border-white/5"
            >
              <div className="w-14 h-14 bg-haz-cyan/20 rounded-2xl flex items-center justify-center mb-6 text-haz-cyan">
                <Camera size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Insane Photo Spots</h3>
              <p className="text-gray-400 leading-relaxed">
                全9ホールが異なるネオンアート空間。どこを切り取ってもSNS映えする、非日常の没入体験。
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-haz-surface p-8 rounded-3xl border border-white/5"
            >
              <div className="w-14 h-14 bg-haz-yellow/20 rounded-2xl flex items-center justify-center mb-6 text-haz-yellow">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Empty-handed OK</h3>
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

      {/* Pricing Snapshot */}
      <section id="pricing" className="py-24 px-6">
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
          </div>
        </div>
      </section>

      {/* Access / Location */}
      <section id="access" className="py-24 px-6 bg-haz-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">ACCESS</h2>
            <p className="text-gray-400">渋谷駅から徒歩3分。雨の日でも安心です。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-haz-surface rounded-3xl overflow-hidden border border-white/10">
            <div className="h-[300px] md:h-auto bg-gray-800 relative">
              {/* Placeholder for Google Map */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 flex-col gap-2">
                <MapPin size={48} className="text-haz-pink opacity-50" />
                <span>Google Map Embed</span>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-display font-bold mb-6">HAZBOMB SHIBUYA</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-haz-cyan shrink-0" />
                  <div>
                    <p className="font-medium">〒150-0042</p>
                    <p className="text-gray-300">東京都渋谷区宇田川町XX-XX<br/>ネオンビル B1F</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Train className="text-haz-cyan shrink-0" />
                  <div>
                    <p className="font-medium">電車でお越しの方</p>
                    <p className="text-gray-300">JR渋谷駅「A2出口」より徒歩3分</p>
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
        <button className="flex-[1.5] bg-haz-pink hover:bg-haz-pink/90 text-white rounded-xl font-bold py-3 flex items-center justify-center gap-2 transition-colors glow-pink">
          <span className="text-sm">WEB予約</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
