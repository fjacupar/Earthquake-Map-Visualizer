import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EarthquakeDetailPanel from './components/detail-panel/detail-panel';
import Map from './components/map/map';
import './index.css'


ReactDOM.render(
    <BrowserRouter>
        <Map/>
            <Switch>
                <Route path="/map" component={Map} />
                <Route path="/earthquakeDetail/:id" render={props => <EarthquakeDetailPanel {...props}/>}/>
            </Switch>
    </BrowserRouter >,


    document.getElementById('root')
)