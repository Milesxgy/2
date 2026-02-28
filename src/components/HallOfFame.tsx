import React from 'react';

const HallOfFame = () => {
  const honors = [
    { id: 'h1', year: '2025', title: '北京原点邀请赛亚军', description: '作为算力驱动的先行者，在年度核心赛事中凭借极致的数据分析与团队协作夺得亚军。' },
  ];

  return (
    <section className="py-32 bg-black border-y border-white/5">
      <div className="container mx-auto px-12">
        <h3 className="text-center text-[#00A3E0] font-mono text-[10px] font-black tracking-[0.8em] uppercase mb-12">
          Hall of Fame / 荣誉殿堂
        </h3>
        <div className="flex flex-wrap justify-center gap-12">
          {honors.map(honor => (
            <div key={honor.id} className="flex flex-col items-center space-y-4 max-w-[200px] text-center group">
              <div className="w-32 h-32 bg-[#00A3E0]/5 rounded-sm flex items-center justify-center border border-white/5 group-hover:border-[#00A3E0]/30 transition-all transform group-hover:scale-110">
                <svg className="w-16 h-16 text-[#00A3E0]/40 group-hover:text-[#00A3E0] transition-all" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-black text-sm italic uppercase">{honor.title}</p>
                <p className="text-slate-600 text-[9px] font-bold uppercase tracking-widest mt-1">{honor.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HallOfFame;
