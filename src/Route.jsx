import {HashRouter as Router, Switch, Route} from 'react-router-dom';
// importing constant file to read the links
import routeData from './assets/constantFiles/routeConstants';
import { HomeComponent } from './components/homeComponent';

// Importing Component
  // import { HomeComponent } from './components/homeComponent';


export const AppRoute= () => {
    return (
        <Router>
            <Switch>  
                {routeData.map(_item => 
                        <Route key={_item.routeKey}  path={_item.routePath} component={_item.routeComponent} />
                )}
                {/* Default Route */}
                <Route exact path='/' component={HomeComponent} /> 
          </Switch>
        </Router>
     
    );
}