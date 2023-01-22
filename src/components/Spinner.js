import React, { useEffect } from 'react'
import $ from "jquery"
export default function Spinner() {
    useEffect(()=>{
        document.body.style.cssText = "overflow:hidden"
        setTimeout(()=>{
            $(".loadingpage").removeClass("show")
            $(".loadingpage").addClass("hide")    
            document.body.style.cssText = "overflow:auto"
        },7000)
        
    },[])
  return (
    <div className='loadingpage '>
    <span className="loader"></span>
    </div>
  )
}
