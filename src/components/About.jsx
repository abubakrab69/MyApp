import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import Myimage from "./../assets/aboutimage.jpeg";
import Footer from "./Footer";
import { motion } from "framer-motion";
import Logo from "./../assets/logo_main.png";
import Navbar_bottom from "./Navbar_bottom";
const AboutMe = () => {
  return (
    <>
      <Navbar />
      <section className="about-me" id="about-me">
        <motion.div className="container"
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          <div className="about-me-container">
            <div className="about-me-title">
              About <br /> Abu Bakr
            </div>
            <div className="about-me-flex-container">
              <div className="about-me-image">
                <div className="back-div"></div>
                <div className="black-image">
                  <img src={Myimage} alt="black" />
                </div>
                <div className="main-image">
                  <img src={Myimage} alt="smit" />
                </div>
              </div>
              <div className="about-me-content">
                <div className="logo">
                  <h1 className="logoAB">
                    <img src={Logo} alt="logo"/>
                  </h1>
                </div>
                <div className="text">
                  An ambitious Mobile App and Web Developer who takes great
                  pride in the presentation and quality of work.
                  <br /> <br />
                  Abu Bakr is someone who can design and create simple, beautiful and
                  easy to understand things. He is an expert at taking designs
                  into original, exciting and new directions.
                </div>
              </div>
            </div>
            <div className="mail-button mail-button2">
  <a
    href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=abubakr.ab69@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/mail.svg"
      alt="mail"
    />
  </a>
</div>
          </div>
          <div>
  <h1 className='contribution_heading'>Contributions</h1>
  <img src="https://ghchart.rshah.org/abubakrab69" alt=""/>
</div>
        </motion.div>
      </section>
      <Navbar_bottom/>
      <Footer />
    </>
  );
};

export default AboutMe;
