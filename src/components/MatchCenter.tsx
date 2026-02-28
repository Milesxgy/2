import React from 'react';
import { motion } from 'framer-motion';

const MatchCenter = ({ matches, onPlaceholderClick }) => {
  const upcomingMatches = matches
    .filter(m => !m.score)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  const pastMatches = matches
    .filter(m => m.score)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section id="matches" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-2 block">
              Fixtures & Results
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 font-montserrat uppercase tracking-tight">
              赛程<span className="text-slate-300">与</span>战绩
            </h2>
          </motion.div>
          <div className="flex space-x-4">
            <button 
              onClick={(e) => onPlaceholderClick(e, '完整赛程表')}
              className="px-6 py-2 border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-600 text-xs font-bold uppercase tracking-widest transition-all rounded-full"
            >
              查看完整赛程表
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upcoming Matches */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest border-l-2 border-blue-600 pl-4">
              近期赛事 / UPCOMING
            </h3>
            <div className="space-y-4">
              {upcomingMatches.map((match, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={match.id}
                  className="group relative bg-white border border-slate-200 p-8 transition-all hover:shadow-lg hover:shadow-blue-900/5 hover:border-blue-200 overflow-hidden rounded-2xl"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 translate-x-16 -translate-y-16 rotate-45 group-hover:bg-blue-100 transition-all" />
                  
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <div className="text-center md:text-left">
                      <p className="text-blue-600 font-mono text-[10px] uppercase font-bold tracking-widest mb-1">
                        {match.competition}
                      </p>
                      <p className="text-slate-900 font-black text-xl italic uppercase tracking-tighter">
                        {match.date}
                      </p>
                      <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider">
                        {match.venue} · {match.time}
                      </p>
                    </div>

                    <div className="flex items-center space-x-6 md:space-x-12">
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-sky-400 rounded-2xl flex items-center justify-center shadow-md">
                          <span className="text-white font-black text-xl font-montserrat">SL</span>
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-700">Suanli FC</p>
                      </div>

                      <div className="text-2xl font-black italic text-slate-200">VS</div>

                      <div className="text-center space-y-2">
                        <img
                          src={match.opponentLogo}
                          alt={match.opponent}
                          className="w-16 h-16 bg-slate-50 rounded-2xl border border-slate-200 p-2"
                          crossOrigin="anonymous"
                        />
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-700">
                          {match.opponent}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              {upcomingMatches.length === 0 && (
                <div className="p-8 border border-slate-200 border-dashed rounded-2xl text-center text-slate-500 text-sm">
                  暂无近期赛事安排
                </div>
              )}
            </div>
          </div>

          {/* Past Results */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest border-l-2 border-slate-300 pl-4">
              过往战绩 / RESULTS
            </h3>
            <div className="space-y-4">
              {pastMatches.map((match, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={match.id}
                  className="bg-slate-50 border border-slate-200 p-6 flex items-center justify-between rounded-xl hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="text-left">
                    <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">
                      {match.competition}
                    </p>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="text-xs font-bold uppercase text-slate-700">SL</span>
                    <div className="px-4 py-1 bg-white border border-slate-200 text-xl font-black italic text-slate-900 rounded-lg shadow-sm">
                      {match.score?.home} - {match.score?.away}
                    </div>
                    <span className="text-xs font-bold uppercase truncate max-w-[80px] text-slate-700">
                      {match.opponent}
                    </span>
                  </div>
                  <button 
                    onClick={(e) => onPlaceholderClick(e, '比赛报告')}
                    className="text-[10px] font-bold text-blue-600 uppercase tracking-widest hover:underline"
                  >
                    报告
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchCenter;
