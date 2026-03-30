import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom'; 

const projectData = [
  {
    id: "01",
    title: "Cura",
    subtitle: "Blockchain Art Auction",
    description: "A decentralized platform for digital artists to auction their masterpieces with smart contract security.",
    details: "Built with Solidity for secure bidding. Features include gas-optimized contracts, real-time bidding via WebSockets, and IPFS for decentralized storage.",
    icon: "🎨",
    tags: ["Solidity", "React", "Ether.js"],
    repoLink: "https://github.com/Shreya-R-Pawar/Inheritance-"
  },
  {
    id: "02",
    title: "CloudGuard",
    subtitle: "Cloud Monitoring SaaS",
    description: "Real-time infrastructure tracking and threat detection for cloud-native applications.",
    details: "Integrated Prometheus metrics with a custom Node.js dashboard, running in isolated Docker containers for high scalability and security.",
    icon: "☁️",
    tags: ["AWS", "Node.js", "Docker"],
    repoLink: "https://github.com/Shreya-R-Pawar/cloudguard"
  },
  {
    id: "03",
    title: "CookBook",
    subtitle: "Android Recipe Helper",
    description: "AI-powered kitchen assistant suggesting recipes based on available ingredients.",
    details: "Utilizes a TensorFlow Lite model for ingredient recognition and Firebase for real-time data synchronization across mobile devices.",
    icon: "🥘",
    tags: ["Kotlin", "Firebase", "TensorFlow"],
    repoLink: "https://github.com/Shreya-R-Pawar/cookbook"
  }
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projectData.find(p => p.id === selectedId);

  return (
    <main className="w-full min-h-screen bg-[#87CEEB] text-blue-950 font-sans overflow-x-hidden pt-24 pb-20 selection:bg-blue-200">
      
      {/* Background Beach Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-white/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#F5F5DC] via-[#F5F5DC]/40 to-transparent opacity-80" />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 text-[20vw] font-black uppercase tracking-tighter select-none">
          OCEAN
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter"
          >
            My <span className="text-white drop-shadow-md">PROJECTS</span>
          </motion.h1>
          <p className="text-blue-900/60 mt-4 font-bold tracking-[0.3em] uppercase text-xs">Artifacts from the Depths</p>
        </header>

        {/* Project Grid - Fully Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectData.map((project) => (
            <motion.div
              layoutId={`card-${project.id}`}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              whileHover={{ y: -10 }}
              className="bg-white/40 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/60 cursor-pointer shadow-xl group flex flex-col items-center text-center"
            >
              <motion.div layoutId={`icon-${project.id}`} className="text-6xl mb-6 group-hover:scale-110 transition-transform">{project.icon}</motion.div>
              <motion.h2 layoutId={`title-${project.id}`} className="text-3xl font-black uppercase mb-1 text-blue-950">{project.title}</motion.h2>
              <p className="text-blue-600 font-bold text-[10px] tracking-widest uppercase mb-4">{project.subtitle}</p>
              <p className="text-blue-900/70 text-sm leading-relaxed line-clamp-2 font-medium">{project.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Modal Logic */}
        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
              
              {/* SEA GLASS BACKDROP */}
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-[#102164]/20 backdrop-blur-[15px] cursor-zoom-out"
              />
              
              {/* THE TREASURE BOX (Modal) */}
              <motion.div 
                layoutId={`card-${selectedId}`}
                className="relative bg-white/90 w-full max-w-lg md:max-w-xl rounded-[2.5rem] p-8 md:p-12 border border-white shadow-2xl overflow-hidden overflow-y-auto max-h-[90vh] md:max-h-none"
              >
                {/* WHITE & AZURE ORBITING GLOW (The "Sea Spray" effect) */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <div className="glow-bloom-sea" />
                  <div className="glow-orbit-sea" />
                </div>

                <div className="absolute inset-[2px] bg-white rounded-[2.4rem] z-10" />

                <div className="relative z-20 flex flex-col items-center text-center">
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute -top-4 -right-2 text-blue-950/20 hover:text-blue-950 text-2xl font-black transition-colors"
                  >✕</button>

                  <motion.div layoutId={`icon-${selectedId}`} className="text-7xl mb-4">{selectedProject.icon}</motion.div>
                  <motion.h2 layoutId={`title-${selectedId}`} className="text-4xl font-black uppercase mb-1 text-blue-950">{selectedProject.title}</motion.h2>
                  <h3 className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-6">{selectedProject.subtitle}</h3>
                  
                  <div className="space-y-6 w-full">
                    <p className="text-lg text-blue-900/80 leading-relaxed font-semibold px-2">
                      {selectedProject.description}
                    </p>
                    <div className="bg-[#F5F5DC]/60 p-6 rounded-[2rem] border border-blue-900/5 text-left">
                      <p className="text-blue-600 text-[10px] font-black uppercase mb-2 font-mono tracking-widest">Tech Spec</p>
                      <p className="text-blue-900/70 text-base leading-relaxed italic font-medium">{selectedProject.details}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 w-full">
                    <a 
                      href={selectedProject.repoLink} target="_blank" rel="noreferrer"
                      className="bg-blue-950 text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg active:scale-95 text-xs"
                    >
                      Retrieve Repository
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        /* Sea Spray Orbit */
        .glow-orbit-sea {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200%;
          height: 200%;
          transform: translate(-50%, -50%);
          background: conic-gradient(
            transparent, 
            white 5%, 
            rgba(0, 114, 255, 0.4) 30%, 
            transparent 100%
          );
          animation: rotateGlow 4s linear infinite;
        }

        .glow-bloom-sea {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 150%;
          height: 150%;
          transform: translate(-50%, -50%);
          background: conic-gradient(
            transparent, 
            rgba(255, 255, 255, 0.8) 10%, 
            transparent 70%
          );
          filter: blur(20px);
          animation: rotateGlow 4s linear infinite;
        }

        @keyframes rotateGlow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </main>
  );
};

export default Projects;