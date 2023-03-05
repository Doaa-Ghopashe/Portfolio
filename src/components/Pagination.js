import React , { useEffect, useState , useContext } from 'react';

import $ from "jquery";

import { ProjectsContext } from './../context/ProjectContext';

import styles from "../componentsstyle/pagination.module.css";

import { faArrowLeft as left , faArrowRight as right } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Pagination() {
  const data = useContext(ProjectsContext);

  const [limitPerPage] = useState(9);
  let [numofpages, setNumOfPages] = useState(0);
  let [currentpage , setCurrentPages] = useState(1);

  useEffect(()=>{
    setCurrentPages(1);
    $(".cardbox").hide().slice((currentpage - 1 ) * limitPerPage, currentpage * limitPerPage).show();
    setNumOfPages(Math.ceil(data.length/limitPerPage));
  } , [data])

  const handleClick = (e) =>{
    setCurrentPages(parseInt(e.target.textContent));
    $('.page-item').removeClass("active")
    $(`#page${e.target.textContent}`).addClass("active")
  }

  const moveNext = () => {
    if(!$("#next-page").hasClass("disable")) {
      setCurrentPages(currentpage + 1);
      $('.page-item').removeClass("active")
      $(`#page${currentpage+1}`).addClass("active")
    }
  }

  const movePrev = () => {
    if(!$("#previous-page").hasClass("disable")){
      setCurrentPages(currentpage - 1)
      $('.page-item').removeClass("active")
      $(`#page${currentpage-1}`).addClass("active")
    }
  }

  const returnpageitems = (prop) => {

    const numlist = []
    for(let i = 1 ; i <= prop ; i++) numlist.push(i);
    return(numlist.map((num) => {
      
      $(".cardbox").hide().slice((currentpage - 1 ) * limitPerPage, currentpage * limitPerPage).show();

      $("#previous-page").toggleClass("disable", currentpage == 1);
      $("#next-page").toggleClass("disable", currentpage == numofpages);
      return(
        <li className={`page-item ${num==1&&"active"}`} id={`page${num}`} key={num} onClick={handleClick}>
          <a className="page-link text-dark rounded-circle mx-1" href="#"><span className='d-none'>{num}</span></a>
        </li>
        )
    })) 
  }

  return (
    <nav aria-label="..." className={`${styles.paginationbox}`}>
      <ul className="pagination align-items-center my-5">

        <li className="page-item" id="previous-page">
          <a className={`${styles.paginationcontrols} btn ${styles.prevbtn} `}onClick={movePrev}>
            {<FontAwesomeIcon icon={left}/>}
          </a>
        </li>
        {numofpages>0?returnpageitems(numofpages):null}

        <li className="page-item" id="next-page">
          <a className={`${styles.paginationcontrols} btn ${styles.nextbtn} `} onClick={moveNext}>
            {<FontAwesomeIcon icon={right}/>}
          </a>
        </li>

      </ul>
    </nav>
  )
}
