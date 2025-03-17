import React from 'react';

// ICONS
import SvgIcon from '@material-ui/core/SvgIcon';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MapIcon from '@material-ui/icons/Map';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import WebIcon from '@material-ui/icons/Web';
import MailIcon from '@material-ui/icons/Mail';
import Twitter from '@material-ui/icons/Twitter';

import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin.svg';
import { ReactComponent as CppIcon } from '../assets/icons/cplusplus-plain.svg';
import { ReactComponent as JavaIcon } from '../assets/icons/java-plain-wordmark.svg';
import { ReactComponent as AngularIcon } from '../assets/icons/angularjs-plain-wordmark.svg';
import { ReactComponent as JavaScriptIcon } from '../assets/icons/javascript-plain.svg';
import { ReactComponent as MongoDBIcon } from '../assets/icons/mongodb-plain-wordmark.svg';
import { ReactComponent as MySQLIcon } from '../assets/icons/mysql-plain-wordmark.svg';
import { ReactComponent as NodejsIcon } from '../assets/icons/nodejs-plain-wordmark.svg';
import { ReactComponent as PHPIcon } from '../assets/icons/php-plain.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react-original-wordmark.svg';
import { ReactComponent as TypeScriptIcon } from '../assets/icons/typescript-plain.svg';
import { ReactComponent as GraphQLIcon } from '../assets/icons/graphql.svg';
import { ReactComponent as PythonIcon } from '../assets/icons/python-plain-wordmark.svg';
import {ReactComponent as PowerBIIcon} from '../assets/icons/icons8-power-bi.svg'
// import { ReactComponent as PostgreSQLIcon } from '../assets/icons/postgresql.svg';
// import { ReactComponent as CProgrammingIcon } from '../assets/icons/c-plain.svg';
// import { ReactComponent as AgileIcon } from '../assets/icons/agile.svg';
// import { ReactComponent as ScrumIcon } from '../assets/icons/scrum.svg';
// import { ReactComponent as OOPIcon } from '../assets/icons/oop.svg';
// import { ReactComponent as MatlabIcon } from '../assets/icons/matlab.svg';
// import { ReactComponent as GitIcon } from '@material-ui/icons/Git'; // Git does not have an SVG import in the previous list, you can use Material-UI's built-in Git icon
// import { ReactComponent as PowerBIIcon } from '../assets/icons/powerbi.svg';
// import { ReactComponent as JupyterIcon } from '../assets/icons/jupyter.svg';
// import { ReactComponent as NumPyIcon } from '../assets/icons/numpy.svg';
// import { ReactComponent as KerasIcon } from '../assets/icons/keras.svg';
// import { ReactComponent as ANNIcon } from '../assets/icons/ann.svg'; // Artificial Neural Network
// import { ReactComponent as CNNIcon } from '../assets/icons/cnn.svg'; // Convolutional Neural Network
// import { ReactComponent as RNNIcon } from '../assets/icons/rnn.svg'; // Recurrent Neural Network
// import { ReactComponent as FormikIcon } from '../assets/icons/formik.svg';
// import { ReactComponent as YupIcon } from '../assets/icons/yup.svg';
// import { ReactComponent as ReduxIcon } from '../assets/icons/redux.svg';
// import { ReactComponent as ReactHookFormIcon } from '../assets/icons/react-hook-form.svg';
// import { ReactComponent as MaterialUIIcon } from '../assets/icons/material-ui.svg';
// import { ReactComponent as AxiosIcon } from '../assets/icons/axios.svg';
// import { ReactComponent as SwaggerIcon } from '../assets/icons/swagger.svg';
// import { ReactComponent as FigmaIcon } from '../assets/icons/figma.svg';
 import {ReactComponent as JiraIcon} from '../assets/icons/jira-svgrepo-com.svg'
 import {ReactComponent as ClickUpIcon} from '../assets/icons/clickup-svgrepo-com.svg'
// ICONS END

