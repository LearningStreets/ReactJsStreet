import React, { Component } from 'react';
import {AppRoute} from './Route';

import AppMenuComponent from './components/appMenuComponent';
import AppFooterComponent from './components/appFooterComponent';
import {AppHeaderComponent} from './components/appHeaderComponent';




class App extends Component{

  state={
    activeRouteLinkText : "Home"
}

  render() 
  {
    return (
        <div className="App">

          {/* displaying app header */}
          <AppHeaderComponent />

          <div className="open-menu-div"> 
            <i className="bi bi-list open-menu" onClick={this.changeCss} ></i>  
            <i className="bi bi-chevron-compact-right menu-chevron" ></i>  
              {this.state.activeRouteLinkText === "Home" ? 
              <i className="bi bi-house menu-home theme-color-text" ></i> : 
              <strong className="theme-color-text menu-route-text"> { this.state.activeRouteLinkText}   </strong> 
              }
            
          </div>

          {/* with the help of bootstrap css dividing the content into columns */}
          {/* <div className="row col-md-12"> */}
          
            <div id="menu-render-helper-div" className="action-unblocked"></div>
            <div  id="menu-list-container" className="col-md-3 menu-list-hide">
              
                {/* displaying app menu */}
                <AppMenuComponent ActiveRouteText={this.getActiveRouteLinkText} />
            </div>

            <div className="col-md-12">
              <div className="router-container"> 
                {/* here the content of other page will get displayed */}
                <AppRoute /> 
              </div>
            </div>
          {/* </div> */}

          {/* displaying app footer */}
          <AppFooterComponent /> 

        </div>
      ); 
  }

  // creating call back function to get the active route link text from Menu Component
  getActiveRouteLinkText = (_newText) => {
    this.setState({activeRouteLinkText: _newText})
  }

  // in the below method we are checking the css and applying additional css on the basis of checks
  changeCss = () => {

    var list_container = document.getElementById("menu-list-container");
    var helper_div = document.getElementById("menu-render-helper-div");
 
    if (list_container.classList.contains("menu-list-hide")){
          list_container.classList.remove("menu-list-hide");
          list_container.classList.add("menu-list-show");
          // adding blocked class to helper_div div such that user can't access other elements
          helper_div.classList.add("action-blocked");
    }

    else{
      list_container.classList.remove("menu-list-show");
      list_container.classList.add("menu-list-hide");
      // removing blocked class to helper_div div such that user can access other elements
      helper_div.classList.remove("action-blocked");
    }
 
}
}
 export default App;
