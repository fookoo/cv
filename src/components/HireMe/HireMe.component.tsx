import React, { useEffect, useRef, useState } from 'react';
import { transformText } from '../../common/utils.common';

import './HireMe.component.scss';

interface IChangeTextProps {
    texts: string[];

}

const ChangeText = ({ texts }: IChangeTextProps) => {
    const [text, setText] = useState(texts[0] || '');

    useEffect(() => {
        let i = 1;

        const timer = setInterval(() => {
            const startIdx = i - 1 >= 0 ? i - 1 : texts.length - 1;
            const strArr = transformText(texts[startIdx], texts[i], 3);
            let last = 0;
            strArr.forEach((line) => {
                const delay = 50 + Math.ceil(Math.random() * 100);
                setTimeout(() => setText(line.join('')), last + delay);
                last = last + delay;
            });

            i = (i + 1) < texts.length ? i + 1 : 0;

        }, 2500 + Math.ceil(Math.random() * 2000));

        return () => {
            clearTimeout(timer);
        }
    }, [texts]);

    return (<span className="change-text">{text}</span>)
};

interface IHireMeProps {
    title?: string;
    linkedinProfile?: string;
    githubProfile?: string;
}

const HireMe = (props: IHireMeProps) => {
    const { title = 'Hire Me', linkedinProfile, githubProfile } = props;
    const fromRef = useRef<HTMLInputElement>(null);
    const bodyRef = useRef<HTMLTextAreaElement>(null);
    const handleSend = () => {
        const topic = fromRef.current && fromRef.current.value;
        const body = bodyRef.current &&  bodyRef.current.value;

        if (topic !== '' && body !== '') {
            window.open(
                `mailto:fookoo@gmail.com?subject=${topic}&body=${body}`
            )
        }
    };
    const lookingFor = [
        'Frontend Developer ?',
        'React Developer ?',
        'Angular Developer ?',
        'Team Player ?'
    ];

    const destinations = [
        'EUROPE / WARSAW',
        'EVERYWHERE / REMOTE'
    ];

    return (
        <section className="hire-me">
            <header>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-xs-12">
                        <h2 className="overline">{title}</h2>
                    </div>
                </div>
            </header>

            <div className="row">
                <div className="col-lg-3 col-md-4 hide-xs"/>
                <div className="col-lg-9 col-md-8 col-xs-12">
                    <div className="row">
                        <div className="col-xs-12">
                            <p>Looking for  <ChangeText texts={lookingFor} /></p>
                            <p>I am currently looking for new opportunities.</p>
                            <p>I can work in <ChangeText texts={destinations} /></p>
                            <p>If you would like to cooperate please use form below</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 flex">
                            <input
                                ref={fromRef}
                                name="name"
                                placeholder={"I am CEO from Google"}
                            />
                            <textarea
                                ref={bodyRef}
                                name="text"
                                placeholder={"Your skill set is a perfect match for our open position..."}
                            />
                            <button onClick={handleSend}>
                                Send <img alt="send icon" src="assets/send.png" />
                            </button>
                            <span>or</span>
                            <span>find me on</span>
                            <div className="social">
                                {linkedinProfile && (
                                    <a href={linkedinProfile} title="Linkedin Profile">
                                        <img src="assets/linkedin.png" alt="Linkedin Icon"/>
                                    </a>
                                )}
                                {githubProfile && (
                                    <a href={githubProfile} title="GitHub Profile">
                                        <img src="assets/github.png" alt="Github Icon"/>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HireMe;

