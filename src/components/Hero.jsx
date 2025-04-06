import React, { useMemo } from 'react';

function Hero() {
  const stars = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => {
      // Generate random properties for velocity, direction, size, etc.
      const xVelocity = Math.random() * 2 - 1; // Random direction: -1 to 1
      const yVelocity = Math.random() * 2 - 1; // Random direction: -1 to 1
      const size = Math.random() * 4 + 2; // Random size between 2 and 6px
      const duration = 4 + Math.random() * 6; // Random duration between 4s and 10s
      const movementType = Math.floor(Math.random() * 5); // Adjusted to have more curved movements

      let animationName = `moveStar_${i}`;
      let animationStyles = `
        @keyframes moveStar_${i} {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translate(${xVelocity * 100}vw, ${yVelocity * 100}vh);
            opacity: 0;
          }
        }
      `;

      // Add easing functions to each movement type

      if (movementType === 0) {
        // Linear movement (no easing)
        animationStyles = `
          @keyframes moveStar_${i} {
            0% {
              transform: translate(0, 0);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              transform: translate(${xVelocity * 100}vw, 0);
              opacity: 0;
            }
          }
          animation-timing-function: ease;
        `;
      } else if (movementType === 1) {
        // Floating like leaves (ease-in-out for smooth floating effect)
        animationStyles = `
          @keyframes moveStar_${i} {
            0% {
              transform: translate(${Math.random() * 100}vw, 0);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              transform: translate(${Math.random() * 100}vw, ${Math.random() * 100}vh);
              opacity: 0;
            }
          }
          animation-timing-function: ease-in-out;
        `;
      } else if (movementType === 2) {
        // Zigzag movement (ease-in for a quick start)
        animationStyles = `
          @keyframes moveStar_${i} {
            0% {
              transform: translate(0, 0);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              transform: translate(100vw, 0);
              opacity: 0;
            }
          }
          animation-timing-function: ease-in;
        `;
      } else if (movementType === 3) {
        // Curved movement: Sinusoidal curve (ease-out for smooth deceleration)
        animationStyles = `
          @keyframes moveStar_${i} {
            0% {
              transform: translate(0, 0);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              transform: translate(${Math.sin(Math.random() * 2 * Math.PI) * 150}vw, ${Math.cos(Math.random() * 2 * Math.PI) * 150}vh);
              opacity: 0;
            }
          }
          animation-timing-function: ease-out;
        `;
      } else if (movementType === 4) {
        // Curved movement: Parabolic curve (ease-in for quick rise)
        animationStyles = `
          @keyframes moveStar_${i} {
            0% {
              transform: translate(0, 0);
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              transform: translate(${Math.random() * 150}vw, ${Math.pow(Math.random(), 2) * 100}vh);
              opacity: 0;
            }
          }
          animation-timing-function: ease-in;
        `;
      }

      return (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `${animationName} ${duration}s infinite`,
            position: 'absolute',
          }}
        >
          <style>{animationStyles}</style>
        </div>
      );
    });
  }, []); // Empty dependency array ensures this is only computed once

  return (
    <div className="relative w-screen min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          {/* Floating Dots */}
          <div className="absolute w-full h-full pointer-events-none">
            {stars}
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm Timothy.<br />
          3rd Year Computer Science Student
        </h1>
        <a href="#about">
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
