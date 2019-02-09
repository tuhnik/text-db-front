import React, { Component } from 'react';
import Searchbar from "../components/Searchbar";

class Header extends Component {
  render() {
    return (
    <header className="header">
        <div className="logo">Koala Life</div>
        <Searchbar></Searchbar>
        <div className="theme-button" onClick={this.props.switchTheme}>🌙</div>
    </header>
    );
  }
}

export default Header;
