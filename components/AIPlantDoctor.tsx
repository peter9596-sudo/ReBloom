
import React, { useState, useRef } from 'react';
import { analyzePlantImage } from '../services/geminiService';

const AIPlantDoctor: React.FC = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setAnalyzing(true);
    setResult(null);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = (reader.result as string).split(',')[1];
      try {
        const analysis = await analyzePlantImage(base64);
        setResult(analysis);
      } catch (error) {
        console.error("AI Analysis failed", error);
        alert("분석 중 오류가 발생했습니다. 다시 시도해주세요.");
      } finally {
        setAnalyzing(false);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section id="sell" className="py-24 bg-green-950 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              식물의 <span className="text-lime-400">숨겨진 가치</span>를 <br />
              AI로 즉시 판별하세요.
            </h2>
            <p className="text-green-100/70 mb-10 text-xl leading-relaxed">
              극락조의 수형이나 몬스테라의 무늬 상태를 사진 한 장으로 분석합니다. 
              시세 데이터를 바탕으로 전문 플랜트 샵에 제안할 최적의 가격을 알려드립니다.
            </p>
          </div>

          <div className="bg-white rounded-[48px] p-10 text-slate-900 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] border-[12px] border-green-900/30">
            {!result ? (
              <div className="flex flex-col items-center justify-center py-16 border-2 border-dashed border-green-100 rounded-[32px] bg-green-50/30 group hover:bg-green-50 transition duration-500">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl mb-8 group-hover:scale-110 transition duration-500">
                  🌿
                </div>
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  disabled={analyzing}
                  className="bg-green-800 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-green-900 transition-all disabled:opacity-50 shadow-xl shadow-green-200"
                >
                  {analyzing ? "AI 감정 중..." : "식물 사진 업로드"}
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleFileChange} 
                />
                <p className="mt-6 text-sm text-green-700 font-bold">몬스테라, 극락조 등 관엽 식물 환영</p>
              </div>
            ) : (
              <div className="animate-in fade-in zoom-in-95 duration-500">
                <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-100">
                  <div>
                    <h4 className="text-3xl font-black text-green-900">{result.name}</h4>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-lime-100 text-green-800 text-sm font-bold rounded-full mt-2">
                      상태 등급: {result.condition}
                    </span>
                  </div>
                  <button 
                    onClick={() => setResult(null)}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-500 transition"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="bg-green-50/50 p-8 rounded-3xl mb-8 border border-green-100">
                  <p className="text-sm text-green-800/60 uppercase font-black tracking-widest mb-2">예상 매매 가치</p>
                  <p className="text-4xl font-black text-green-900">{result.recommendedPriceRange}</p>
                </div>

                <div className="mb-10 bg-slate-50 p-6 rounded-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">💡</span>
                    <p className="font-bold text-slate-800">전문가 관리 조언</p>
                  </div>
                  <p className="text-slate-600 leading-relaxed italic">
                    "{result.advice}"
                  </p>
                </div>

                <button className="w-full bg-green-800 text-white py-5 rounded-[24px] font-black text-xl hover:bg-green-900 transition-all shadow-xl shadow-green-100 transform hover:scale-[1.02]">
                  판매 등록하고 견적 받기
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-lime-400/10 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default AIPlantDoctor;
