import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Main} from './components/Main/Main';
import {About} from './components/About/About';
import {Music} from './components/Music/Music';
import {Video} from './components/Video/Video';
import {Photos} from './components/Photos/Photos';
import {Tour} from './components/Tour/Tour';
import {Merch} from './components/Merch/Merch';
import {Contact} from './components/Contact/Contact';

import {NavBar} from './components/NavBar/NavBar';
import {Footer} from './components/Footer/Footer';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path ="/" exact component ={Main} />
                <Route path ="/about" exact component ={About} />
                <Route path ="/music" exact component ={Music} />
                <Route path ="/video" exact component ={Video} />
                <Route path ="/photos" exact component ={Photos} />
                <Route path ="/tour" exact component ={Tour} />
                <Route path ="/merch" exact component ={Merch} />
                <Route path ="/contact" exact component ={Contact} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
