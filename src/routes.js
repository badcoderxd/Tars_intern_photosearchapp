import React,{useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Artist from './components/artist';
import ReactGA from 'react-ga';


const Routes = () => {
        
        useEffect(() => {
        ReactGA.initialize('G-XXFY03N9YN');
         // To Report Page View 
        ReactGA.pageview(window.location.pathname + window.location.search);
        }, [])
        
        useEffect(() => {
        console.log(window.location.pathname)
         })
        
        return(
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/artist/:id" exact component={Artist}/> 
            </Switch>  
        )
}

export default Routes;
