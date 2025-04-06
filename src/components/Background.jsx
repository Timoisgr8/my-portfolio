import React from 'react';

const Background = React.memo(() => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-0">
      {/* Background with stars */}
      <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black relative">
        {/* Floating Stars */}
        <div className="absolute w-full h-full pointer-events-none">
          {Array.from({ length: 100 }).map((_, i) => {
            const xVelocity = (Math.random() * 0.1 - 0.05); // Slower movement
            const yVelocity = (Math.random() * 0.1 - 0.05); // Slower movement
            const size = Math.random() * 4 + 1; // Smaller size for stars
            const duration = 10 + Math.random() * 10; // Longer duration for slow movement
            const opacity = Math.random() * 0.4 + 0.1; // Low opacity for subtlety

            const animationName = `moveStar_${i}`;
            const animationStyles = `
              @keyframes moveStar_${i} {
                0% {
                  transform: translate(0, 0);
                  opacity: ${opacity};
                }
                100% {
                  transform: translate(${xVelocity * 100}vw, ${yVelocity * 100}vh);
                  opacity: ${opacity};
                }
              }
            `;

            return (
              <div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `${animationName} ${duration}s linear infinite`,
                  position: 'absolute',
                }}
              >
                <style>{animationStyles}</style>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Background;