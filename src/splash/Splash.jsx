import React from "react";
import AnimatedStarfield from "../animations/AnimatedStarfield"; 
import Logo from './../assets/logo_main.png'


const Splash = () => {

  return (
    <div style={styles.container}>
      <AnimatedStarfield />
      {/* Overlay to center content */}
      <div style={styles.overlay}>
        {/* Animated AB text */}
        <div style={styles.logoContainer}>
          <img src={Logo} alt="" width={130} height={130} style={styles.logo}/>
        </div>
        {/* Loading bar */}
        <div style={styles.loaderContainer}>
          <div style={styles.loader}></div>
        </div>
      </div>
    </div>
  );
};


const styles = {
  container: {
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    background: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    zIndex: 10,
  },
  logoContainer: {
    animation: "pulse 1.5s ease-in-out infinite",
  },
  logo: {
    filter: "drop-shadow(0 0 20px rgba(102, 126, 234, 0.5))",
  },
  loaderContainer: {
    width: "60%",
    height: "4px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "10px",
    overflow: "hidden",
  },
  loader: {
    height: "100%",
    background: "linear-gradient(90deg, #667eea, #764ba2)",
    borderRadius: "10px",
    animation: "loading 2s ease-in-out infinite",
    width: "0%",
  },
};


export default Splash;

// Add CSS animations
const splashStyles = `
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
}

@keyframes loading {
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 80%;
  }
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = splashStyles;
  document.head.appendChild(styleSheet);
}