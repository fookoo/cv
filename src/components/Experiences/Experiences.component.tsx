import React from 'react'
import ExperienceItem from '../ExperienceItem/ExperienceItem.component'
import { ESkill, EWorkPosition } from '../../services/skills/skills.service'

import './Experiences.component.scss'

export interface IExperience {
  id: string
  firm: string
  position: EWorkPosition
  location: string
  start: string
  end?: string
  skills?: ESkill[]
  content: string[]
}

interface IExperiencesProps {
  title?: string
  experiences?: IExperience[]
}

const Experiences: React.FC<IExperiencesProps> = ({ title = 'Experience', experiences = [] }) => {
  return (
    <section className="experiences">
      <header>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-xs-12">
            <h2 className="overline">{title}</h2>
          </div>
        </div>
      </header>

      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </section>
  )
}

export default Experiences
