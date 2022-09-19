import { ISkillDetail } from '../../../../services/skills/skills.service'
import StarsBar from '../../../StarsBar/StarsBar.component'
import React from 'react'

interface ISkillDetailProps {
  skill: ISkillDetail
}

export const SkillDetail: React.FC<ISkillDetailProps> = ({ skill }) => {
  const {
    name,
    type,
    score = 0,
    since = new Date().getFullYear(),
    till = new Date().getFullYear()
  } = skill
  const url = String(type)
    .toLowerCase()
    .replace(/[\s,.]/g, '')

  return (
    <div className="skill-detail">
      <img className="logo" src={`assets/skills/scaled/${url}.png`} alt={name} />
      <span className={'name'}>{name}</span>
      <StarsBar name={name} value={score} />
      <div className="experience" title={`Experience from ${since} to ${till}`}>
        <img src="assets/time.png" alt={`Experience in ${name}`} />
        <div className="text hide-xs show-print">
          <span>{till - since}</span>
          <span>years</span>
        </div>
      </div>
    </div>
  )
}
