
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              당신의 공간을 <br />
              <span className="text-green-700">초록빛 가치</span>로 <br />
              다시 연결합니다.
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              사무실 개업 선물로 받은 대형 몬스테라, 처리가 고민인 극락조 화분. 
              이제 버리지 말고 전문 플랜트 샵에 제안하세요. 
              AI가 가치를 측정하고 집 앞까지 수거를 도와드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-4 bg-green-800 text-white rounded-2xl font-bold text-lg hover:bg-green-900 transition shadow-2xl shadow-green-200 transform hover:-translate-y-1">
                지금 판매 제안하기
              </button>
              <button className="px-10 py-4 bg-white text-green-800 border-2 border-green-800 rounded-2xl font-bold text-lg hover:bg-green-50 transition transform hover:-translate-y-1">
                플랜트 샵 입점 신청
              </button>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/id/${i+30}/100/100`} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="user" />
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                이미 <span className="font-bold text-green-900">2,400개</span> 이상의 식물이 새 주인을 만났습니다.
              </p>
            </div>
          </div>
          
          <div className="relative h-[550px] lg:h-[700px] w-full rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(20,50,20,0.2)] border-[12px] border-white group">
             <iframe 
               src='https://my.spline.design/beeflyingflowerwebheroglbanimation-yi9hJMV0nec0bC8xE7E1aXzy/' 
               frameBorder='0' 
               width='100%' 
               height='100%'
               className="absolute inset-0 bg-green-900" 
             ></iframe>
             <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-green-900/10 to-transparent"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-[-10%] right-[-5%] -z-10 w-[500px] h-[500px] bg-green-200/40 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[5%] left-[-5%] -z-10 w-[400px] h-[400px] bg-lime-100/50 blur-[100px] rounded-full"></div>
    </section>
  );
};

export default Hero;
