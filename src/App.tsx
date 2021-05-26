import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style_sheets/main.scss';
import Header from "./layouts/Header";
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'mdbreact/dist/css/mdb.css';
import Footer from "./layouts/Footer";
import Home from "./view/Home";
import About from './view/About';




function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <About/>
            <Footer/>

        </div>
    );
}

export default App;
