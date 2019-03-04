import React, { Component } from 'react';
import "./navbar.css";
import logo from "../Assets/Pics/logo.png"



class navbar extends Component {
    render() {
        return (
            /* eslint-disable no-console */
            <div>
                <ul className="navigation">
                    <li><div className="logo">
                        <img src={logo} alt="logo" /></div></li>

                    <li ><a href="/" >Početna</a></li>

                    <li ><a href="/" >Cambridge ispiti</a></li>
                    <li ><a href="/" >O nama</a></li>
                    <li ><a href="/" >Kursevi jezika</a></li>
                    <li ><a href="/" >Zašto baš Cambrige English</a></li>
                    <li ><a href="/" >Prijava</a></li>
                    <li ><a href="/" >Prevodilačke usluge</a></li>
                    <li ><a href="/" >Reference</a></li>
                    <li ><a href="/" >Kontakt</a></li>
                    <li ><a href="/" >Cijene</a></li>
                </ul>

            </div>

        );
    }
}

export default navbar;