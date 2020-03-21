import React from 'react';

import './StarsBar.component.scss';
import { key } from '../../common/utils.common';

interface IStarsBarProps {
   name: string;
   value: number;
   max?: number;
}

const StarsBar = (props: IStarsBarProps) => {
    const { name, value = 0, max = 6 } = props;
    const array = new Array(max).fill(name);

    return (
        <div className="stars-bar">
            {array.map((v, i) => (
                <div key={key(v, i)} className={`star ${value >= (i + 1) && 'on'}`} />
            ))}
        </div>
    );
};

export default StarsBar;

