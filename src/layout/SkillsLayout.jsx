import React from 'react'
import '../styles/skillslayout.css'

const SkillsLayout = ({skills}) => {
  return (
    <div id='skills'>
      <h2>skills</h2>
      <div className="skill-con">

      {skills?.map((ele,idx)=>{
        return <div key={idx} className="skill-card">
          {ele}
        </div>
      })}
      </div>
    </div>
  )
}

export default SkillsLayout
