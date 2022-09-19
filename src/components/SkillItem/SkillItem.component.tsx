import React from 'react'
import { key } from '../../common/utils.common'
import { ISkill } from '../../services/skills/skills.service'
import { SkillDetail } from './components/SkillDetail/SkillDetail.component'
import './SkillItem.component.scss'

interface ISkillItemProps {
  skill: ISkill
}

const SkillItem: React.FC<ISkillItemProps> = ({ skill }) => {
  const { name, skills = [] } = skill

  return (
    <div className="skill-item col-xs-12 col-lg-5">
      <h2>{name}</h2>
      {skills.map((skillItem, i) => (
        <SkillDetail key={key(name, i)} skill={skillItem} />
      ))}
    </div>
  )
}

export default SkillItem
