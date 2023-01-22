
import { useState, createContext, useEffect } from 'react';

export const ProjectsContext = createContext();
export const ProfileContext = createContext();
export default function ProjectProvider(props) {
    const [projectdata,setProjectData] = useState([]);
    useEffect(()=>{
      fetch("https://fake-api-vsjt.onrender.com/projects")
      .then((response)=> response.json())
      .then((result)=>setProjectData(result));
    },[])

  return (
    <ProjectsContext.Provider value={projectdata}>
      {props.children}
    </ProjectsContext.Provider>
  )
}
/* */
export function ProfileProvider(props) {
  const [mydata , setMyData] = useState([]);
  useEffect(()=>{
    fetch("h`ttps://fake-api-vsjt.onrender.com/profile")
    .then((response)=> response.json())
    .then((result)=>setMyData(result));
  },[])

return (
  <ProfileContext.Provider value={mydata}>
    {props.children}
  </ProfileContext.Provider>
)
}

