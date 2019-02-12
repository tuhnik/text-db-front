import React from 'react';
import Searchbar from "../components/Searchbar";
import { useStore, useActions } from 'easy-peasy';

function Header() {
  const theme = useStore(state => state.theme.current);
  const switchTheme = useActions(actions => actions.theme.switchTheme);
    return (
    <header className="header">
        <div className="logo">Koala Life</div>
            <div className="header-items-container">
            <Searchbar></Searchbar>
            <div className="theme-button" onClick={switchTheme}>{theme==="light"?"🌙":"☀️"}</div>
        </div>     
    </header>
    );
}

export default Header;