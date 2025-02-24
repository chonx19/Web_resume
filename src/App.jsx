import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#f5f5f5",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#333333",
            },
            links: {
              color: "#333333",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="app-wrapper"
      >
        <div className="container">
          <Sidebar />
          <MainContent />
        </div>
      </motion.div>
    </>
  );
}

export default App;
