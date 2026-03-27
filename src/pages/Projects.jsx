import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom'; 
import Sky from '../models/Sky';

const projectData = [
  {
    id: "01",
    title: "Cura",
    subtitle: "Blockchain Art Auction",
    description: "A decentralized platform for digital artists to auction their masterpieces with smart contract security.",
    icon: "🎨",
    tags: ["Solidity", "React", "Ether.js"]
  },
  {
    id: "02",
    title: "CloudGuard",
    subtitle: "Cloud Monitoring SaaS",
    description: "Real-time infrastructure tracking and threat detection for cloud-native applications.",
    icon: "☁️",
    tags: ["AWS", "Node.js", "Docker"]
  },
  {
    id: "03",
    title: "CookBook",
    subtitle: "Android Recipe Helper",
    description: "AI-powered kitchen assistant suggesting recipes based on available ingredients.",
    icon: "🥘",
    tags: ["Kotlin", "Firebase", "TensorFlow"]
  }
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: index * 0.2 }}
    whileHover={{ y: -15 }}
    className="relative w-full max-w-[340px] md:max-w-[380px] h-[480px] md:h-[520px] m-4 md:m-6 flex flex-col items-center justify-between p-8 md:p-10 text-center group"
  >
    {/* Card Background */}
    <div className="absolute inset-0 bg-[#001d3d]/90 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl transition-all duration-500 group-hover:border-[#00c6ff]/50 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]" />
    
    <div className="relative z-10 w-full">
      {/* Project ID Counter */}
      <span className="absolute -top-4 -left-2 text-white/10 md:text-white/20 font-black text-5xl md:text-6xl italic group-hover:text-[#00c6ff]/30 transition-colors">
        {project.id}
      </span>

      <div className="text-5xl md:text-6xl mb-4 md:mb-6 mt-4 transition-transform duration-500 group-hover:scale-110">
        {project.icon}
      </div>
      
      <h2 className="text-3xl md:text-4xl font-black text-white mb-2 uppercase tracking-tighter">
        {project.title}
      </h2>
      <h3 className="text-[#00c6ff] font-bold text-[10px] md:text-xs mb-4 md:mb-6 uppercase tracking-[0.3em]">
        {project.subtitle}
      </h3>
      
      <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-6 px-2">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] md:text-[10px] text-white/50 uppercase font-bold">
            {tag}
          </span>
        ))}
      </div>
    </div>

    <button className="relative z-10 w-full py-4 bg-white text-[#001d3d] font-black rounded-2xl hover:bg-[#00c6ff] hover:text-white transition-all duration-300 shadow-lg uppercase text-[10px] md:text-xs tracking-widest overflow-hidden group/btn">
      <span className="relative z-10">Case Study</span>
      <div className="absolute inset-0 bg-[#00c6ff] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300" />
    </button>
  </motion.div>
);

const Projects = () => {
  return (
    <main className="w-full h-screen relative bg-[#0094FF] overflow-hidden font-sans">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40 md:opacity-60">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Sky />
          <ambientLight intensity={0.5} />
          <Float speed={3} rotationIntensity={1} floatIntensity={2}>
            <mesh position={[-4, 2, -2]}>
              <sphereGeometry args={[1.2, 32, 32]} />
              <MeshDistortMaterial color="#00c6ff" speed={2} distort={0.5} opacity={0.2} transparent />
            </mesh>
          </Float>
        </Canvas>
      </div>

      {/* Huge Background Text - Hidden or scaled on mobile */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-white/[0.03] text-[30vw] md:text-[20vw] font-black uppercase tracking-tighter leading-none">
          WORK
        </h1>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col items-center overflow-y-auto pt-20 md:pt-32 pb-20 px-4 md:px-6 custom-scrollbar">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-16"
        >
          <h1 className="text-white text-4xl md:text-8xl font-black uppercase tracking-tighter leading-tight md:leading-none px-4">
            My <span className="text-transparent stroke-text">PROJECTS</span>
          </h1>
          <p className="text-white/60 mt-4 font-medium tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs">
            Showcasing Digital Experiences
          </p>
        </motion.div>

        {/* Responsive Grid/Flex wrapper */}
        <div className="flex flex-wrap justify-center items-center w-full max-w-7xl">
          {projectData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA Card */}
        <section className="py-16 md:py-24 w-full max-w-4xl mx-auto text-center relative z-10 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block p-[1px] rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-b from-white/40 to-transparent shadow-2xl w-full"
          >
            <div className="bg-[#001d3d]/80 backdrop-blur-xl px-6 py-10 md:px-12 md:py-10 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 group">
              <span className="text-3xl md:text-4xl mb-4 block group-hover:scale-125 transition-transform duration-500">💎</span>
              <h3 className="text-xl md:text-2xl font-black text-white mb-2 uppercase tracking-tighter">
                Discoveries made.
              </h3>
              <p className="text-sm md:text-base text-white/60 font-medium italic mb-8">
                Every project is a pearl found in the deep. Ready to surface and see the horizon again?
              </p>
              
              <NavLink 
                to="/" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#001d3d] rounded-full font-black hover:bg-[#00c6ff] hover:text-white transition-all shadow-lg active:scale-95 w-full md:w-auto"
              >
                BACK TO SURFACE
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </NavLink>
            </div>
          </motion.div>
        </section>

        {/* Final Contact Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-6 md:mt-10 text-center pb-20 px-4"
        >
          <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-4">Interested in collaborating?</p>
          <NavLink to="/contact" className="text-white text-2xl md:text-5xl font-black hover:text-[#00c6ff] transition-colors underline decoration-[#00c6ff] underline-offset-4 md:underline-offset-8 decoration-2 md:decoration-4">
            LET'S BUILD SOMETHING.
          </NavLink>
        </motion.div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px white;
        }
        @media (min-width: 768px) {
          .stroke-text {
            -webkit-text-stroke: 2px white;
          }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </main>
  );
};

export default Projects;