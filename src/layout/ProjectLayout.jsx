import React, { useEffect } from 'react'
import '../styles/projects.css'
import { useNavigate } from 'react-router-dom'

const ProjectLayout = ({projects}) => {


  useEffect(() => {
    console.log("hello",projects);
    
  }, [])
  
  return (
    <div id="projects">
      <div className="project-con">
        {projects.map((ele,idx)=>{
          return <div className="pro-card">
              <h2>{ele.project_name}</h2>
              <h4>{ele.tech}</h4>
              <div className="btns">
               {ele.github_link ?  <button className="src" onClick={()=>window.open(ele.github_link, "_blank")
                } >
                  source
                </button> : ""}
                {
                  ele.link ? <button className="preview" onClick={()=>window.open(ele.link, "_blank")}>preview</button> : ""
                }
              </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default ProjectLayout
