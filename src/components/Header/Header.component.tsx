import React, { useEffect, useRef, useState } from 'react';

import './Header.component.scss';

const randomLetter = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return characters.charAt(Math.floor(Math.random() * characters.length));
};

const hackString = (input: string, n = 5): string => {
    const len = input.length;
    const strArr = input.split('');

    for (let i = 0; i < n; i++) {
        const index = Math.ceil(Math.random() * (len - 1));
        strArr[index] = strArr[index] !== ' ' ? randomLetter() : ' ';
    }

    return strArr.join('');
};

interface IHeaderProps {
    name: string;
    position: string;

    linkedinProfile?: string;
    githubProfile?: string;
}

const Header = (props: IHeaderProps) => {
    const { name, position, linkedinProfile = '', githubProfile = '' } = props;
    const nameRef = useRef<HTMLHeadingElement>(null);
    const [hover, setHover] = useState(false);
    const toggleOn = () => setHover(true);
    const toggleOff = () => {
        setHover(false);
        if (nameRef.current) {
            nameRef.current.innerHTML = name;
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (nameRef.current && hover) {
                nameRef.current.innerHTML = hackString(name);
            }
        }, 215);

        return () => {
            clearTimeout(timer);
        }
    }, [hover, name]);

    return (
        <section className="header">
            <div className="row">
                <div className="col-sm-4 col-xs-12">
                    <h1
                        ref={nameRef}
                        onMouseOver={toggleOn}
                        onMouseOut={toggleOff}
                        className="mono"
                    >
                        {name}
                    </h1>
                    <h2 className="accent-color">{position}</h2>
                </div>

                <div className="col-sm-8 col-xs-12">
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
        </section>
    );
};

export default Header;

