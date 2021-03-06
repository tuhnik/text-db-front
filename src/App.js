import React, {useEffect} from 'react';
import { useStore } from 'easy-peasy';
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from "./Routes";

function App() {
  
  useEffect(()=> {
    document.title = "Koala Life";
  });
  const theme = useStore(state => state.theme.current);
    return (
      <div className={theme}>
        <div className="App">
          <Header></Header>
          <Routes/>
          <Footer></Footer>
        </div>
      </div>
    );
}

export default App;
