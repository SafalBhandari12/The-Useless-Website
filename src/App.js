import React, { useState, memo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import sitesList from "./sitesList";

// Memoized Floating Cube component to prevent unnecessary re-renders
const FloatingCube = memo(({ delay, style }) => (
  <div
    className='absolute w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 rounded-lg'
    style={{
      ...style,
      animation: `float 6s ease-in-out ${delay} infinite`,
      transform: "rotate(45deg)",
    }}
  />
));

const App = () => {
  const [buttonText, setButtonText] = useState({
    main: "🚀 DISCOVER",
    sub: "Click to explore",
  });
  const [clickCount, setClickCount] = useState(0);

  // CSS styles for animations
  const styles = `
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(45deg); }
      50% { transform: translateY(-20px) rotate(60deg); }
    }
  `;

  const buttonVariants = [
    { main: "🚀 DISCOVER", sub: "Find hidden web gems" },
    { main: "🎉 SURPRISE ME", sub: "I'm feeling adventurous" },
    { main: "🔮 REVEAL", sub: "Uncover digital magic" },
    { main: "🌈 WHIMSICAL", sub: "Show me wonder" },
    { main: "✨ ANOTHER", sub: "Keep the magic coming" },
  ];

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const handleClick = () => {
    const randomSite = sitesList[Math.floor(Math.random() * sitesList.length)];
    window.open(randomSite, "_blank");
    setClickCount((prev) => (prev + 1) % buttonVariants.length);
    setButtonText(buttonVariants[clickCount]);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center text-center px-4 overflow-hidden'>
      <style>{styles}</style>

      {/* Particle Background */}
      <div className='absolute inset-0 opacity-30'>
        <Particles
          init={particlesInit}
          options={{
            particles: {
              number: { value: 50 },
              move: { enable: true, speed: 1 },
              size: { value: 1 },
              opacity: { value: 0.3 },
            },
          }}
        />
      </div>

      {/* Floating Cubes with Stable Animations */}
      <FloatingCube delay='0s' style={{ top: "20%", left: "10%" }} />
      <FloatingCube delay='2s' style={{ top: "70%", right: "15%" }} />
      <FloatingCube delay='4s' style={{ top: "40%", right: "25%" }} />

      {/* Main Content */}
      <div className='relative z-10 space-y-8'>
        <h1 className='text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
          <span className='block mb-2'>Useless</span>
          <span className='block text-7xl font-extrabold'>Websites</span>
        </h1>

        <p className='text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed'>
          Explore our curated collection of quirky digital experiences. Each
          click unveils a unique, whimsical web creation - perfect for sparking
          joy or satisfying curiosity
        </p>

        {/* Stable Interactive Button */}
        <div className='space-y-4'>
          <button
            onClick={handleClick}
            className='relative px-12 py-6 text-2xl font-bold rounded-2xl transition-all duration-300
              bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500
              shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 text-white border-2 border-blue-300/20
              before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-400/20 before:to-purple-400/20 before:blur-md
              active:scale-95'
          >
            <span className='relative z-10 flex items-center justify-center gap-2'>
              <span className='animate-wiggle'>
                {buttonText.main.split(" ")[0]}
              </span>
              <span className='text-3xl'>{buttonText.main.split(" ")[1]}</span>
            </span>
            <div className='absolute inset-0 bg-blue-500/10 rounded-2xl animate-pulse' />
          </button>

          <p className='text-gray-400 text-sm font-mono italic'>
            {buttonText.sub}
          </p>
        </div>
      </div>

      <div className='absolute bottom-8 text-gray-400 text-sm'>
        Curated with ❤️ | {sitesList.length} experiences and counting
      </div>
    </div>
  );
};

export default App;
