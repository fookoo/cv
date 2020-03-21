import React  from 'react';
import StarsBar from '../StarsBar/StarsBar.component';
import { key } from '../../common/utils.common';
import { ISkill, ISkillDetail } from '../../services/skills/skills.service';

import './SkillItem.component.scss';

interface ISkillDetailProps {
    skill: ISkillDetail;
}

const SkillDetail = (props: ISkillDetailProps) => {
    const { name, skill, score = 0, since = new Date().getFullYear(), till = new Date().getFullYear() } = props.skill;
    const url = String(skill).toLowerCase().replace(/[\s,.]/g,'');

    return (
        <div className="skill-detail">
            <img className="logo" src={`assets/skills/scaled/${url}.png`} alt={name}/>
            <span className={"name"}>{name}</span>
            <StarsBar name={name} value={score} />
            <span className="experience" title={`Experience from ${since} to ${till}`}>
                <img src="assets/time.png" alt={`Experience in ${name}`} />
                <span className="text hide-xs">{till - since} years</span>
            </span>

        </div>
    )
};

interface ISkillItemProps {
    skill: ISkill;
}

const SkillItem = (props: ISkillItemProps) => {
    const { name, skills = [] } = props.skill;

    return (
        <div className="skill-item col-xs-12 col-lg-5">
            <h2>{name}</h2>
            {skills.map(( skill, i) => (<SkillDetail key={key(name, i)} skill={skill} />))}
        </div>
    );
};

export default SkillItem;
