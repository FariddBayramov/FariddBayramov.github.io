import React from 'react';

import { Icons } from './icons';

// CUSTOM ICONS
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import WbIridescentIcon from '@material-ui/icons/WbIridescent';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Description from '@material-ui/icons/Description';
import WorkIcon from '@material-ui/icons/Work';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import DevicesIcon from '@material-ui/icons/Devices';
import FunctionsIcon from '@material-ui/icons/Functions';
import SchoolIcon from '@material-ui/icons/School';
import DescriptionIcon from '@material-ui/icons/Description';
import MovieIcon from '@material-ui/icons/Movie';
import EventSeatIcon from '@material-ui/icons/EventSeat';

// CUSTOM COMPONENTS
import CircleButton from '../components/CircleButton/CircleButton';

// CONFIGURABLE TEXT BEGINS HERE

/** Common config for top section and footer */
const CommonConfig = {
    // Whether to add the free Palestine screen at the start
  
    name: 'Farid Bayramov',
    // Tagline that will be displayed after the name
    tagline: 'front end developer',
    // Configuration for signature in the top section
    signature: {
        // Viewbox of the signature SVG
        viewBox: '0 0 100 100',
        // This is the data inside the "d" attribute of the <path> tag in SVG
        signaturePathD: `M10.5,65c2.8-1.5,5.3-4,7.5-6.2c7.4-6.9,12.7-15.7,13.7-26
        c0-0.6-0.1-1.3-0.7-1.3c-0.2,0-0.4,0.1-0.6,0.4c-0.6,0.6-0.8,1.2-1.2,1.9c-5.8,14.2-10.9,28.6-15,43.3c-0.7,2.3-1.3,4.7-1.9,7
        c-0.5,1.9-0.9,3.8-0.6,5.7c0.1,0.6,0.2,1.1,0.7,1.4c1.1,1,2.7,0,3.7-1.1c4-4.5,6.3-10.4,7.1-16.4c0.8-6,0-12.1-1.7-17.8
        c9.6,1.1,17-6.8,20.8-14.9c1.6-3.3,3-7,3.6-10.7c0.3-2.6,0.1-5.2-1.1-7.5c-2.8-5.1-10.3-5.5-15.3-4.5c-6,1.2-11.5,4.6-15.3,9.2
        c-5.5,6.6-8.2,15.3-8.7,23.8c-0.2,5.5,0.7,11.7,4.8,15.4c3.4,2.9,8.5,3.6,12.7,2.3c4.2-1.2,8-4.3,10.9-7.8
        c2.8-3.4,4.9-7.5,7.1-11.2c0.4-0.7,0.9-2.3-0.5-2.1c-0.6,0.1-1.1,0.7-1.5,1.2c-1.6,2.2-3.3,4.5-4.1,7
        c-0.8,2.9-0.8,4.5,0.3,5c1,0.5,2-0.2,2.7-1c2.3-2.5,3-6.1,3.2-9.3c-0.3,2.6-0.3,5.2,0.1,7.7c0.1,0.6,0.2,1.1,0.7,1.3
        c0.6,0.2,1.2-0.2,1.7-0.8c2.2-2.7,2.7-6.4,3.1-9.8c-0.2,2.6-0.3,5.2,0,7.6c0,0.4,0.1,0.8,0.5,0.8c0.2,0,0.4-0.2,0.6-0.5
        c1.7-2.8,2.8-5.8,3.4-9c0,1.7,0.3,3.4,1,5c0.3,0.6,0.6,1.3,1.3,1.4c0.6,0,1.1-0.4,1.5-0.9c1.3-1.6,2-3.4,2.9-5.3
        c0.3-0.5,0.5-1.2,0.3-1.7c-0.2-1.1-2.6-0.2-0.6,1.3c2.1,1.6,4.6,1.3,6.7-0.4c1.5-1.2,2.5-2.9,2.9-4.8c0.3-2-2.2-0.2-2.9,0.5
        c-1.3,1.3-1.9,3.2-1.6,5c0.2,1,1,2,2,2c0.8,0,1.4-0.5,1.9-1.2c1.5-1.9,1.1-4.4,0.6-6.7c0.4,2.1,0.8,5.2,3.6,5.8
        c2.2,0.6,4.9-1,6.7-2.2c1.3-1,2.2-2.1,2.8-3.7c0.5-1.2,1.2-3.3,0.4-4.5c-0.4-0.7-1.2-1.1-1.9-1.4c-0.9-0.3-1.7-0.3-2.6-0.2
        c-1.1,0.3-2,1-2.7,1.9c-1.1,1.4-1.5,3.3-0.9,5c0.6,1.6,2.4,2.9,4,2.6c1.8-0.2,3.1-1.8,4-3.4c1.5-2.6,2.2-5.7,2.9-8.6
        c0.4-2,0.9-4.2,1.1-6.2c0.3-2.1,0.6-4.2,0.6-6.3c-1.4,2.6-2.1,5.3-2.9,8c-0.7,3.1-1.2,6.3-1.6,9.5c-0.2,1.6-0.5,3.3-0.1,4.9
        c0.2,0.5,0.3,1,0.6,1.3c0.3,0.3,0.8,0.4,1.2,0.4c1.5,0.1,3-0.1,4.5-0.3c-5.5,2-11,3.9-16.5,5.9c-8.8,3.2-17.6,6.7-26,10.4
        c-4.6,2-8.9,4.4-13.3,6.7c12.8-5,25.5-9.9,38.4-14.5c11.2-3.9,22.8-7.5,34.4-10.4`   
,

    },
    email: 'faridd.bayramov@gmail.com',
    // Information for social media accounts
    social: [
        {
            // Name of the social media platform
            name: 'GitHub',
            // Link to your account
            link: 'https://github.com/FariddBayramov',
            // (Optional) Icon of the social media platform
            // default icon will be used in case of no value
            icon: Icons['github']
        },
        {
            name: 'LinkedIn',
            link: 'https://linkedin.com/in/faridbayramov'
        },
        {
            name: 'Facebook',
            link: 'https://www.facebook.com/FredricBff/'
        },
        
        {
            name: 'Email',
            link: 'mailto:faridd.bayramov.@gmail.com'
        },
        {
            name: 'CV',
            link: 'https://docs.google.com/document/d/1jPq0NQAoumXRk2M00JBsdRkHs5cL00ecYJ1nlhumTHw/edit?tab=t.0',
            icon: <Description />
        }
    ]
};

