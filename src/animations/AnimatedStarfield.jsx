import React, { useEffect, useState } from 'react'
import styles from './AnimatedStarfield.module.css'

const AnimatedStarfield = () => {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const generatedStars = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.2 + 0.5,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.4 + 0.2,   // LOWERED
      brightness: Math.random() * 0.3 + 0.6 // LOWERED
    }))
    setStars(generatedStars)
  }, [])

  return (
    <div className={styles.starfield_container}>
      {/* Soft overlay (makes text readable) */}
      <div className={styles.overlay}></div>

      {/* Nebula glow */}
      <div className={styles.nebula_glow}></div>
      {/* Stars */}
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
            filter: `brightness(${star.brightness})`
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedStarfield
