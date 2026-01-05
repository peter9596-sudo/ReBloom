
import React from 'react';

const Features: React.FC = () => {
  const steps = [
    {
      title: "간편한 사진 촬영",
      desc: "남은 화환의 사진 한 장이면 충분합니다.",
      icon: "📸"
    },
    {
      title: "AI 가치 산정",
      desc: "꽃의 신선도와 화분 상태를 분석해 최적가를 제안합니다.",
      icon: "🤖"
    },
    {
      title: "지역 꽃집 매칭",
      desc: "가장 가까운 거리의 꽃집 사장님이 수거를 제안합니다.",
      icon: "🤝"
    },
    {
      title: "지구 보호",
      desc: "폐기 비용은 줄이고 식물의 수명은 연장하세요.",
      icon: "🌍"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-bold text-slate-900">꽃의 두 번째 삶을 위한 리블룸 프로세스</h3>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-50 hover:bg-green-50 border border-transparent hover:border-green-100 transition duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6 group-hover:scale-110 transition">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
