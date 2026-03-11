import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowUpLeft, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  Layers,
  Plus,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Section = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`relative py-16 lg:py-32 px-4 md:px-12 lg:px-24 overflow-hidden ${className}`}>
    {children}
  </section>
);

const Marquee = ({ text }: { text: string }) => (
  <div className="marquee-container bg-emerald-500 py-4 md:py-6 border-y border-black">
    <div className="marquee-content flex items-center">
      {[...Array(40)].map((_, i) => (
        <div key={i} className="flex items-center gap-4 md:gap-8 px-4 md:px-6">
          <span className="text-black font-display font-medium text-2xl md:text-4xl uppercase whitespace-nowrap">
            {text}
          </span>
          <Plus size={20} className="text-black" />
        </div>
      ))}
    </div>
  </div>
);

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500 selection:text-black" dir="rtl">
      {/* Hero Section - Editorial Style */}
      <section ref={heroRef} className="relative min-h-screen lg:h-[110vh] flex flex-col justify-end overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=2070" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40"></div>
        </motion.div>

        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 lg:px-6 pb-12 lg:pb-24">
          <motion.div style={{ opacity }}>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
              <div className="max-w-4xl">
                <span className="text-emerald-500 font-mono text-xs md:text-sm uppercase mb-4 md:mb-6 block">
                  // تأسست عام 2026 / الهندسة الإبداعية
                </span>
                <h1 className="text-[15vw] lg:text-[10vw] font-display font-medium leading-[0.85] uppercase mb-8">
                  أعد تعريف<br />
                  <span className="text-stroke">الواقع</span>
                </h1>
              </div>
              <div className="max-w-md lg:pb-8">
                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-6 md:mb-8">
                  فيورا إيفنتس حيث يلتقي الخيال بالتنفيذ - حيث تهرب الأفكار من الحاضر وتخطو بجرأة نحو المستقبل.
                </p>
                <div className="flex gap-4">
                  <div className="w-12 h-[1px] bg-emerald-500 mt-3"></div>
                  <p className="text-[14px] uppercase text-emerald-500 font-bold">
                    نحن لا ننظم الفعاليات<br />
                    نحن نهندس اللحظات
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Marquee text="هندسة مستقبل التواصل الإنساني" />

      {/* About Section - Split Layout */}
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
                <Link to="/about" className="w-16 h-16 lg:w-24 lg:h-24 rounded-full border border-white/10 flex items-center justify-center group cursor-pointer hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-500">
                  <ArrowUpLeft className="group-hover:text-black transition-colors" />
                </Link>
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

      {/* History Section - تاريخنا */}
      <Section id="history" className="bg-[#050505] border-y border-white/5">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-24 gap-8">
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-display font-medium uppercase">تاريخنا</h2>
            <p className="max-w-xs text-white/40 text-xs md:text-sm uppercase leading-loose">
              رحلة من الابتكار المستمر وإعادة تعريف الممكن.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { year: "2026", title: "التأسيس", desc: "انطلاق فيورا من قلب الرياض برؤية هندسية جديدة للفعاليات." },
              { year: "2027", title: "مختبر المستقبل", desc: "إطلاق أول مختبر بحثي متخصص في تقنيات الفعاليات الغامرة." },
              { year: "2028", title: "القمة العالمية", desc: "تنفيذ أول مؤتمر دولي يعتمد كلياً على التواجد عن بعد بالهولوجرام." },
              { year: "2029", title: "الريادة", desc: "الحصول على لقب الشركة الأكثر ابتكاراً في قطاع الفعاليات عالمياً." }
            ].map((milestone, i) => (
              <div key={i} className="bg-[#050505] p-12 hover:bg-emerald-500 hover:text-black transition-all duration-500 group">
                <span className="text-4xl font-display font-medium mb-6 block group-hover:text-black">{milestone.year}</span>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">{milestone.title}</h4>
                <p className="text-white/40 group-hover:text-black/70 leading-relaxed">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Expertise - Bento Grid Layout */}
      <Section id="expertise">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-24 gap-8">
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-display font-medium uppercase">خبراتنا</h2>
            <p className="max-w-xs text-white/40 text-xs md:text-sm uppercase leading-loose">
              فريقنا متعدد التخصصات يمزج بين التكنولوجيا وعلم النفس والهندسة المعمارية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 text-right">
            <Link to="/expertise" className="md:col-span-2 lg:col-span-3 p-8 lg:p-12 bg-white/5 border border-white/10 rounded-sm hover:bg-emerald-500 hover:text-black transition-all duration-500 group">
              <Sparkles className="mb-6 lg:mb-8 group-hover:text-black" size={32} />
              <h4 className="text-2xl md:text-4xl font-display font-medium uppercase mb-4">تصميم الفعاليات التجريبية</h4>
              <p className="text-white/50 group-hover:text-black/70 text-sm md:text-base">تحويل المساحات إلى روايات حية تتفاعل مع جميع الحواس.</p>
            </Link>
            <Link to="/expertise" className="md:col-span-2 lg:col-span-3 p-8 lg:p-12 bg-white/5 border border-white/10 rounded-sm hover:bg-white hover:text-black transition-all duration-500 group">
              <Globe className="mb-6 lg:mb-8 group-hover:text-black" size={32} />
              <h4 className="text-2xl md:text-4xl font-display font-medium uppercase mb-4">المنتديات العالمية</h4>
              <p className="text-white/50 group-hover:text-black/70 text-sm md:text-base">بيئات عالية المخاطر للمحادثات التي تشكل العالم والقمم الاستراتيجية.</p>
            </Link>
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

      {/* The Blueprint Section */}
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
              <Link to="/blueprint" className="inline-block px-8 py-4 border border-black text-sm font-bold uppercase hover:bg-black hover:text-white transition-all">
                استكشاف المنهجية
              </Link>
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

      {/* FAQ Section */}
      <Section id="faq" className="bg-[#080808] border-t border-white/5">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-24 gap-8">
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-display font-medium uppercase">الأسئلة الشائعة</h2>
            <p className="max-w-xs text-white/40 text-xs md:text-sm uppercase leading-loose">
              إجابات سريعة حول كيفية هندسة تجربتك القادمة.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {[
              { q: "كيف نبدأ العمل معكم؟", a: "نبدأ بجلسة استشارية لتفكيك رؤيتك وفهم الأهداف الاستراتيجية لفعاليتك، ثم نقوم ببناء مخطط أولي يجمع بين الإبداع والجدوى التقنية." },
              { q: "ما الذي يميز فيورا عن شركات تنظيم الفعاليات التقليدية؟", a: "نحن لا ننظم فقط، نحن نهندس. ندمج التكنولوجيا العميقة (Deep Tech) مع التصميم المعماري وعلم النفس لخلق تجارب غامرة لا تُنسى." },
              { q: "هل تقدمون حلولاً تقنية مخصصة؟", a: "نعم، مختبر المستقبل لدينا يقوم بتطوير برمجيات وأجهزة مخصصة لكل فعالية، من أنظمة التفاعل بالذكاء الاصطناعي إلى واجهات الهولوجرام." },
              { q: "هل تدعمون الفعاليات الهجينة؟", a: "بالتأكيد. نحن رواد في خلق تجارب توحد بين الحضور الفعلي والافتراضي من خلال تقنيات التوأمة الرقمية والبث الغامر." }
            ].map((faq, i) => (
              <div key={i} className="group border-b border-white/10 pb-12">
                <h4 className="text-2xl font-display font-medium uppercase mb-6 group-hover:text-emerald-500 transition-colors flex items-center gap-4">
                  <span className="text-emerald-500/30 text-sm font-mono">0{i+1}</span>
                  {faq.q}
                </h4>
                <p className="text-white/40 leading-relaxed text-lg font-light max-w-2xl">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-emerald-500 text-black py-12 lg:py-24">
        <div className="max-w-[1800px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            { label: "فعاليات عالمية", value: "500+" },
            { label: "ساعات غامرة", value: "12k" },
            { label: "دول", value: "24" },
            { label: "جوائز", value: "18" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-6xl lg:text-8xl font-display font-medium mb-2">{stat.value}</div>
              <div className="text-base md:text-xl uppercase font-bold opacity-60">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Future Lab - Immersive Style */}
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
              <Link to="/future-lab" className="flex items-center gap-4 group">
                <span className="text-[14px] uppercase font-bold">استكشاف التقنيات</span>
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowLeft size={18} />
                </div>
              </Link>
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

      <Footer />
    </div>
  );
}
