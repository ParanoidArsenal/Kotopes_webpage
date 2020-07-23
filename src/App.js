import React, {useState, useEffect} from 'react';
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
import {ShoppingCart} from './components/ShoppingCart/ShoppingCart';

import {NavBar} from './components/NavBar/NavBar';
import {Footer} from './components/Footer/Footer';

import spinner from './pictures/icons/loop.svg';

const App = () => {
    const [load, setLoad] = useState(false);
    useEffect(() => {
        setTimeout(() => setLoad(true), 500);
    }, []);
    if(load){
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
                <Route path ="/shopping-cart" exact component ={ShoppingCart} />
            </Switch>
            <Footer />
        </Router>
    );}
    else{
        return(
        <div className="loader">
            <img src={spinner}/>
        </div>
        );
    };
};

export default App;
