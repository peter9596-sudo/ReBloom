
import React from 'react';

const MarketplacePreview: React.FC = () => {
  const items = [
    {
      id: '1',
      name: '대형 극락조 (토분 포함/상태 최상)',
      location: '강남구 도곡동',
      price: 85000,
      image: 'https://images.unsplash.com/photo-1620127252536-03bdfcf6d5c3?auto=format&fit=crop&q=80&w=400&h=400',
      time: '12분 전'
    },
    {
      id: '2',
      name: '몬스테라 델리시오사 (수형 잡힌 대형)',
      location: '서초구 방배동',
      price: 120000,
      image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=400&h=400',
      time: '1시간 전'
    },
    {
      id: '3',
      name: '희귀종 알보 몬스테라 삽수',
      location: '송파구 위례동',
      price: 250000,
      image: 'https://images.unsplash.com/photo-1637967886160-fd78df3ef3f5?auto=format&fit=crop&q=80&w=400&h=400',
      time: '2시간 전'
    },
    {
      id: '4',
      name: '여인초 대형 (거실 인테리어용)',
      location: '성동구 성수동',
      price: 95000,
      image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&q=80&w=400&h=400',
      time: '어제'
    }
  ];

  return (
    <section id="marketplace" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-4 text-center md:text-left">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">프리미엄 식물 마켓</h2>
            <p className="text-slate-500 text-lg">전문가가 검수한 건강한 대형 관엽 식물들을 만나보세요.</p>
          </div>
          <button className="bg-slate-100 text-slate-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-green-800 hover:text-white transition group">
            전체 매물 보기
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="aspect-square rounded-[32px] overflow-hidden mb-6 relative shadow-lg shadow-slate-100">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[12px] font-bold text-green-900 shadow-sm border border-green-50">
                  📍 {item.location}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
              <h4 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-green-800 transition truncate">{item.name}</h4>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-black text-green-900">{item.price.toLocaleString()}원</span>
                <span className="text-sm text-slate-400 font-medium">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;
