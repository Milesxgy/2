/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MatchCenter from './components/MatchCenter';
import HallOfFame from './components/HallOfFame';
import About from './components/About';
import Squad from './components/Squad';
import TrainingGround from './components/TrainingGround';
import GlobalStrategy from './components/GlobalStrategy';
import Footer from './components/Footer';
import Stories from './components/Stories';

const PLAYERS = [
  { id: 'p1', name: '何老师', position: 'FW', team: 'FIRST' },
  { id: 'p2', name: '李梦龙', position: 'FW', team: 'FIRST' },
  { id: 'p3', name: '吴伟豪', position: 'FW', team: 'FIRST' },
  { id: 'p4', name: 'Henry', position: 'FW', team: 'FIRST' },
  { id: 'p5', name: '解光裕', position: 'MF', team: 'FIRST' },
  { id: 'p6', name: '程浩伦', position: 'MF', team: 'FIRST' },
  { id: 'p7', name: '苏航远', position: 'MF', team: 'FIRST' },
  { id: 'p8', name: '左思远', position: 'MF', team: 'FIRST' },
  { id: 'p9', name: '小麦', position: 'MF', team: 'FIRST' },
  { id: 'p10', name: '史智慧', position: 'DF', team: 'FIRST' },
  { id: 'p11', name: '罗鹏', position: 'DF', team: 'FIRST' },
  { id: 'p12', name: '韩普杰', position: 'DF', team: 'FIRST' },
  { id: 'p13', name: '冯章帅', position: 'DF', team: 'FIRST' },
  { id: 'p14', name: '薛华清', position: 'GK', team: 'FIRST' },
  { id: 'p15', name: '王志远', position: 'GK', team: 'FIRST' },
];

const MATCHES = [
  { id: 'h1', opponent: '大柚足球队', opponentLogo: 'https://api.dicebear.com/9.x/identicon/svg?seed=dayou', date: '2025-12-20', time: '18:00', venue: '聚光灯球场', competition: '友谊赛', isHome: true, score: { home: 6, away: 8 } },
  { id: 'h2', opponent: '玛尔斯 FC', opponentLogo: 'https://api.dicebear.com/9.x/identicon/svg?seed=mars', date: '2024-11-15', time: '14:00', venue: '奥体中心', competition: '经典战役', isHome: true, score: { home: 3, away: 3 } },
  { id: 'h3', opponent: '五四 FC', opponentLogo: 'https://api.dicebear.com/9.x/identicon/svg?seed=wusi', date: '2024-10-20', time: '16:00', venue: '朝阳公园', competition: '经典战役', isHome: true, score: { home: 3, away: 2 } },
  { id: 'h4', opponent: '红色狂飙', opponentLogo: 'https://api.dicebear.com/9.x/identicon/svg?seed=red', date: '2024-09-08', time: '20:00', venue: '大兴足球公园', competition: '经典战役', isHome: true, score: { home: 6, away: 2 } },
];

export default function App() {
  const [view, setView] = useState('HOME');
  const [toast, setToast] = useState({ show: false, msg: '' });

  const handlePlaceholderClick = (e, feature) => {
    e.preventDefault();
    setToast({ show: true, msg: `[ 系统消息 ]：${feature} 功能正在同步，预计进度 64%...` });
    setTimeout(() => setToast({ show: false, msg: '' }), 3000);
  };

  if (view === 'STORIES') {
    return <Stories onBack={() => setView('HOME')} />;
  }

  return (
    <div className="min-h-screen bg-[#010409] text-white selection:bg-[#00A3E0]/30 selection:text-white font-inter">
      <Navbar onPlaceholderClick={handlePlaceholderClick} onOpenStories={() => setView('STORIES')} />
      
      {toast.show && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-10 fade-in duration-500 w-[90vw] max-w-md">
          <div className="bg-[#00A3E0]/10 border border-[#00A3E0]/40 backdrop-blur-2xl px-6 py-3 rounded-sm flex items-center space-x-4 shadow-[0_0_30px_rgba(0,163,224,0.3)]">
            <div className="relative shrink-0">
              <div className="w-2 h-2 bg-[#00A3E0] rounded-full" />
              <div className="absolute inset-0 bg-[#00A3E0] rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-[#00A3E0] font-mono text-xs tracking-widest uppercase font-bold truncate">
              {toast.msg}
            </span>
          </div>
        </div>
      )}

      <Hero onOpenStories={() => setView('STORIES')} />
      <MatchCenter matches={MATCHES} onPlaceholderClick={handlePlaceholderClick} />
      <HallOfFame />
      <About />
      <Squad players={PLAYERS} />
      <TrainingGround />
      <GlobalStrategy onPlaceholderClick={handlePlaceholderClick} />
      <Footer onPlaceholderClick={handlePlaceholderClick} />
    </div>
  );
}
