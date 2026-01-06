import React, { useEffect } from 'react'
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
import THSHome from './../assets/ths1.png'
import HMPHome from './../assets/hmp1 (1).png'
import RPS from './../assets/RPS.png'
import Navbar_bottom from './Navbar_bottom'
const Projects = () => {

  const projectsData = [
     {
      title: "HelpMatePlus",
      tech: ["Flutter", 'Dart'],
      image: HMPHome,
      link: "/hmp_project_detail",
      category: "Mobile Developement"
    },
    {
      title: "Total Home Services",
      tech: ["Flutter", 'Dart'],
      image: THSHome,
      link: "/ths_project_detail",
      category: "Mobile Developement"
    },
    {
      title: "Chaidocs",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: Chaidocs,
      link: "https://chai-code-abubakr.netlify.app",
      category: "Web Development"
    },
    {
      title: "Nova Website",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: Nova,
      link: "https://nova-abubakr.netlify.app",
      category: "Web Development"
    },
    {
      title: "i Coder Website",
      tech: ["HTML", "CSS", "Bootstrap"],
      image: icoder,
      link: "https://i-coder-abubakr.netlify.app",
      category: "Web Development"
    },
    {
      title: "Hurst Website",
      tech: ["HTML", "CSS", "JavaScript"],
      image: Hurst,
      link: "https://hurst-abubakr.netlify.app",
      category: "Web Development"
    },
    {
      title: "Skillgrow",
      tech: ["HTML", "CSS", "JavaScript"],
      image: Skillgrow,
      link: "https://skill-grow-abubakr.netlify.app",
      category: "Web Development"
    },
    {
      title: "Weather App",
      tech: ["React JS"],
      image: WeatherApp,
      link: "https://rad-tanuki-11123f.netlify.app",
      category: "React Application"
    },
    {
      title: "Calculator",
      tech: ["HTML", "CSS", "JavaScript"],
      image: Calculator,
      link: "https://calculator-abubakr.netlify.app",
      category: "Web Application"
    },
    {
      title: "Tic Tac Toe",
      tech: ["HTML", "CSS", "JavaScript"],
      image: TicTacToe,
      link: "https://ttt-abubakr.netlify.app",
      category: "Game Development"
    },
    {
      title: "Todo List",
      tech: ["HTML", "CSS", "JavaScript"],
      image: TodoList,
      link: "https://itodo-abubakr.netlify.app",
      category: "Web Application"
    },
    {
      title: "Rock Paper Scissors",
      tech: ["HTML", "CSS", "JavaScript"],
      image: RPS,
      link: "https://rps-abubakr.netlify.app",
      category: "Game Development"
    }
  ]

  return (
    <>
      <Navbar />
      <div className={styles.projectsWrapper}>
        <div className={styles.projectsContainer}>
          {/* Header Section */}
          <div className={styles.headerSection}>
            <h1 className={styles.mainTitle}>My Projects</h1>
            <p className={styles.subtitle}>Explore my latest work and creative solutions</p>
            <div className={styles.titleUnderline}></div>
          </div>

          {/* Projects Grid */}
          <div className={styles.projectsGrid}>
            {projectsData.map((project, index) => (
              <a 
                href={project.link} 
                // target="_blank" 
                rel="noreferrer" 
                className={styles.projectCard}
                key={index}
              >
                <div className={styles.cardInner}>
                  <div className={styles.imageContainer}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={styles.projectImage} 
                    />
                    <div className={styles.imageOverlay}>
                      <span className={styles.viewProject}>View Project →</span>
                    </div>
                  </div>
                  
                  <div className={styles.cardContent}>
                    <div className={styles.categoryBadge}>{project.category}</div>
                    <h3 className={styles.projectTitle}>
                      {project.title} <span className={styles.projectSubtitle}>{project.subtitle}</span>
                    </h3>
                    <div className={styles.techStack}>
                      {project.tech.map((tech, i) => (
                        <span key={i} className={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Navbar_bottom/>
      <Footer/>
    </>
  )
}

export default Projects
