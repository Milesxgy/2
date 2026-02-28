import React from 'react';

const TrainingGround = () => {
  const facilityData = [
    { name: '中国矿业大学', desc: '核心战术演练与体能储备基地', img: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=1000&auto=format&fit=crop' },
    { name: '航星园球场', desc: '日常分组对抗与技术特训中心', img: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1000&auto=format&fit=crop' },
    { name: '四季曙光球场', desc: '赛前适应性训练与青训梯队场地', img: 'https://images.unsplash.com/photo-1518605368461-1ee7e1617641?q=80&w=1000&auto=format&fit=crop' },
  ];

  return (
    <section id="training" className="py-20 md:py-32 bg-[#010409] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#00A3E0]/[0.02] skew-x-[-15deg] pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-[#00A3E0] font-mono text-xs tracking-[0.4em] uppercase font-bold">
              Training Bases
            </span>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.8] mt-4">
              训练<span className="text-[#00A3E0]">基地</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {facilityData.map((item, index) => (
            <div key={index} className="group relative aspect-[4/3] overflow-hidden border border-white/10 rounded-sm">
              <img
                src={item.img}
                alt={item.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1000&auto=format&fit=crop';
                }}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010409] via-[#010409]/50 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-8 h-1 bg-[#00A3E0] mb-4" />
                <h3 className="text-2xl font-black uppercase italic text-white mb-2">{item.name}</h3>
                <p className="text-sm text-slate-400 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingGround;
