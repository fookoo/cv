import React from 'react'
import { IExperience } from '../Experiences/Experiences.component'
import SkillButton from '../SkillButton/SkillButton.component'
import { key } from '../../common/utils.common'

import './ExperienceItem.component.scss'

interface IExperienceItemProps {
  experience: IExperience
}

const ExperienceItem: React.FC<IExperienceItemProps> = ({ experience }) => {
  const { firm, position, location, start, end, content, skills = [] } = experience
  const period = `${start} - ${end ? end : 'Present'}`

  return (
    <div className="experience-item row">
      <div className="col-lg-3 col-md-4 hide-sm hide-xs">
        <h4 className="period">{period}</h4>
      </div>
      <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
        <h3 className="xs-flex-columns sm-flex-row nowrap">
          <span className="firm">{firm}</span>
          <span className="hide-xs">&nbsp;/&nbsp;</span>
          <span>{position}</span>
        </h3>
        <h4 className="xs-flex-columns sm-flex-row">
          <span>{period}</span>
          <span className="hide-xs">,&nbsp;</span>
          <span className="location">{location}</span>
        </h4>
        <div className="skills">
          {skills.map((skill) => (
            <SkillButton key={`${firm}_${skill}`} skill={skill} />
          ))}
        </div>
        {content.map((paragraph, i) => (
          <p key={key(firm, i)}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

export default ExperienceItem
