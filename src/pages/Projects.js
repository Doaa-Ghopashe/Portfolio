import React , {useContext} from 'react';
import $ from "jquery";

import styles from "../pagestyle/Project.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight as right , faArrowLeft as left , faX as exit} from '@fortawesome/free-solid-svg-icons';

import Header from '../components/Header';
import Categories from './../components/Categories';
import Pagination from '../components/Pagination';
import { ProjectsContext } from './../context/ProjectContext';

export default function Projects() {
    const data = useContext(ProjectsContext);
    const ImgMoveDown = (e) => {
        const root = document.documentElement;
        root.style.setProperty("--bottom" ,"-" + (e.target.offsetHeight - 330) +"px");
        $(`.${styles.ProjectImg} img`).css("transition", "all " + 0.02 * e.target.offsetHeight + "s ease");
    }

    const handleClick = (index) => {
        $(`#modal${index}`).toggleClass("hide");
        $(`#modal${index}`).toggleClass("show");
        document.body.style.cssText = "overflow:hidden"
    }

    const exist = (index) => {
        $(`#modal${index}`).toggleClass("hide")
        $(`#modal${index}`).toggleClass("show")
        $("video")[index].pause()
        document.body.style.cssText = "overflow:auto"
    }

    return (
    <>
    <Header>
        <div className='headertext'>
            <h1>Projects Page</h1> 
            <p>
                working with different projects with different ideas learning various concepts and apply them in those projects. starting with ui/ux till fetching data from api in contexts and redux have a depth information in oop , problem solving , data store and manipulating
            </p>
        </div>
       
    </Header>
    <Categories/>
    <div className='projectsbox'>
        <div className='container'>
            <div className='row'>
            {
                data.map((item , index)=>{
                    return(
                        <div className={`col-xl-4 col-lg-6 col-md-6 card${item.id} cardcol`} key={item.id}>
                            <div className={`${styles.ProjectBox}  cardbox`}>
                                <div onClick={()=>{handleClick(index)}} href={item.link} className={`${styles.Project}`}>
                                    <div className={`${styles.ProjectImg}`} >
                                        <div className={`${styles.overlay} title`}>
                                            <h3>{item.title}</h3>
                                        </div>
                                        <img src={`${item.screenshoot}`} onMouseOver={ImgMoveDown} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div id={`modal${index}`} className={`${styles.modal} hide`} key={item.id}>
                                <div className='container'>
                                        <div className={`${styles.fadedbox}`}>
                                            <div className={`${styles.existbtn}`}>
                                                <button className={`${styles.exitbtn}`} onClick={()=>{exist(index)}}><FontAwesomeIcon icon={exit}/> </button>
                                            </div>

                                            <div className={`${styles.demovideo}`}>
                                                <video controls poster={item.image}>
                                                <source type="video/mp4" src={item.demolink}/>
                                                <source type="video/ogg" src=""/>
                                                </video>
                                            </div>

                                            <div className={`${styles.btns}`}>
                                            <div className={`${styles.codelink}`}>
                                                    <a href={item.srccodelink} className=""><FontAwesomeIcon icon={left}/> Src code </a>
                                                </div>
                                                <div className={`${styles.linkbtn}`}>
                                                    <a href={item.link} className="">Demo <FontAwesomeIcon icon={right}/></a>
                                                </div>
                                                
                                            </div>

                                        </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            </div>
            <Pagination/>
        </div>
    </div>
    </>
    )
}