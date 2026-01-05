
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-800 rounded-lg flex items-center justify-center shadow-inner">
              <span className="text-white font-bold">R</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-lime-700">
              ReBloom
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-green-800 transition">서비스 가치</a>
            <a href="#sell" className="text-sm font-medium text-slate-600 hover:text-green-800 transition">AI 가치평가</a>
            <a href="#marketplace" className="text-sm font-medium text-slate-600 hover:text-green-800 transition">플랜트 마켓</a>
            <button className="bg-green-800 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-900 transition shadow-lg shadow-green-100">
              로그인 / 가입
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
