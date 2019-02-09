import React, { Component } from 'react';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {
  state={theme: "light"}

  switchTheme(){
    let theme = this.state.theme
    theme = theme === "light"?"dark":"light"
    this.setState({theme})
  }

  render() {
    
    return (
      <div className={this.state.theme}>
      <div className="App" onClick={this.switchTheme.bind(this)}>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
      </div>
    );
  }
}

export default App;
