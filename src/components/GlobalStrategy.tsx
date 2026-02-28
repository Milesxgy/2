import React, { useState } from 'react';

const GlobalStrategy = ({ onPlaceholderClick }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onPlaceholderClick) {
      onPlaceholderClick(e, '商务合作表单');
    } else {
      setFormStatus('submitting');
      setTimeout(() => setFormStatus('success'), 1500);
    }
  };

  const fallbackImg = 'https://images.unsplash.com/photo-1574629810360-7efbb1925536?q=80&w=1000&auto=format&fit=crop';

  const pillars = [
    {
      id: '01',
      title: '企业出海与体育营销',
      en: 'Brand Globalization',
      desc: '依托俱乐部丰富的国际资源与赛事平台，为中国企业提供定制化的体育营销方案。通过足球这一世界第一运动的杠杆效应，助力中国品牌提升海外知名度，赋能出口与商业增长。',
      img: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: '02',
      title: '国际友谊赛与邀请赛',
      en: 'International Friendlies',
      desc: '策划并承办高规格的国际足球赛事。为球队提供与海外顶级球队实战交锋的机会，打造高水平的竞技交流平台。',
      img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: '03',
      title: '足球文化与研学交流',
      en: 'Cultural Exchange & Academy',
      desc: '深入对接欧洲五大联赛的先进足球理念与管理模式。开展球员联合培养、教练员进修以及深度的足球文化产业交流，构建中外体育文化贸易的桥梁。',
      img: 'https://images.unsplash.com/photo-1431324155629-1a6d0a11f472?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="global" className="bg-white text-[#333333] font-sans">
      {/* Hero Banner with Parallax */}
      <div className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000&auto=format&fit=crop)' }}
        />
        {/* Mobile optimized background overlay */}
        <div className="absolute inset-0 bg-[#0A369D]/80 mix-blend-multiply md:bg-[#0A369D]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010409]/80 via-[#010409]/40 to-transparent md:from-black/40" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Global Partnerships <br className="hidden md:block" />
            <span className="text-2xl md:text-4xl font-light mt-4 block">链接世界，共塑未来</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
            以足球为媒介，推动国际文化交流，助力企业品牌走向全球。
          </p>
        </div>
      </div>

      {/* Business Pillars */}
      <div className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {pillars.map((pillar) => (
              <div key={pillar.id} className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 p-8 md:p-10 border-t-4 border-transparent hover:border-[#0A369D] flex flex-col justify-center min-h-[240px]">
                <p className="text-[#0A369D] font-semibold text-sm tracking-widest uppercase mb-2">{pillar.en}</p>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{pillar.title}</h3>
                <p className="text-[#555555] leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* B2B Contact Form */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">开启全球合作</h3>
            <p className="text-[#555555] font-light">请填写下方表单，我们的商务团队将在24小时内与您取得联系。</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#333333] uppercase tracking-wider">企业名称 / Company</label>
                <input required type="text" className="w-full border-b border-[#CCCCCC] py-3 bg-transparent focus:outline-none focus:border-[#0A369D] transition-colors rounded-none" placeholder="请输入企业名称" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#333333] uppercase tracking-wider">联系人 / Contact Person</label>
                <input required type="text" className="w-full border-b border-[#CCCCCC] py-3 bg-transparent focus:outline-none focus:border-[#0A369D] transition-colors rounded-none" placeholder="您的姓名" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#333333] uppercase tracking-wider">电子邮箱 / Email</label>
                <input required type="email" className="w-full border-b border-[#CCCCCC] py-3 bg-transparent focus:outline-none focus:border-[#0A369D] transition-colors rounded-none" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#333333] uppercase tracking-wider">合作意向 / Intent</label>
                <select required className="w-full border-b border-[#CCCCCC] py-3 bg-transparent focus:outline-none focus:border-[#0A369D] transition-colors rounded-none text-[#333333]">
                  <option value="">请选择合作类别...</option>
                  <option value="marketing">企业出海与体育营销</option>
                  <option value="friendlies">国际友谊赛与邀请赛</option>
                  <option value="academy">足球文化与研学交流</option>
                  <option value="other">其他商务合作</option>
                </select>
              </div>
            </div>

            <div className="pt-8 text-center">
              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className="inline-block px-12 py-4 border-2 border-[#0A369D] text-[#0A369D] hover:bg-[#0A369D] hover:text-white font-semibold uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'idle' ? 'Initiate Collaboration' : formStatus === 'submitting' ? 'Submitting...' : 'Submitted Successfully'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GlobalStrategy;
