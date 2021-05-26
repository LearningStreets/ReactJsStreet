import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { HomeComponent } from './components/homeComponent';
import { ReactDocsComponent } from './components/reactDocsComponent';
import  PageNotFoundComponent  from './components/pageNotFoundComponent';

export const AppRoute= () => {
    return (
      <Router>
        <Switch>   
            {/* default component */}
            <Route exact path='/' component={HomeComponent} /> 

            {/* ReactDocsDocs component */}
            <Route  path='/ReactDocs' component={ReactDocsComponent} /> 

              {/* Page Not Found component */}
            <Route  path='*' component={PageNotFoundComponent} /> 
        </Switch>
  </Router>
     
    );
}
