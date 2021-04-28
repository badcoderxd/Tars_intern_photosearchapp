import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Artist from './components/artist';
import ReactGA from 'react-ga';


const Routes = () => {
        
        useEffect(() => {
        ReactGA.initialize('G-B4N5H2DTB4');
         // To Report Page View 
        ReactGA.pageview(window.location.pathname + window.location.search);
        }, [])
        
        return(
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/artist/:id" exact component={Artist}/> 
            </Switch>  
        )
}

export default Routes;
