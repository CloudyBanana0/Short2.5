import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import FavBooks from "./FavBooks";
class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>PA 2.5 - Nick Short</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/FavBooks">JPG Pic</NavLink></li>
                </ul>
                <div className="content">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/stuff" element={<Stuff />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/FavBooks" element={<FavBooks />}/>
                </Routes>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;