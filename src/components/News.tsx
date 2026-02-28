import React, { useState, useEffect } from 'react';

const News = () => {
  const [status, setStatus] = useState<'loading' | 'success' | 'fallback'>('loading');
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Fetching from Netlify Function
        const res = await fetch('/.netlify/functions/getNews');
        
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await res.json();
        
        if (data.success && data.data && data.data.length > 0) {
          setNews(data.data);
          setStatus('success');
        } else {
          setStatus('fallback');
        }
      } catch (error) {
        console.error("Failed to fetch news:", error);
        setStatus('fallback');
      }
    };

    fetchNews();
  }, []);

  if (status === 'loading') {
    return (
      <section id="news" className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="animate-pulse space-y-8">
            <div className="h-10 bg-gray-200 w-1/4 rounded mb-12"></div>
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-28 bg-white shadow-sm rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (status === 'fallback') {
    return (
      <section id="news" className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="relative overflow-hidden rounded-sm bg-[#0A369D] text-white p-12 md:p-24 shadow-2xl">
            {/* Glassmorphism background effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px]"></div>
              <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-black/20 rounded-full blur-[80px]"></div>
              <div className="absolute inset-0 backdrop-blur-[2px] bg-white/[0.02]"></div>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-white/60 uppercase">
                GLOBAL VISION & CULTURAL EXCHANGE
              </span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight max-w-3xl">
                推动数字时代下，中欧足球文化贸易与产业交流
              </h2>
              <p className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
                北京算力足球俱乐部致力于融合现代足球管理理念。依托对欧洲五大联赛顶级球会的实地研学与数据剖析，我们正以新青年视角，重塑本土体育文化生态，搭建连接世界的桥梁。
              </p>
              <div className="pt-8">
                <button className="px-10 py-4 border border-white/30 hover:bg-white hover:text-[#0A369D] transition-all duration-500 tracking-widest uppercase text-sm font-medium rounded-sm">
                  Explore Our Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-[#1A1A1A] tracking-tight">新闻中心</h2>
            <p className="text-[#0A369D] font-semibold text-sm tracking-widest uppercase mt-2">Global News</p>
          </div>
        </div>
        <div className="space-y-6">
          {news.map((item, idx) => (
            <a 
              key={idx} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block group bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#0A369D]/20"
            >
              <div className="flex flex-col space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] group-hover:text-[#0A369D] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center space-x-4 text-xs font-semibold text-[#888888] uppercase tracking-wider">
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                  <span className="w-1 h-1 rounded-full bg-[#CCCCCC]"></span>
                  <span>{item.source}</span>
                </div>
                <p className="text-[#555555] font-light leading-relaxed line-clamp-2 mt-2">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
