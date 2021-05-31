import Particles from "react-particles-js";

const Particle = () => {
    return ( 
      <div style={{
        position: "absolute",
      top:'100vh',
      left: 0,
      width: "100%",
      height: "100%"
      }}>
         <Particles
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 1500,
              },
              
              
            },
            line_linked: {
              enable: true,
              opacity: .1,
            },
            move: {
              direction: "none",
              speed: 1,
            },
            size: {
              value: 2,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: .1,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
    />
      </div>
       
     );
}
 
export default Particle;