import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { createStore, StoreProvider } from 'easy-peasy';
import { BrowserRouter as Router} from "react-router-dom";

const model = {
    theme: {
        current: "light",
        switchTheme: (state) => {
            state.current = state.current ==="dark"?"light":"dark"
    }}
}

const store = createStore(model);

ReactDOM.render(<StoreProvider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
        <App />
    </Router>
    </StoreProvider>
, document.getElementById('root'));