/** Config for the projects section */
const ProjectsConfig = {
   
    // Extra classes to apply styling
    // "section-reverse" class makes a section flow from right to left
    extraClass: '0',
    // Projects
    projects: [
        {
            // Name of the project
            name: 'Film Script Generator AI',
            // Icon of the project
            icon: <DescriptionIcon/>,
            // Description of the project
            description: ' This project, developed as part of an artificial neural networks lecture, focuses on creating a natural language processing (NLP) model for generating film scripts. The aim is to explore the potential of AI algorithms in the creative process of scriptwriting within the film industry.',
            // Links to the project
            links: [
                {
                    // Tooltip of the link
                    tooltip: 'See source',
                    // Link URL
                    link: 'https://github.com/FariddBayramov/Film-Script-Generator-AI',
                    // Icon of the button
                    icon: Icons['code']
                }
            ]
        },
        {
            name: 'Payroll automation',
            icon: <BusinessCenterIcon />,
            description: ' This secure and user-friendly Java application simplifies employee payroll management with features like user authentication, employee data handling, and salary management.',
            links: [
                {
                    tooltip: 'See source',
                    link: 'https://github.com/FariddBayramov/Payroll_automation-java-',
                    icon: Icons['code']
                }
            ]
        },
        {
            name: 'Film Library App',
            icon: <MovieIcon />,
            description: 'This is a JavaFX-based application developed using SceneBuilder for UI design, with a MySQL database for managing user data and film information.',
            links: [
                {
                    tooltip: 'See source',
                    link: 'https://github.com/FariddBayramov/Film-Library-App-With-Database',
                    icon: Icons['code']
                }
            ]
        },
        {
            name: 'Cinema_Reservation',
            icon: <EventSeatIcon />,
            description: 'This is a JavaFX-based application that allows users to select seats for movies, purchase snacks (e.g., popcorn, drinks), and view the total price before confirming their reservations.',
            links: [
                {
                    tooltip: 'See source',
                    link: 'https://github.com/FariddBayramov/Cinema_Reservation-Java-',
                    icon: Icons['code']
                }
            ]
        }
    ]
};

