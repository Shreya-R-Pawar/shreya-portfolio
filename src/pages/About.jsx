import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const About = () => {
  const { scrollY } = useScroll();
  const xBg = useTransform(scrollY, [0, 800], [0, -150]);
  const rotateImg = useTransform(scrollY, [0, 1000], [0, 10]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  const stats = [
    { label: "Engineering Year", value: "02", sub: "Second Year at VJTI" },
    { label: "SaaS Projects", value: "03", sub: "Built Projects" },
    { label: "Data Internships", value: "01", sub: "Industry Experience" },
    { label: "Cups of Coffee", value: "∞", sub: "Fueling the Code" },
  ];

  return (
    <div className="min-h-screen bg-[#87CEEB] pt-24 md:pt-32 pb-20 overflow-hidden selection:bg-blue-200 text-blue-950">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[60%] h-[300px] md:h-[60%] bg-white/30 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#F5F5DC] via-[#F5F5DC]/40 to-transparent opacity-80" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center px-6 md:px-16 max-w-7xl mx-auto z-10">
        <motion.div 
          style={{ x: xBg }} 
          className="absolute top-10 md:top-20 left-0 text-[5rem] md:text-[12rem] font-black text-white/10 leading-none select-none -z-10 tracking-tighter whitespace-nowrap"
        >
          ABOUT ME
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <motion.div style={{ opacity: opacityText }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-white/60 text-blue-900 font-mono text-[9px] md:text-[10px] uppercase tracking-widest font-bold backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Available for Projects
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] md:leading-[0.85] tracking-tighter">
              <span className="text-[#F5F5DC] drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]">HI,</span> <br /> 
              <span className="bg-gradient-to-r from-[#003049] via-[#17428d] to-[#102164] bg-clip-text text-transparent italic font-serif font-light lowercase tracking-normal drop-shadow-sm block mt-2">
                I am Shreya Pawar
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-900/80 max-w-md leading-relaxed font-semibold">
              2nd Year Undergrad at VJTI. I design systems that feel <span className="text-white drop-shadow-sm font-bold">human</span> and code that runs <span className="text-white drop-shadow-sm font-bold">perfectly</span>.
            </p>
            <div className="pt-2 md:pt-4">
              <a 
                href="https://drive.google.com/file/d/1T9902m9ST7X_-h-8NyFJgjsNfmplslFx/view?usp=drivesdk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-white/80 backdrop-blur-md text-blue-950 border border-white rounded-full font-black hover:bg-blue-950 hover:text-white transition-all shadow-xl active:scale-95 group"
              >
                View CV
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Photo Side */}
          <motion.div style={{ rotate: rotateImg }} className="relative group flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="absolute inset-0 bg-white/20 blur-3xl group-hover:bg-white/40 transition-all duration-700" />
            <div className="relative z-10 w-full max-w-[280px] md:max-w-[380px] aspect-[3/4] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[6px] md:border-[8px] border-white/60 shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-500">
              <img src="src/assets/your-photo.jpeg" alt="Profile" className="w-full h-full object-cover saturate-50 hover:saturate-100 transition-all duration-1000" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10, backgroundColor: "#ffffff" }}
              className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-[#F5F5DC]/50 border border-white/60 backdrop-blur-md flex flex-col items-center justify-center text-center transition-all group shadow-sm"
            >
              <h4 className="text-6xl md:text-6xl font-black text-blue-950 group-hover:text-blue-600 transition-colors">
                {stat.value}
              </h4>
              <p className="text-blue-900 font-mono text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mt-2 md:mt-3 font-black">
                {stat.label}
              </p>
              <p className="text-blue-900/70 text-xs md:text-sm mt-3 md:mt-4 font-bold leading-tight">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Infinite Marquee */}
      <div className="py-10 md:py-16 border-y border-white/20 bg-white/10 rotate-[-1deg] scale-105 overflow-hidden flex whitespace-nowrap z-10 relative backdrop-blur-sm">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-10 md:gap-20 text-2xl md:text-4xl font-black text-blue-950/10 uppercase italic"
        >
          <span>React.js • MongoDB • Python • Data Stats • UI Design • Creative Web • VJTI • React.js • MongoDB • Python • Data Stats • UI Design</span>
        </motion.div>
      </div>

      {/* Internship & Experience */}
      <section className="py-20 md:py-40 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 md:mb-24">
          <motion.div 
            whileHover={{ y: -8 }}
            className="lg:col-span-2 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-white/60 border border-white backdrop-blur-xl relative overflow-hidden group shadow-lg shadow-blue-900/5"
          >
            <div className="absolute top-0 right-0 p-4 md:p-8 text-6xl md:text-8xl text-blue-950/[0.03] group-hover:text-blue-950/[0.08] transition-opacity uppercase font-black">Exp</div>
            <span className="text-blue-600 font-mono text-[10px] uppercase font-bold tracking-widest">2024 - 2 months</span>
            <h3 className="text-3xl md:text-4xl font-black text-blue-950 mt-4 mb-4 md:mb-6 italic leading-tight">Data Analyst Intern</h3>
            <p className="text-blue-900/70 text-base md:text-lg leading-relaxed max-w-xl font-medium">
              I specialize in working with <span className="text-blue-600 font-bold italic">data and statistics</span> to bridge the gap between complex backend logic and beautiful user experiences.
            </p>
            
            <a 
              href="https://drive.google.com/file/d/1l1i-eGE6WltTYXavbhTsDVoKeSOtOfT1/view?usp=drivesdk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 md:mt-8 inline-block w-full md:w-auto text-center px-10 py-4 bg-blue-950 text-white rounded-full font-black hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-400/20"
            >
              View Certificate
            </a>
          </motion.div>

          <div className="p-8 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-[#17428d] to-[#102164] flex flex-col items-center justify-center text-center group overflow-hidden relative shadow-2xl h-[250px] lg:h-auto">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 12, ease: "linear" }} className="text-5xl md:text-7xl mb-4 md:mb-6 opacity-80">🐚</motion.div>
              <h4 className="text-white font-black text-lg md:text-xl tracking-tighter uppercase">Data Driven Design</h4>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Off Duty / Hobbies Section */}
        <div className="space-y-4 mb-8 md:mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase drop-shadow-sm">Off <span className="text-blue-900 italic font-serif font-light lowercase">duty.</span></h2>
          <p className="text-blue-700 italic text-lg md:text-xl font-medium px-1">finding balance by the shore...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[180px]">
          {/* Photography */}
          <motion.div whileHover={{ y: -5 }} className="md:col-span-2 rounded-[2rem] bg-[#F5F5DC]/40 border border-white/60 p-6 md:p-8 flex items-center gap-6 overflow-hidden relative group backdrop-blur-md">
            <span className="text-4xl md:text-5xl group-hover:rotate-12 transition-transform">📸</span>
            <div>
              <h5 className="text-blue-950 font-black text-lg md:text-xl uppercase">Photography</h5>
              <p className="text-blue-900/60 text-xs md:text-sm italic font-medium">Capturing the static beauty in a world of moving code.</p>
            </div>
          </motion.div>

          {/* Singing */}
          <motion.div whileHover={{ y: -5 }} className="bg-white/40 border border-white/60 rounded-[2rem] p-6 flex flex-col justify-end backdrop-blur-md h-[150px] md:h-auto">
            <span className="text-3xl md:text-4xl">🎤</span>
            <h5 className="text-blue-950 font-black mt-2 uppercase text-xs md:text-sm">Singing</h5>
            <p className="text-blue-800/40 text-[9px] uppercase font-mono font-bold">Vocals that spark creativity.</p>
          </motion.div>

          {/* Melodies */}
          <motion.div whileHover={{ y: -5 }} className="md:row-span-2 bg-[#F5F5DC]/60 border border-white/60 rounded-[2rem] p-8 flex flex-col justify-end relative overflow-hidden backdrop-blur-md h-[200px] md:h-auto">
            <div className="absolute top-6 right-6 text-4xl opacity-5 text-blue-900">🎸</div>
            <span className="text-4xl">🎹</span>
            <h5 className="text-blue-950 font-black mt-2 uppercase text-lg md:text-xl">Melodies</h5>
            <p className="text-blue-900/60 text-xs md:text-sm italic mt-2 leading-snug font-medium">Translating emotions through keys and strings.</p>
          </motion.div>

          {/* Midfielder */}
          <motion.div whileHover={{ y: -5 }} className="md:col-span-2 bg-white/60 border border-white/80 rounded-[2rem] p-6 md:p-8 flex flex-col justify-center backdrop-blur-md shadow-sm min-h-[150px]">
            <div className="flex items-center gap-4">
              <span className="text-3xl md:text-4xl">⚽</span>
              <h5 className="text-blue-950 font-black text-xl md:text-2xl font-serif italic">Midfielder</h5>
            </div>
            <p className="text-blue-900/60 text-sm md:text-base mt-2 font-medium">Mastering the pitch with tactical precision.</p>
          </motion.div>

          {/* Cooking */}
          <motion.div whileHover={{ y: -5 }} className="bg-white/40 border border-white/60 rounded-[2rem] p-6 flex flex-col justify-end backdrop-blur-md h-[150px] md:h-auto">
            <span className="text-3xl md:text-4xl">🍳</span>
            <h5 className="text-blue-950 font-black mt-2 uppercase text-xs md:text-sm">Cooking</h5>
            <p className="text-blue-800/40 text-[9px] uppercase font-mono font-bold">Experimenting with flavors.</p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block p-[1px] rounded-[2rem] bg-gradient-to-b from-white/60 to-transparent shadow-2xl w-full md:w-auto"
        >
          <div className="bg-white/40 backdrop-blur-xl px-6 md:px-12 py-10 rounded-[2rem] border border-white/40 group">
            <span className="text-3xl md:text-4xl mb-4 block group-hover:animate-bounce transition-transform">⛵</span>
            <h3 className="text-xl md:text-2xl font-black text-blue-950 mb-2 uppercase tracking-tighter">
              Ready to see what's next?
            </h3>
            <p className="text-sm md:text-base text-blue-900/60 font-medium italic mb-8">
              The tide is rising. Head back to the main island to continue the journey.
            </p>
            
            <NavLink 
              to="/" 
              className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-blue-950 text-white rounded-full font-black hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-400/20 active:scale-95"
            >
              RETURN TO SHORE
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </NavLink>
          </div>
        </motion.div>
      </section>

      <footer className="mt-20 md:mt-40 py-12 md:py-16 text-center border-t border-white/20 px-4">
         <p className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[1em] opacity-30">Shreya Rajguru Pawar // 2026</p>
      </footer>
    </div>
  );
};

export default About;