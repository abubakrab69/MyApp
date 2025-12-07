import React from "react";
import { motion } from "framer-motion";
import AnimatedStarfield from "../animations/AnimatedStarfield"; // adjust path
import Logo from './../assets/logo_main.png'

const Splash = () => {
  return (
    <div style={styles.container}>
      {/* Animated starfield background */}
      <AnimatedStarfield />
      {/* Overlay to center content */}
      <div style={styles.overlay}>
        {/* Animated AB text */}
        <motion.h1
          style={styles.text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={Logo} alt="" width={130} height={130}/>
        </motion.h1>
        {/* Loading bar */}
        <motion.div
          style={styles.loader}
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
  text: {
    fontSize: "70px",
    fontWeight: "800",
    letterSpacing: "4px",
    color: "white",
  },
  loader: {
    height: "4px",
    background: "white",
    borderRadius: "10px",
    width: "60%",
    overflow: "hidden",
  },
};

export default Splash;
