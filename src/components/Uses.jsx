import React from 'react'
import Navbar from './Navbar'
import styles from './Uses.module.css'
import Footer from './Footer'
import { motion } from 'framer-motion'

import Navbar_bottom from './Navbar_bottom'
import Laptop from './../assets/laptop1.png'

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
      </div>
      <Navbar_bottom/>
      <Footer />
    </>
  )
}

export default Uses
