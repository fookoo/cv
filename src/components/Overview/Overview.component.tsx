import React from 'react';

import './Overview.component.scss';

interface IOverviewProps {
    title?: string;
}

const Overview = (props: IOverviewProps) => {
    const { title = 'Overview' } = props;

    return (
        <section className="overview">
            <header>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h2 className="overline">{title}</h2>
                    </div>

                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-12">
                        <p>
                            If it wasn't for my native language being Polish, it would certainly be JavaScript.
                            I am really fluent with all kind of JavaScript languages, including TypeScript, CoffeeScript,
                            NodeJS.
                        </p>
                        <p>
                            I like to be up to date, so EcmaScript 5/6/7/8/9 are in daily use, so things like async/await,
                            generator functions, aren't secret for me.
                        </p>
                        <blockquote>
                            <p>If you are the smartest person in the room, then you are in the wrong room.</p>
                            <span>Confucius</span>
                        </blockquote>
                        <p>
                            This is my motto, and not because I think I am the smartest one, but because I want to keep
                            learning, keep improving my skill sets
                        </p>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Overview;