const ExperienceConfig = {
   
    // Extra classes to apply styling
    // "section-reverse" class makes a section flow from right to left
    extraClass: '0',
    // Projects
    experiences: [
        {
            // Name of the project
            name: 'Frontend Developer',
            // Icon of the project
            icon: <DeveloperModeIcon/>,
            // Description of the project
            description: 'Developed dynamic and responsive web interfaces using React.js, TypeScript, HTML, and CSS, ensuring seamless user experiences across all devices. Managed global state with Redux Toolkit, implemented intuitive forms and components with MUI and React Hook Form, integrated security and performance enhancements, and collaborated within an Agile team to deliver high-quality projects efficiently.',
            // Links to the project
            date: 'Jul 2024 - Feb 2025 · 8 mos',
            company: 'Code Academy',
            location: 'Baku, Azerbaijan'
           
        },
        {
            name: 'Information Technology Help Desk',
            icon: <DevicesIcon />,
            description: ' Developed extensive expertise in hardware and network management, security, and cost optimization while gaining hands-on experience with VLAN management, MDM systems, printer troubleshooting, Active Directory, data security, cloud services, and VPN technologies. Received training on the ITIL framework and performance optimization, contributing significantly to both personal and professional growth.',
            date: 'Jul 2023 - Aug 2023 · 2 mos',
            company:'TBC BOKT KREDIT MMC',
            location:'Baku, Azerbaijan'
        },
        {
            name: 'Mathematics Teacher',
            icon: <FunctionsIcon />,
            description: 'Provided personalized and engaging math lessons for students of various levels. Focused on simplifying complex concepts and helping students excel in exams while building their confidence in mathematics.',
            date:"May 2020 - May 2021 · 1 yr 1 mo",
            company:'Freelance',
            location:'Baku, Azerbaijan'
        }
    ]
};

const EducationConfig = {
   
    // Extra classes to apply styling
    // "section-reverse" class makes a section flow from right to left
    extraClass: '0',
    // Projects
    educations: [
        {

            school: 'Lyceum named after academician Zarifa Aliyeva',
            degree:"",
            icon: <DeveloperModeIcon/>,
            date: 'Sep 2018 - Jun 2021',
            location: 'Baku, Azerbaijan'
           
        },
        {
            school: 'Marmara University',
            degree:"Bachelor's degree, Computer Engineering",
            icon: <DevicesIcon />,
            date: 'Sep 2021 - Jul 2025',
            location:'Istanbul, Turkey'
        }
    ]
};

