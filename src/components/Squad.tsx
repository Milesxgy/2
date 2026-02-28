import React, { useState, useEffect } from 'react';

const PlayerCard = ({ player }) => {
  const [imgError, setImgError] = useState(false);
  const [isUpdating, setIsUpdating] = useState(!player.photo);

  useEffect(() => {
    if (player.photo) {
      setIsUpdating(false);
      return;
    }
    
    // Simulate AI update
    const timer = setTimeout(() => {
      setIsUpdating(false);
    }, 1000 + Math.random() * 2000);
    
    return () => clearTimeout(timer);
  }, [player]);

  return (
    <div className="group relative bg-[#0a111f] border border-white/[0.03] hover:border-[#00A3E0]/40 transition-all duration-500 overflow-hidden h-full">
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00A3E0]/50 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00A3E0]/50 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00A3E0]/50 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00A3E0]/50 opacity-0 group-hover:opacity-100 transition-opacity z-10" />

      <div className="aspect-[3/4] overflow-hidden grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 relative bg-[#010409]">
        <img
          src={player.photo || `https://api.dicebear.com/9.x/identicon/svg?seed=${player.name}&backgroundColor=0a111f&rowColor=00A3E0`}
          alt={player.name}
          loading="lazy"
          crossOrigin="anonymous"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            const fallback = `https://api.dicebear.com/9.x/identicon/svg?seed=${player.name}&backgroundColor=0a111f&rowColor=00A3E0`;
            if (target.src !== fallback) {
              target.src = fallback;
            }
          }}
          className={`w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000 ease-out ${isUpdating ? 'opacity-50 blur-sm' : 'opacity-100'}`}
        />
        {isUpdating && (
          <div className="absolute top-2 right-2 flex items-center space-x-1 bg-black/50 px-2 py-1 rounded backdrop-blur-sm pointer-events-none z-10">
            <div className="w-1.5 h-1.5 bg-[#00A3E0] rounded-full animate-pulse" />
            <span className="text-[8px] text-[#00A3E0] font-mono">SYNCING</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#010409] via-[#010409]/40 to-transparent opacity-90 pointer-events-none" />
        {/* Scanning Line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00A3E0]/20 to-transparent h-1/4 w-full animate-scan-slow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10" />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 lg:p-8 space-y-1 md:space-y-2 pointer-events-none z-20">
        <div className="flex items-center space-x-2">
          <div className="w-1 h-3 bg-[#00A3E0] group-hover:w-4 transition-all" />
          <span className="text-[8px] md:text-[9px] font-black text-[#00A3E0] uppercase tracking-[0.4em]">
            {player.position}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tighter uppercase italic group-hover:translate-x-2 transition-transform duration-500">
          {player.name}
        </h3>
      </div>
      {/* Breathing Border */}
      <div className="absolute inset-0 border border-[#00A3E0]/0 group-hover:border-[#00A3E0]/20 group-hover:animate-pulse transition-all duration-700 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[1px] h-0 bg-[#00A3E0]/40 group-hover:h-full transition-all duration-700" />
    </div>
  );
};

const Squad = ({ players }) => {
  const [activeTeam, setActiveTeam] = useState('FIRST');
  const positions = ['GK', 'DF', 'MF', 'FW'];
  const posLabels = {
    GK: '守门员 / GK',
    DF: '后卫 / DEF',
    MF: '中场 / MID',
    FW: '前锋 / FWD',
  };

  const teams = [
    { id: 'FIRST', label: '一队 (VIP)', desc: '精英 / 商务' },
    { id: 'SECOND', label: '二队 (职业)', desc: '开发中' },
    { id: 'THIRD', label: '三队 (草根)', desc: '社群 / 基石' },
  ];

  return (
    <section id="squad" className="py-20 md:py-40 bg-black overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-24 gap-8 md:gap-12">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black italic tracking-tighter uppercase leading-[0.8]">
              <span className="block text-white">梯队</span>
              <span className="block text-[#00A3E0]">架构</span>
            </h2>
            <p className="text-[#00A3E0] font-mono text-xs md:text-sm tracking-[0.2em] md:tracking-[0.4em] uppercase font-bold mt-4">
              PROFESSIONAL SQUAD SYSTEM
            </p>
          </div>
          
          {/* Mobile Scrollable Tabs */}
          <div className="w-full lg:w-auto -mx-6 px-6 lg:mx-0 lg:px-0 overflow-x-auto snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex bg-white/5 p-1 border border-white/10 rounded-sm min-w-max">
              {teams.map(t => (
                <button
                  key={t.id}
                  onClick={() => setActiveTeam(t.id)}
                  className={`px-6 md:px-8 py-3 md:py-4 flex flex-col items-center min-w-[120px] md:min-w-[140px] snap-center transition-all duration-300 rounded-sm ${
                    activeTeam === t.id
                      ? 'bg-[#00A3E0] text-black shadow-[0_0_20px_rgba(0,163,224,0.3)]'
                      : 'text-slate-500 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-xs font-black tracking-[0.2em] uppercase">{t.label}</span>
                  <span
                    className={`text-[8px] uppercase tracking-widest mt-1 ${
                      activeTeam === t.id ? 'text-black/60' : 'text-slate-600'
                    }`}
                  >
                    {t.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="transition-all duration-1000 min-h-[600px]">
          {activeTeam === 'SECOND' || activeTeam === 'THIRD' ? (
            <div className="py-32 flex flex-col items-center justify-center text-center border border-white/5 bg-[#00A3E0]/[0.02]">
              <div className="w-24 h-24 mb-8 text-[#00A3E0] animate-pulse">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-4xl font-black uppercase italic text-white mb-4 tracking-tighter">
                {activeTeam === 'SECOND' ? '职业化构建中' : '社群基石构建中'}
              </h3>
              <p className="text-slate-500 font-mono tracking-widest uppercase text-xs opacity-60 font-black italic mt-2">
                {activeTeam === 'SECOND' ? '// PRO ASSET DEPLOYMENT IN PROGRESS...' : '// COMMUNITY ASSET DEPLOYMENT IN PROGRESS...'}
              </p>
            </div>
          ) : (
            <div className="space-y-32 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              {[...positions].reverse().map(pos => {
                const posPlayers = players.filter(p => p.team === activeTeam && p.position === pos);
                if (posPlayers.length === 0) return null;
                return (
                  <div key={pos} className="space-y-12">
                    <div className="flex items-center space-x-6">
                      <span className="text-[10px] font-black text-[#00A3E0] uppercase tracking-[0.6em] whitespace-nowrap">
                        {posLabels[pos]}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 border border-white/5">
                      {posPlayers.map(p => (
                        <div key={p.id} className="bg-black">
                          <PlayerCard player={p} />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Squad;
