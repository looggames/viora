import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpLeft } from 'lucide-react';

const Section = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`relative py-16 lg:py-32 px-4 md:px-12 lg:px-24 overflow-hidden ${className}`}>
    {children}
  </section>
);

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <Section id="about" className="bg-[#080808]">
        <div className="max-w-[1800px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-[14px] uppercase text-emerald-500 mb-8 lg:mb-12 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-emerald-500"></span> 01. البيان
              </h2>
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-display font-medium uppercase leading-[0.9] mb-8 lg:mb-12">
                المستقبل ليس شيئاً ننتظره.
              </h3>
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full border border-white/10 flex items-center justify-center group cursor-pointer hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-500">
                  <ArrowUpLeft className="group-hover:text-black transition-colors" />
                </div>
                <span className="text-[14px] uppercase text-white/40">اقرأ القصة كاملة</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-12 lg:space-y-24">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=2070" 
                alt="Architecture" 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <p className="text-xl md:text-2xl font-light text-white/70 leading-relaxed">
                ولدت فيورا إيفنتس من إيمان بسيط: المستقبل ليس شيئاً ننتظره — بل هو شيء نصممه.
              </p>
              <p className="text-base md:text-lg text-white/40 leading-relaxed">
                نحن شركة هندسة إبداعية للفعاليات مكرسة لصياغة تجارب غامرة تتحدى التقاليد وتكسر الحدود وترتقي بالتواصل الإنساني. نحن لا نتبع التوجهات، نحن نحددها.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
