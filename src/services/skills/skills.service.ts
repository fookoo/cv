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
  ionic = 'Ionic'
}

export interface ISkillDetail {
  name: string
  type: ESkill
  score: number
  since?: number
  till?: number
}

export interface ISkill {
  name: string
  skills: ISkillDetail[]
}

export const getSkills = (): Promise<ISkill[]> =>
  new Promise<ISkill[]>((success) => {
    success([
      {
        name: 'Languages',
        skills: [
          { type: ESkill.typescript, name: 'Typescript', score: 4, since: 2014 },
          { type: ESkill.javascript, name: 'Javascript', score: 5, since: 2006 },
          { type: ESkill.nodejs, name: 'NodeJS', score: 4, since: 2017 },
          { type: ESkill.php, name: 'PHP', score: 3, since: 2008, till: 2014 }
        ]
      },
      {
        name: 'Frameworks',
        skills: [
          { type: ESkill.angular, name: 'Angular', score: 5, since: 2014 },
          { type: ESkill.react, name: 'React', score: 5, since: 2016 },
          { type: ESkill.backbone, name: 'Backbone', score: 3, since: 2016, till: 2017 },
          { type: ESkill.vue, name: 'VUE.js', score: 3, since: 2018, till: 2019 },
          { type: ESkill.polymer, name: 'Polymer', score: 3, since: 2018, till: 2019 }
        ]
      },
      {
        name: 'Tools',
        skills: [
          { type: ESkill.ngRX, name: 'NgRX', score: 5, since: 2018, till: 2019 },
          { type: ESkill.redux, name: 'Redux', score: 5, since: 2018 },
          { type: ESkill.express, name: 'ExpressJS', score: 4, since: 2016, till: 2017 },
          { type: ESkill.socketIO, name: 'Socket.io', score: 4, since: 2018, till: 2019 },
          { type: ESkill.git, name: 'GIT', score: 4, since: 2013 },
          { type: ESkill.webpack, name: 'Webpack', score: 4, since: 2016 },
          { type: ESkill.grunt, name: 'Grunt', score: 4, since: 2016, till: 2017 },
          { type: ESkill.parcel, name: 'Parcel', score: 3, since: 2019 }
        ]
      },
      {
        name: 'Testing',
        skills: [
          { type: ESkill.jasmine, name: 'Karma Jasmine', score: 5, since: 2016 },
          { type: ESkill.jest, name: 'Jest', score: 5, since: 2016 }
        ]
      }
    ])
  })
