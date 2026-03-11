import React from 'react';
import { Twitter, Instagram, Ghost } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black pt-16 lg:pt-32 pb-12 px-4 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-16 lg:mb-32">
          <div className="lg:col-span-6">
            <h2 className="text-6xl lg:text-8xl font-display font-medium uppercase leading-[0.8] mb-8 lg:mb-12">
              لنبنِ<br />المستقبل.
            </h2>
            <div className="flex flex-wrap gap-6 lg:gap-8">
              <a href="mailto:hello@viora.events" className="text-xl md:text-2xl lg:text-4xl font-light border-b border-white/20 hover:border-emerald-500 transition-colors">
                hello@viora.events
              </a>
              <span className="text-xl md:text-2xl lg:text-4xl font-light text-white/40" dir="ltr">+966 59 188 1241</span>
            </div>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h5 className="text-[14px] uppercase text-white/30 mb-6 lg:mb-8">التواصل الاجتماعي</h5>
              <ul className="space-y-4">
                <li><a href="#" className="flex items-center gap-2 hover:text-emerald-500 transition-colors text-sm md:text-base"><Twitter size={14} /> تويتر</a></li>
                <li><a href="#" className="flex items-center gap-2 hover:text-emerald-500 transition-colors text-sm md:text-base"><Instagram size={14} /> انستجرام</a></li>
                <li><a href="#" className="flex items-center gap-2 hover:text-emerald-500 transition-colors text-sm md:text-base"><Ghost size={14} /> سناب شات</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[14px] uppercase text-white/30 mb-6 lg:mb-8">مكاتبنا</h5>
              <p className="text-xs md:text-sm text-white/50 leading-loose">
                الرياض، المملكة العربية السعودية<br />
                دبي، الإمارات العربية المتحدة<br />
                لندن، المملكة المتحدة
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[12px] md:text-[14px] uppercase text-white/20">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-8">
            <span>© 2026 فيورا إيفنتس. جميع الحقوق محفوظة.</span>
            <a href="#" className="hover:text-white transition-colors">الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">الشروط</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            الأنظمة متصلة / المقر الرئيسي بالرياض
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
