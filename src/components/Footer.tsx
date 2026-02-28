import React from 'react';

const Footer = ({ onPlaceholderClick }) => {
  const links = [
    { title: 'Club', items: ['About Us', 'History', 'Staff', 'Careers'] },
    { title: 'Team', items: ['First Team', 'Academy', 'Fixtures', 'Stats Lab'] },
    { title: 'Fan Zone', items: ['Official Store', 'Membership', 'Tickets', 'Community'] },
    { title: 'Legal', items: ['Privacy Policy', 'Terms of Use', 'Cookie Settings', 'Contact'] },
  ];

  return (
    <footer className="bg-[#010409] pt-32 pb-12 border-t border-white/5 font-inter text-slate-400">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="bg-[#00A3E0] w-12 h-12 flex items-center justify-center rounded-sm">
                <span className="text-black font-orbitron font-black text-2xl">SL</span>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-white font-black text-2xl tracking-tighter uppercase italic">
                  SUANLI FC
                </span>
                <span className="text-[10px] text-[#00A3E0] font-black tracking-[0.4em] uppercase opacity-90">
                  算力足球俱乐部
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-slate-500">
              始于1990s的足球热血，奔赴AI时代的不朽传奇。
              <br />
              北京算力足球俱乐部，以数据定义竞技之美，打造中国领先的科技驱动型草根足球俱乐部。
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00A3E0] transition-colors">
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black tracking-widest text-[#00A3E0] mb-1">
                    Headquarters
                  </span>
                  <span className="text-xs text-white">北京市朝阳区静安里中街小红楼</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
            {links.map(section => (
              <div key={section.title} className="space-y-6">
                <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] border-l-2 border-[#00A3E0] pl-3">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.items.map(link => (
                    <li key={link}>
                      <a
                        href="#"
                        onClick={(e) => onPlaceholderClick(e, link)}
                        className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-wide block hover:translate-x-1 transform duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <span className="text-[10px] text-slate-600 font-black uppercase tracking-[0.2em]">
              © 2025 BEIJING SUANLI FC.
            </span>
            <div className="flex space-x-6">
              {['WeChat', 'Douyin', 'Weibo', 'BiliBili'].map(social => (
                <a
                  key={social}
                  href="#"
                  onClick={(e) => onPlaceholderClick(e, social)}
                  className="text-slate-600 hover:text-[#00A3E0] text-[10px] font-black uppercase tracking-widest transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white/[0.02] border border-white/5 px-4 py-2 rounded-full">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </div>
            <span className="text-[9px] text-slate-500 font-mono font-bold uppercase tracking-widest">
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
