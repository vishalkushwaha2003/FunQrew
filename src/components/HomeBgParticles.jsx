import  { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// Make sure to import the loadSlim function from the correct package
import { loadSlim } from "@tsparticles/slim";
import { height } from "@mui/system";

const HomeBgParticles = () => {
  const [init, setInit] = useState(false);

  // This should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the slim version of tsParticles
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Function to handle particles being loaded
  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    // Ensure to wrap the Particles component in parentheses to avoid syntax errors
    // Render the Particles component only when init is true
    init && (
      <div className="particles-container">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            style:{
                height: "100vh",
                width: "100vw",
              },
            

            background: {
              color: {
                value: "none",
              },
            },

            fullScreen: {
              enable: false,
            },

            fpsLimit: 300,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 5,
                },
                repulse: {
                  distance: 100,
                  duration: 3,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 200,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 400,
                },
                value: 150,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    )
  );
};

export default HomeBgParticles;
