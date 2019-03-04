import React, { Component } from 'react';
import "./navbar.scss";
import logo from "../Assets/Pics/logo.png"



class navbar extends Component {
    render() {
        return (

            <div>
                <header>
                    <div><img src={logo} alt="logo" /></div>
                    <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Contact1</a></li>
                            <li><a href="/">Contact2</a></li>
                            <li><a href="/">Contact3</a></li>
                            <li><a href="/">Contact4</a></li>
                            <li><a href="/">Contact5</a></li>
                            <li><a href="/">Contact6</a></li>

                        </ul>
                    </nav>
                    <label for="nav-toggle" className="nav-toggle-label">
                        <span></span>
                    </label>
                </header>





                <div className="content">
                    <h2>Your content would go here</h2>
                </div>

            </div>


        );
    }
}

export default navbar;