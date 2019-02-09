import React from 'react';
import { useStore } from 'easy-peasy';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const theme = useStore(state => state.theme.current);
    return (
      <div className={theme}>
        <div className="App">
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </div>
      </div>
    );

}

export default App;
