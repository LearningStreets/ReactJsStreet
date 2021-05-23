import React, { Component } from 'react';
import {AppRoute} from './Route';

import AppMenuComponent from './components/appMenuComponent';
import AppFooterComponent from './components/appFooterComponent';
import {AppHeaderComponent} from './components/appHeaderComponent';
// import {HomeComponent} from './components/homeComponent';



class App extends Component{

  state={
    activeRouteLinkText : "Home"
}

  render() 
  {
    
    return (
      <div>
          <div id="thisSiteContentDiv"> 

              {/* displaying app header */}
            <AppHeaderComponent />
            <div className="content-width">
                <div id="menuDiv" className="open-menu-div"> 
                  <i className="bi bi-list open-menu" onClick={this.changeCss} ></i>  
                  <i className="bi bi-chevron-compact-right menu-chevron" ></i>  
                    {this.state.activeRouteLinkText === "Home" ? 
                    // <i className="bi bi-house menu-home theme-color-text" ></i>
                    <span className="menu-route-text"> Welcome to ReactJs Street </span>: 
                    <span className="menu-route-text"> { this.state.activeRouteLinkText}   </span> 
                    }
                  
                
                {/* with the help of bootstrap css dividing the content into columns */}
                {/* <div className="row col-md-12"> */}
                
                  <div id="menu-render-helper-div" className="action-unblocked"></div>
                  <div  id="menu-list-container" className="col-md-3 menu-list-hide">
                    
                      {/* displaying app menu */}
                      <AppMenuComponent ActiveRouteText={this.getActiveRouteLinkText} />
                  </div>


                  </div>

              </div>
            
            <div className="col-md-12 pd0 content-width">
                <div className="router-container"> 
                  {/* here the content of other page will get displayed */}
                  <AppRoute /> 
                </div>
            </div> 
            
            {/* displaying app footer */}
            <AppFooterComponent /> 
          </div>
         
      </div>
         
      ); 
  }

  // creating call back function to get the active route link text from Menu Component
  getActiveRouteLinkText = (_newText) => {
    this.setState({activeRouteLinkText: _newText})
  }

  componentDidMount() {

    var menuDiv = document.getElementById("menuDiv");
    var sticky = menuDiv.offsetTop;
    document.addEventListener('scroll', () => {
        if(window.pageYOffset > sticky) {
          menuDiv.classList.add("stickyMenuDiv");
        }

        else {
          menuDiv.classList.remove("stickyMenuDiv");
        }
       
    });
  }


  // componentDidMount() {
  //   // {this.checkActiveRouteLinkText()}
  // }

  // checkActiveRouteLinkText = () => {
  //   if(this.state.activeRouteLinkText === "Home")
  //    {
  //     var firstLandingPageDiv = document.getElementById("firstLandingPageDiv");
  //     if (firstLandingPageDiv.classList.contains("displayNone")){
  //       firstLandingPageDiv.classList.remove("displayNone");
  //     }

  //     document.getElementById("thisSiteContentDiv").classList.add("displayNone");
  //    }
  //    else
  //    {

  //     var thisSiteContentDiv = document.getElementById("thisSiteContentDiv");
  //     if (thisSiteContentDiv.classList.contains("displayNone")){
  //       thisSiteContentDiv.classList.remove("displayNone");
  //     }
  //     document.getElementById("firstLandingPageDiv").classList.add("displayNone"); 

  //    }
  // }

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
