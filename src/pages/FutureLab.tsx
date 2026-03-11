import React from 'react';
import { Cpu, Zap, Globe, Sparkles, ArrowLeft } from 'lucide-react';

const Section = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`relative py-16 lg:py-32 px-4 md:px-12 lg:px-24 overflow-hidden ${className}`}>
    {children}
  </section>
);

const FutureLab = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <Section id="future-lab" className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
            alt="Space" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-emerald-500 font-mono text-xs md:text-sm uppercase mb-6 lg:mb-8">
                // قسم البحث والتطوير
              </h2>
              <h3 className="text-5xl md:text-6xl lg:text-8xl font-display font-medium uppercase leading-[0.85] mb-8 lg:mb-12">
                مختبر فيورا<br />للمستقبل
              </h3>
              <p className="text-xl md:text-2xl font-light text-white/60 leading-relaxed mb-8 lg:mb-12">
                نبحث باستمرار في مستقبل الفعاليات — تكامل الذكاء الاصطناعي، التقنيات الغامرة، البيئات التفاعلية، والتصميم العاطفي.
              </p>
              <button className="flex items-center gap-4 group">
                <span className="text-[14px] uppercase font-bold">استكشاف التقنيات</span>
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowLeft size={18} />
                </div>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white/5 rounded-sm p-6 lg:p-8 flex flex-col justify-between border border-white/10 hover:border-emerald-500 transition-colors">
                <Cpu className="text-emerald-500" size={28} />
                <span className="text-base lg:text-lg uppercase font-medium">توليف الذكاء الاصطناعي</span>
              </div>
              <div className="aspect-square bg-white/5 rounded-sm p-6 lg:p-8 flex flex-col justify-between border border-white/10 hover:border-emerald-500 transition-colors mt-8 lg:mt-12">
                <Zap className="text-emerald-500" size={28} />
                <span className="text-base lg:text-lg uppercase font-medium">رسم الخرائط العصبية</span>
              </div>
              <div className="aspect-square bg-white/5 rounded-sm p-6 lg:p-8 flex flex-col justify-between border border-white/10 hover:border-emerald-500 transition-colors -mt-8 lg:-mt-12">
                <Globe className="text-emerald-500" size={28} />
                <span className="text-base lg:text-lg uppercase font-medium">التصوير المجسم</span>
              </div>
              <div className="aspect-square bg-white/5 rounded-sm p-6 lg:p-8 flex flex-col justify-between border border-white/10 hover:border-emerald-500 transition-colors">
                <Sparkles className="text-emerald-500" size={28} />
                <span className="text-base lg:text-lg uppercase font-medium">الارتجاع البيولوجي</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FutureLab;
