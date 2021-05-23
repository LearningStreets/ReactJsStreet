import React from 'react';
import {HashRouter as Router, NavLink } from 'react-router-dom';
import routeData from '../assets/constantFiles/routeConstants';

export default class AppMenuComponent extends React.Component{

    render() {

 const _template = (
    <Router> 
        <div className="menu-list-content">

        <NavLink className="menu-home" onClick={() => this.hideMenuList("Home")}  exact to={"/"}   >
            <i className="bi bi-house  theme-color-text" > </i> 
        </NavLink>
            <i className="bi bi-x-circle close-menu" onClick={() => this.hideMenuList("")}></i>
        <ul>

            {routeData.map(_item => 
                <li key={_item.routeKey}>
                    <NavLink onClick={() => this.hideMenuList(_item.routeLinkText)}  exact to={_item.routePath}   activeClassName="menu-list-a-active" >
                        {_item.routeLinkText} 
                    </NavLink>
                </li> 
            )}
        </ul>
        </div>
    </Router>
 )

 return _template;

}

// Below method is being called to hide menu
hideMenuList = (_routeLinkText) => {
    var list_container = document.getElementById("menu-list-container"); 
        list_container.classList.add("menu-list-hide");
        list_container.classList.remove("menu-list-show");
        // removing blocked class to helper_div div such that user can access other elements
        document.getElementById("menu-render-helper-div").classList.remove("action-blocked");
        
        //below will set the view on top
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        
        // sending current route text to parent component
        if(_routeLinkText !== "") {
        this.props.ActiveRouteText(_routeLinkText);
        }
    } 
}


 

