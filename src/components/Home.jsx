import React, { useEffect } from 'react'
import Navbar from './Navbar'
import styles from './Home.module.css'

import MyPic from './../assets/Mypic.png'
import Chaidocs from './../assets/Chiadocs.png'
import Nova from './../assets/Nova.png'
import Skillgrow from './../assets/Skillgrow.png'
import icoder from './../assets/icoder.png'
import Hurst from './../assets/Hurst.png'
import Myntra from './../assets/myntra.png'

import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar_bottom from './Navbar_bottom'

const Home = () => {

  useEffect(() => {
    document.querySelector(`.${styles.hero_section}`).classList.add(styles.show)
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './assets/ABUBAKR.CV.pdf';
    link.download = 'My-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />
      <div>
        {/* main section */}
        <div className={`${styles.main} ${styles.container_80}`}>

          {/* hero section */}
          <div className={styles.hero_section}>

            <div className={styles.top_namimg}>
              <h1 className={`${styles.main_name_text} ${styles.fade_item}`}>HELLO,</h1>
              <h1 className={`${styles.main_name_text} ${styles.fade_item}`}>IT'S MUHAMMAD ABU BAKR</h1>

              <h1 className={`${styles.hello_text} ${styles.fade_item}`}>
                A Mobile Application and Web Developer
              </h1>

              {/* social icons */}
              <div className={`${styles.logo_section_social} ${styles.fade_item}`}>
                <a href="https://www.facebook.com/profile.php?id=61554939953623" target='_blank'>
                  <div className={`${styles.first} ${styles.fb}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </div>
                </a>

                <a href="" target='_blank'>
                  <div className={`${styles.first} ${styles.twit}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                    </svg>
                  </div>
                </a>

                <a href="https://www.instagram.com/maybe.bakar/" target='_blank' rel="noreferrer">
                  <div className={`${styles.first} ${styles.insta}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0z" />
                    </svg>
                  </div>
                </a>

                <a href="" target='_blank'>
                  <div className={`${styles.first} ${styles.linked}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </div>
                </a>

                <a href="https://github.com/abubakrab69" target='_blank'>
                  <div className={`${styles.first} ${styles.linked}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </div>
                </a>

              </div>

              {/* buttons */}
              <div className={`${styles.hero_btn} ${styles.fade_item}`}>
                <button onClick={handleDownload} className={styles.btn_cv}>
                  Grab My CV
                </button>
                <a href="/contactus">
                  <button className={styles.btn_hire}>
                    Hire Me
                  </button>
                </a>
              </div>
            </div>

            {/* my image */}
            <div className={`${styles.my_img} ${styles.float_img}`}>
              <img src={MyPic} alt="MY" loading="lazy" className={styles.my_image} />
            </div>

          </div>

        </div>

        {/* Project section */}
        <div className={`${styles.project_cover} ${styles.container_100}`}>
          <div className={`${styles.project_inner} ${styles.container_80}`}>
            <h1 className={styles.project_heading}>Projects</h1>

            <div className={styles.project_container}>

              <div className={styles.project_first_line}>
                <a rel="noreferrer" href="https://chai-code-abubakr.netlify.app" className={styles.outer_link} target="_blank">
                  <div className={styles.project1}>
                    <img src={Chaidocs} alt="Chaidocs" loading="lazy" className={styles.proj_img} width="100%" />
                  </div>
                </a>

                <a rel="noreferrer" href="https://nova-abubakr.netlify.app" className={styles.outer_link} target="_blank">
                  <div className={styles.project1}>
                    <img src={Nova} alt="Nova" className={styles.proj_img} loading="lazy" width="100%" />
                  </div>
                </a>

                <a rel="noreferrer" href="https://skill-grow-abubakr.netlify.app" className={styles.outer_link} target="_blank">
                  <div className={styles.project1}>
                    <img src={Skillgrow} alt="Skill Grow" className={styles.proj_img} loading="lazy" width="100%" />
                  </div>
                </a>
              </div>

              <div className={styles.project_first_line}>
                <a rel="noreferrer" href="https://i-coder-abubakr.netlify.app" className={styles.outer_link} target="_blank">
                  <div className={styles.project1}>
                    <img src={icoder} alt="iCoder" loading="lazy" className={styles.proj_img} width="100%" />
                  </div>
                </a>

                <a rel="noreferrer" href="https://hurst-abubakr.netlify.app" className={styles.outer_link} target="_blank">
                  <div className={styles.project1}>
                    <img src={Hurst} alt="Hurst" className={styles.proj_img} loading="lazy" width="100%" />
                  </div>
                </a>

                <a rel="noreferrer" href="https://mintra-abubakr.netlify.app" className={styles.outer_link} target="_blank">
                  <div className={styles.project1}>
                    <img src={Myntra} alt="Myntra" loading="lazy" className={styles.proj_img} width="100%" />
                  </div>
                </a>
              </div>

              <Link to="/projects">
                <button className={styles.btn_see_more}>See More</button>
              </Link>
            </div>
          </div>
        </div>
        <Navbar_bottom />
          <Footer />
      </div>
    </>
  )
}

export default Home
