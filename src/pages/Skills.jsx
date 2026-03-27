import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom'; 

const TechCard = ({ category, subtitle, skills, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="group relative p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-[#F5F5DC]/40 border-b-4 border-white/60 backdrop-blur-md shadow-xl shadow-blue-900/10 overflow-hidden h-full transition-all duration-500 hover:bg-white/80"
  >
    <div className="absolute inset-0 border-t-2 border-l-2 border-transparent group-hover:border-t-blue-400 group-hover:border-l-blue-200 transition-all duration-700 opacity-30 rounded-[1.5rem] md:rounded-[2rem]" />
    
    <div className="relative z-10">
      <div className="mb-4 md:mb-6">
        <span className="font-mono text-blue-700 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] mb-1 block font-black">
          {subtitle}
        </span>
        <h3 className="text-lg md:text-xl font-serif italic text-blue-900/40 group-hover:text-blue-900 transition-colors">
          {category}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-x-3 md:gap-x-5 gap-y-2 mb-6 md:mb-8">
        {skills.map((skill, i) => (
          <motion.span 
            key={i} 
            whileHover={{ scale: 1.1, color: '#0077b6' }}
            className="text-lg md:text-2xl font-bold text-blue-950 tracking-tight uppercase cursor-default transition-all duration-200"
          >
            {skill}{i !== skills.length - 1 && <span className="ml-3 md:ml-5 text-blue-200/50 font-light">/</span>}
          </motion.span>
        ))}
      </div>
      
      <p className="text-blue-900/60 text-xs md:text-sm font-medium leading-relaxed border-t border-blue-100 pt-4 md:pt-6 group-hover:text-blue-900 transition-colors">
        {description}
      </p>
    </div>
  </motion.div>
);

const Skills = () => {
  const softSkills = [
    { id: "01", title: "Problem Solving", proof: "Architecting logical data-flow systems like AirAware to navigate complex environmental variables." },
    { id: "02", title: "Leadership", proof: "Steering technical sprints and smart-contract coordination for the Cura art platform." },
    { id: "03", title: "Teamwork", proof: "Harmonizing dev and design workflows for service ecosystems like the Right to Repair project." },
    { id: "04", title: "Communication", proof: "Clarifying technical complexity for stakeholders through transparent speeches and documentation." }
  ];

  return (
    <div className="min-h-screen bg-[#87CEEB] pt-24 md:pt-32 pb-24 selection:bg-blue-200 text-blue-950 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#F5F5DC] via-[#FAF9F6] to-transparent opacity-90" />
        <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-white/30 blur-[100px] md:blur-[150px] rounded-full" />
        <motion.div 
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-[40%] left-[-10%] w-[120%] h-[150px] md:h-[200px] bg-white/40 blur-[80px] md:blur-[100px] skew-y-[-2deg]" 
        />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-12 md:mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] mb-4 bg-blue-900/20 w-fit px-4 py-1 rounded-full backdrop-blur-sm"
          >
            Capabilities Matrix // VJTI Mumbai
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] md:leading-none mb-4 drop-shadow-lg"
          >
            <span className="text-[#F5F5DC]">Technical</span> <br />
            <span className="bg-gradient-to-r from-[#4191bc] via-[#17428d] to-[#102164] bg-clip-text text-transparent italic font-serif font-light">
                Arsenal.
            </span>
          </motion.h1>
        </div>

        {/* Technical Arsenal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24 md:mb-40">
          <TechCard 
            subtitle="Logic" category="Backend Architecture" 
            skills={["Python", "Java"]} 
            description="Developing high-availability systems with focused optimization for enterprise-scale logic." 
            delay={0.1} 
          />
          <TechCard 
            subtitle="Interface" category="Frontend Design" 
            skills={["React", "ThreeJS", "Tailwind", "HTML", "CSS"]} 
            description="Engineering immersive 3D interfaces with a focus on fluidity, foam, and aesthetic precision." 
            delay={0.2} 
          />
          <TechCard 
            subtitle="Systems" category="Data Infrastructure" 
            skills={["MySQL", "MongoDB"]} 
            description="Architecting secure, high-performance data environments with sub-second retrieval." 
            delay={0.3} 
          />
          <TechCard 
            subtitle="Horizon" category="DevOps & Cloud" 
            skills={["Git", "GitHub", "Cloud", "Deployment"]} 
            description="Ensuring zero-downtime production delivery through rigorous version control and cloud management." 
            delay={0.4} 
          />
        </div>

        {/* Soft Skills Section */}
        <div className="space-y-12 md:space-y-16">
          <div className="relative">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-blue-950"
            >
              Soft <span className="text-[#0077b6] italic font-serif font-light lowercase">Skills.</span>
            </motion.h2>
            <div className="h-1.5 md:h-2 w-full mt-4 bg-gradient-to-r from-[#003049] via-[#0077b6] via-[#ade8f4] to-[#F5F5DC] rounded-full shadow-inner opacity-60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, backgroundColor: "#F5F5DC" }}
                className="p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/40 border border-white/60 transition-all group shadow-sm hover:shadow-xl hover:shadow-blue-200"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="font-mono text-blue-700 text-[10px] md:text-xs mt-1 md:mt-2 font-black">{skill.id}</span>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold uppercase tracking-tight text-blue-950 mb-2 md:mb-3 group-hover:text-[#0077b6] transition-colors">
                      {skill.title}
                    </h4>
                    <p className="text-sm md:text-base text-blue-900/60 font-serif italic leading-relaxed group-hover:text-blue-900">
                      "{skill.proof}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center relative z-10 mt-12 md:mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block p-[1px] rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-b from-white/60 to-transparent shadow-2xl w-full md:w-auto"
        >
          <div className="bg-white/40 backdrop-blur-xl px-6 py-10 md:px-12 md:py-10 rounded-[1.5rem] md:rounded-[2rem] border border-white/40 group">
            <span className="text-3xl md:text-4xl mb-4 block group-hover:rotate-12 transition-transform">🧭</span>
            <h3 className="text-xl md:text-2xl font-black text-blue-950 mb-2 uppercase tracking-tighter">
              Equipped for the voyage?
            </h3>
            <p className="text-sm md:text-blue-900/60 font-medium italic mb-8">
              The tools are sharp and the compass is set. Let's head back to the map to choose our next destination.
            </p>
            
            <NavLink 
              to="/" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-950 text-white rounded-full font-black hover:bg-[#0077b6] transition-all shadow-lg hover:shadow-blue-400/20 active:scale-95 w-full md:w-auto"
            >
              CHART THE COURSE
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </NavLink>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-12 md:py-16 border-t border-white/20 text-center bg-[#F5F5DC]/50">
        <p className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[1em] text-blue-900/40 px-4">
          Shreya Rajguru Pawar // VJTI Mumbai
        </p>
      </footer>
    </div>
  );
};

export default Skills;