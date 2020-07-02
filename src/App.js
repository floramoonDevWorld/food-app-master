import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import './App.css';
import Menu from "./components/Menu.js";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <div className="sidenav">
                            <Link to="/Menu">MENU</Link>
                            <Link to="/FindUs">FIND US</Link>
                            <Link to="/Contact">CONTACT</Link>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <Route path="/" />
                        <Route path="/Menu" component={Menu} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
