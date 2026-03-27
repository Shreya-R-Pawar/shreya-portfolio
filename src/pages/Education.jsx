import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom'; 

const EducationCard = ({ year, school, degree, score, details, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="relative pl-6 md:pl-8 pb-12 border-l-2 border-white/30 last:pb-0"
  >
    {/* Timeline Dot */}
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#87CEEB]" />
    
    <div className="group bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-white shadow-xl shadow-blue-900/10 hover:bg-white transition-all duration-500 hover:-translate-y-2">
      <span className="text-[#906b2c] font-black text-lg md:text-2xl drop-shadow-sm mb-1 md:mb-2 block uppercase tracking-tighter">
        {year}
      </span>
      
      <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#003049] via-[#17428d] to-[#102164] bg-clip-text text-transparent mb-2 leading-tight">
        {school}
      </h3>
      
      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
        <span className="px-3 py-1 md:px-4 md:py-1 rounded-full bg-blue-100 text-blue-900 font-bold text-[10px] md:text-xs uppercase tracking-widest">
          {degree}
        </span>
        <span className="px-3 py-1 md:px-4 md:py-1 rounded-full bg-[#F5F5DC] text-blue-950 font-black text-[10px] md:text-xs uppercase tracking-widest shadow-sm">
          {score}
        </span>
      </div>

      <p className="text-sm md:text-base text-blue-900/70 font-medium leading-relaxed italic">
        {details}
      </p>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className="min-h-screen bg-[#87CEEB] pt-24 md:pt-32 pb-24 selection:bg-blue-200 text-blue-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#F5F5DC] via-[#FAF9F6]/20 to-transparent opacity-80" />
        <div className="absolute top-[-10%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/30 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      <section className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-blue-950/10 border border-white/40 text-blue-900 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] mb-4 md:mb-6 font-bold"
          >
            Academic Journey
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-4">
            <span className="text-[#F5F5DC] drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]">Learning</span> <br />
            <span className="bg-gradient-to-r from-[#003049] via-[#17428d] to-[#102164] bg-clip-text text-transparent italic font-serif font-light">
              Milestones.
            </span>
          </h1>
        </div>

        <div className="space-y-6 md:space-y-4">
          <EducationCard 
            year="2025 - Present"
            school="VJTI, Mumbai"
            degree="B.Tech in Computer Engineering"
            score="CGPA: 8.5"
            details="Currently diving deep into Advanced Algorithms, AI/ML, and Full-Stack Architectures at one of Maharashtra's premier engineering institutes."
            delay={0.1}
          />

          <EducationCard 
            year="2022 - 2025"
            school="Bhausaheb Vartak Polytechnic"
            degree="Diploma in Engineering"
            score="99% (Final Year)"
            details="Graduated from Vasai with a near-perfect score, building a rock-solid foundation in core computing and logic."
            delay={0.2}
          />

          <EducationCard 
            year="Passed out 2022"
            school="Ryan International School"
            degree="Secondary School (CBSE)"
            score="91%"
            details="Developed a keen interest in problem-solving and technology during my foundational schooling years."
            delay={0.3}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 max-w-7xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block p-[1px] rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-b from-white/60 to-transparent shadow-2xl w-full md:w-auto"
        >
          <div className="bg-white/40 backdrop-blur-xl px-6 py-10 md:px-12 md:py-10 rounded-[1.5rem] md:rounded-[2rem] border border-white/40 group">
            <span className="text-3xl md:text-4xl mb-4 block group-hover:animate-bounce transition-transform">⛵</span>
            <h3 className="text-xl md:text-2xl font-black text-blue-950 mb-2 uppercase tracking-tighter">
              Ready to see what's next?
            </h3>
            <p className="text-sm md:text-base text-blue-900/60 font-medium italic mb-8">
              The tide is rising. Head back to the main island to continue the journey.
            </p>
            
            <NavLink 
              to="/" 
              className="inline-flex items-center justify-center gap-3 px-6 py-4 md:px-8 md:py-4 bg-blue-950 text-white rounded-full font-black hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-400/20 active:scale-95 w-full md:w-auto text-sm md:text-base"
            >
              RETURN TO SHORE
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </NavLink>
          </div>
        </motion.div>
      </section>

      <footer className="mt-20 md:mt-40 py-12 md:py-16 border-t border-white/20 text-center px-4">
        <p className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[1em] opacity-30">
          Educational Roadmap // Shreya Pawar
        </p>
      </footer>
    </div>
  );
};

export default Education;