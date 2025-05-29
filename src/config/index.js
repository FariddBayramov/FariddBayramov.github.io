
import { Icons } from './icons';

// CUSTOM ICONS
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import DevicesIcon from '@material-ui/icons/Devices';
import FunctionsIcon from '@material-ui/icons/Functions';
import SchoolIcon from '@material-ui/icons/School';
import DescriptionIcon from '@material-ui/icons/Description';
import  MusicNoteOutlined  from '@material-ui/icons/MusicNoteOutlined';
import MovieIcon from '@material-ui/icons/Movie';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import MergeTypeIcon from '@material-ui/icons/MergeType';
// CUSTOM COMPONENTS
import CircleButton from '../components/CircleButton/CircleButton';

// CONFIGURABLE TEXT BEGINS HERE

/** Common config for top section and footer */
const CommonConfig = {
    
  
    name: 'Farid Bayramov',
    // Tagline that will be displayed after the name
    tagline: 'junior data scientist | front end developer',
    // Configuration for signature in the top section
    signature: {
        // Viewbox of the signature SVG
        
        viewBox: '0 0 260.000000 141.000000',
        // This is the data inside the "d" attribute of the <path> tag in SVG
        signaturePathD: `M650 1357 c-8 -7 -42 -21 -75 -31 -83 -25 -200 -87 -271 -144 -201
-162 -306 -445 -224 -604 43 -84 125 -147 193 -148 33 0 33 -3 2 -73 -54 -122
-70 -240 -37 -270 25 -23 43 -21 86 8 20 14 38 25 40 25 1 0 2 -10 2 -22 -2
-58 117 -71 369 -43 72 8 288 30 480 50 193 20 561 60 820 90 416 48 612 68
888 90 78 7 108 25 40 25 -81 0 -331 -22 -623 -55 -1427 -161 -1701 -188
-1822 -183 -74 3 -102 8 -114 20 -16 15 -13 19 32 47 52 34 255 104 419 145
260 65 811 164 955 171 36 2 92 8 125 14 33 6 63 11 67 11 4 0 4 -24 1 -53 -7
-68 15 -124 52 -133 55 -14 182 43 241 108 40 44 41 49 15 72 -23 20 -153 40
-218 33 -24 -2 -43 -2 -43 2 0 3 6 38 14 76 9 50 31 102 73 180 107 196 263
509 263 527 0 40 -62 10 -127 -62 -34 -37 -145 -270 -183 -381 l-32 -96 -23
23 c-28 28 -43 29 -92 9 -45 -19 -67 -38 -105 -90 -25 -34 -29 -36 -23 -14 4
15 2 30 -3 33 -14 8 -68 -55 -83 -98 -7 -19 -23 -39 -36 -45 -13 -6 -21 -16
-18 -22 5 -7 11 -6 21 2 11 9 14 8 14 -8 0 -11 9 -32 21 -47 l20 -26 -27 0
c-87 0 -645 -102 -879 -161 -145 -37 -326 -94 -377 -120 -21 -11 -40 -19 -44
-19 -3 0 15 23 41 52 59 65 123 180 131 236 3 23 10 42 14 42 4 0 35 20 67 44
l60 44 -5 -48 c-4 -42 -1 -52 21 -74 22 -22 35 -26 79 -26 68 0 123 26 184 84
26 25 48 46 49 46 0 0 -1 -16 -3 -35 -5 -39 18 -75 47 -75 37 0 130 79 194
165 34 45 33 43 -18 -73 -20 -45 -33 -87 -30 -92 14 -22 32 -7 59 48 64 131
157 229 238 253 24 7 34 5 43 -8 9 -12 14 -13 19 -4 4 6 2 19 -5 27 -31 37
-160 -28 -220 -110 -18 -25 -34 -44 -36 -42 -3 2 12 39 31 81 41 89 40 85 22
85 -7 0 -35 -33 -61 -72 -82 -124 -182 -218 -231 -218 -28 0 -13 109 25 181
17 32 27 60 22 63 -13 9 -48 -35 -74 -94 -14 -33 -44 -73 -74 -101 -75 -70
-106 -81 -37 -13 64 64 114 149 114 196 0 34 -32 68 -64 68 -37 0 -88 -20
-139 -56 -26 -19 -51 -34 -56 -34 -5 0 -31 -25 -56 -55 -43 -50 -154 -135
-176 -135 -5 0 -9 9 -9 19 0 19 -62 81 -80 81 -20 0 -9 16 19 28 123 54 328
214 402 311 121 161 117 292 -11 365 -48 27 -66 31 -139 33 -46 1 -86 5 -89 8
-9 9 -27 6 -42 -8z m30 -56 c0 -46 -35 -146 -70 -201 -18 -28 -35 -49 -37 -46
-2 2 8 44 22 92 48 159 85 226 85 155z m227 8 c64 -31 88 -71 88 -144 -1 -146
-164 -325 -433 -476 -48 -27 -99 -49 -113 -49 l-27 0 65 176 c51 137 75 189
112 237 57 76 91 153 98 223 l6 54 80 0 c61 0 91 -5 124 -21z m-307 -38 c-11
-21 -36 -89 -54 -152 -19 -63 -40 -130 -49 -150 -14 -35 -92 -108 -247 -233
-41 -33 -69 -61 -63 -63 13 -5 154 106 236 186 l58 56 -22 -55 c-12 -30 -35
-94 -51 -142 -23 -69 -34 -88 -49 -88 -10 0 -43 -9 -74 -21 -42 -16 -55 -25
-55 -41 0 -18 4 -20 43 -15 23 3 52 9 63 12 l22 7 -22 -62 -21 -61 -35 6 c-80
15 -144 74 -176 162 -52 147 53 397 228 542 58 48 246 151 275 151 9 0 6 -12
-7 -39z m1638 -269 c-78 -155 -143 -280 -145 -278 -2 1 17 58 42 125 67 182
146 341 195 395 24 26 45 45 47 43 2 -2 -61 -131 -139 -285z m-1180 -234 c56
-56 -90 -255 -214 -292 -55 -17 -70 58 -28 142 51 102 198 194 242 150z m960
-4 c27 -19 28 -34 2 -84 -28 -55 -77 -108 -129 -142 -62 -39 -71 -37 -71 15 0
77 61 173 135 211 37 19 36 19 63 0z m-223 -105 c-5 -15 -4 -19 4 -15 7 5 5
-9 -5 -33 -9 -23 -14 -57 -12 -76 3 -28 1 -35 -11 -33 -26 5 -27 80 -1 103 24
22 27 44 3 24 -15 -13 -15 -11 1 19 19 36 31 43 21 11z m235 -29 c0 -26 -99
-124 -139 -138 -42 -15 -39 -1 5 23 36 19 124 109 124 126 0 5 2 9 5 9 3 0 5
-9 5 -20z m-1480 -66 c16 -19 30 -40 30 -47 0 -8 -28 -23 -62 -35 -74 -25
-158 -38 -158 -25 0 5 11 36 24 69 41 100 99 114 166 38z m-180 36 c0 -5 -4
-10 -9 -10 -5 0 -24 -2 -42 -5 l-34 -5 30 14 c36 18 55 20 55 6z m1644 -67
c-5 -25 -12 -32 -35 -35 -16 -3 -29 -4 -29 -3 0 5 65 74 67 71 2 -2 0 -17 -3
-33z m-1438 -80 c-30 -124 -205 -332 -291 -345 -18 -3 -20 2 -19 57 1 44 11
86 40 160 l39 99 45 4 c25 2 74 14 110 27 84 30 83 30 76 -2z m1718 8 c16 -13
14 -17 -16 -48 -57 -59 -178 -103 -216 -79 -7 4 -12 35 -12 77 l0 71 113 -4
c79 -2 119 -7 131 -17z M1720 939 c-8 -14 -9 -24 -2 -31 14 -14 32 -1 32 22 0 28 -17 33 -30
9z M1646 765 c-3 -9 -6 -24 -6 -34 0 -9 -16 -55 -35 -101 -37 -92 -43
-120 -22 -120 18 0 99 204 95 238 -4 30 -23 40 -32 17z`   
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
        // {
        //     name: 'CV',
        //     link: 'https://docs.google.com/document/d/1jPq0NQAoumXRk2M00JBsdRkHs5cL00ecYJ1nlhumTHw/edit?tab=t.0',
        //     icon: <Description />
        // }
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
            name: 'Spatial Data Analysis for Wealth Scoring and Multi-Persona Modeling',
            // Icon of the project
            icon: <DescriptionIcon/>,
            // Description of the project
            description: 'This project leveraged spatial and behavioral big data to calculate individual wealth scores and assign multiple lifestyle personas. Using K-Means clustering, BallTree, and Haversine distance, it modeled wealth based on income, mobility, and lifestyle patterns. Six diverse spatial datasets were integrated, and results were visualized through interactive maps to highlight behavioral insights beyond basic demographics.',
            // Links to the project
            links: [
                {
                    // Tooltip of the link
                    tooltip: 'See source',
                    // Link URL
                    link: 'https://github.com/FariddBayramov/MonstrAI_Hackathon',
                    // Icon of the button
                    icon: Icons['code']
                }
            ]
        },
        {

            
            // Name of the project
            name: 'HandMusicVision - Hand Gesture Music Player',
            // Icon of the project
            icon: <MusicNoteOutlined/>,
            // Description of the project
            description: 'HandMusicVision is a real-time app that turns 21 hand landmarks tracked via MediaPipe and OpenCV into 7 unique gestures. These gestures are recognized by a trained machine learning model and mapped to 7 musical notes (A–G) played through Pygame. The user-friendly interface allows recording, saving, and replaying melodies, and supports custom data collection to train new gestures.',
            // Links to the project
            links: [
                {
                    // Tooltip of the link
                    tooltip: 'See source',
                    // Link URL
                    link: 'https://github.com/FariddBayramov/HandMusicVision',
                    // Icon of the button
                    icon: Icons['code']
                }
            ]
        },
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
                <p> <div style={{border:"1px solid",padding:"10px"}}>
                I’m a final-year Computer Engineering student at Marmara University with a strong focus on Machine Learning, Deep Learning, and RAG (Retrieval-Augmented Generation) systems. I build data-driven solutions that merge algorithmic intelligence with practical impact.

My expertise includes data preprocessing, feature engineering, and model development using Python, Scikit-learn, TensorFlow, and PyTorch. I also create clear, impactful data visualizations with Matplotlib, Seaborn, and Plotly.

In parallel, I have hands-on experience in Front-End Development with React.js, TypeScript, and Redux Toolkit, crafting interfaces that transform insights into action.

Curious by nature and grounded in problem-solving, I aim to build meaningful systems at the intersection of data and experience.
                </div></p>
                
                <h4>{Icons['code']} software skills</h4>
                <h1 className="programming-icons">
                    
                    <i class="devicon-python-plain" title='Python' style={{fontSize:"45px"}}></i>
            &nbsp; 
        <span style={{fontSize:"20px"}} title='Power BI'>ML/DL</span>
         &nbsp; 
            <i class="devicon-scikitlearn-plain" title='scikitlearn' style={{fontSize:"45px"}}></i>
            &nbsp; 
            <i class="devicon-tensorflow-original" title='tensorflow' style={{fontSize:"45px"}}></i>
            &nbsp; 
            <i class="devicon-matplotlib-plain" title='tensorflow' style={{fontSize:"45px"}}></i>
            &nbsp; 
            <br></br>
            <span style={{fontSize:"10px"}} title='Power BI'>Power</span>
            <span style={{fontSize:"20px"}} title='Power BI'>BI</span>
            &nbsp; 
             <i class="devicon-microsoftsqlserver-plain-wordmark" title='MS Sql' style={{fontSize:"45px"}}></i>
             &nbsp; 
               <i class="devicon-keras-plain-wordmark" title='Keras' style={{fontSize:"45px"}}></i>
            &nbsp; 
            <i class="devicon-numpy-plain-wordmark" title='NumPy' style={{fontSize:"45px"}}></i>
            &nbsp; 
              <i class="devicon-postgresql-plain" title='Postgre Sql' style={{fontSize:"45px"}}></i>
            &nbsp;
            <br></br>


            <i class="devicon-html5-plain-wordmark" title='Html' style={{fontSize:"45px"}}></i>
            &nbsp; 
            <i class="devicon-css3-plain-wordmark" title='Css' style={{fontSize:"45px"}}></i>
            &nbsp; 
            <i class="devicon-javascript-plain" title='Javascript' style={{fontSize:"45px"}}></i>
            &nbsp; 
            <i class="devicon-typescript-plain" title='Typescript' style={{fontSize:"45px"}}></i>
            &nbsp; 
            <i class="devicon-react-original" title='React' style={{fontSize:"45px"}}></i>
            

            <i class="devicon-redux-original" title='Redux' style={{fontSize:"45px"}}></i>
            &nbsp; 
           <br></br>
            <i class="devicon-reactrouter-plain-wordmark" title='React Router' style={{fontSize:"45px"}}></i>
            &nbsp; 
            <i class="devicon-materialui-plain" title='Material UI' style={{fontSize:"45px"}}></i>
            &nbsp; 
            <i class="devicon-axios-plain-wordmark" title='Axios' style={{fontSize:"45px"}}></i>
            &nbsp; 
            <i class="devicon-swagger-plain-wordmark" title='Swagger' style={{fontSize:"45px"}}></i>
          
            <i class="devicon-figma-plain" title='Figma' style={{fontSize:"45px"}}></i>
            &nbsp; 
              
                     
            <br></br> 
           
            <i class="devicon-java-plain-wordmark" title='Java' style={{fontSize:"45px"}}></i>
            &nbsp;  
            <i class="devicon-matlab-plain" title='Matlab' style={{fontSize:"45px"}}></i>
            &nbsp; 
          <i class="devicon-c-plain" title='C ' style={{fontSize:"45px"}}></i>
            &nbsp;     
           
        
          
          
                    
                </h1>
                <hr></hr>
                <h4><AssignmentIcon/> project management tools</h4>
                <h2 className="programming-icons">
                    
            
                <i class="devicon-jira-plain-wordmark" title='jira' style={{fontSize:"45px"}}></i>
          
            &nbsp; 
         <span style={{fontSize:'30px'}}>ClickUp</span>
                </h2>
            <hr></hr>
                <h4><TrackChangesIcon/> methodologies</h4>
                <h2 className="programming-icons">
                    <span style={{fontSize:"30px"}}>agile</span>
                    &nbsp; 
                    <span style={{fontSize:"30px"}}>scrum</span>
                    &nbsp; 
                    <span style={{fontSize:"30px"}}>oop</span>
                </h2>
                <hr></hr>
                <h4><MergeTypeIcon/>version control</h4>
                <h1>
                
                   
                    
            <i class="devicon-github-original-wordmark" title='github'style={{fontSize:"45px"}}></i>
            &nbsp; 
            <i class="devicon-git-plain-wordmark" title='git' style={{fontSize:"45px"}}></i>
          
                </h1>
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
    //                 Farid did an excellent job for us on Phoenix. He worked hard, writing very good and legible code and made an invaluable contribution to the project.
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
    //                 The mentors have noticed that  has strong technical skills, an ability to learn quickly new technologies, that he is very flexible and open minded, ready to discuss his views and to ponder about the pros and cons in a thoughtful and collected manner, making his own decisions taking into account the feedback he gets without accepting everything nor rejecting anything.
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
