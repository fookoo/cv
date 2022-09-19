import React from 'react'
import { ESkill } from '../../services/skills/skills.service'

import './SkillButton.component.scss'

interface ISkillButtonProps {
  skill: ESkill
  pressed?: boolean
  onClick?: (skill: ESkill) => void
}

const SkillButton: React.FC<ISkillButtonProps> = ({ skill, pressed = false, onClick }) => {
  const handleClick = () => onClick && onClick(skill)
  const url = String(skill)
    .toLowerCase()
    .replace(/[\s,.]/g, '')

  return (
    <button
      className={`skill-button ${pressed ? 'pressed' : ''} ${!onClick && 'non-hoverable'}`}
      title={skill}
      onClick={handleClick}
    >
      <img src={`assets/skills/scaled/${url}.png`} alt={skill} />
    </button>
  )
}

export default SkillButton
