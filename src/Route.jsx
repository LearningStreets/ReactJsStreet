import {HashRouter as Router, Switch, Route} from 'react-router-dom';
// importing constant file to read the links
import * as appConsts from './assets/appConstants';

// Importing Component
import {HomeComponent} from './components/homeComponent';
import {FolderAndFileDetailsComponent} from './components/folderAndFileDetailsComponent';
import {HowReactWorksComponent} from './components/howReactWorksComponent';
import FunctionComponent  from './components/functionComponent';
import ClassComponent  from './components/classComponent';
import StateAndPropsComponent from './components/stateAndPropsComponent';
import { BestCodingPracticesComponent } from './components/bestCodingPracticesComponent';
import { ReactFundamentalsComponent } from './components/reactFundamentalsComponent';
import { EventHandlingComponent } from './components/eventHandlingComponent';

export const AppRoute= () => {
    return (
        <Router>
            <Switch> 
              <Route exact path='/' component={HomeComponent} /> 
              <Route path={appConsts.routeLinks.FolderAndFileDetails} component={FolderAndFileDetailsComponent} /> 
              <Route path={appConsts.routeLinks.HowReactWorks} component={HowReactWorksComponent} /> 
              <Route path={appConsts.routeLinks.FunctionComponent} component={FunctionComponent} /> 
              <Route path={appConsts.routeLinks.ClassComponent} component={ClassComponent} /> 
              <Route path={appConsts.routeLinks.StateAndProps} component={StateAndPropsComponent} /> 
              <Route path={appConsts.routeLinks.BestCodingPractices} component={BestCodingPracticesComponent} />
              <Route path={appConsts.routeLinks.ReactFundamentals} component={ReactFundamentalsComponent} />
              <Route path={appConsts.routeLinks.EventHandling} component={EventHandlingComponent} />
               
          </Switch>
        </Router>
    );
}