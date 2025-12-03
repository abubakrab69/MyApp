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
      </div>
      <Navbar_bottom/>
      <Footer />
    </>
  )
}

export default Uses
