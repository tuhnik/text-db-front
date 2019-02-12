import React, { Component } from 'react';
import Input from './Input'

class Searchbar extends Component {
  onSubmit(text){
    console.log(text)
  }
  render() {
    return (
    <div>
      <Input placeholder={"Search..."} onSubmit={this.onSubmit}/>
    </div>
    );
  }
}

export default Searchbar;