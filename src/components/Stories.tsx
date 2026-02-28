import React, { useEffect } from 'react';

const Stories = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const storiesData = [
    {
      id: 's1',
      year: '1990s',
      title: '起源：黄土场与野草墩子',
      subtitle: 'THE RAW ORIGIN',
      content: '算力俱乐部的愿景起源于上世纪90年代。那时的足球小将们在带有野草墩子的黄土场、水泥篮球场，肆意挥洒着青春与热爱。没有专业草皮，没有战术分析，只有纯粹的奔跑。这份从“泥土”中生长出的坚韧，是算力精神的底色。',
      image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1000&auto=format&fit=crop',
      align: 'left',
    },
    {
      id: 's2',
      year: 'FOUNDING',
      title: '初心：算力小分队',
      subtitle: 'THE SQUAD',
      content: '俱乐部前身为业余足球爱好者组建的“算力小分队”。创始团队从1990s时期开始接触足球，打下了超过600名业余球员（长期活跃在北京各球场）的成员基础。我们不仅是一支球队，更是一个连接北京业余足球的庞大网络。',
      image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1000&auto=format&fit=crop',
      align: 'right',
    },
    {
      id: 's3',
      year: 'CULTURE',
      title: '文化：奋斗与智慧',
      subtitle: 'STRUGGLE & WISDOM',
      content: '算力俱乐部的核心文化是“奋斗与智慧”。在职业化转型的道路上，我们既保留草根足球的拼搏血性（奋斗），又引入前沿的数据科技（智慧）。从北京到世界，从线下到云端，我们用算力重新定义热爱。',
      image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1000&auto=format&fit=crop',
      align: 'left',
    },
  ];

  return (
    <div className="min-h-screen bg-[#010409] text-white relative overflow-x-hidden font-inter animate-in fade-in duration-700">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00A3E0]/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 blur-[150px] rounded-full opacity-30" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center bg-gradient-to-b from-[#010409] to-transparent">
        <div className="flex items-center space-x-3 group cursor-pointer" onClick={onBack}>
          <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
          <span className="text-xs font-black uppercase tracking-[0.2em] group-hover:tracking-[0.4em] transition-all">
            Back to HQ
          </span>
        </div>
        <div className="hidden md:block">
          <span className="text-[#00A3E0] font-mono text-[10px] font-bold tracking-[0.4em] uppercase">
            Club Archives /// 历史档案
          </span>
        </div>
      </div>

      <div className="relative z-10 pt-32 pb-32 container mx-auto px-6 md:px-24 max-w-7xl">
        <div className="mb-32 text-center md:text-left reveal">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase leading-[0.85] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
            传奇<br />
            <span className="text-stroke-white text-transparent">编年史</span>
          </h1>
          <p className="text-[#00A3E0] font-mono text-sm tracking-[0.6em] uppercase border-l-2 border-[#00A3E0] pl-6 ml-2 max-w-2xl leading-relaxed">
            从1990年代的野草黄土场，到2025年的算力中枢。<br />
            我们不仅是球队，更是链接北京业余足球的神经网络。
          </p>
        </div>

        <div className="space-y-48 relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00A3E0]/30 to-transparent hidden md:block" />
          {storiesData.map((story, index) => (
            <div
              key={story.id}
              className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center group ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2 relative perspective-1000">
                <div className="relative aspect-[4/3] bg-[#0a111f] border border-white/10 p-2 transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-1">
                  <div className="absolute inset-0 bg-[#00A3E0]/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={story.image}
                    alt={story.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute -top-6 -right-6 bg-[#00A3E0] text-black px-6 py-4 font-black text-xl italic shadow-[10px_10px_0px_rgba(255,255,255,0.1)]">
                    {story.year}
                  </div>
                  {story.subtitle === 'THE SQUAD' && (
                    <div className="absolute bottom-0 left-0 w-full bg-black/80 py-2 px-4 text-center">
                      <span className="text-[10px] text-white uppercase tracking-widest">
                        Founding Members Team Photo
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div
                  className={`absolute top-8 ${
                    index % 2 === 0 ? '-left-16' : '-right-16'
                  } text-[120px] font-black text-white/[0.03] italic pointer-events-none hidden md:block select-none`}
                >
                  0{index + 1}
                </div>
                <div className="space-y-6 relative z-10 bg-[#010409]/80 backdrop-blur-sm p-4 rounded-xl border-l border-white/10">
                  <div className="flex items-center space-x-4">
                    <span className="h-px w-12 bg-[#00A3E0]" />
                    <span className="text-[#00A3E0] font-mono text-xs font-bold tracking-[0.3em] uppercase">
                      {story.subtitle}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-white leading-none">
                    {story.title}
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed font-light text-justify">
                    {story.content}
                  </p>
                  <div className="pt-6 flex flex-wrap gap-3">
                    {['1990s', 'Heritage', 'Beijing'].map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white hover:border-[#00A3E0] transition-colors cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-48 text-center space-y-8 border-t border-white/10 pt-24">
          <p className="text-slate-500 text-sm font-mono tracking-[0.4em] uppercase">
            Join the legacy
          </p>
          <h3 className="text-4xl md:text-6xl font-black italic uppercase text-white">
            从黄土场<br />
            <span className="text-[#00A3E0]">到未来</span>
          </h3>
          <button
            onClick={onBack}
            className="mt-8 px-12 py-4 bg-white text-black hover:bg-[#00A3E0] font-black uppercase text-xs tracking-[0.3em] transition-all duration-300"
          >
            回到主页
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stories;
