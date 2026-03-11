import React from 'react';

const Section = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`relative py-16 lg:py-32 px-4 md:px-12 lg:px-24 overflow-hidden ${className}`}>
    {children}
  </section>
);

const Blueprint = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <Section id="blueprint" className="bg-white text-black">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-[14px] uppercase text-black/40 mb-8 lg:mb-12 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-black/40"></span> 02. المخطط
              </h2>
              <h3 className="text-5xl md:text-6xl lg:text-8xl font-display font-medium uppercase leading-[0.85] mb-8 lg:mb-12">
                كيف<br />نبني<br />المستقبل
              </h3>
            </div>
            <div className="space-y-8 lg:space-y-12">
              {[
                { step: "01", title: "الهندسة المفاهيمية", desc: "نبدأ بتفكيك الموجز للعثور على الجوهر العاطفي للفعالية." },
                { step: "02", title: "التكامل التكنولوجي", desc: "مختبرنا للمستقبل يدمج الذكاء الاصطناعي والواقع المعزز في البيئة المادية." },
                { step: "03", title: "التنفيذ المثالي", desc: "الخدمات اللوجستية الدقيقة تلتقي مع التوجه الفني لتحول واقعي سلس." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 lg:gap-8 pb-8 lg:pb-12 border-b border-black/10">
                  <span className="font-display font-medium text-3xl md:text-4xl text-emerald-600">{item.step}</span>
                  <div>
                    <h4 className="text-xl md:text-2xl font-display font-medium uppercase mb-2">{item.title}</h4>
                    <p className="text-black/60 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Blueprint;
