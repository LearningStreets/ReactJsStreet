import {Component, React} from 'react';
import logo from '../logo.svg';
// importing app name from constant file
import { AppName }  from '../assets/appConstants';

export class AppHeaderComponent extends Component{
  
    render(){
        return (
        <header className="App-header row col-md-12">
            <div className="col-md-1"> <img src={logo} width="100" className="App-logo" alt="logo" /> </div>
            <div className="col-md-10 App-heading"> <span > {AppName} </span>  </div>
        </header>
        );
    }
}