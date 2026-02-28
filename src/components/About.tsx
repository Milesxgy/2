import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-40 bg-[#00050a] relative overflow-hidden border-y border-white/5">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#00A3E0]/5 skew-x-[-15deg]" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[#00A3E0] font-mono text-xs tracking-[0.4em] uppercase font-bold">
                The Suanli Origin
              </span>
              <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase leading-[0.9]">
                初心与<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                  文化内核
                </span>
              </h2>
            </div>
            <div className="space-y-8 text-slate-400 font-light leading-relaxed text-lg">
              <p>
                <strong className="text-white">1990s：</strong> 愿景起源。那时的足球小将们在带有野草墩子的黄土场、水泥篮球场，肆意挥洒着青春与热爱。
              </p>
              <p>
                <strong className="text-white">算力小分队：</strong> 俱乐部前身为业余足球爱好者组建的“算力小分队”，打下了超过600名业余球员的基石，长期活跃在北京各大球场。
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div className="space-y-2">
                  <p className="text-3xl font-black text-white italic">600+</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#00A3E0] font-black">活跃成员</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-black text-white italic">1990s</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#00A3E0] font-black">历史积淀</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-[#00A3E0]/20 rounded-sm transform rotate-3 scale-95 border border-[#00A3E0]/40" />
            <img
              src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
              alt="Suanli History"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-px bg-white/10 rotate-45 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
