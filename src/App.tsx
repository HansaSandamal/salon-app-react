import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style_sheets/main.scss';
import Header from "./layouts/Header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import 'mdbreact/dist/css/mdb.css';
import Footer from "./layouts/Footer";
import Home from "./view/Home";
import About from './view/About';
import Contact from './view/Contact';


function App() {
    return (
        <div className="App">
            <Header/>

            <Router>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/contacts">
                        <Contact/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
            <Footer/>

        </div>
    );
}

export default App;
