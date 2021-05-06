import {HashRouter as Router, Switch, Route} from 'react-router-dom';
// importing constant file to read the links
import * as appConsts from './assets/appConstants';

// Importing Component
import {HomeComponent} from './components/homeComponent';
import {FolderAndFileDetailsComponent} from './components/folderAndFileDetailsComponent';
import {HowReactWorksComponent} from './components/howReactWorksComponent';
import FunctionComponent  from './components/functionComponent';
import ClassComponent  from './components/classComponent';

export const AppRoute= () => {
    return (
        <Router>
            <Switch> 
              <Route exact path='/' component={HomeComponent} /> 
              <Route path={appConsts.routeLinks.FolderAndFileDetails} component={FolderAndFileDetailsComponent} /> 
              <Route path={appConsts.routeLinks.HowReactWorks} component={HowReactWorksComponent} /> 
              <Route path={appConsts.routeLinks.FunctionComponent} component={FunctionComponent} /> 
              <Route path={appConsts.routeLinks.ClassComponent} component={ClassComponent} /> 
          </Switch>
        </Router>
    );
}