/** Default icons */
const Icons = {
    email: <MailIcon />,
    facebook: <SvgIcon component={FacebookIcon} />,
    twitter: <Twitter />,
    github: <SvgIcon component={GitHubIcon} stroke="currentColor" strokeWidth={2} style={{ fill: 'none' }} />,
    linkedin: <SvgIcon component={LinkedInIcon} />,
    projects: <ComputerIcon />,
    about: <InfoIcon />,
    cpp: <SvgIcon component={CppIcon} viewBox="0 0 128 128" fontSize="large" title="C++" />,
    java: <SvgIcon component={JavaIcon} viewBox="0 0 128 128" fontSize="large" title="Java" />,
    typescript: <SvgIcon component={TypeScriptIcon} viewBox="0 0 128 128" fontSize="large" title="TypeScript" />,
    javascript: <SvgIcon component={JavaScriptIcon} viewBox="0 0 128 128" fontSize="large" title="JavaScript" />,
    mysql: <SvgIcon component={MySQLIcon} viewBox="0 0 128 128" fontSize="large" title="MySQL" />,
    php: <SvgIcon component={PHPIcon} viewBox="0 0 128 128" fontSize="large" title="PHP" />,
    mongodb: <SvgIcon component={MongoDBIcon} viewBox="0 0 128 128" fontSize="large" title="MongoDB" />,
    nodejs: <SvgIcon component={NodejsIcon} viewBox="0 0 128 128" fontSize="large" title="Node.js" />,
    react: <SvgIcon component={ReactIcon} viewBox="0 0 128 128" fontSize="large" title="React" />,
    angular: <SvgIcon component={AngularIcon} viewBox="0 0 128 128" fontSize="large" title="Angular" />,
    graphql: <SvgIcon component={GraphQLIcon} viewBox="0 0 400 400" fontSize="large" title="GraphQL" />,
    helpoutline: <HelpOutlineIcon />,
    map: <MapIcon />,
    code: <CodeIcon />,
    link: <LinkIcon />,
    web: <WebIcon />,
    python: <SvgIcon component={PythonIcon} viewBox="0 0 128 128" fontSize="large" title="Python" />,
    clickUp: <SvgIcon component={ClickUpIcon} viewBox='0 0 128 128' fontSize='large' title='ClickUp'/>,
    // postgresql: <SvgIcon component={PostgreSQLIcon} viewBox="0 0 128 128" fontSize="large" title="PostgreSQL" />,
    // c: <SvgIcon component={CProgrammingIcon} viewBox="0 0 128 128" fontSize="large" title="C" />,
    // agile: <SvgIcon component={AgileIcon} viewBox="0 0 128 128" fontSize="large" title="Agile" />,
    // scrum: <SvgIcon component={ScrumIcon} viewBox="0 0 128 128" fontSize="large" title="Scrum" />,
    // oop: <SvgIcon component={OOPIcon} viewBox="0 0 128 128" fontSize="large" title="OOP" />,
    // matlab: <SvgIcon component={MatlabIcon} viewBox="0 0 128 128" fontSize="large" title="Matlab" />,
    // git: <SvgIcon component={GitIcon} fontSize="large" title="Git" />,
    // powerbi: <SvgIcon component={PowerBIIcon} viewBox="0 0 128 128" fontSize="large" title="Power BI" />,
    // jupyter: <SvgIcon component={JupyterIcon} viewBox="0 0 128 128" fontSize="large" title="Jupyter" />,
    // numpy: <SvgIcon component={NumPyIcon} viewBox="0 0 128 128" fontSize="large" title="NumPy" />,
    // keras: <SvgIcon component={KerasIcon} viewBox="0 0 128 128" fontSize="large" title="Keras" />,
    // ann: <SvgIcon component={ANNIcon} viewBox="0 0 128 128" fontSize="large" title="ANN" />,
    // cnn: <SvgIcon component={CNNIcon} viewBox="0 0 128 128" fontSize="large" title="CNN" />,
    // rnn: <SvgIcon component={RNNIcon} viewBox="0 0 128 128" fontSize="large" title="RNN" />,
    // formik: <SvgIcon component={FormikIcon} viewBox="0 0 128 128" fontSize="large" title="Formik" />,
    // yup: <SvgIcon component={YupIcon} viewBox="0 0 128 128" fontSize="large" title="Yup" />,
    // redux: <SvgIcon component={ReduxIcon} viewBox="0 0 128 128" fontSize="large" title="Redux" />,
    // reacthookform: <SvgIcon component={ReactHookFormIcon} viewBox="0 0 128 128" fontSize="large" title="React Hook Form" />,
    // materialui: <SvgIcon component={MaterialUIIcon} viewBox="0 0 128 128" fontSize="large" title="Material UI" />,
    // axios: <SvgIcon component={AxiosIcon} viewBox="0 0 128 128" fontSize="large" title="Axios" />,
    // swagger: <SvgIcon component={SwaggerIcon} viewBox="0 0 128 128" fontSize="large" title="Swagger" />,
    // figma: <SvgIcon component={FigmaIcon} viewBox="0 0 128 128" fontSize="large" title="Figma" />
    jira: <SvgIcon component={JiraIcon} viewBox='0 0 128 128' fontSize='large' title='Jira'/>,
    powerBi: <SvgIcon component={PowerBIIcon} viewBox='30 -10 18 60' fontSize='large' title='Power BI'/>
};


export { Icons };