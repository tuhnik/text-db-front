import React, { Component } from 'react';
import Searchbar from "../components/Searchbar";

class Header extends Component {
  render() {
    return (
    <header className="header">
        <div className="logo">Koala</div>
        <Searchbar></Searchbar> 
    </header>
    );
  }
}

export default Header;
