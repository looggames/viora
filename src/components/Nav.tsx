import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    { name: 'الرئيسية', path: '/' },
    { name: 'عن فيورا', path: '/about' },
    { name: 'خبراتنا', path: '/expertise' },
    { name: 'المخطط', path: '/blueprint' },
    { name: 'مختبر المستقبل', path: '/future-lab' },
    { name: 'اتصل بنا', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1800px] mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-display font-medium text-white">
            فيورا<span className="text-emerald-500">.</span>
          </Link>
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-[14px] uppercase transition-colors ${location.pathname === item.path ? 'text-emerald-400' : 'text-white/50 hover:text-emerald-400'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="hidden md:block text-[14px] uppercase text-white/70 hover:text-white">
            عرض AR/VR
          </button>
          <Link to="/contact" className="px-8 py-3 bg-emerald-500 text-black text-[14px] font-bold uppercase rounded-sm hover:bg-white transition-all">
            ابدأ مشروعك
          </Link>
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black z-50 flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-24">
              <div className="text-2xl font-display font-medium">فيورا.</div>
              <button onClick={() => setIsOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col space-y-8">
              {menuItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={`text-4xl font-display font-medium uppercase transition-colors ${location.pathname === item.path ? 'text-emerald-500' : 'hover:text-emerald-500'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
