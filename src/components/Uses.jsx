import React from 'react'
import Navbar from './Navbar'
import styles from './Uses.module.css'
import Footer from './Footer'
import { motion } from 'framer-motion'

import Navbar_bottom from './Navbar_bottom'
import Laptop from './../assets/laptop1.png'
import DART from './../assets/dart.png'
import Github from './../assets/github.png'
import Git from './../assets/git.png'
import Postman from './../assets/postman.png'
import Slack from './../assets/slack.png'
import Vercel from './../assets/vercel.webp'
import AndriodS from './../assets/androidstudio.png'
import NPM from './../assets/npm.webp'
import VSCode from './../assets/vscode.png'
import Emulator from './../assets/emulator.png'

const Uses = () => {
  return (
    <>
      <Navbar />
      <div className={styles.uses_main_container}>
        <img src={Laptop} alt="" className={styles.laptop_image}/>
        <div>
          <h1 className={styles.laptopName}>Dell Letitude 5420 14''</h1>
        </div>
        <div className={styles.spesContainer}>
           <div className={styles.specBox}>
            16 GB
          </div>
         <div className={styles.specBox}>
            256 GB
          </div>
         <div className={styles.specBox}>
            11th Generation
          </div>
         <div className={styles.specBox}>
            Core i5
          </div>
         <div className={styles.specBox}>
            Windows 11 Pro
          </div>
        </div>
        <h1 className={styles.laptopName}>Tools</h1>
        <div className={styles.tools_main_container}>
          <div className={styles.tool_one}>
            <img src={Postman} alt="" className={styles.tools_images}/>
          </div>
          <div className={styles.tool_one}>
            <img src={Vercel} alt="" className={styles.tools_images}/>
          </div>
          <div className={styles.tool_one}>
            <img src={Slack} alt="" className={styles.tools_images}/>
          </div>
          <div className={styles.tool_one}>
            <img src={DART} alt="" className={styles.tools_images}/>
          </div>
          <div className={styles.tool_one}>
            <img src={AndriodS} alt="" className={styles.tools_images}/>
          </div>
          <div className={styles.tool_one}>
            <img src={VSCode} alt="" className={styles.tools_images}/>
          </div>
          <div className={styles.tool_one}>
            <img src={DART} alt="" className={styles.tools_images}/>
          </div>
          <div className={styles.tool_one}>
            <img src={Emulator} alt="" className={styles.tools_images}/>
          </div>
          <div className={styles.tool_one}>
            <img src={NPM} alt="" className={styles.tools_images}/>
          </div>
          <div className={styles.tool_one}>
            <img src={Git} alt="" className={styles.tools_images}/>
          </div>
          <div className={styles.tool_one}>
            <img src={Github} alt="" className={styles.tools_images}/>
          </div>
        </div>
      </div>
      <Navbar_bottom/>
      <Footer />
    </>
  )
}

export default Uses
