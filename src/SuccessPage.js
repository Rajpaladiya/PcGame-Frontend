import React, { useEffect } from 'react';

const SuccessPage = () => {
  useEffect(() => {
    // Initialize the particle animation
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: false,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      });
    }
  }, []);

  return (
    <div>
      <div id="particles-js"></div>
      <div className="container_success">
        <i className="success-icon">✔</i>
        <h1 style={{color:"green"}}>Success!</h1>
        <p className="success-message">Your action was completed successfully.</p>
        <a href="/" className="back-button">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;
