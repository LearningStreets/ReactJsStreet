import React from 'react';
import {HashRouter as Router, Link, NavLink } from 'react-router-dom';
import * as appConsts from '../assets/appConstants';

export default function AppMenuComponent(){

 const _template = (
    <Router> 
        <ul>
            <li><NavLink exact to="/" activeClassName="menu-list-a-active" > Home </NavLink></li> 
            <li><NavLink exact to={appConsts.routeLinks.FolderAndFileDetails}  activeClassName="menu-list-a-active" > Folder/File Details</NavLink></li>
            <li><NavLink exact to={appConsts.routeLinks.HowReactWorks}   activeClassName="menu-list-a-active" >How React works?</NavLink></li>
            <li><NavLink exact to={'/'}   activeClassName="menu-list-a-active" > What is JSX? </NavLink></li> 
            <li><NavLink exact to={'/'}   activeClassName="menu-list-a-active" > Legendary 'Hello World' Program</NavLink></li>
            <li><NavLink exact to={appConsts.routeLinks.ReactFundamentals}   activeClassName="menu-list-a-active" > React Terminology and Fundamentals</NavLink></li>
            <li><NavLink exact to={appConsts.routeLinks.BestCodingPractices}  activeClassName="menu-list-a-active" > Best Coding Practices</NavLink></li>
            <li><NavLink exact to={appConsts.routeLinks.FunctionComponent}  activeClassName="menu-list-a-active" >Function Component</NavLink></li>
            <li><NavLink exact to={appConsts.routeLinks.ClassComponent}   activeClassName="menu-list-a-active" >Class Component</NavLink></li>
            <li><NavLink exact to={appConsts.routeLinks.StateAndProps}    activeClassName="menu-list-a-active" >State and Props</NavLink></li>
            <li><NavLink exact to={appConsts.routeLinks.EventHandling}   activeClassName="menu-list-a-active" >Event Handling</NavLink></li>
            <li><NavLink exact to={appConsts.routeLinks.PassingDataBetweenComponents}    activeClassName="menu-list-a-active" >Passing Data Between Components</NavLink></li>
            <li><NavLink exact to={'/'}   activeClassName="menu-list-a-active" >Conditional Rendering</NavLink></li>
            <li><NavLink exact to={'/'}  activeClassName="menu-list-a-active" >Conditions/Loops</NavLink></li>
            <li><NavLink exact to={'/'}   activeClassName="menu-list-a-active" >Routing</NavLink></li>
            <li><NavLink exact to={'/'}   activeClassName="menu-list-a-active" >Forms</NavLink></li>
            <li><NavLink exact to={'/'}   activeClassName="menu-list-a-active" >API</NavLink></li>
            <li><NavLink exact to={'/'}   activeClassName="menu-list-a-active" >Feedback</NavLink></li>
            
        </ul>
    </Router>
 )

 return _template;

}