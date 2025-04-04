import React from 'react'

function SkillList({ src, skills }) {
  return (
    <span>
        <img src={src} alt="CheckMarkIcon" />
        <p>{skills}</p>
    </span>
  )
}

export default SkillList