import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Globe, Layers, ShieldCheck, Zap, Cpu, Users, Target, Award, Rocket, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const PageHero = ({ title, subtitle, image }: { title: string, subtitle: string, image: string }) => (
  <section className="relative h-screen flex flex-col justify-end overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover opacity-40"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/20"></div>
    </div>
    <div className="relative z-10 max-w-[1800px] mx-auto px-6 pb-24 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/" className="flex items-center gap-2 text-emerald-500 mb-8 hover:gap-4 transition-all uppercase text-sm font-bold">
          <ArrowLeft size={20} /> العودة للرئيسية
        </Link>
        <h1 className="text-6xl md:text-8xl lg:text-[10vw] font-display font-medium uppercase leading-none mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </motion.div>
    </div>
  </section>
);

const SectionTitle = ({ number, title }: { number: string, title: string }) => (
  <div className="mb-12">
    <span className="text-emerald-500 font-mono text-sm uppercase block mb-4">// {number}</span>
    <h2 className="text-4xl md:text-6xl font-display font-medium uppercase">{title}</h2>
  </div>
);

export const AboutPage = () => (
  <div className="bg-[#050505] text-white min-h-screen" dir="rtl">
    <PageHero 
      title="عن فيورا" 
      subtitle="نحن مهندسو اللحظات، نصمم تجارب تتجاوز حدود المألوف وتخلق ذكريات تدوم للأبد."
      image="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=2070"
    />
    
    <section className="py-24 px-6 max-w-[1800px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-24 mb-32">
        <div className="space-y-12">
          <SectionTitle number="01" title="رؤيتنا الإبداعية" />
          <p className="text-xl text-white/70 leading-relaxed font-light">
            في فيورا، نؤمن أن كل فعالية هي فرصة لإعادة تعريف الواقع. نحن لا نكتفي بتنظيم اللوجستيات، بل نبني عوالم غامرة تروي قصصاً وتثير مشاعر.
          </p>
          <div className="grid grid-cols-2 gap-12 pt-12">
            <div>
              <h4 className="text-emerald-500 font-display text-4xl mb-2">10+</h4>
              <p className="text-white/40 uppercase text-sm">سنوات من الابتكار</p>
            </div>
            <div>
              <h4 className="text-emerald-500 font-display text-4xl mb-2">500+</h4>
              <p className="text-white/40 uppercase text-sm">فعالية ناجحة</p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 p-12 rounded-sm border border-white/10">
          <h3 className="text-2xl font-display font-medium mb-8 uppercase">قيمنا الجوهرية</h3>
          <ul className="space-y-8">
            {[
              { title: "التميز التقني", desc: "استخدام أحدث ما توصلت إليه التكنولوجيا في كل تفصيل." },
              { title: "الإبداع بلا حدود", desc: "تحدي القواعد التقليدية وابتكار مفاهيم جديدة كلياً." },
              { title: "الدقة المتناهية", desc: "الاهتمام بأصغر التفاصيل لضمان تجربة مثالية." }
            ].map((item, i) => (
              <li key={i} className="flex gap-6">
                <span className="text-emerald-500 font-display text-2xl">{i + 1}</span>
                <div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-32">
        <SectionTitle number="02" title="تاريخنا" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {[
            { year: "2020", event: "تأسيس فيورا في الرياض كشركة ناشئة متخصصة في تقنيات الفعاليات." },
            { year: "2022", event: "التوسع الإقليمي وافتتاح مكتب دبي لإدارة الفعاليات الكبرى في الإمارات." },
            { year: "2024", event: "إطلاق مختبر المستقبل وتطوير أول نظام هولوغرام تفاعلي بالكامل." },
            { year: "2026", event: "الوصول للعالمية وافتتاح مكتب لندن لخدمة السوق الأوروبي." }
          ].map((item, i) => (
            <div key={i} className="bg-[#050505] p-12 hover:bg-emerald-500 hover:text-black transition-all duration-500 group min-h-[300px] flex flex-col justify-between">
              <span className="text-6xl font-display font-medium mb-8 block group-hover:text-black/20 transition-colors">{item.year}</span>
              <p className="text-white/50 group-hover:text-black leading-relaxed text-lg">{item.event}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-32">
        <SectionTitle number="03" title="الحضور العالمي" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-xl text-white/70 leading-relaxed">
              نحن نعمل عبر القارات، ونجمع بين الخبرة المحلية والمعايير العالمية لتقديم تجارب لا تعرف الحدود الجغرافية.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-white/5 rounded-sm border border-white/10">
                <h4 className="text-emerald-500 font-bold mb-2 uppercase">الشرق الأوسط</h4>
                <p className="text-white/40 text-sm">الرياض، دبي، جدة، الدوحة</p>
              </div>
              <div className="p-6 bg-white/5 rounded-sm border border-white/10">
                <h4 className="text-emerald-500 font-bold mb-2 uppercase">أوروبا</h4>
                <p className="text-white/40 text-sm">لندن، باريس، برلين</p>
              </div>
            </div>
          </div>
          <div className="aspect-video bg-white/5 rounded-sm overflow-hidden border border-white/10 relative">
            <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=2070" alt="Global Map" className="w-full h-full object-cover opacity-30 grayscale" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe size={120} className="text-emerald-500/20 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-32">
        <SectionTitle number="04" title="فريق القيادة" />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "أحمد العتيبي", role: "المؤسس والمدير الإبداعي", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
            { name: "سارة المنصور", role: "مديرة العمليات التقنية", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" },
            { name: "خالد فيصل", role: "رئيس قسم الابتكار", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" }
          ].map((member, i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-6">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              </div>
              <h4 className="text-2xl font-display font-medium uppercase">{member.name}</h4>
              <p className="text-emerald-500 text-sm uppercase font-mono">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-500 text-black p-12 lg:p-24 rounded-sm text-center">
        <h2 className="text-4xl md:text-6xl font-display font-medium uppercase mb-8">هل أنت مستعد لتصميم مستقبلك؟</h2>
        <Link to="/contact" className="inline-block px-12 py-4 border-2 border-black text-black font-bold uppercase hover:bg-black hover:text-white transition-all">
          تواصل معنا الآن
        </Link>
      </div>
    </section>
    <Footer />
  </div>
);

export const ExpertisePage = () => (
  <div className="bg-[#050505] text-white min-h-screen" dir="rtl">
    <PageHero 
      title="خبراتنا" 
      subtitle="مجموعة واسعة من التخصصات التي تندمج معاً لخلق تجارب استثنائية."
      image="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=2070"
    />
    <section className="py-24 px-6 max-w-[1800px] mx-auto">
      <SectionTitle number="01" title="مجالات التخصص" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {[
          { icon: <Sparkles />, title: "تصميم الفعاليات التجريبية", desc: "نحول المساحات الصامتة إلى قصص حية تتفاعل مع الحواس الخمس." },
          { icon: <Globe />, title: "المنتديات العالمية", desc: "تنظيم مؤتمرات دولية رفيعة المستوى تجمع قادة الفكر من حول العالم." },
          { icon: <Layers />, title: "تجارب خاصة فاخرة", desc: "فعاليات حصرية مصممة بدقة لتناسب أرقى الأذواق والمتطلبات." },
          { icon: <ShieldCheck />, title: "الفعاليات الحكومية", desc: "خبرة واسعة في إدارة البروتوكولات الرسمية والفعاليات الوطنية الكبرى." },
          { icon: <Zap />, title: "تنشيط العلامات التجارية", desc: "خلق روابط عاطفية عميقة بين العلامة التجارية وجمهورها." },
          { icon: <Target />, title: "الاستشارات الاستراتيجية", desc: "نقدم رؤى معمقة حول كيفية استخدام الفعاليات كأداة للتغيير والنمو." }
        ].map((item, i) => (
          <div key={i} className="p-12 bg-white/5 border border-white/10 rounded-sm hover:border-emerald-500 transition-all group">
            <div className="text-emerald-500 mb-8 group-hover:scale-110 transition-transform">
              {React.cloneElement(item.icon as React.ReactElement, { size: 40 })}
            </div>
            <h3 className="text-2xl font-display font-medium mb-4 uppercase">{item.title}</h3>
            <p className="text-white/50 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mb-32">
        <SectionTitle number="02" title="دراسات حالة" />
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="group cursor-pointer">
            <div className="aspect-video overflow-hidden rounded-sm mb-8">
              <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070" alt="Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-3xl font-display font-medium uppercase mb-4">قمة الرياض للابتكار 2025</h3>
            <p className="text-white/40 leading-relaxed">تحويل مركز المؤتمرات إلى غابة رقمية تفاعلية تستجيب لحركة الزوار.</p>
          </div>
          <div className="group cursor-pointer">
            <div className="aspect-video overflow-hidden rounded-sm mb-8">
              <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2070" alt="Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-3xl font-display font-medium uppercase mb-4">إطلاق سيارة "نيوم" الكهربائية</h3>
            <p className="text-white/40 leading-relaxed">تجربة واقع معزز غامرة سمحت للجمهور باستكشاف محرك السيارة في الفضاء الافتراضي.</p>
          </div>
        </div>
      </div>

      <div className="mb-32">
        <SectionTitle number="03" title="شركاء النجاح" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-50">
          {["NEOM", "ARAMCO", "STC", "PIF", "MAADEN", "SDAIA"].map((partner, i) => (
            <div key={i} className="text-center font-display text-2xl font-bold tracking-widest hover:opacity-100 hover:text-emerald-500 transition-all cursor-default">
              {partner}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-32">
        <SectionTitle number="04" title="الابتكار التقني" />
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-square">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" alt="Tech" className="w-full h-full object-cover rounded-sm opacity-60" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay"></div>
          </div>
          <div className="space-y-8">
            <p className="text-2xl font-light text-white/70 leading-relaxed">
              نحن لا نستخدم التكنولوجيا فحسب، بل نعيد اختراعها لتناسب رؤيتك. من أنظمة التتبع بالذكاء الاصطناعي إلى العروض البصرية ثلاثية الأبعاد.
            </p>
            <ul className="space-y-4">
              {["معالجة البيانات اللحظية", "أنظمة الصوت المحيطي الذكي", "التحكم الحركي التفاعلي", "برمجيات مخصصة للفعاليات"].map((tech, i) => (
                <li key={i} className="flex items-center gap-4 text-emerald-500 font-mono text-sm uppercase">
                  <Plus size={14} /> {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-32">
        <SectionTitle number="05" title="الجوائز العالمية" />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { award: "جائزة الابتكار التقني", org: "Eventex 2024", location: "لندن" },
            { award: "أفضل تصميم تجريبي", org: "Middle East Event Awards", location: "دبي" },
            { award: "التميز في الاستدامة", org: "Global Event Forum", location: "نيويورك" }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-white/10 rounded-sm hover:bg-white hover:text-black transition-all group">
              <Award className="text-emerald-500 mb-6 group-hover:text-black" size={32} />
              <h4 className="text-xl font-bold mb-2 uppercase">{item.award}</h4>
              <p className="text-white/40 group-hover:text-black/60 text-sm mb-4">{item.org}</p>
              <span className="text-xs uppercase font-mono opacity-30 group-hover:opacity-100">{item.location}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-8 border-t border-white/10 pt-24">
        {[
          { label: "عملاء دوليون", value: "120+" },
          { label: "جوائز تصميم", value: "15" },
          { label: "تغطية إعلامية", value: "200M+" },
          { label: "رضا العملاء", value: "99%" }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl font-display font-medium text-emerald-500 mb-2">{stat.value}</div>
            <div className="text-xs uppercase text-white/30">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export const BlueprintPage = () => (
  <div className="bg-[#050505] text-white min-h-screen" dir="rtl">
    <PageHero 
      title="المخطط" 
      subtitle="منهجيتنا الهندسية في تحويل الخيال إلى واقع ملموس بدقة متناهية."
      image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070"
    />
    <section className="py-24 px-6 max-w-[1800px] mx-auto">
      {/* Section 01: Philosophy */}
      <div className="mb-48">
        <SectionTitle number="01" title="الفلسفة التصميمية" />
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight">
            نحن نؤمن أن <span className="text-emerald-500">التفاصيل</span> هي التي تصنع الفرق بين الفعالية والذكرى.
          </h2>
          <p className="text-2xl text-white/50 font-light leading-relaxed">
            في فيورا، لا نبدأ بالرسم، بل نبدأ بالتساؤل. كيف نريد للجمهور أن يشعر؟ ما هو الأثر الذي نريد تركه؟ المخطط هو خريطة طريق عاطفية قبل أن يكون مخططاً هندسياً.
          </p>
        </div>
      </div>

      {/* Section 02: Execution Journey */}
      <div className="mb-48">
        <SectionTitle number="02" title="رحلة التنفيذ" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: "01", title: "الاكتشاف", desc: "تحليل الأهداف والجمهور المستهدف بعمق." },
            { step: "02", title: "المفهوم", desc: "ابتكار فكرة فريدة تجمع بين الفن والتقنية." },
            { step: "03", title: "الهندسة", desc: "بناء البنية التحتية الرقمية والمادية للمشروع." },
            { step: "04", title: "التشغيل", desc: "إدارة اللحظة ببراعة لضمان تجربة مثالية." }
          ].map((item, i) => (
            <div key={i} className="p-12 bg-white/5 border border-white/10 rounded-sm hover:border-emerald-500 transition-all">
              <span className="text-4xl font-display font-medium text-emerald-500 mb-8 block">{item.step}</span>
              <h3 className="text-2xl font-display font-medium mb-4 uppercase">{item.title}</h3>
              <p className="text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 03: Technical Stack */}
      <div className="mb-48">
        <SectionTitle number="03" title="الترسانة التقنية" />
        <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {[
            { title: "الواقع الممتد", tools: ["AR", "VR", "Mixed Reality"] },
            { title: "الذكاء الاصطناعي", tools: ["Generative Art", "Data Tracking", "AI Chatbots"] },
            { title: "الأنظمة البصرية", tools: ["Holograms", "Projection Mapping", "LED Walls"] }
          ].map((stack, i) => (
            <div key={i} className="bg-[#050505] p-16">
              <h4 className="text-emerald-500 font-mono text-sm uppercase mb-8 tracking-widest">{stack.title}</h4>
              <ul className="space-y-4">
                {stack.tools.map((tool, j) => (
                  <li key={j} className="text-2xl font-display font-medium uppercase">{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Section 04: Quality Standards */}
      <div className="mb-48">
        <SectionTitle number="04" title="معايير الجودة" />
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            {[
              { title: "الدقة الهندسية", desc: "نعمل بمعايير هندسية صارمة تضمن سلامة وجمالية التنفيذ." },
              { title: "الاستدامة الرقمية", desc: "نصمم حلولاً تقنية قابلة للتطوير وإعادة الاستخدام." },
              { title: "الأمن السيبراني", desc: "حماية بيانات الفعاليات والزوار هي أولويتنا القصوى." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8">
                <div className="w-16 h-16 rounded-full border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-medium mb-2 uppercase">{item.title}</h4>
                  <p className="text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white/5 p-12 rounded-sm border border-white/10 flex flex-col justify-center">
            <blockquote className="text-3xl font-light italic text-white/70 leading-relaxed mb-8">
              "الجودة ليست فعلاً، بل هي عادة نتبعها في كل بكسل وفي كل لحظة نصممها."
            </blockquote>
            <span className="text-emerald-500 font-mono text-sm uppercase tracking-widest">— ميثاق فيورا للجودة</span>
          </div>
        </div>
      </div>

      {/* Section 05: Collaborative Workflow */}
      <div className="mb-48">
        <SectionTitle number="05" title="سير العمل التعاوني" />
        <div className="relative h-[400px] bg-white/5 rounded-sm overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" alt="Collaboration" className="w-full h-full object-cover opacity-20 grayscale" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
            <div className="max-w-3xl">
              <h3 className="text-4xl font-display font-medium mb-8">نحن لا نعمل لك، بل نعمل معك.</h3>
              <p className="text-xl text-white/50 leading-relaxed">
                نستخدم منصات سحابية متقدمة تتيح لك متابعة تقدم المخطط لحظة بلحظة، من المسودات الأولى وحتى اللمسات الأخيرة قبل الانطلاق.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 06: Future Roadmap */}
      <div className="mb-32">
        <SectionTitle number="06" title="خارطة طريق الابتكار" />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-12 bg-emerald-500 text-black rounded-sm">
            <Rocket size={48} className="mb-8" />
            <h4 className="text-3xl font-display font-medium mb-4 uppercase">مختبر فيورا 2027</h4>
            <p className="font-medium leading-relaxed">
              نعمل حالياً على تطوير تقنيات "الانغماس الكلي" التي ستلغي الحدود بين الواقع المادي والافتراضي تماماً.
            </p>
          </div>
          <div className="p-12 border border-emerald-500 rounded-sm flex flex-col justify-center">
            <h4 className="text-2xl font-display font-medium text-emerald-500 mb-4 uppercase">انضم إلى المستقبل</h4>
            <p className="text-white/50 leading-relaxed mb-8">
              هل لديك فكرة تبدو مستحيلة؟ نحن هنا لنجعلها حقيقة.
            </p>
            <Link to="/contact" className="text-emerald-500 font-bold uppercase flex items-center gap-4 hover:gap-6 transition-all">
              ابدأ مشروعك معنا <ArrowLeft className="rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export const FutureLabPage = () => (
  <div className="bg-[#050505] text-white min-h-screen" dir="rtl">
    <PageHero 
      title="مختبر المستقبل" 
      subtitle="حيث نختبر حدود الممكن ونبتكر تقنيات الفعاليات للجيل القادم."
      image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
    />
    <section className="py-24 px-6 max-w-[1800px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-24 mb-32">
        <div className="bg-emerald-500 text-black p-12 lg:p-24 rounded-sm">
          <SectionTitle number="01" title="الذكاء الاصطناعي" />
          <p className="text-xl leading-relaxed mb-12">
            نحن نستخدم خوارزميات متقدمة لتخصيص تجربة كل زائر بناءً على اهتماماته وتفاعلاته اللحظية. مختبرنا يطور حالياً أنظمة ذكاء اصطناعي قادرة على التنبؤ باحتياجات الجمهور قبل حدوثها.
          </p>
          <div className="space-y-6">
            <div className="flex justify-between border-b border-black/20 pb-4">
              <span className="font-bold uppercase">الواقع المعزز (AR)</span>
              <span>مفعل</span>
            </div>
            <div className="flex justify-between border-b border-black/20 pb-4">
              <span className="font-bold uppercase">الارتجاع البيولوجي</span>
              <span>قيد التجربة</span>
            </div>
            <div className="flex justify-between border-b border-black/20 pb-4">
              <span className="font-bold uppercase">الهولوغرام التفاعلي</span>
              <span>جاهز للاستخدام</span>
            </div>
          </div>
        </div>
        <div className="space-y-12">
          <SectionTitle number="02" title="مشاريعنا الحالية" />
          <div className="space-y-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-4">
                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070" alt="Project" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <h4 className="text-xl font-bold uppercase">مشروع: الوعي المكاني</h4>
              <p className="text-white/50">تطوير مساحات تتغير فيزيائياً بناءً على حركة الجمهور وكثافته في المكان.</p>
            </div>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-4">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" alt="Project" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <h4 className="text-xl font-bold uppercase">مشروع: الاتصال العصبي</h4>
              <p className="text-white/50">استكشاف كيفية نقل المشاعر عبر واجهات الدماغ والحاسوب لخلق تجربة حسية فريدة.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-32">
        <SectionTitle number="03" title="التقنيات القادمة" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Cpu />, title: "الحوسبة الكمومية", desc: "معالجة بيانات الفعاليات الضخمة في أجزاء من الثانية." },
            { icon: <Globe />, title: "الميتافيرس الهجين", desc: "دمج الحضور الفعلي والافتراضي في بيئة واحدة متناغمة." },
            { icon: <Zap />, title: "الطاقة المستدامة", desc: "تطوير أنظمة طاقة نظيفة لتشغيل أضخم الفعاليات." },
            { icon: <Users />, title: "التفاعل الجماعي", desc: "تقنيات تسمح لآلاف الأشخاص بالتفاعل معاً في وقت واحد." }
          ].map((tech, i) => (
            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-sm">
              <div className="text-emerald-500 mb-6">{tech.icon}</div>
              <h4 className="text-xl font-bold mb-4 uppercase">{tech.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-32">
        <SectionTitle number="04" title="التوأمة الرقمية" />
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-2xl font-light text-white/70 leading-relaxed mb-8">
              نقوم بإنشاء نسخة رقمية مطابقة تماماً لموقع الفعالية، مما يسمح لنا بمحاكاة تدفق الحشود، وتجربة الإضاءة، واختبار الأنظمة التقنية قبل البدء في التنفيذ الفعلي.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-white/5 border-r-2 border-emerald-500">
                <h5 className="font-bold mb-2">محاكاة الحشود</h5>
                <p className="text-sm text-white/40">توقع مناطق الازدحام وتحسين المسارات.</p>
              </div>
              <div className="p-6 bg-white/5 border-r-2 border-emerald-500">
                <h5 className="font-bold mb-2">الاختبار الافتراضي</h5>
                <p className="text-sm text-white/40">تجربة كل سيناريو ممكن تقنياً.</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 aspect-video overflow-hidden rounded-sm">
            <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=2070" alt="Digital Twin" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>

      <div className="mb-32">
        <SectionTitle number="05" title="إنترنت الحواس" />
        <div className="bg-white/5 p-12 lg:p-24 rounded-sm border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[120px]"></div>
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-4xl font-display font-medium mb-8">تجاوز حدود البصر والسمع.</h3>
            <p className="text-xl text-white/60 leading-relaxed mb-12">
              نحن نطور تقنيات تسمح بنقل الروائح، والملمس، وحتى الطعم رقمياً، لخلق تجارب غامرة كلياً تشغل الحواس الخمس في آن واحد.
            </p>
            <div className="flex flex-wrap gap-4">
              {["اللمس الرقمي", "توليد الروائح الذكي", "الصوت العظمي", "التذوق الافتراضي"].map((item, i) => (
                <span key={i} className="px-6 py-2 border border-emerald-500/30 text-emerald-500 text-xs uppercase tracking-widest rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-32">
        <SectionTitle number="06" title="الاستدامة الذكية" />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "صفر نفايات رقمية", desc: "تحسين الأكواد والأنظمة لتقليل استهلاك الطاقة في السيرفرات." },
            { title: "طاقة حركية", desc: "تحويل حركة الزوار في المكان إلى طاقة كهربائية لتشغيل الإضاءة." },
            { title: "مواد حيوية", desc: "استخدام مواد قابلة للتحلل العضوي في بناء المنصات التفاعلية." }
          ].map((item, i) => (
            <div key={i} className="p-12 border border-white/10 hover:border-emerald-500/50 transition-colors">
              <h4 className="text-2xl font-display font-medium mb-4 text-emerald-500">{item.title}</h4>
              <p className="text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-32">
        <SectionTitle number="07" title="شركاء الابتكار" />
        <div className="flex flex-wrap justify-center gap-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <span className="text-3xl font-bold tracking-tighter">MIT LAB</span>
          <span className="text-3xl font-bold tracking-tighter">NASA TECH</span>
          <span className="text-3xl font-bold tracking-tighter">GOOGLE AI</span>
          <span className="text-3xl font-bold tracking-tighter">FUTURE FORUM</span>
        </div>
      </div>

      <div className="border-t border-white/10 pt-24 text-center">
        <h3 className="text-2xl font-display font-medium uppercase mb-8">هل تريد أن تكون جزءاً من المستقبل؟</h3>
        <p className="text-white/40 max-w-2xl mx-auto mb-12">نحن نبحث دائماً عن شركاء ومبدعين لمشاركتنا رحلة الابتكار في مختبر فيورا.</p>
        <button className="px-12 py-4 bg-white text-black font-bold uppercase hover:bg-emerald-500 transition-all">انضم إلينا</button>
      </div>
    </section>
    <Footer />
  </div>
);

export const ContactPage = () => (
  <div className="bg-[#050505] text-white min-h-screen" dir="rtl">
    <PageHero 
      title="اتصل بنا" 
      subtitle="دعنا نبدأ حواراً حول كيفية تحويل رؤيتك القادمة إلى واقع مذهل."
      image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2074"
    />
    <section className="py-24 px-6 max-w-[1800px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-24 mb-48">
        <div>
          <SectionTitle number="01" title="معلومات التواصل" />
          <div className="space-y-12">
            <div>
              <h4 className="text-emerald-500 uppercase text-sm font-bold mb-4">// البريد الإلكتروني</h4>
              <p className="text-3xl font-light">hello@viora.events</p>
            </div>
            <div>
              <h4 className="text-emerald-500 uppercase text-sm font-bold mb-4">// الهاتف</h4>
              <p className="text-3xl font-light" dir="ltr">+966 59 188 1241</p>
            </div>
            <div>
              <h4 className="text-emerald-500 uppercase text-sm font-bold mb-4">// المقر الرئيسي</h4>
              <p className="text-3xl font-light">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 p-12 rounded-sm border border-white/10">
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase text-white/40">الاسم الكامل</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-emerald-500 outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase text-white/40">البريد الإلكتروني</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-emerald-500 outline-none transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase text-white/40">نوع المشروع</label>
              <select className="w-full bg-transparent border-b border-white/20 py-4 focus:border-emerald-500 outline-none transition-colors appearance-none">
                <option className="bg-black">فعالية تجريبية</option>
                <option className="bg-black">منتدى عالمي</option>
                <option className="bg-black">تجربة فاخرة</option>
                <option className="bg-black">أخرى</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase text-white/40">رسالتك</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-4 focus:border-emerald-500 outline-none transition-colors resize-none"></textarea>
            </div>
            <button className="w-full py-6 bg-emerald-500 text-black font-bold uppercase hover:bg-white transition-all">إرسال الطلب</button>
          </form>
        </div>
      </div>

      <div className="mb-48">
        <SectionTitle number="02" title="مكاتبنا العالمية" />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { city: "الرياض", address: "حي الملقا، طريق الملك فهد", phone: "+966 11 000 0000" },
            { city: "دبي", address: "حي التصميم (d3)، مبنى 4", phone: "+971 4 000 0000" },
            { city: "لندن", address: "20 شارع كينغزواي، WC2B 6LH", phone: "+44 20 0000 0000" }
          ].map((office, i) => (
            <div key={i} className="p-12 border border-white/10 hover:border-emerald-500/50 transition-colors group">
              <h4 className="text-3xl font-display font-medium mb-6 group-hover:text-emerald-500 transition-colors">{office.city}</h4>
              <p className="text-white/40 mb-4">{office.address}</p>
              <p className="font-mono text-sm" dir="ltr">{office.phone}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-48">
        <SectionTitle number="03" title="الأسئلة الشائعة" />
        <div className="grid lg:grid-cols-2 gap-12">
          {[
            { q: "ما هي المدة الزمنية المطلوبة للتخطيط لفعالية؟", a: "تختلف المدة حسب حجم الفعالية، ولكننا نفضل البدء قبل 3 إلى 6 أشهر على الأقل لضمان أعلى مستويات الجودة." },
            { q: "هل تقدمون خدمات خارج المملكة العربية السعودية؟", a: "نعم، نحن شركة عالمية ولدينا مكاتب في دبي ولندن، ونقوم بتنفيذ فعاليات في جميع أنحاء العالم." },
            { q: "كيف تضمنون أمن وخصوصية البيانات في الفعاليات؟", a: "نستخدم أحدث بروتوكولات التشفير وأنظمة الأمن السيبراني لحماية بيانات الزوار والفعالية بالكامل." },
            { q: "هل يمكنكم دمج تقنيات الذكاء الاصطناعي في فعالية قائمة؟", a: "بالتأكيد، يمكننا تطوير حلول مخصصة تندمج بسلاسة مع البنية التحتية الحالية لفعاليتك." }
          ].map((faq, i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-xl font-bold text-emerald-500">{faq.q}</h4>
              <p className="text-white/50 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-48">
        <SectionTitle number="04" title="تابعنا" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {["Instagram", "LinkedIn", "Twitter", "Behance"].map((social, i) => (
            <a key={i} href="#" className="bg-[#050505] p-12 text-center hover:bg-emerald-500 hover:text-black transition-all duration-500 group">
              <span className="text-xl font-display font-medium uppercase tracking-widest">{social}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mb-32 text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <SectionTitle number="05" title="النشرة البريدية" />
          <p className="text-xl text-white/40">اشترك لتصلك أحدث ابتكاراتنا في عالم الفعاليات والتقنية.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <input type="email" placeholder="بريدك الإلكتروني" className="flex-1 bg-white/5 border border-white/10 px-8 py-4 outline-none focus:border-emerald-500 transition-colors" />
            <button className="px-12 py-4 bg-emerald-500 text-black font-bold uppercase hover:bg-white transition-all">اشترك الآن</button>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);
