import React, { useEffect , useState } from 'react';

import $ from "jquery";

import styles from "../componentsstyle/slider.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowLeft as left , faArrowRight as right } from '@fortawesome/free-solid-svg-icons';

export default function Slider() {

  const [imglist , setImgList] = useState([])

  let [prevcurrent] = useState([])

  let [currentimg] = useState(0);
  
  useEffect(()=>{

    setImgList($(`.${styles.slidercontent} div`))

  },[currentimg])

  const handleleftClick = () => {
    prevcurrent = currentimg;

    currentimg == imglist.length - 1 ? currentimg = 0 : currentimg++;
  
    $(`.${styles.slidercontent} div`)[currentimg].classList.replace(`${styles.rightfadedimg}` ,`${styles.currentimg}`);

    $(`.${styles.slidercontent} div`)[prevcurrent].classList.replace(`${styles.currentimg}` , `${styles.leftfadedimg}`);

    currentimg == imglist.length - 1 ? $(`.${styles.slidercontent} div`)[0].classList.replace(`${styles.leftfadedimg}`, `${styles.rightfadedimg}`) : $(`.${styles.slidercontent} div`)[currentimg+1].classList.replace(`${styles.leftfadedimg}` , `${styles.rightfadedimg}`) 
      
  }

  const handlerightClick = () => {
    prevcurrent = currentimg;

    currentimg == 0 ? currentimg = imglist.length - 1 : currentimg--;
    
    $(`.${styles.slidercontent} div`)[currentimg].classList.replace(`${styles.leftfadedimg}`,`${styles.currentimg}`);

    $(`.${styles.slidercontent} div`)[prevcurrent].classList.replace(`${styles.currentimg}` ,`${styles.rightfadedimg}`);

    currentimg == 0 ? $(`.${styles.slidercontent} div`)[imglist.length -1].classList.replace(`${styles.rightfadedimg}` , `${styles.leftfadedimg}`) : $(`.${styles.slidercontent} div`)[currentimg - 1 ].classList.replace(`${styles.rightfadedimg}` , `${styles.leftfadedimg}`); 

  }

  return (
    <div className={styles.slider}>

      {/* this is the slider contents*/}
      <div className={styles.slidercontent}>
        <div className={`${styles.currentimg} ${styles.firstproject}`}>
          <h1>Re Energy</h1>
        </div>
        <div className={`${styles.rightfadedimg} ${styles.secondproject}`}>
          
          <h1>Quran Playlist</h1>
        </div>
        <div  className={`${styles.leftfadedimg} ${styles.thirdproject}`}>
          <h1>Calculator</h1>
        </div>
      </div>

      {/* here is the controls of the slider */}
      <div className={styles.slidercontrols}>

        <div className={styles.nextbtn} onClick={handleleftClick}>
          <button className='btn p-0 m-0'>
            <FontAwesomeIcon icon={left} />
          </button>
        </div>

        <div className={styles.prevbtn} onClick={handlerightClick}>
          <button className='btn p-0 m-0'>
            <FontAwesomeIcon icon={right} />
          </button>
        </div>

      </div>

    </div>
  )
}