/** Config for sections */
const CustomSectionsConfig = [
    // PROJECTS SECTION
    
    // ABOUT SECTION
    {
        name: 'about',
        headerIcon: <InfoIcon />,
        extraClass: 'about-section section-reverse',
        content: (
            <>
                <h4>{Icons['helpoutline']} who is this guy?</h4>
                <p>
                    An easily excited and a highly passionate full stack developer trying to support the world of open source with his little efforts. Full of eagerness to learn and work on new technologies. :)
                </p>

                <h4>{Icons['code']} programming</h4>
                <p className="programming-icons">
                    {Icons['python']}
                    {Icons['java']}
                    {Icons['c']}
                    {Icons['typescript']}
                    {Icons['javascript']}
                    
                </p>

                <h4>{Icons['web']} web</h4>
                <p className="programming-icons">
                    {Icons['python']}
                    {Icons['mysql']}
                    {Icons['java']}
                    {Icons['c']}
                    {Icons['nodejs']}
                    {Icons['react']}
                    {Icons['typescript']}
                </p>
            </>
        )
    },
    
    {
        // Name of the section
        name: 'projects',
        // Icon next to the header title. The headerIcon can use any SVG icon, material icons are preferred
        // See https://material-ui.com/components/material-icons/
        headerIcon: <ComputerIcon />,
        // Extra classes to apply styling
        // "section-reverse" class makes a section right to left
        extraClass: '',
        // If you don't want a section in menu, make this true
        notInMenu: true,
        // Content inside the section
        content: (
            <>
                {ProjectsConfig.projects.map((project, index) => {
                    return (
                        <div key={'project-' + index}>
                            <h3 style={{ fontSize: '1.4rem' }}>{project.icon} {project.name}</h3>
                            <p>{project.description}</p>
                            <div style={{ textAlign: 'right' }}>
                                {project.links.map((link, linkIndex) => {
                                    return (
                                        <CircleButton key={'project-link-' + index + linkIndex} link={link.link} 
                                            target="_blank" tooltip={link.tooltip} size={1.4}>
                                            {link.icon}
                                        </CircleButton>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </>
        )
    }, 
    {
        name: 'experience',
        // Icon next to the header title. The headerIcon can use any SVG icon, material icons are preferred
        // See https://material-ui.com/components/material-icons/
        headerIcon: <WorkIcon/>,
        // Extra classes to apply styling
        // "section-reverse" class makes a section right to left
        extraClass: 'about-section section-reverse',
        // If you don't want a section in menu, make this true
        notInMenu: false,
        // Content inside the section
        content: (
            <>
                {ExperienceConfig.experiences.map((experience, index) => {
                    return (
                        <div key={'experience-' + index}>
                            <h3 style={{ fontSize: '1.4rem' }}>{experience.icon} {experience.name}</h3>
                            <h5>{experience.company}  \  {experience.location}</h5>
                          {experience.date }
                            <p>{experience.description}</p>
                            <div style={{ height:"50px" }}>
                             
                            </div>
                        </div>
                        
                    );
                })}
            </>
        )

    },
    {
        name: 'education',
        // Icon next to the header title. The headerIcon can use any SVG icon, material icons are preferred
        // See https://material-ui.com/components/material-icons/
        headerIcon: <SchoolIcon/>,
        // Extra classes to apply styling
        // "section-reverse" class makes a section right to left
        extraClass: '',
        // If you don't want a section in menu, make this true
        notInMenu: false,
        // Content inside the section
        content: (
            <>
                {EducationConfig.educations.map((education, index) => {
                    return (
                        <div key={'education' + index}>
                            <h3 style={{ fontSize: '1.4rem' }}> {education.school}</h3>
                            <h5>{education.degree}</h5>
                          {education.location } / {education.date}
                            
                            <div style={{ height:"30px" }}>
                             
                            </div>
                        </div>
                        
                    );
                })}
            </>
        )

    },
    // {
    //     name: 'reviews',
    //     headerIcon: <RateReviewIcon />,
    //     content: (
    //         <>
    //             <h4 style={{ fontSize: '2em' }}>{Icons['helpoutline']} what do others say?</h4>
    //             <p>
    //                 <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
    //                 <br />
    //                 Fawad did an excellent job for us on Phoenix. He worked hard, writing very good and legible code and made an invaluable contribution to the project.
    //             </p>
    //             <p>We like that he is very motivated, self-driven and is already an experienced and knowledgable coder.</p>
    //             <p style={{ textAlign: 'right', fontSize: 'small' }}>
    //                 <i>
    //                     <b>Edward Moyse</b>
    //                     <br />
    //                     Software Coordinator
    //                     <br />
    //                     CERN
    //                 </i>
    //             </p>
    //             <p>
    //                 <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
    //                 <br />
    //                 The mentors have noticed that Fawad has strong technical skills, an ability to learn quickly new technologies, that he is very flexible and open minded, ready to discuss his views and to ponder about the pros and cons in a thoughtful and collected manner, making his own decisions taking into account the feedback he gets without accepting everything nor rejecting anything.
    //             </p>
    //             <p style={{ textAlign: 'right', fontSize: 'small' }}>
    //                 <i>
    //                     <b>Stéphane Lauriere &amp; Ecaterina Moraru</b>
    //                     <br />
    //                     XWiki SAS
    //                 </i>
    //             </p>
    //             <p>
    //                 <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
    //                 <br />
    //                 I have really appreciated your confidence to solve problems yourself and follow your own intuition even when it goes against what I was suggesting. I feel you were mostly right :)
    //             </p>
    //             <p style={{ textAlign: 'right', fontSize: 'small' }}>
    //                 <i>
    //                     <b>James Knight</b>
    //                     <br />
    //                     GeNN Team
    //                     <br />
    //                     Research Fellow
    //                     <br />
    //                     The University of Sussex
    //                 </i>
    //             </p>
    //         </>
    //     )
    // }
];

export { CommonConfig, ProjectsConfig, CustomSectionsConfig, Icons };
