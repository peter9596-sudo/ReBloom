
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                ReBloom
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              우리는 버려지는 식물들에 새로운 생명을 불어넣습니다. 
              기업의 폐기 비용을 줄이고 소상공인의 원가 절감을 돕는 가치 있는 연결을 만듭니다.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold text-slate-900 mb-6">서비스</h5>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-emerald-600">판매 가이드</a></li>
              <li><a href="#" className="hover:text-emerald-600">구매 가이드</a></li>
              <li><a href="#" className="hover:text-emerald-600">AI 가치분석</a></li>
              <li><a href="#" className="hover:text-emerald-600">수거 서비스</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-slate-900 mb-6">회사</h5>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-emerald-600">회사 소개</a></li>
              <li><a href="#" className="hover:text-emerald-600">이용 약관</a></li>
              <li><a href="#" className="hover:text-emerald-600">개인정보 처리방침</a></li>
              <li><a href="#" className="hover:text-emerald-600">채용</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-slate-900 mb-6">고객 지원</h5>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-emerald-600">자주 묻는 질문</a></li>
              <li><a href="#" className="hover:text-emerald-600">1:1 문의</a></li>
              <li><a href="#" className="hover:text-emerald-600">제휴 제안</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© 2025 ReBloom Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-emerald-600 transition">Instagram</a>
            <a href="#" className="text-slate-400 hover:text-emerald-600 transition">Blog</a>
            <a href="#" className="text-slate-400 hover:text-emerald-600 transition">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
