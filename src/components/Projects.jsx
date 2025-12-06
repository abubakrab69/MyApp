import React from 'react'
import Navbar from './Navbar'
import styles from './Project.module.css'

import Chaidocs from './../assets/Chiadocs.png'
import Nova from './../assets/Nova.png'
import Skillgrow from './../assets/Skillgrow.png'
import icoder from './../assets/icoder.png'
import Hurst from './../assets/Hurst.png'
import Myntra from './../assets/myntra.png'
import Footer from './Footer'
import WeatherApp from './../assets/WeatherApp.png'
import Calculator from './../assets/Calculator.png'
import TicTacToe from './../assets/TicTacToe.png'
import TodoList from './../assets/TodoList.png'
import RPS from './../assets/RPS.png'
import Navbar_bottom from './Navbar_bottom'

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className={styles.project_cover}>
        <div className={`${styles.project_inner} ${styles.container_80}`}>
          <h1 className={styles.project_title}>Projects</h1>
          <div className={styles.project_container}>
            {/* First Row */}
            <div className={styles.project_first_line}>
              <a href="https://chai-code-abubakr.netlify.app" target="_blank" rel="noreferrer" className={styles.outer_link}>
                <div className={styles.project1} data-aos="zoom-in-right">
                  <img src={Chaidocs} alt="Chaidocs" loading="lazy" className={styles.proj_img} />
                  <div className={styles.project_detail_container}>
                  <h1 className={styles.project_name}>Chaidocs</h1>
                  <h4 className={styles.project_detail}>HTML, CSS, JAVASCRIPT, BOOTSTRAP</h4>
                </div>
                </div>
              </a>
              <a href="https://nova-abubakr.netlify.app" target="_blank" rel="noreferrer" className={styles.outer_link}>
                <div className={styles.project1} data-aos="zoom-in">
                  <img src={Nova} alt="Nova" loading="lazy" className={styles.proj_img} />
                  <div className={styles.project_detail_container}>
                  <h1 className={styles.project_name}>Nova Website</h1>
                  <h4 className={styles.project_detail}>HTML, CSS, JAVASCRIPT, BOOTSTRAP</h4>
                </div>
                </div>
              </a>
            </div>
            {/* Second Row */}
            <div className={styles.project_first_line}>
              <a href="https://i-coder-abubakr.netlify.app" target="_blank" rel="noreferrer" className={styles.outer_link}>
                <div className={styles.project1} data-aos="flip-down">
                  <img src={icoder} alt="iCoder" loading="lazy" className={styles.proj_img} />
                  <div className={styles.project_detail_container}>
                  <h1 className={styles.project_name}>i Coder Website</h1>
                  <h4 className={styles.project_detail}>HTML, CSS, BOOTSTRAP</h4>
                </div>
                </div>
              </a>
              <a href="https://hurst-abubakr.netlify.app" target="_blank" rel="noreferrer" className={styles.outer_link}>
                <div className={styles.project1} data-aos="zoom-in">
                  <img src={Hurst} alt="Hurst" loading="lazy" className={styles.proj_img} />
                  <div className={styles.project_detail_container}>
                  <h1 className={styles.project_name}>Hurst Website</h1>
                  <h4 className={styles.project_detail}>HTML, CSS, JAVASCRIPT</h4>
                </div>
                </div>
              </a>
            </div>
            {/* Third Row */}
            <div className={styles.project_first_line}>
              <a href="https://skill-grow-abubakr.netlify.app" target="_blank" rel="noreferrer" className={styles.outer_link}>
                <div className={styles.project1} data-aos="zoom-in-left">
                  <img src={Skillgrow} alt="Skill Grow" loading="lazy" className={styles.proj_img} />
                  <div className={styles.project_detail_container}>
                  <h1 className={styles.project_name}>Skillgrow</h1>
                  <h4 className={styles.project_detail}>HTML, CSS, JAVASCRIPT</h4>
                </div>
                </div>
              </a>
              <a href="https://rad-tanuki-11123f.netlify.app" target="_blank" rel="noreferrer" className={styles.outer_link}>
                <div className={styles.project1} data-aos="zoom-in">
                  <img src={WeatherApp} alt="WeatherApp" loading="lazy" className={styles.proj_img} />
                  <div className={styles.project_detail_container}>
                  <h1 className={styles.project_name}>Weather App</h1>
                  <h4 className={styles.project_detail}>React JS</h4>
                </div>
                </div>
              </a>
            </div>
            {/* Fourth Row */}
            <div className={styles.project_first_line}>
              <a href="https://calculator-abubakr.netlify.app" target="_blank" rel="noreferrer" className={styles.outer_link}>
                <div className={styles.project1} data-aos="flip-down">
                  <img src={Calculator} alt="Myntra" loading="lazy" className={styles.proj_img} />
                  <div className={styles.project_detail_container}>
                  <h1 className={styles.project_name}>Calculator</h1>
                  <h4 className={styles.project_detail}>HTML, CSS, JAVASCRIPT</h4>
                </div>
                </div>
              </a>

              <a href="https://ttt-abubakr.netlify.app" target="_blank" rel="noreferrer" className={styles.outer_link}>
                <div className={styles.project1} data-aos="flip-down">
                  <img src={TicTacToe} alt="Myntra" loading="lazy" className={styles.proj_img} />
                  <div className={styles.project_detail_container}>
                  <h1 className={styles.project_name}>Tic Tac Toe</h1>
                  <h4 className={styles.project_detail}>HTML, CSS, JAVASCRIPT</h4>
                </div>
                </div>
              </a>
            </div>
            {/* Fifth Row */}
            <div className={styles.project_first_line}>
              <a href="https://itodo-abubakr.netlify.app" target="_blank" rel="noreferrer" className={styles.outer_link}>
                <div className={styles.project1} data-aos="flip-down">
                  <img src={TodoList} alt="Myntra" loading="lazy" className={styles.proj_img} />
                  <div className={styles.project_detail_container}>
                  <h1 className={styles.project_name}>Todo List</h1>
                  <h4 className={styles.project_detail}>HTML, CSS, JAVASCRIPT</h4>
                </div>
                </div>
              </a>
              <a href="https://rps-abubakr.netlify.app" target="_blank" rel="noreferrer" className={styles.outer_link}>
                <div className={styles.project1} data-aos="flip-down">
                  <img src={RPS} alt="Myntra" loading="lazy" className={styles.proj_img} />
                  <div className={styles.project_detail_container}>
                  <h1 className={styles.project_name}>Myntra</h1>
                  <h4 className={styles.project_detail}>HTML, CSS, JAVASCRIPT</h4>
                </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Navbar_bottom/>
      <Footer/>
    </>
  )
}

export default Projects
