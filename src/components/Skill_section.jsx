import React from 'react'
import Navbar from './Navbar'
import styles from './Skills.module.css'
import Footer from './Footer'
import { motion } from 'framer-motion'

import HTML from './../assets/html.png'
import CSS from './../assets/css.png'
import JS from './../assets/js.png'
import REACT from './../assets/react1.png'
import Bootstrap from './../assets/bootstrap.png'
import Navbar_bottom from './Navbar_bottom'
import Flutter from './../assets/flutter_icon.webp'
import Tailwind from './../assets/tailwindcss.jpg'

const SkillSection = () => {
  return (
    <>
      <Navbar />
      <div className={styles.skill_main}>
        <h1 className={styles.skill_name}>skills</h1>
        <motion.div
          className={styles.skill_box}
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className={styles.box_one}>
            <img src={HTML} alt="" loading='lazy' className={styles.skill_icons} />
          </div>
          <div className={styles.box_one}>
            <img src={CSS} alt="" loading='lazy' className={styles.skill_icons} />
          </div>
          <div className={styles.box_one}>
            <img src={JS} alt="" loading='lazy' className={styles.skill_icons} />
          </div>
          <div className={styles.box_one}>
            <img src={Bootstrap} alt="" loading='lazy' className={styles.skill_icons} />
          </div>
          <div className={styles.box_one}>
            <img src={REACT} alt="" loading='lazy' className={styles.skill_icons} />
          </div>
          <div className={styles.box_one}>
            <img src={Flutter} alt="" loading='lazy' className={styles.skill_icons} />
          </div>
          <div className={styles.box_one}>
            <img src={Tailwind} alt="" loading='lazy' className={styles.skill_icons}/>
          </div>
        </motion.div>
        <motion.div
          className={styles.skill_box}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className={styles.box_one}>
            <img src="https://smit-prajapati.github.io/prajapatismit/images/html.png" alt="" loading='lazy' className={styles.skill_icons} />
          </div>
          <div className={styles.box_one}>
            <img src="https://smit-prajapati.github.io/prajapatismit/images/css.png" alt="" loading='lazy' className={styles.skill_icons} />
          </div>
          <div className={styles.box_one}>
            <img src="https://smit-prajapati.github.io/prajapatismit/images/js.png" alt="" loading='lazy' className={styles.skill_icons} />
          </div>
          <div className={styles.box_one}>
            <img src="https://smit-prajapati.github.io/prajapatismit/images/js.png" alt="" loading='lazy' className={styles.skill_icons} />
          </div>
          <div className={styles.box_one}>
            <img src="https://smit-prajapati.github.io/prajapatismit/images/js.png" alt="" loading='lazy' className={styles.skill_icons} />
          </div>
          <div className={styles.box_one}>
            <img src="https://smit-prajapati.github.io/prajapatismit/images/js.png" alt="" loading='lazy' className={styles.skill_icons} />
          </div>
          <div className={styles.box_one}>
            <img src="https://smit-prajapati.github.io/prajapatismit/images/js.png" alt="" loading='lazy' className={styles.skill_icons} />
          </div>
        </motion.div>
      </div>
      <Navbar_bottom/>
      <Footer />
    </>
  )
}

export default SkillSection
