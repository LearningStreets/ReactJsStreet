import {Component, React} from 'react';
import logo from '../logo.svg';
// importing app name from constant file
import { AppName }  from '../assets/appConstants';

export class AppHeaderComponent extends Component{
  

    // --theme-color: purple;
    // --header-footer-bg-color: #282c34;
    // --card-bg-color: rgba(128, 0, 128, 0.25);
    // --card-border-color: rgba(128, 0, 128, 0.8); 


    state={
        themePurple: 'purple',
        themePurple_card_bgc: 'rgba(128, 0, 128, 0.2)',
        themePurple_card_bc: 'rgba(128, 0, 128, 0.2)',
        themeGreen: 'green',
        themeGreen_card_bgc: 'rgba(0, 128, 0, 0.2)',
        themeGreen_card_bc: 'rgba(0, 128, 0, 0.8)',
        themeOrangeRed: 'orangered',
        themeOrangeRed_card_bgc: 'rgba(255, 68, 0, 0.2)',
        themeOrangeRed_card_bc: 'rgba(255, 68, 0, 0.8)',
        themeHotPink: '#e83e8c',
        themeHotPink_card_bgc: '#e83e8d38',
        themeHotPink_card_bc: '#e83e8dcc'
    }


    setTheme = (event, _theme) => {
       // console.log(event.target); 
        document.documentElement.style.setProperty('--theme-color',  this.state[_theme]);
        document.documentElement.style.setProperty('--card-bg-color',  this.state[_theme + "_card_bgc"]);
        document.documentElement.style.setProperty('--card-border-color',  this.state[_theme + "_card_bc"]);
    }

    render(){
        return (
        <div> 
            <div className="App-header">
            <img src={logo} width="100" className="App-logo" alt="logo" />  
            </div>

            <div className="App-heading">
             {AppName} 
            </div>

            <div className="App-theme-btn-div">  
                <span style={{'backgroundColor': this.state.themePurple}} onClick={(event)=> this.setTheme(event, "themePurple")} />
                <span style={{'backgroundColor': this.state.themeGreen}} onClick={(event)=> this.setTheme(event, "themeGreen")} />
                <span style={{'backgroundColor': this.state.themeHotPink}} onClick={(event)=> this.setTheme(event, "themeHotPink")} />
                <span style={{'backgroundColor': this.state.themeOrangeRed}} onClick={(event)=> this.setTheme(event, "themeOrangeRed")} />
            </div>

        </div>
        );
    }
}