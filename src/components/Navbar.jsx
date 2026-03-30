import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/education', label: 'Education' }, 
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center py-6 px-8 sm:px-16 pointer-events-none">
      
      {/* Logo */}
      <NavLink 
        to="/" 
        className="w-14 h-12 rounded-xl bg-white flex items-center justify-center font-bold shadow-[0_8px_30px_rgb(0,0,0,0.12)] pointer-events-auto transition-all hover:scale-110"
      >
        <p className="blue-gradient_text text-xl uppercase">S.R.P</p>
      </NavLink>

      {/* Desktop Navigation (Hidden on Mobile) */}
      <nav className="hidden lg:flex items-center gap-1 sm:gap-4 pointer-events-auto">
        {navLinks.map((link) => (
          <NavLink 
            key={link.to}
            to={link.to} 
            end={link.to === '/'}
            className={({ isActive }) => 
              `px-5 py-2.5 rounded-full font-bold transition-all duration-300 ${
                isActive 
                  ? 'bg-white text-[#0072ff] shadow-[0_10px_20px_rgba(0,0,0,0.1)] scale-105' 
                  : 'text-white hover:text-white/70 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Menu Button (Hamburger) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-12 h-12 rounded-xl bg-white flex flex-col items-center justify-center gap-1.5 shadow-lg pointer-events-auto z-[110]"
      >
        <motion.span 
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-[#0072ff] rounded-full"
        />
        <motion.span 
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-6 h-0.5 bg-[#0072ff] rounded-full"
        />
        <motion.span 
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-[#0072ff] rounded-full"
        />
      </button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-6 right-6 p-8 bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl pointer-events-auto border border-white/20 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => 
                    `text-2xl font-black uppercase tracking-tighter transition-all ${
                      isActive 
                        ? 'text-[#0072ff] translate-x-4' 
                        : 'text-blue-950/60'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;