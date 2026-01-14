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
import HTML from './../assets/html.png'
import CSS from './../assets/css.png'
import JS from './../assets/js.png'
import REACT from './../assets/react1.png'
import Bootstrap from './../assets/bootstrap.png'
import Flutter from './../assets/flutter_icon.webp'
import Tailwind from './../assets/tailwindcss.jpg'
import Git from './../assets/git.png'
import Github from './../assets/github.png'
import DART from './../assets/dart.png'
import Resume from './../assets/ABUBAKR_RESUME.pdf.pdf'
import ImagePreloader from './ImagePreloader'
import LazyImage from './LazyImage'
import EagerImage from './EagerImage'


const Home = () => {
  useEffect(() => {
    // Simple smooth animation on load
    const heroSection = document.querySelector(`.${styles.hero_section}`);
    if (heroSection) {
      heroSection.classList.add(styles.loaded);
    }
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'ABUBAKR_RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <>
      {/* Preload critical hero and project images for fast loading */}
      <ImagePreloader 
        images={[
          { src: MyPic, as: 'image', type: 'image/png' }
        ]}
      />
      <Navbar />
      <div>

        {/* main section */}
        <div className={`${styles.main} ${styles.container_80}`}>
          {/* hero section */}
          <div className={styles.hero_section}>
            <div className={styles.top_namimg}>
              <h1 className={`${styles.main_name_text} ${styles.fade_item}`}>Hello, this is Muhammad Abu Bakr</h1>
              <h1 className={`${styles.hello_text} ${styles.fade_item}`}>
                MOBILE APPLICATION
              </h1>
              <h1 className={`${styles.hello_text_second} ${styles.fade_item}`}>
                & WEB DEVELOPER
              </h1>
              {/* social icons */}
              <div className={`${styles.logo_section_social} ${styles.fade_item}`}>
                <a href="https://www.facebook.com/profile.php?id=61554939953623" target='_blank'>
                  <div className={`${styles.first} ${styles.fb}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </div>
                </a>
                <a href="" target='_blank'>
                  <div className={`${styles.first} ${styles.twit}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                    </svg>
                  </div>
                </a>
                <a href="https://www.instagram.com/maybe.bakar/" target='_blank' rel="noreferrer">
                  <div className={`${styles.first} ${styles.insta}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg> 
                  </div>
                </a>
                <a href="" target='_blank'>
                  <div className={`${styles.first} ${styles.linked}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </div>
                </a>
                <a href="https://github.com/abubakrab69" target='_blank'>
                  <div className={`${styles.first} ${styles.linked}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            {/* my image - centered - using EagerImage for fast loading */}
            <div className={`${styles.my_img} ${styles.float_img}`}>
              <EagerImage 
                src={MyPic} 
                alt="Muhammad Abu Bakr Portfolio Picture"
                decoding="async"
                className={styles.my_image}
                width="100%"
                height="auto"
                placeholderColor="#f0f0f0"
              />
            </div>
            {/* buttons below image */}
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
        </div>
        {/* Project section */}
        <div className={styles.projectsWrapper}>
          <div className={styles.projectsContainer}>
            <div className={styles.headerSection}>
              <h1 className={styles.mainTitle}>Featured Projects</h1>
              <p className={styles.subtitle}>Explore some of my best work</p>
              <div className={styles.titleUnderline}></div>
            </div>
            <div className={styles.projectsGrid}>
              <a href="https://chai-code-abubakr.netlify.app" target="_blank" rel="noreferrer" className={styles.projectCard}>
                <div className={styles.cardInner}>
                  <div className={styles.imageContainer}>
                    <img src={Chaidocs} alt="Chaidocs" className={styles.projectImage} />
                    <div className={styles.imageOverlay}>
                      <span className={styles.viewProject}>View Project →</span>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.categoryBadge}>Web Development</div>
                    <h3 className={styles.projectTitle}>Chaidocs <span className={styles.projectSubtitle}>(Clone)</span></h3>
                    <div className={styles.techStack}>
                      <span className={styles.techTag}>HTML</span>
                      <span className={styles.techTag}>CSS</span>
                      <span className={styles.techTag}>JavaScript</span>
                      <span className={styles.techTag}>Bootstrap</span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://nova-abubakr.netlify.app" target="_blank" rel="noreferrer" className={styles.projectCard}>
                <div className={styles.cardInner}>
                  <div className={styles.imageContainer}>
                    <img src={Nova} alt="Nova" className={styles.projectImage} />
                    <div className={styles.imageOverlay}>
                      <span className={styles.viewProject}>View Project →</span>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.categoryBadge}>Web Development</div>
                    <h3 className={styles.projectTitle}>Nova Website <span className={styles.projectSubtitle}>(Clone)</span></h3>
                    <div className={styles.techStack}>
                      <span className={styles.techTag}>HTML</span>
                      <span className={styles.techTag}>CSS</span>
                      <span className={styles.techTag}>JavaScript</span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://skill-grow-abubakr.netlify.app" target="_blank" rel="noreferrer" className={styles.projectCard}>
                <div className={styles.cardInner}>
                  <div className={styles.imageContainer}>
                    <img src={Skillgrow} alt="Skillgrow" className={styles.projectImage} />
                    <div className={styles.imageOverlay}>
                      <span className={styles.viewProject}>View Project →</span>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.categoryBadge}>Web Development</div>
                    <h3 className={styles.projectTitle}>Skillgrow <span className={styles.projectSubtitle}>(Clone)</span></h3>
                    <div className={styles.techStack}>
                      <span className={styles.techTag}>HTML</span>
                      <span className={styles.techTag}>CSS</span>
                      <span className={styles.techTag}>JavaScript</span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://i-coder-abubakr.netlify.app" target="_blank" rel="noreferrer" className={styles.projectCard}>
                <div className={styles.cardInner}>
                  <div className={styles.imageContainer}>
                    <img src={icoder} alt="iCoder" className={styles.projectImage} />
                    <div className={styles.imageOverlay}>
                      <span className={styles.viewProject}>View Project →</span>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.categoryBadge}>Web Development</div>
                    <h3 className={styles.projectTitle}>i Coder <span className={styles.projectSubtitle}>(Clone)</span></h3>
                    <div className={styles.techStack}>
                      <span className={styles.techTag}>HTML</span>
                      <span className={styles.techTag}>CSS</span>
                      <span className={styles.techTag}>Bootstrap</span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://hurst-abubakr.netlify.app" target="_blank" rel="noreferrer" className={styles.projectCard}>
                <div className={styles.cardInner}>
                  <div className={styles.imageContainer}>
                    <img src={Hurst} alt="Hurst" className={styles.projectImage} />
                    <div className={styles.imageOverlay}>
                      <span className={styles.viewProject}>View Project →</span>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.categoryBadge}>Web Development</div>
                    <h3 className={styles.projectTitle}>Hurst Website <span className={styles.projectSubtitle}>(Clone)</span></h3>
                    <div className={styles.techStack}>
                      <span className={styles.techTag}>HTML</span>
                      <span className={styles.techTag}>CSS</span>
                      <span className={styles.techTag}>JavaScript</span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://mintra-abubakr.netlify.app" target="_blank" rel="noreferrer" className={styles.projectCard}>
                <div className={styles.cardInner}>
                  <div className={styles.imageContainer}>
                    <img src={Myntra} alt="Myntra" className={styles.projectImage} />
                    <div className={styles.imageOverlay}>
                      <span className={styles.viewProject}>View Project →</span>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.categoryBadge}>Web Development</div>
                    <h3 className={styles.projectTitle}>Myntra <span className={styles.projectSubtitle}>(Clone)</span></h3>
                    <div className={styles.techStack}>
                      <span className={styles.techTag}>HTML</span>
                      <span className={styles.techTag}>CSS</span>
                      <span className={styles.techTag}>JavaScript</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className={styles.home_bottom_btn_container}>
              <Link to="/projects" className={styles.seeMoreLink}>
              <button className={styles.btn_see_more}>View All Projects</button>
            </Link>
            <Link to="/Uses">
              <button className={styles.btn_Uses}>Uses</button>
            </Link>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className={styles.skillsWrapper}>
          <div className={styles.skillsContainer}> 
            <h4 style={{color: 'gray', display: 'flex', justifyContent: 'center', marginTop: 110}}>What Powers My Code</h4>
            <h1 className={styles.project_heading} style={{marginTop: 10, marginBottom: 12}}>Technical Mastery</h1>
            <div className={styles.titleUnderline}></div>
            <br /> <br />
            <div className={styles.skills_main_container}>
                <div className={styles.skill_num_one_box}>
                  <img src={HTML} alt="" className={styles.skill_num_one}/>
                  <h1>95%</h1>
                </div>
                <div className={styles.skill_num_one_box}>
                  <img src={CSS} alt="" className={styles.skill_num_one}/>
                  <h1>94%</h1>
                </div>
                <div className={styles.skill_num_one_box}>
                  <img src={JS} alt="" className={styles.skill_num_one}/>
                  <h1>87%</h1>
                </div>
                <div className={styles.skill_num_one_box}>
                  <img src={REACT} alt="" className={styles.skill_num_one} />
                  <h1>85%</h1>
                </div>
                <div className={styles.skill_num_one_box}>
                  <img src={Tailwind} alt="" className={styles.skill_num_one} />
                  <h1>93%</h1>
                </div>
                <div className={styles.skill_num_one_box}>
                  <img src={Bootstrap} alt="" className={styles.skill_num_one}/>
                  <h1>92%</h1>
                </div>
                <div className={styles.skill_num_one_box}>
                  <img src={Flutter} alt="" className={styles.skill_num_one}/>
                  <h1>90%</h1>
                </div>
                <div className={styles.skill_num_one_box}>
                  <img src={Git} alt="" className={styles.skill_num_one} />
                  <h1>94%</h1>
                </div>
                <div className={styles.skill_num_one_box}>
                  <img src={Github} alt="" className={styles.skill_num_one}/>
                  <h1>94%</h1>
                </div>
                <div className={styles.skill_num_one_box}>
                  <img src={DART} alt="" className={styles.skill_num_one}/>
                  <h1>90%</h1>
                </div>
            </div>
          </div>
        </div>
        <br />
        {/* education section  */}
        <br />
        <br />
        <br />
        <br />
        <h4 style={{color: 'gray', display: 'flex', justifyContent: 'center'}}>THE FOUNDATION</h4>
        <h1 className={styles.project_heading} style={{marginTop: 10, marginBottom: 12}}>Academic Archives</h1>
        <div className={styles.titleUnderline}></div>
        <br /><br />
        <div className={styles.educationWrapper}>
          <div className={styles.educationContainerOne}>
            <div className={styles.educationContent}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{backgroundColor: '#3458f8c6', width: 55, height: 55, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                 <h1>
                                   <svg width="35" height="35" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L1 9L12 15L23 9L12 3Z" fill="currentColor"/>
                  <path d="M5 12V17C5 17 8 19 12 19C16 19 19 17 19 17V12" 
                        stroke="currentColor" 
                        stroke-width="1.5" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"/>
                  <path d="M23 9V14" 
                        stroke="currentColor" 
                        stroke-width="1.5" 
                        stroke-linecap="round"/>
                </svg>

                                 </h1>
                </div>
                &nbsp; &nbsp;
                <h1>Education</h1>
              </div>
              <div className={styles.badgeYear}>
                2026 - Present
              </div>
              <h1 className={styles.studytext}>BS Computer Science</h1>
              <h3 style={{color: 'gray', fontFamily: "Philosopher"}}>VIRTUAL UNIVERSITY OF PAKISTAN</h3>
              <h5 style={{color: 'gray',fontFamily: "Philosopher"}}>
                Currently pursuing, exploring theoretical concepts, coding adventures, and the endless world of software development —the journey continues!
              </h5>
              
              <div className={styles.badgeYear}>
                2023 - 2025
              </div>
              <h1 className={styles.studytext}>Intermediate in Computer Science</h1>
              <h3 style={{color: 'gray', fontFamily: "Philosopher"}}>SUPERIOR GRPUP OF COLLEGES</h3>
              <h5 style={{color: 'gray',fontFamily: "Philosopher"}}>
                Scored 1038 marks 🎉 , completed my Intermediate (ICS), where I built a strong foundation in computer science, programming concepts, and problem-solving skills.
              </h5>
              
               <div className={styles.badgeYear}>
                2021 - 2023
              </div>
              <h1 className={styles.studytext}>Matric(Bio)</h1>
              <h3 style={{color: 'gray', fontFamily: "Philosopher"}}>Govt. Hight School Kotmomin Sargodha</h3>
              <h5 style={{color: 'gray',fontFamily: "Philosopher"}}>
                Scored 968 marks 🎉, surviving endless exams, late-night studies, and the chaos of school life—an unforgettable start to the academic journey.
              </h5>
            </div>
          </div>

          <div className={styles.educationContainerOne}>
            <div className={styles.educationContent}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{backgroundColor: '#3458f8c6', width: 55, height: 55, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <h1>
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <path d="M9 6V5C9 3.895 9.895 3 11 3H13C14.105 3 15 3.895 15 5V6"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"/>
        
  <rect x="3" y="6" width="18" height="14" rx="2"
        stroke="currentColor"
        stroke-width="1.5"/>
        
  <path d="M3 11H21"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"/>
        
  <path d="M10 11V13H14V11"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"/>
</svg>

                  </h1>
                </div>
                &nbsp; &nbsp;
                <h1>Work Experience</h1>
                <br />
              </div>
              <h1>Frontend Developer Intern</h1>
              <h3 style={{color: 'gray'}}>Apexvim | May 28, 2025 - December 09, 2025</h3>
              <ul style={{color: 'gray', marginLeft: 14, marginTop: 14}}>
                <li style={{fontSize: 14, marginBottom: 14}}>Assisted in building responsive UI using HTML, CSS, and JavaScript.</li>
                <li style={{fontSize: 14, marginBottom: 14}}>Worked with React basics and UI components.</li>
                <li style={{fontSize: 14, marginBottom: 14}}>Collaborated with seniors to fix UI bugs and improve layouts.</li>
                <li style={{fontSize: 14, marginBottom: 14}}>Learned best practices for clean and reusable frontend code.</li>
              </ul>
              <h1>Flutter & React Developer</h1>
              <h3 style={{color: 'white'}}>Apexvim | December 10, 2025 - Present</h3>
              <ul style={{color: 'white', marginLeft: 14, marginTop: 14}}>
                <li style={{fontSize: 14, marginBottom: 14}}>Working on Flutter-based mobile applications and web projects, focusing on clean UI and smooth user experience.</li>
                <li style={{fontSize: 14, marginBottom: 14}}>Developing responsive interfaces and integrating APIs for real-world applications.</li>
                <li style={{fontSize: 14, marginBottom: 14}}>Actively improving app performance and implementing reusable components.</li>
                {/* <li style={{fontSize: 14, marginBottom: 14}}>Integrated REST APIs and handled application state.</li> */}
              </ul>
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


