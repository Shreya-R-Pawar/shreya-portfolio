import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom'; 

const Contact = () => {
  const formRef = useRef();
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleFakeSubmit = (e) => {
    e.preventDefault();
    setIsTransmitting(true);

    setTimeout(() => {
      setIsTransmitting(false);
      setIsSent(true);
      formRef.current.reset();
      setTimeout(() => setIsSent(false), 6000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#87CEEB] pt-24 md:pt-32 pb-20 overflow-hidden selection:bg-blue-200 text-blue-950">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[60%] h-[300px] md:h-[60%] bg-white/30 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#F5F5DC] via-[#F5F5DC]/40 to-transparent opacity-90" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        <div className="mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-white/60 text-blue-900 font-mono text-[9px] md:text-[10px] uppercase tracking-widest font-bold backdrop-blur-sm shadow-sm mb-6 md:mb-8"
          >
            Direct Channel
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-4">
            <span className="text-[#F5F5DC] drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">Let's build</span> <br /> 
            <span className="bg-gradient-to-r from-[#003049] via-[#17428d] to-[#102164] bg-clip-text text-transparent italic font-serif font-light lowercase tracking-normal">
              together.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-900/70 max-w-2xl mt-6 md:mt-8 leading-relaxed font-medium">
            I’m always looking for <span className="text-white drop-shadow-sm font-bold">ambitious projects</span> and creative collaborations. Drop a message to start the transmission.
          </p>
        </div>

        {/* Responsive Grid: 1 column on mobile, 3 on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-20">
          
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white/80 border border-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-blue-900/10"
          >
            <form ref={formRef} onSubmit={handleFakeSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-blue-800 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] ml-2 font-black">Name</label>
                  <input required name="from_name" type="text" placeholder="Your Name"
                    className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl px-6 py-4 text-blue-950 focus:outline-none focus:border-blue-400 transition-all placeholder:text-blue-900/30 text-sm md:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-blue-800 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] ml-2 font-black">Email</label>
                  <input required name="from_email" type="email" placeholder="Return Address"
                    className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl px-6 py-4 text-blue-950 focus:outline-none focus:border-blue-400 transition-all placeholder:text-blue-900/30 text-sm md:text-base"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-blue-800 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] ml-2 font-black">Message</label>
                <textarea required name="message" rows="5" placeholder="Transmission details..."
                  className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl px-6 py-4 text-blue-950 focus:outline-none focus:border-blue-400 transition-all resize-none placeholder:text-blue-900/30 text-sm md:text-base"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isTransmitting || isSent}
                className={`w-full py-4 md:py-5 rounded-2xl font-black text-base md:text-lg transition-all active:scale-[0.98] relative overflow-hidden ${
                    isSent ? 'bg-green-500 text-white shadow-lg' : 'bg-blue-950 text-white hover:bg-blue-600 shadow-xl'
                }`}
              >
                {isTransmitting ? (
                  <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity }}>
                    TRANSMITTING DATA...
                  </motion.span>
                ) : isSent ? (
                  'MISSION LOGGED ✔'
                ) : (
                  'INITIATE CONTACT →'
                )}
              </button>

              <AnimatePresence>
                {isSent && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center font-mono text-[10px] text-blue-600 tracking-[0.2em] md:tracking-[0.3em] uppercase mt-4 font-bold"
                  >
                    Successfully sent to Shreya Pawar
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Social Sidebar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <motion.a 
              href="https://in.linkedin.com/in/shreya-pawar-bb63842b8" 
              target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.02 }}
              className="block p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white/60 border border-white group transition-all relative overflow-hidden backdrop-blur-md shadow-lg shadow-blue-900/5"
            >
              <div className="absolute -right-4 -top-4 text-7xl md:text-8xl opacity-[0.03] group-hover:opacity-[0.08] transition-opacity font-black select-none text-blue-900">IN</div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-2xl md:text-3xl">💼</span>
                <span className="text-blue-600 font-mono text-[9px] md:text-[10px] uppercase tracking-widest border border-blue-200 px-2 py-1 rounded-full font-bold">Professional</span>
              </div>
              <h4 className="text-blue-950 font-black text-lg md:text-xl mb-1 italic font-serif">LinkedIn</h4>
              <p className="text-blue-900/40 text-[10px] font-mono group-hover:text-blue-700 transition-colors font-bold uppercase tracking-tighter">Connect for opportunities</p>
            </motion.a>

            <motion.a 
              href="https://github.com/shreya-r-pawar" 
              target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.02 }}
              className="block p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-[#F5F5DC]/40 border border-white group transition-all relative overflow-hidden backdrop-blur-md shadow-lg"
            >
              <div className="absolute -right-4 -top-4 text-7xl md:text-8xl opacity-[0.03] group-hover:opacity-[0.08] transition-opacity font-black select-none text-blue-900">GIT</div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-2xl md:text-3xl">🐙</span>
                <span className="text-blue-600 font-mono text-[9px] md:text-[10px] uppercase tracking-widest border border-blue-200 px-2 py-1 rounded-full font-bold">Codebase</span>
              </div>
              <h4 className="text-blue-950 font-black text-lg md:text-xl mb-1 italic font-serif">GitHub</h4>
              <p className="text-blue-900/40 text-[10px] font-mono group-hover:text-blue-700 transition-colors font-bold uppercase tracking-tighter">Explore my repositories</p>
            </motion.a>

            <motion.a 
              href="mailto:pawarshreya2006@gmail.com"
              whileHover={{ y: -5, scale: 1.02 }}
              className="block p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white/90 border border-white group transition-all relative overflow-hidden shadow-xl col-span-1 md:col-span-2 lg:col-span-1"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-2xl md:text-3xl">📧</span>
                <div className="h-2 w-2 rounded-full bg-blue-400 animate-ping" />
              </div>
              <h4 className="text-blue-950 font-black text-lg md:text-xl mb-1 italic font-serif tracking-tight">Direct Email</h4>
              <p className="text-blue-700 text-[10px] md:text-xs font-mono break-all group-hover:text-blue-600 transition-colors font-bold uppercase tracking-tighter">pawarshreya2006@gmail.com</p>
            </motion.a>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="py-12 md:py-20 text-center relative z-10 px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-[1px] rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-b from-white to-transparent shadow-2xl w-full md:w-auto"
          >
            <div className="bg-white/40 backdrop-blur-xl px-6 py-10 md:px-12 md:py-10 rounded-[1.5rem] md:rounded-[2rem] border border-white/40 group">
              <span className="text-3xl md:text-4xl mb-4 block group-hover:translate-y-[-10px] transition-transform duration-500">🍾</span>
              <h3 className="text-xl md:text-2xl font-black text-blue-950 mb-2 uppercase tracking-tighter">
                Message in a bottle.
              </h3>
              <p className="text-sm md:text-base text-blue-900/60 font-medium italic mb-8">
                The transmission is set adrift. While we wait for the reply, let's explore the rest of the island.
              </p>
              
              <NavLink 
                to="/" 
                className="inline-flex items-center justify-center gap-3 px-6 py-4 md:px-10 md:py-4 bg-blue-950 text-white rounded-full font-black hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-400/20 active:scale-95 w-full md:w-auto text-sm md:text-base"
              >
                RETURN TO THE MAP
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </NavLink>
            </div>
          </motion.div>
        </section>

      </section>
      <footer className="mt-10 md:mt-20 border-t border-white/20 py-8 md:py-12 text-center px-4">
         <p className="text-blue-900/30 font-mono text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.6em] uppercase">
            Shreya Rajguru Pawar // 2026
         </p>
      </footer>
    </div>
  );
};

export default Contact;