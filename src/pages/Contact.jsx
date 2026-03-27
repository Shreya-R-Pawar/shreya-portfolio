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
    <div className="min-h-screen bg-[#87CEEB] pt-32 pb-20 overflow-hidden selection:bg-blue-200 text-blue-950">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-white/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#F5F5DC] via-[#F5F5DC]/40 to-transparent opacity-90" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-white/60 text-blue-900 font-mono text-[10px] uppercase tracking-widest font-bold backdrop-blur-sm shadow-sm mb-8"
          >
            Direct Channel
          </motion.div>
          
          <h1 className="text-6xl sm:text-8xl font-black tracking-tighter leading-none mb-4">
            <span className="text-[#F5F5DC] drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">Let's build</span> <br /> 
            <span className="bg-gradient-to-r from-[#003049] via-[#17428d] to-[#102164] bg-clip-text text-transparent italic font-serif font-light lowercase tracking-normal">
              together.
            </span>
          </h1>
          
          <p className="text-xl text-blue-900/70 max-w-2xl mt-8 leading-relaxed font-medium">
            I’m always looking for <span className="text-white drop-shadow-sm font-bold">ambitious projects</span> and creative collaborations. Drop a message to start the transmission.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white/80 border border-white rounded-[3rem] p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-blue-900/10"
          >
            <form ref={formRef} onSubmit={handleFakeSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-blue-800 font-mono text-[10px] uppercase tracking-[0.3em] ml-2 font-black">Name</label>
                  <input required name="from_name" type="text" placeholder="Your Name"
                    className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl px-6 py-4 text-blue-950 focus:outline-none focus:border-blue-400 transition-all placeholder:text-blue-900/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-blue-800 font-mono text-[10px] uppercase tracking-[0.3em] ml-2 font-black">Email</label>
                  <input required name="from_email" type="email" placeholder="Return Address"
                    className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl px-6 py-4 text-blue-950 focus:outline-none focus:border-blue-400 transition-all placeholder:text-blue-900/30"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-blue-800 font-mono text-[10px] uppercase tracking-[0.3em] ml-2 font-black">Message</label>
                <textarea required name="message" rows="5" placeholder="Transmission details..."
                  className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl px-6 py-4 text-blue-950 focus:outline-none focus:border-blue-400 transition-all resize-none placeholder:text-blue-900/30"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isTransmitting || isSent}
                className={`w-full py-5 rounded-2xl font-black text-lg transition-all active:scale-[0.98] relative overflow-hidden ${
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
                    className="text-center font-mono text-xs text-blue-600 tracking-[0.3em] uppercase mt-4 font-bold"
                  >
                    Successfully sent to Shreya Pawar
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
          <div className="space-y-6">
            <motion.a 
              href="https://in.linkedin.com/in/shreya-pawar-bb63842b8" 
              target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.02 }}
              className="block p-8 rounded-[2.5rem] bg-white/60 border border-white group transition-all relative overflow-hidden backdrop-blur-md shadow-lg shadow-blue-900/5"
            >
              <div className="absolute -right-4 -top-4 text-8xl opacity-[0.03] group-hover:opacity-[0.08] transition-opacity font-black select-none text-blue-900">IN</div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl">💼</span>
                <span className="text-blue-600 font-mono text-[10px] uppercase tracking-widest border border-blue-200 px-2 py-1 rounded-full font-bold">Professional</span>
              </div>
              <h4 className="text-blue-950 font-black text-xl mb-1 italic font-serif">LinkedIn</h4>
              <p className="text-blue-900/40 text-xs font-mono group-hover:text-blue-700 transition-colors font-bold uppercase tracking-tighter">Connect for opportunities</p>
            </motion.a>

            <motion.a 
              href="https://github.com/shreya-r-pawar" 
              target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.02 }}
              className="block p-8 rounded-[2.5rem] bg-[#F5F5DC]/40 border border-white group transition-all relative overflow-hidden backdrop-blur-md shadow-lg"
            >
              <div className="absolute -right-4 -top-4 text-8xl opacity-[0.03] group-hover:opacity-[0.08] transition-opacity font-black select-none text-blue-900">GIT</div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl">🐙</span>
                <span className="text-blue-600 font-mono text-[10px] uppercase tracking-widest border border-blue-200 px-2 py-1 rounded-full font-bold">Codebase</span>
              </div>
              <h4 className="text-blue-950 font-black text-xl mb-1 italic font-serif">GitHub</h4>
              <p className="text-blue-900/40 text-xs font-mono group-hover:text-blue-700 transition-colors font-bold uppercase tracking-tighter">Explore my repositories</p>
            </motion.a>

            <motion.a 
              href="mailto:pawarshreya2006@gmail.com"
              whileHover={{ y: -5, scale: 1.02 }}
              className="block p-8 rounded-[2.5rem] bg-white/90 border border-white group transition-all relative overflow-hidden shadow-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-3xl">📧</span>
                <div className="h-2 w-2 rounded-full bg-blue-400 animate-ping" />
              </div>
              <h4 className="text-blue-950 font-black text-xl mb-1 italic font-serif tracking-tight">Direct Email</h4>
              <p className="text-blue-700 text-xs font-mono break-all group-hover:text-blue-600 transition-colors font-bold">pawarshreya2006@gmail.com</p>
            </motion.a>
          </div>
        </div>
        <section className="py-20 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-[1px] rounded-[2rem] bg-gradient-to-b from-white to-transparent shadow-2xl"
          >
            <div className="bg-white/40 backdrop-blur-xl px-12 py-10 rounded-[2rem] border border-white/40 group">
              <span className="text-4xl mb-4 block group-hover:translate-y-[-10px] transition-transform duration-500">🍾</span>
              <h3 className="text-2xl font-black text-blue-950 mb-2 uppercase tracking-tighter">
                Message in a bottle.
              </h3>
              <p className="text-blue-900/60 font-medium italic mb-8">
                The transmission is set adrift. While we wait for the reply, let's explore the rest of the island.
              </p>
              
              <NavLink 
                to="/" 
                className="inline-flex items-center gap-3 px-10 py-4 bg-blue-950 text-white rounded-full font-black hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-400/20 active:scale-95"
              >
                RETURN TO THE MAP
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </NavLink>
            </div>
          </motion.div>
        </section>

      </section>
      <footer className="mt-20 border-t border-white/20 py-12 text-center">
         <p className="text-blue-900/30 font-mono text-[10px] tracking-[0.6em] uppercase">
            Shreya Rajguru Pawar // 2026
         </p>
      </footer>
    </div>
  );
};

export default Contact;