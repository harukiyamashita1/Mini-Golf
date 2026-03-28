import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Colors
content = content.replace(/text-white/g, 'text-slate-900');
content = content.replace(/text-gray-400/g, 'text-slate-600');
content = content.replace(/text-gray-300/g, 'text-slate-700');
content = content.replace(/text-gray-500/g, 'text-slate-500');
content = content.replace(/text-gray-600/g, 'text-slate-500');
content = content.replace(/border-white\/10/g, 'border-slate-200');
content = content.replace(/border-white\/5/g, 'border-slate-100');
content = content.replace(/border-white\/20/g, 'border-slate-300');
content = content.replace(/border-white\/30/g, 'border-slate-300');
content = content.replace(/bg-white\/10/g, 'bg-slate-100');
content = content.replace(/bg-white\/5/g, 'bg-slate-50');
content = content.replace(/bg-white\/20/g, 'bg-slate-200');
content = content.replace(/bg-black\/80/g, 'bg-slate-900\/40');
content = content.replace(/bg-gray-800/g, 'bg-slate-100');
content = content.replace(/bg-haz-bg text-slate-900 pb-20/g, 'bg-haz-bg text-slate-900 pb-20');

// Specific text changes
content = content.replace(/Play the <span className="text-gradient-neon">Neon\.<\/span>/g, 'Play under the <span className="text-gradient-neon">Sun.</span>');
content = content.replace(/日常を忘れる、ネオン輝く大人の遊び場。/g, '日常を忘れる、太陽の下の爽快な遊び場。');
content = content.replace(/狂気のネオンコース18ホール/g, '自然と調和した爽快な18ホール');
content = content.replace(/ネオンアート空間/g, '美しい緑の空間');
content = content.replace(/ブラックライトで光る当店シグネチャーカクテル/g, '太陽の下で映える当店シグネチャーカクテル');
content = content.replace(/鏡とネオンが織りなす無限の迷路/g, '水と緑が織りなす自然の迷路');
content = content.replace(/光るパターとボールを受け取り/g, 'パターとボールを受け取り');
content = content.replace(/ブラックライトの錯視を攻略せよ/g, '自然の地形を活かしたコースを攻略せよ');
content = content.replace(/ネオンが可愛くて/g, '景色が綺麗で');
content = content.replace(/ネオンビル/g, 'リゾートビル');

// Images
content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1555448248-2571daf6344b\?auto=format&fit=crop&q=80/g, 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80');
content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1514362545857-3bc16c4c7d1b\?auto=format&fit=crop&q=80/g, 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80');
content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1566737236500-c8ac43014a67\?auto=format&fit=crop&q=80/g, 'https://images.unsplash.com/photo-1622599511051-16f55a1234d0?auto=format&fit=crop&q=80');
content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1554244933-d876deb6b2ff\?auto=format&fit=crop&q=80/g, 'https://images.unsplash.com/photo-1593111774240-d529f12cb416?auto=format&fit=crop&q=80');
content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1550684848-fac1c5b4e853\?auto=format&fit=crop&q=80/g, 'https://images.unsplash.com/photo-1535136104956-8859cb608f51?auto=format&fit=crop&q=80');
content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1511512578047-dfb367046420\?auto=format&fit=crop&q=80/g, 'https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&q=80');
content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1492684223066-81342ee5ff30\?auto=format&fit=crop&q=80/g, 'https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?auto=format&fit=crop&q=80');
content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1574096079513-d8259312b785\?auto=format&fit=crop&q=80/g, 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80');
content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1516450360452-9312f5e86fc7\?auto=format&fit=crop&q=80/g, 'https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&q=80');
content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1556626605-6490d1821884\?auto=format&fit=crop&q=80/g, 'https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80');
content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1556679343-c7306c1976bc\?auto=format&fit=crop&q=80/g, 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80');

// Fix buttons text color
content = content.replace(/text-slate-900 px-6 py-2\.5/g, 'text-white px-6 py-2.5');
content = content.replace(/text-haz-bg px-8 py-4/g, 'text-white px-8 py-4');
content = content.replace(/text-slate-900 rounded-xl font-bold py-3/g, 'text-white rounded-xl font-bold py-3');
content = content.replace(/text-haz-bg hover:bg-haz-cyan\/90/g, 'text-white hover:bg-haz-cyan/90');
content = content.replace(/text-haz-bg border-haz-cyan/g, 'text-white border-haz-cyan');
content = content.replace(/text-haz-bg/g, 'text-white'); // For other instances where haz-bg was used as text color on buttons
content = content.replace(/text-slate-900 font-bold px-3 py-1/g, 'text-white font-bold px-3 py-1'); // Hole tags

// Remove glow classes as they don't fit daytime
content = content.replace(/glow-pink/g, 'shadow-md');
content = content.replace(/glow-cyan/g, 'shadow-md');

fs.writeFileSync('src/App.tsx', content);
