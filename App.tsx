
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIPlantDoctor from './components/AIPlantDoctor';
import MarketplacePreview from './components/MarketplacePreview';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <AIPlantDoctor />
        <MarketplacePreview />
        
        <section className="py-32 bg-green-900 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 leading-tight">
              버려지는 식물 없이, <br />
              <span className="text-lime-400">모두가 초록빛</span>으로 행복한 세상
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-green-900 px-12 py-5 rounded-3xl font-black text-xl hover:bg-lime-50 transition shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)]">
                무료 판매 등록
              </button>
              <button className="bg-transparent text-white border-2 border-white/30 px-12 py-5 rounded-3xl font-black text-xl hover:bg-white/10 transition backdrop-blur-sm">
                입점 파트너 문의
              </button>
            </div>
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10"></div>
          <div className="absolute -top-48 -left-48 w-96 h-96 bg-lime-500 rounded-full opacity-20 blur-[100px]"></div>
          <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-green-400 rounded-full opacity-20 blur-[100px]"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
