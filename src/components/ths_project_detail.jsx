import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Navbar_bottom from './Navbar_bottom'
import styles from './ths_project_detail.module.css'
import AnimatedStarfield from '../animations/AnimatedStarfield'
import ImagePreloader from './ImagePreloader'

// Import THS project images
import THSHome from './../assets/ths1.png'
import THS2 from './../assets/ths2.png'
import THS3 from './../assets/ths3.png'
import THS4 from './../assets/ths4.png'
import THS5 from './../assets/ths5.png'
import THS6 from './../assets/ths6.png'
import THS7 from './../assets/ths7.png'
import THS8 from './../assets/ths8.png'
import THS9 from './../assets/ths9.png'
import THS10 from './../assets/ths10.png'
import THS11 from './../assets/ths11.png'

const THSProjectDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projectImages = [THSHome, THS2, THS3, THS4, THS5, THS6, THS7, THS8, THS9, THS10, THS11]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length)
  }
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }
  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <>
      {/* Preload first 3 THS images for quick display */}
      <ImagePreloader 
        images={[
          { src: THSHome, as: 'image', type: 'image/png' },
          { src: THS2, as: 'image', type: 'image/png' },
          { src: THS3, as: 'image', type: 'image/png' }
        ]}
      />
      <AnimatedStarfield />
      <Navbar />

      <div className={styles.detailWrapper}>
        <div className={styles.detailContainer}>
          {/* Header Section */}
          <div className={styles.headerSection}>
            <h1 className={styles.mainTitle}>Total Home Services</h1>
            <p className={styles.subtitle}>Mobile Application</p>
            <div className={styles.titleUnderline}></div>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className={styles.mainContent}>
            {/* Left Side - Image Gallery */}
            <div className={styles.imageSection}>
              <div className={styles.mainImageContainer}>
                <img
                  src={projectImages[currentImageIndex]}
                  alt={`THS Screenshot ${currentImageIndex + 1}`}
                  className={styles.mainImage}
                  width="100%"
                  height="auto"
                  style={{ display: 'block', aspectRatio: '9/16' }}
                />
                <div className={styles.imageCounter}>
                  {currentImageIndex + 1} / {projectImages.length}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className={styles.imageNavigation}>
                <button
                  className={styles.navButton}
                  onClick={prevImage}
                  title="Previous screenshot"
                >
                  ← Prev
                </button>
                <button
                  className={styles.navButton}
                  onClick={nextImage}
                  title="Next screenshot"
                >

                  Next →
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className={styles.thumbnailGallery}>
                {projectImages.map((img, index) => (
                  <div
                    key={index}
                    className={`${styles.thumbnail} ${currentImageIndex === index ? styles.active : ''}`}
                    onClick={() => goToImage(index)}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${index + 1}`}
                      width="100%"
                      height="auto"
                      loading="lazy"
                      style={{ display: 'block', aspectRatio: '9/16' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Project Details */}
            <div className={styles.detailsSection}>
              {/* Project Overview */}
              <div className={styles.detailCard}>
                <h2 className={styles.sectionTitle}>Project Overview</h2>
                <p className={styles.detailText}>
                  Total Home Services (THS) is a comprehensive mobile application built with <strong>Flutter</strong> and <strong>Dart</strong>. 
                  This application provides users with an easy way to book and manage home services including cleaning, plumbing, 
                  electrical work, and much more.
                </p>
              </div>
              <br />

              {/* Tech Stack */}
              <div className={styles.detailCard}>
                <h2 className={styles.sectionTitle}>Technology Stack</h2>
                <div className={styles.techStack}>
                  <span className={styles.techBadge}>Flutter</span>
                  <span className={styles.techBadge}>Dart</span>
                  <span className={styles.techBadge}>Firebase</span>
                  <span className={styles.techBadge}>REST API</span>
                  <span className={styles.techBadge}>SQLite</span>
                  <span className={styles.techBadge}>Android</span>
                  <span className={styles.techBadge}>iOS</span>
                </div>
              </div>
              <br />

              {/* Key Features */}
              <div className={styles.detailCard}>
                <h2 className={styles.sectionTitle}>Key Features</h2>
                <ul className={styles.featureList}>
                  <li>🔐 Secure user authentication & registration</li>
                  <li>🔍 Smart service discovery & filtering</li>
                  <li>📅 Easy booking & scheduling system</li>
                  <li>💬 Real-time chat with service providers</li>
                  <li>⭐ Rating & review system</li>
                  <li>💳 Multiple payment options</li>
                  <li>📍 Location-based services</li>
                  <li>🔔 Push notifications & alerts</li>
                </ul>
              </div>
<br /> 
              {/* What Makes It Special */}
              <div className={styles.detailCard}>
                <h2 className={styles.sectionTitle}>What Makes It Special</h2>
                <div className={styles.highlightList}>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}>🎨</span>
                    <div>
                      <h4>Beautiful UI/UX Design</h4>
                      <p>Modern and intuitive interface designed with user experience in mind</p>
                    </div>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}>⚡</span>
                    <div>
                      <h4>High Performance</h4>
                      <p>Fast loading times and smooth animations across all devices</p>
                    </div>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}>🔄</span>
                    <div>
                      <h4>Real-time Updates</h4>
                      <p>Live notifications and instant service provider responses</p>
                    </div>
                  </div>
                  <div className={styles.highlightItem}>
                    <span className={styles.highlightIcon}>🛡️</span>
                    <div>
                      <h4>Secure & Reliable</h4>
                      <p>Enterprise-grade security with encrypted data transmission</p>
                    </div>
                  </div>
                </div>
              </div>
<br /> 
              {/* Development Process */}
              <div className={styles.detailCard}>
                <h2 className={styles.sectionTitle}>🛠️ Development Process</h2>
                <div className={styles.processTimeline}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div>
                      <h4>Planning & Design</h4>
                      <p>Requirements analysis and UI/UX wireframing</p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div>
                      <h4>Frontend Development</h4>
                      <p>Building responsive screens with Flutter</p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div>
                      <h4>Backend Integration</h4>
                      <p>API integration and database setup</p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div>
                      <h4>Testing & Deployment</h4>
                      <p>Quality assurance and app store publication</p>
                    </div>
                  </div>
                </div>
              </div>
        
              {/* Call to Action */}
              {/* <div className={styles.ctaContainer}>
                <a href="#" className={styles.ctaButton}>
                  📱 Download App
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Navbar_bottom />
    </>
  )
}


export default THSProjectDetail