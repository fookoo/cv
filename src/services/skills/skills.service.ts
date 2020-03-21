export enum EWorkPosition {
    senior = 'Senior Frontend Developer',
    mid = 'Mid Frontend Developer',
    junior = 'Junior Frontend Developer'
}

export enum ESkill {
    angular = 'Angular',
    react = 'React',
    polymer = 'Polymer',
    backbone = 'Backbone',
    vue = 'Vue',

    javascript = 'JavaScript',
    typescript = 'TypeScript',
    coffeeScript = 'CoffeeScript',
    php = 'PHP',
    bash = 'Bash',
    python = 'Python',

    nodejs = 'NodeJS',
    express = 'Express JS',
    socketIO = 'Socket.io',

    jest = 'Jest',
    jasmine = 'Jasmine',

    webpack = 'Webpack',
    gulp = 'Gulp',
    grunt = 'Grunt',
    babel = 'Babel',
    parcel = 'Parcel',

    css = 'CSS',
    sass = 'SASS',
    less = 'LESS',
    postCss = 'PostCSS',
    styledComponent = 'Styled Component',

    redux = 'Redux',
    ngRX = 'NgRX',
    firebase = 'FireBase',
    mongoDB = 'MongoDB',

    git = 'GIT',
    svn = 'SVN',

    cordova = 'Cordova',
    phoneGap = 'PhoneGap',
    ionic = 'Ionic',
}

export interface ISkillDetail {
    name: string;
    skill: ESkill;
    score: number;
    since?: number;
    till?: number;
}

export interface ISkill {
    name: string;
    skills: ISkillDetail[]
}

export const getSkills = (): Promise<ISkill[]> => new Promise<ISkill[]>((success) => {
    success([{
        name: 'Languages',
        skills: [
            { skill: ESkill.typescript, name: 'Typescript', score: 4, since: 2014 },
            { skill: ESkill.javascript, name: 'Javascript', score: 5, since: 2006 },
            { skill: ESkill.nodejs, name: 'NodeJS', score: 4, since: 2017 },
            { skill: ESkill.php, name: 'PHP', score: 3, since: 2008, till: 2014 },
        ]
    }, {
        name: 'Frameworks',
        skills: [
            { skill: ESkill.angular, name: 'Angular', score: 5, since: 2014 },
            { skill: ESkill.react, name: 'React', score: 5, since: 2016 },
            { skill: ESkill.backbone, name: 'Backbone', score: 3, since: 2016, till: 2017 },
            { skill: ESkill.vue, name: 'VUE.js', score: 3, since: 2018, till: 2019 },
            { skill: ESkill.polymer, name: 'Polymer', score: 3, since: 2018, till: 2019 },
        ]
    }, {
        name: 'Tools',
        skills: [
            { skill: ESkill.ngRX, name: 'NgRX', score: 5, since: 2018, till: 2019 },
            { skill: ESkill.redux, name: 'Redux', score: 5, since: 2018 },
            { skill: ESkill.express, name: 'ExpressJS', score: 4, since: 2016, till: 2017 },
            { skill: ESkill.socketIO, name: 'Socket.io', score: 4, since: 2018, till: 2019 },
            { skill: ESkill.git, name: 'GIT', score: 4, since: 2013 },
            { skill: ESkill.webpack, name: 'Webpack', score: 4, since: 2016 },
            { skill: ESkill.grunt, name: 'Grunt', score: 4, since: 2016, till: 2017 },
            { skill: ESkill.parcel, name: 'Parcel', score: 3, since: 2019 },
        ]
    }, {
        name: 'Testing',
        skills: [
            { skill: ESkill.jasmine, name: 'Karma Jasmine', score: 5, since: 2016 },
            { skill: ESkill.jest, name: 'Jest', score: 5, since: 2016 },
        ]
    },])
});
