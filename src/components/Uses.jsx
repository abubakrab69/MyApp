import React, { useEffect } from 'react'
import Navbar from './Navbar'
import styles from './Uses.module.css'
import Footer from './Footer'
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
import Netlify from './../assets/netlify.png'
import GithubDextop from './../assets/github_dextop.png'
const Uses = () => {

  const specs = [
    { label: "RAM", value: "16 GB", icon: "💾" },
    { label: "Storage", value: "256 GB", icon: "💿" },
    { label: "Generation", value: "11th Gen", icon: "⚡" },
    { label: "Processor", value: "Core i5", icon: "🔥" },
    { label: "OS", value: "Windows 11 Pro", icon: "🪟" }
  ]
 
  const tools = [
    { name: "VS Code", description: "Code Editor", image: VSCode, category: "Development" },
    { name: "Postman", description: "API Testing", image: Postman, category: "Development" },
    { name: "Android Studio", description: "Code Editor", image: AndriodS, category: "Development" },
    { name: "Git", description: "Version Control", image: Git, category: "Development" },
    { name: "GitHub", description: "Collaboration", image: Github, category: "Collaboration" },
    { name: "GitHub Desktop", description: "Git GUI", image: GithubDextop, category: "Collaboration" },
    { name: "Slack", description: "Work Space", image: Slack, category: "Collaboration" },
    { name: "Vercel", description: "Deployment", image: Vercel, category: "Deployment" },
    { name: "Netlify", description: "Deployment", image: Netlify, category: "Deployment" },
    { name: "NPM", description: "Package Manager", image: NPM, category: "Tools" },
    { name: "Dart DevTools", description: "Debugging", image: DART, category: "Tools" },
    { name: "Emulator", description: "Android Testing", image: Emulator, category: "Tools" }
  ]
 
  return ( 
    <>
      <Navbar /> 
      <div className={styles.usesWrapper}>
        <div className={styles.usesContainer}>
          {/* Header Section */}
          <div className={styles.headerSection}>
            <h1 className={styles.mainTitle}>My Setup</h1>
            <p className={styles.subtitle}>Tools and technologies I use daily</p>
            <div className={styles.titleUnderline}></div> 
          </div>
          {/* Laptop Section */} 
          <div className={styles.laptopSection}>
            <div className={styles.laptopCard}>
              <div className={styles.laptopImageWrapper}>
                <img src={Laptop} alt="Dell Latitude 5420" className={styles.laptopImage}/>
                <div className={styles.laptopGlow}></div>
              </div>
              <div className={styles.laptopInfo}>
                <h2 className={styles.laptopTitle}>Dell Latitude 5420</h2>
                <p className={styles.laptopSubtitle}>14" Professional Laptop</p>
              </div>
            </div>
            {/* Specs Grid */}
            <div className={styles.specsGrid}>
              {specs.map((spec, index) => (
                <div 
                  key={index} 
                  className={styles.specCard}
                >
                  <div className={styles.specIcon}>{spec.icon}</div>
                  <div className={styles.specContent}>
                    <h4 className={styles.specLabel}>{spec.label}</h4>
                    <p className={styles.specValue}>{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Tools Section */}
          <div className={styles.toolsSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Development Tools</h2>
              <p className={styles.sectionSubtitle}>My daily tech stack and productivity tools</p>
            </div>
            <div className={styles.toolsGrid}>
              {tools.map((tool, index) => (
                <div 
                  key={index} 
                  className={styles.toolCard}
                > 
                  <div className={styles.toolCardInner}>
                    <div className={styles.toolImageWrapper}>
                      <img src={tool.image} alt={tool.name} className={styles.toolImage} loading='lazy'/>
                    </div>
                    <div className={styles.toolContent}>
                      <h3 className={styles.toolName}>{tool.name}</h3>
                      <p className={styles.toolDescription}>{tool.description}</p>
                      <span className={styles.toolCategory}>{tool.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Navbar_bottom />  
      <Footer />
    </>
  )
} 

export default Uses
