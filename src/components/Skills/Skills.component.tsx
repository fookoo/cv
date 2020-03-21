import React from 'react';
import SkillItem from '../SkillItem/SkillItem.component';
import { key } from '../../common/utils.common';

import './Skills.component.scss';
import { ISkill } from '../../services/skills/skills.service';

interface ISkillsProps {
    title?: string;
    skills?: ISkill[];
}

const Skills = (props: ISkillsProps) => {
    const { title = 'Skills', skills = []} = props;

    return (
        <section className="skills">
            <header>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h2 className="overline">{title}</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-offset-3 col-md-offset-4 col-lg-9 col-md-8 col-sm-12 col-xs-12">
                        <div className="row">
                            {skills.map((skill, i) => (
                                <SkillItem key={key(skill.name, i)} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>

            </header>
        </section>
    );
};

export default Skills;

