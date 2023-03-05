import React , {useContext} from 'react'
import styles from "../componentsstyle/categories.module.css";
import $ from "jquery";
import { ProjectsContext } from './../context/ProjectContext';
export default function Categories() {
  const data = useContext(ProjectsContext);

  const setCategory = (e) => {
    $(`.${styles.category}`).removeClass("active-link");
    e.target.classList.add("active-link");
    
    $(".cardcol").removeClass("hide")

    if(e.target.textContent === "UI/UX"){
      data.map(
        item => !item.category.includes("HTML") && $(`.card${item.id}`).addClass("hide")
      )
    }else if(e.target.textContent != "All"){
      data.map(
        item => !item.category.includes(e.target.textContent)&&$(`.card${item.id}`).addClass("hide")
      )
    } 
    
  }
  return (
    <div className={`${styles.Categories}`}>
    <ul>
        <li className={`active-link ${styles.category} `} onClick={setCategory}>All</li>
        <li className={`${styles.category}`} onClick={setCategory}>UI/UX</li>
        <li className={`${styles.category}`} onClick={setCategory}>JavaScript</li>
        <li className={`${styles.category}`} onClick={setCategory}>React</li>
    </ul>
    </div>
  )
}
