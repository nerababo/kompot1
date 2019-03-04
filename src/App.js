import React, { Component } from 'react';
import Navbar from "./Navbar/navbar"
import './App.css';
import Carousel from './Carousel/Carousel';
import ContainerOne from './Container/ContainerOne';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <ContainerOne />
      </div>
    );
  }
}

export default App;
