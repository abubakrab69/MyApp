import React, { useEffect, useState } from 'react'
import styles from './AnimatedStarfield.module.css'

const AnimatedStarfield = () => {
  const [stars, setStars] = useState([])

  useEffect(() => {
    // Generate static stars - reduced from 150 to 60 for better performance
    const generatedStars = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.5 + 0.4,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.6 + 0.3,
      brightness: Math.random() * 0.5 + 0.8,
    }))
    setStars(generatedStars)
  }, [])

  return (
    <div className={styles.starfield_container}>
      {/* Nebula glow - simplified */}
      <div className={styles.nebula_glow}></div>

      {/* Static stars only */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={styles.star}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: star.opacity,
            filter: `brightness(${star.brightness})`,
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedStarfield
