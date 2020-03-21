import { IExperience } from '../../components/Experiences/Experiences.component';
import { ESkill, EWorkPosition } from '../skills/skills.service';

export const getExperiences = (): Promise<IExperience[]> => new Promise<IExperience[]>((success) => {
    success([
        {
            id: "0",
            firm: "Six group",
            location: "Warsaw",
            position: EWorkPosition.senior,
            start: "September 2019",
            content: [
                'Creating Application for Swiss Exchange page.',
                'Site was based on Adobe Experience Manager CMS system. Our team was responsible for creating building blocks (AEM Components) for authors to create content pages from it.',
                'Components were created using TypeScript and React (16.11.0). All components were covered by unit tests written in Jest',
                'I also participated in quality control (code review) and made every effort to ensure high performance and good programming standards.'
            ],
            skills: [
                ESkill.react,
                ESkill.redux,
                ESkill.typescript,
                ESkill.jest,
                ESkill.webpack,
                ESkill.parcel,
                ESkill.babel,
                ESkill.css,
                ESkill.sass,
                ESkill.git,
            ]
        }, {
            id: "1",
            firm: "SDI Media",
            location: "Warsaw / Remote",
            position: EWorkPosition.senior,
            start: "April 2019",
            end: "October 2019",
            content: [
                'SDI Media is worldwide company involved in translating movies, series, digital assets related to cinematic industry.',
                'Main goal was to develop Angular 7 app, that will assist during translation process, from very beginning to deploy to final media platform (Netflix, HBO, etc.)',
                'Our daily routine starts with code review and team based discussion on how to solve incoming tasks. We worked closely with Business Team as well as UI/UX Team to provide very friendly and intuitive app that will fulfil enormous sets of requirements.',
                'We weren\'t just a group of developers who will perform the task after the task, we were fully involved to development process as well as in discussions with Business Team to provide better solutions to final product.'
            ],
            skills: [
                ESkill.angular,
                ESkill.typescript,
                ESkill.javascript,
                ESkill.php,
                ESkill.ngRX,
                ESkill.jest,
                ESkill.webpack,
                ESkill.babel,
                ESkill.css,
                ESkill.sass,
                ESkill.git,
            ]
        }, {
            id: "2",
            firm: "Goldman Sachs",
            location: "Warsaw",
            position: EWorkPosition.senior,
            start: "October 2017",
            end: "April 2019",
            content: [
                'Goldman Sachs is one of the largest investing bank in the World, where together with the team spread around the world (Warsaw, London, NYC) we have worked on modular App.',
                'I was responsible for working on React/Angular based app for traders.\nApplication was quite old, and that why my main goal was to migrate module by module to newer technologies (React/Angular).\nI have taken opportunity to master my skills at configuring and optimizing build process by creating fully custom setup for Webpack, taking advantages of newest version at the time.',
                'Project was driven by SCRUM'
            ],
            skills: [
                ESkill.angular,
                ESkill.javascript,
                ESkill.jasmine,
                ESkill.webpack,
                ESkill.babel,
                ESkill.css,
                ESkill.sass,
                ESkill.svn,
            ]
        }, {
            id: "3",
            firm: "Credit Suisse",
            location: "Warsaw / Remote",
            position: EWorkPosition.senior,
            start: "February 2017",
            end: "August 2017",
            content: [
                'Credit Suisse is second largest bank in Switzerland, where together with the team from Wroclaw we have worked on trading app.',
                'I was part of 6 person team, when I join, technology was already chosen, It was AngularJS together with TypeScript',
                'Project was driven by SCRUM'
            ],
            skills: [
                ESkill.angular,
                ESkill.javascript,
                ESkill.jasmine,
                ESkill.webpack,
                ESkill.babel,
                ESkill.css,
                ESkill.sass,
                ESkill.git,
            ]
        }, {
            id: "4",
            firm: "TomTom Telematics [CGI]",
            location: "Warsaw / Remote",
            position: EWorkPosition.senior,
            start: "October 2016",
            end: "January 2017",
            content: [
                'TomTom is Netherlands company producing GPS navigations for cars, I was working on application which was used by international support hub.',
                'Application was based on Oracle Cloud Service (PHP), and frontend was written in VUE and plain javascript',
            ],
            skills: [
                ESkill.vue,
                ESkill.javascript,
                ESkill.php,
                ESkill.css,
                ESkill.sass,
                ESkill.git,
            ]
        }, {
            id: "5",
            firm: "SwissCom [CGI]",
            location: "Warsaw / Remote",
            position: EWorkPosition.senior,
            start: "January 2016",
            end: "September 2016",
            content: [
                'Swisscom AG is a major telecommunications provider in Switzerland',
                'Together with the Dutch team I created an application for sellers of GSM operator services. Application written using AngularJS and ES6',
            ],
            skills: [
                ESkill.angular,
                ESkill.javascript,
                ESkill.jasmine,
                ESkill.grunt,
                ESkill.css,
                ESkill.sass,
                ESkill.git,
            ]
        }, {
            id: "6",
            firm: "IGT (formerly GTECH)",
            location: "Warsaw / Remote",
            position: EWorkPosition.senior,
            start: "January 2015",
            end: "December 2015",
            content: [
                'International Game Technology PLC (IGT), formerly Gtech is a multinational gambling company that produces slot machines and other gambling technology.',
                'Side by side with team from India, I migrate old Georgia National lottery site, create new components for ',
            ],
            skills: [
                ESkill.backbone,
                ESkill.javascript,
                ESkill.css,
                ESkill.sass,
                ESkill.git,
            ]
        }, {
            id: "7",
            firm: "Artegence / Efigence",
            location: "Warsaw / Remote",
            position: EWorkPosition.mid,
            start: "February 2014",
            end: "December 2014",
            content: [
                'Artegence is big digital agency, hire approx. 50-100 persons (developers, graphics, ux, devops, etc). At first I was assign to create some landing pages, newsletter and other junior related tasks. After a month my supervisor quickly moved me to the team  responsible for creating new portal for biggest GSM operator in Poland - Play.pl',
                'I take a technology lead  on that specific project, my team was counting 4 person. I have created solution for complex templating subsystem.',
                'Another big task was to create copy of existing dashboard from mbank.pl (online banking) and create a configurable subsystem for making tutorials',
                '',
                'Also I contribute to another team working on ideabank.pl (another online banking), which was written in AngularJS. I have created few views, tens of simple component, few services',
                'I have created game for promotional Play.pl related to Marcin Gortat / Basketball',
                'I got my impact on charity due to creating game for Wielka Orkiestra Świątecznej Pomocy - \'Kilobity na czarity\'',
            ],
            skills: [
                ESkill.angular,
                ESkill.javascript,
                ESkill.coffeeScript,
                ESkill.python,
                ESkill.grunt,
                ESkill.gulp,
                ESkill.css,
                ESkill.sass,
                ESkill.less,
                ESkill.git,
            ]
        }, {
            id: "8",
            firm: "Orbita Digital",
            location: "Warsaw",
            position: EWorkPosition.mid,
            start: "January 2013",
            end: "January 2014",
            content: [
                'Lots of smaller projects.',
                'Lots of different technology: PHP, ZEND, Symphony, CakePHP, ezPublish',
                'Some CMS based page, mostly in PHP + HTML5/CSS/JS',
            ],
            skills: [
                ESkill.php,
                ESkill.javascript,
                ESkill.grunt,
                ESkill.cordova,
                ESkill.css,
                ESkill.sass,
                ESkill.git,
            ]
        }, {
            id: "9",
            firm: "RDS",
            location: "Warsaw",
            position: EWorkPosition.junior,
            start: "January 2013",
            end: "January 2014",
            content: [
                'Lots of smaller projects.',
                'Lots of different technology: PHP, ZEND, Symphony, CakePHP, Wordpress, Prestashop',
                'Lots of small projects, campaign, games, contests, online-shops',
            ],
            skills: [
                ESkill.php,
                ESkill.javascript,
                ESkill.grunt,
                ESkill.cordova,
                ESkill.phoneGap,
                ESkill.css,
                ESkill.sass,
                ESkill.git,
            ]
        }, {
            id: "10",
            firm: "Freelance / Private project",
            location: "Warsaw / Remote",
            position: EWorkPosition.junior,
            start: "January 2000",
            end: "January 2012",
            content: [
                'I spending my free time at constantly polishing my skills',
            ],
            skills: [
                ESkill.php,
                ESkill.javascript,
                ESkill.typescript,
                ESkill.coffeeScript,
                ESkill.bash,
                ESkill.python,

                ESkill.angular,
                ESkill.react,
                ESkill.polymer,
                ESkill.backbone,
                ESkill.vue,

                ESkill.nodejs,
                ESkill.express,
                ESkill.socketIO,
                ESkill.firebase,
                ESkill.mongoDB,

                ESkill.cordova,
                ESkill.phoneGap,
                ESkill.ionic,

                ESkill.grunt,
                ESkill.gulp,
                ESkill.babel,

                ESkill.css,

                ESkill.git,
                ESkill.svn,
            ]
        }

    ])
});