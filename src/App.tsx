import React, { useEffect, useState } from 'react';
import Experiences, { IExperience } from './components/Experiences/Experiences.component';
import Overview from './components/Overview/Overview.component';
import Awards from './components/Awards/Awards.component';
import Header from './components/Header/Header.component';
import Skills from './components/Skills/Skills.component';
import HireMe from './components/HireMe/HireMe.component';
import { getExperiences } from './services/experiences/experiences.service';
import { getSkills, ISkill } from './services/skills/skills.service';

import './App.scss';

const linedin = 'https://www.linkedin.com/in/piotr-pliszczy%C5%84ski-70041058/';
const github = 'https://github.com/fookoo';

const App = () => {
    const [experiences, setExperiences] = useState<IExperience[]>([]);
    const [skills, setSkills] = useState<ISkill[]>([]);


    useEffect(() => {
        Promise.all([getExperiences(), getSkills()])
            .then(([experiences, skillsResponse]) => {
                setExperiences(experiences);
                setSkills(skillsResponse);
            })
    }, []);

    return (
        <div className="App">
            <Header
                name={"Piotr Pliszczyński"}
                position={"Frontend developer"}
                linkedinProfile={linedin}
                githubProfile={github}
            />
            <Overview />
            <Skills skills={skills} />
            <Experiences experiences={experiences}/>
            <Awards>
                <h3>MIXX Awards 2016 - Brown medal in category Games</h3>
                <h4>September 2019 - Present, Warsaw</h4>
                <p>
                    <strong>Kilobity na czarity</strong> - Game made for <strong>Wielka Orkiestra Świątecznej
                    Pomocy</strong> and <strong>Play.pl</strong>, based on ICY Tower concept.
                </p>
                <p>Build with <strong>Plain JavaScript</strong></p>
            </Awards>
            <HireMe
                linkedinProfile={linedin}
                githubProfile={github}
            />
        </div>
    );
};

export default App;
