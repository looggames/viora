import React from 'react';
import { Sparkles, Globe, Layers, ShieldCheck, Zap } from 'lucide-react';

const Section = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`relative py-16 lg:py-32 px-4 md:px-12 lg:px-24 overflow-hidden ${className}`}>
    {children}
  </section>
);

const Expertise = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <Section id="expertise">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-24 gap-8">
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-display font-medium uppercase">خبراتنا</h2>
            <p className="max-w-xs text-white/40 text-xs md:text-sm uppercase leading-loose">
              فريقنا متعدد التخصصات يمزج بين التكنولوجيا وعلم النفس والهندسة المعمارية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 text-right">
            <div className="md:col-span-2 lg:col-span-3 p-8 lg:p-12 bg-white/5 border border-white/10 rounded-sm hover:bg-emerald-500 hover:text-black transition-all duration-500 group">
              <Sparkles className="mb-6 lg:mb-8 group-hover:text-black" size={32} />
              <h4 className="text-2xl md:text-4xl font-display font-medium uppercase mb-4">تصميم الفعاليات التجريبية</h4>
              <p className="text-white/50 group-hover:text-black/70 text-sm md:text-base">تحويل المساحات إلى روايات حية تتفاعل مع جميع الحواس.</p>
            </div>
            <div className="md:col-span-2 lg:col-span-3 p-8 lg:p-12 bg-white/5 border border-white/10 rounded-sm hover:bg-white hover:text-black transition-all duration-500 group">
              <Globe className="mb-6 lg:mb-8 group-hover:text-black" size={32} />
              <h4 className="text-2xl md:text-4xl font-display font-medium uppercase mb-4">المنتديات العالمية</h4>
              <p className="text-white/50 group-hover:text-black/70 text-sm md:text-base">بيئات عالية المخاطر للمحادثات التي تشكل العالم والقمم الاستراتيجية.</p>
            </div>
            <div className="md:col-span-2 p-8 lg:p-12 bg-white/5 border border-white/10 rounded-sm hover:border-emerald-500 transition-all group">
              <Layers className="mb-6 lg:mb-8 text-emerald-500" size={28} />
              <h4 className="text-xl md:text-2xl font-display font-medium uppercase mb-4">تجارب خاصة فاخرة</h4>
              <p className="text-white/40 text-xs md:text-sm">لحظات حميمة ومصممة خصيصاً للقلة الذين يطلبون الكمال المطلق.</p>
            </div>
            <div className="md:col-span-2 p-8 lg:p-12 bg-white/5 border border-white/10 rounded-sm hover:border-emerald-500 transition-all group">
              <ShieldCheck className="mb-6 lg:mb-8 text-emerald-500" size={28} />
              <h4 className="text-xl md:text-2xl font-display font-medium uppercase mb-4">الفعاليات الحكومية</h4>
              <p className="text-white/40 text-xs md:text-sm">بروتوكولات هندسية دقيقة وتنفيذ استراتيجي للمشاركات على مستوى الدولة.</p>
            </div>
            <div className="md:col-span-2 p-8 lg:p-12 bg-white/5 border border-white/10 rounded-sm hover:border-emerald-500 transition-all group">
              <Zap className="mb-6 lg:mb-8 text-emerald-500" size={28} />
              <h4 className="text-xl md:text-2xl font-display font-medium uppercase mb-4">تنشيط العلامات التجارية</h4>
              <p className="text-white/40 text-xs md:text-sm">ربط العلامات التجارية بالبشر من خلال تجارب غامرة لا تُنسى.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Expertise;
