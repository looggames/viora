import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 min-h-screen bg-[#050505] px-4 md:px-12 lg:px-24">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h1 className="text-6xl md:text-8xl font-display font-medium uppercase leading-[0.8] mb-12">
              لنتحدث عن<br />مشروعك القادم.
            </h1>
            <p className="text-xl text-white/60 font-light max-w-md mb-12">
              فريقنا جاهز لتحويل رؤيتك إلى واقع ملموس. تواصل معنا لبدء الرحلة.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="text-emerald-500" size={20} />
                </div>
                <div>
                  <p className="text-white/40 uppercase text-xs">البريد الإلكتروني</p>
                  <p className="text-xl">hello@viora.events</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="text-emerald-500" size={20} />
                </div>
                <div>
                  <p className="text-white/40 uppercase text-xs">الهاتف</p>
                  <p className="text-xl" dir="ltr">+966 59 188 1241</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin className="text-emerald-500" size={20} />
                </div>
                <div>
                  <p className="text-white/40 uppercase text-xs">المقر الرئيسي</p>
                  <p className="text-xl">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 lg:p-12 rounded-sm border border-white/10">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase text-white/40">الاسم الكامل</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-emerald-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase text-white/40">البريد الإلكتروني</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-emerald-500 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase text-white/40">نوع الفعالية</label>
                <select className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-emerald-500 transition-colors appearance-none">
                  <option className="bg-black">منتدى عالمي</option>
                  <option className="bg-black">فعالية حكومية</option>
                  <option className="bg-black">تنشيط علامة تجارية</option>
                  <option className="bg-black">تجربة خاصة</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase text-white/40">رسالتك</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-emerald-500 transition-colors resize-none" />
              </div>
              <button className="w-full py-4 bg-emerald-500 text-black font-bold uppercase flex items-center justify-center gap-3 hover:bg-white transition-all">
                إرسال الطلب <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
