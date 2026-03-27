import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-6 px-8 sm:px-16 pointer-events-none">
      
      <NavLink 
        to="/" 
        className="w-14 h-12 rounded-xl bg-white flex items-center justify-center font-bold shadow-[0_8px_30px_rgb(0,0,0,0.12)] pointer-events-auto transition-all hover:scale-110"
      >
        <p className="blue-gradient_text text-xl uppercase">S.R.P</p>
      </NavLink>
      <nav className="flex items-center gap-1 sm:gap-4 pointer-events-auto">
        {[
          { to: '/', label: 'Home' },
          { to: '/about', label: 'About' },
          { to: '/education', label: 'Education' }, 
          { to: '/skills', label: 'Skills' },
          { to: '/projects', label: 'Projects' },
          { to: '/contact', label: 'Contact' }
        ].map((link) => (
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
    </header>
  );
};

export default Navbar;