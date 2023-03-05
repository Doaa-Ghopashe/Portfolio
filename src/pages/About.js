import React, { useContext, useEffect, useState } from 'react'
import styles from "../pagestyle/About.module.css"
import Header from './../components/Header';
import { ProfileContext } from '../context/ProjectContext'

export default function About() {
    const data = useContext(ProfileContext);
    const [certificates , setCertificates] = useState((data.certificates));
    const [hobbies , setHobbies] = useState((data.hobbies));
    const [skills , setSkills] = useState((data.skills));


    useEffect(()=>{
        setCertificates(data.certificates)
        setHobbies(data.hobbies)
        setSkills(data.skills)
    },[data.certificates , data.hobbies , data.skills])
  return (
    <div className={`${styles.AboutPage}`}>
        
        <Header>
                <div className='row align-items-center m-0'>
                    <div className='col-xl-4 m-auto mt-5 col-lg-4 col-md-5 col-8 col-sm-6'>
                        <div className={styles.ProfileImg}>
                            <img src={data.imgurl} alt="Owner-Img"/>
                        </div>
                        
                    </div>
                    <div className='col-xl-7 p-0'>
                        <div className={`${styles.OwnerInfo} text-start`}>
                            <span className={`${styles.OwnerName}`}>{data.firstname} {data.lastname} <span className={`${styles.OwnerNationality}`}>Egyptian</span></span>
                            <pre className='px-3'>
                                <span className={`${styles.OwnerJob}`}>{data.jobtitle}</span>
                                <br/>
                                Location:{data.birthplace}
                                <br/>
                                Birthdate:{data.birthdate}
                                <br/>
                                {data.educationstatus}
                                from Helwan University faculty of computer science 
                                {data.graduationyear} with {data.degree}
                            </pre>
                        </div>
                    </div>
                </div>
        </Header>

        <div className='container'>
            
            <section className={`${styles.Certificates}`}>
                <div className={`${styles.sectionTitle}`}>
                    <h1>Certificates</h1>
                </div>
                <div className={`${styles.CertificateBox}`}>
                    
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            {
                                certificates != null &&certificates.map((cer , index)=>{
                                    return(
                                        <a href={cer.url} className={`carousel-item ${index==1?"active":""}`} key={index}>
                                            <img src={cer.img} className="d-block w-100" alt="certificate is being loading" title={cer.url}/>
                                        </a>
                                    )
                                })
                                
                            }
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </section>
            
            <section className={`${styles.Skills}`}>
                <div className={`${styles.sectionTitle}`}>
                    <h1>Skills</h1>
                </div>
                <div className={`${styles.SkillBox}`}>
                    {
                        skills != null && skills.map((skill,index)=>{
                            return(
                               <div className={`${styles.SkillItem}`} key={index}>
                                    {
                                        Object.values(skill).map(
                                            (subskill)=>subskill.map(
                                                (item , index)=> {
                                                    return(
                                                        <div className={`${styles.subskilloverlay} ${index==0?styles.top:index==1?
                                                        styles.topleft:index==2?styles.topright:index==3?
                                                        styles.bottom:index ==4 ? styles.bottomright:styles.bottomleft}`} key={index}>
                                                            {item}
                                                        </div>
                                                    )
                                                }
                                        ))
                                    }
                                    {Object.keys(skill)[0]}
                                </div> 
                            )
                        })
                    }
                </div>
            </section>

            <section className={`${styles.Hobbies}`}>
                <div className={`${styles.sectionTitle}`}>
                    <h1>Hobbies</h1>
                </div>
                <div className={`${styles.HobbiesBox}`}>
                    <div className={`${styles.hobbies}`}>
                        <div className={`${styles.hobbyimg}`}>
                            <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321002/a-woman-watching-tv.jpg"/>
                        </div>
                        <div className={`${styles.hobbyimg}`}> 
                            <img src="https://zestchef.com/wp-content/uploads/2021/08/chef-is-chopping-vegetables-PVCCNXH-scaled.jpg"/>
                        </div>
                        <div className={`${styles.hobbyimg}`}>
                            <img src='https://www.shapeyourhappiness.com/wp-content/uploads/2019/02/Reading-in-morning-resize.jpg'/>
                        </div>
                        <div className={`${styles.hobbyimg}`}>
                            <img src="https://assets-global.website-files.com/5bbe7f42f7fb00f925ffe397/5c3f9e5df09e2923d664fd34_Adlava%20Blog%20Image%20Template%20-%20How%20Often%20Should%20I%20Redesign%20My%20Website_.png"/>
                        </div>
                    </div>
                    <div className={`${styles.hobbiestext}`}>
                        {hobbies != null && hobbies.map((hobby , index)=>{
                            return(
                                <div className={`${styles.hobbytext}`} key={index}>
                                    <h3>{hobby}</h3>
                                </div>
                            )
                        })

                        }
                    </div>
                </div>
            </section>
        </div> 
    </div>
  )
}
