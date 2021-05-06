import React from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';
import * as appConsts from '../assets/appConstants';

export default function AppMenuComponent(){

 const _template = (
    <Router> 
        <ul>
            <li><Link to={'/'} > Home </Link></li> 
            <li><Link to={appConsts.routeLinks.FolderAndFileDetails} >Folder/File Details</Link></li>
            <li><Link to={appConsts.routeLinks.HowReactWorks} >How React works?</Link></li>
            <li><Link to={'/'} > What is JSX? </Link></li> 
            <li><Link to={'/'} > Legendary 'Hello World' Program</Link></li>
            <li><Link to={'/'} > React Terminology and Fundamentals</Link></li>
            <li><Link to={appConsts.routeLinks.BestCodingPractices} > Best Coding Practices</Link></li>
            <li><Link to={appConsts.routeLinks.FunctionComponent} >Function Component</Link></li>
            <li><Link to={appConsts.routeLinks.ClassComponent} >Class Component</Link></li>
            <li><Link to={appConsts.routeLinks.StateAndProps}  >State and Props</Link></li>
            <li><Link to={'/'} >Handling Events</Link></li>
            <li><Link to={'/'} >Conditional Rendering</Link></li>
            <li><Link to={'/'} >Conditions/Loops</Link></li>
            <li><Link to={'/'} >Routing</Link></li>
            <li><Link to={'/'} >Forms</Link></li>
            <li><Link to={'/'} >API</Link></li>
            
        </ul>
    </Router>
 )

 return _template;

}