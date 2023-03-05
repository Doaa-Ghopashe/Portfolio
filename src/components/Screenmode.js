import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

import styles from '../componentsstyle/Screenmode.module.css';

export default function ScreenMode (){
    const [currentmode , setCurrentMode] = useState("dark");
    const ele1 = <FontAwesomeIcon icon={faCircleHalfStroke} />
    const root = document.documentElement;
    const Mode =  () => {
        if(currentmode == "dark"){
            setCurrentMode("light");
            root.style.cssText = `--theme: white ; 
            --font-color: black ; 
            --border-color: rgba(0, 0, 0, 0.384);
            --transparent-layer: rgba(255, 255, 255, 0.308)`;
        }else{
            setCurrentMode("dark");
            root.style.cssText = `--theme: black ; 
            --font-color: white ; 
            --border-color: rgba(255, 255, 255, 0.521);
            --transparent-layer: rgba(0, 0, 0, 0.445)`;
        }
    }

    return(
        <div className={styles.modebtn}>
            <button title="Mode" onClick={Mode} className='btn mode'>{ele1}</button>
        </div>
    )  
} 