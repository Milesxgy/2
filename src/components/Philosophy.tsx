import { motion } from 'motion/react';
import { Hexagon, Globe, Zap, Shield } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-obsidian relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-tech-blue/5 to-transparent pointer-events-none" />
      <div className="absolute top-40 left-10 w-64 h-64 bg-tech-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-sm font-mono text-tech-blue uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <Hexagon className="w-4 h-4" /> Our Philosophy
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-8">
              <span className="text-gradient">European Heritage,</span>
              <br />
              <span className="text-gradient-blue">Beijing Spirit.</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 font-light tracking-wide leading-relaxed">
              <p>
                We are not just building a football club; we are engineering a movement. By integrating the advanced management models of top European clubs with the relentless drive of Beijing's new youth, we are setting a new standard for Chinese football.
              </p>
              <p>
                Our approach is driven by data, powered by technology, and executed with precision. We believe in the "Computing Power" of our team—where every pass, every run, and every decision is optimized for success.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center border border-tech-blue/30">
                  <Globe className="w-6 h-6 text-tech-blue" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-white">Global Standard</h4>
                <p className="text-xs text-gray-500 font-mono">Benchmarking against the world's elite.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center border border-tech-blue/30">
                  <Zap className="w-6 h-6 text-tech-blue" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-white">Data Driven</h4>
                <p className="text-xs text-gray-500 font-mono">Analytics powering every decision.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center border border-tech-blue/30">
                  <Shield className="w-6 h-6 text-tech-blue" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-white">Youth Focus</h4>
                <p className="text-xs text-gray-500 font-mono">Developing the next generation.</p>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="w-full md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10"
            >
              <img
                src="https://picsum.photos/seed/philosophy/800/1000?blur=1"
                alt="Philosophy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
              
              {/* Overlay Tech Element */}
              <div className="absolute bottom-10 left-10 right-10 p-6 glass-card rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-tech-blue uppercase tracking-widest">System Status</span>
                  <span className="w-2 h-2 rounded-full bg-tech-blue animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-tech-blue"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase">
                    <span>Integration</span>
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
