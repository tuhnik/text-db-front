import React, { Component } from 'react';
import Input from './Input'

class Searchbar extends Component {
  render() {
    return (
    <div>
      <Input placeholder={"Search..."}/>
    </div>
    );
  }
}

export default Searchbar;