import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber' 
import { OrbitControls, PerformanceMonitor } from '@react-three/drei' // Added PerformanceMonitor here
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import BeachIsland from '../models/BeachIsland'
import FlyingBird from '../models/FlyingBird'
import Sky from '../models/Sky'

const Home = () => {
  const navigate = useNavigate();
  
  // --- PERFORMANCE STATE ---
  const [lowPriority, setLowPriority] = useState(false);

  const [introStage, setIntroStage] = useState(() => {
    return Number(sessionStorage.getItem('portfolioStage')) || 0;
  });

  const [isFlashing, setIsFlashing] = useState(false);
  const controlsRef = useRef();

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -2.5, 0];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.6, 0.6, 0.6]; 
      screenPosition = [0, -2, 0];    
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -2.5, 0];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [islandConfig, setIslandConfig] = useState(adjustIslandForScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setIslandConfig(adjustIslandForScreenSize());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stageContent = [
    { text: "Welcome to a digital corner of the Pacific... 🌴", btn: "Enter World" },
    { text: "I'm Shreya Pawar, a developer building bridges between imagination and reality.", btn: "Okay" },
    { text: "Every island has a history. Want to hear mine?", btn: "Read Archive", link: "/about" }, 
    { text: "Growth is a continuous voyage. Explore my academic milestones.", btn: "View Roadmap", link: "/education" }, 
    { text: "My toolkit is filled with modern tech to solve complex puzzles.", btn: "Check my Arsenal", link: "/skills" }, 
    { text: "The horizon is filled with artifacts I've built along the way.", btn: "Inspect Projects", link: "/projects" },
    { text: "The signal is strong. Ready to start a mission together?", btn: "Send Signal", link: "/contact" },
    { text: "The journey is yours now. Thanks for exploring! ✨", btn: "Restart", isEnd: true }
  ];

  const handleNextStage = () => {
    const current = stageContent[introStage];
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 600);

    if (current.isEnd) {
      setIntroStage(0);
      sessionStorage.setItem('portfolioStage', 0);
      return;
    }

    const nextStage = introStage + 1;
    sessionStorage.setItem('portfolioStage', nextStage);
    
    if (current.link) {
      navigate(current.link);
    } else {
      setIntroStage(nextStage);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault(); 
        handleNextStage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [introStage]);

  return (
    <section className="w-full h-screen relative overflow-hidden bg-[#0094FF]">
      <div className={`absolute inset-0 bg-white z-[60] pointer-events-none transition-opacity duration-700 ${isFlashing ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className="absolute top-10 md:top-20 left-0 right-0 z-10 flex items-center justify-center pointer-events-none px-6">
        <div key={introStage} className="relative pointer-events-auto flex flex-col items-center animate-pop-in w-full max-w-[450px]">
          <div className="portfolio-msg-box p-6 md:p-7 rounded-[2rem] border-[3px] border-white shadow-[0_15px_40px_rgba(0,0,0,0.2)] text-center text-white">
            <p className="text-sm md:text-lg font-medium leading-relaxed mb-5 px-2">
              {stageContent[introStage].text}
            </p>
            <button 
              onClick={handleNextStage}
              className="group inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-2.5 font-bold text-sm md:text-base text-blue-600 bg-white rounded-full shadow-lg hover:bg-[#00c6ff] hover:text-white transition-all duration-300 active:scale-95 animate-button-pulse"
            >
              {stageContent[introStage].btn}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">➜</span>
            </button>
          </div>
          <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[15px] border-t-white drop-shadow-md"></div>
        </div>
      </div>

      <Canvas 
        className="w-full h-screen bg-transparent" 
        camera={{ near: 0.1, far: 1000, position: [0, 5, 20] }}
        dpr={[1, 2]} 
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        {/* The Monitor starts watching here */}
        <PerformanceMonitor onDecline={() => setLowPriority(true)}>
          <Sky />
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={lowPriority ? 1 : 0.7} /> {/* Simplify lighting if lagging */}
            <directionalLight position={[3, 5, 7]} intensity={1.5} /> 
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
            
            <BeachIsland 
              position={islandConfig[1]} 
              scale={islandConfig[0]} 
              rotation={islandConfig[2]} 
            />
            
            {/* If the device is struggling (lowPriority), we stop the bird to save CPU */}
            {!lowPriority && <FlyingBird />}
            
            <OrbitControls 
              ref={controlsRef} 
              autoRotate 
              autoRotateSpeed={0.5} 
              enableZoom={false} 
              enableRotate={true} 
              enablePan={false} 
            />
          </Suspense>
        </PerformanceMonitor>
      </Canvas>

      <style jsx>{`
        .portfolio-msg-box {
          background: linear-gradient(135deg, #0072ff 0%, #00c6ff 100%);
        }
        .animate-pop-in {
          animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-button-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.9) translateY(-10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
      `}</style>
    </section>
  )
}

export default Home;