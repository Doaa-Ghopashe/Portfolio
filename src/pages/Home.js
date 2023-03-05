import React from 'react'
import Header from '../components/Header'
import Slider from './../components/Slider';
import styles from "../pagestyle/Home.module.css";
import { faAnglesDown as down } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Home() {
  const scrollDown = () => {
    window.scroll({
      top:document.body.scrollHeight,
      behavior:"smooth"
  })
  }
  return (
    <>
      <Header>
      <div className="headertext">
          <h1>Hello, I'm Doaa</h1>
          <span className={styles.jobtitle}>frontend developer </span>
          <p>
            passionate about developing an interactive applications, producing quality work with dynamic user experience.
            <br/>
            <span className={styles.highlight}>feel free to see my web apps just scroll down</span>
          </p>
          
        </div>
        <button className={`${styles.scrollbtn}`} onClick={scrollDown}>{<FontAwesomeIcon icon={down} />}</button>
      </Header>
      <main className={styles.HomeBody}>
        <section className='LatestProjects'>
          <div className={styles.sectionTitle}>
            <h1>Latest Projects</h1>
          </div>
          <Slider/>
        </section>
        
      </main>
    </>
  )
}
