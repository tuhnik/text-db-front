import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, StoreProvider } from 'easy-peasy';


const model = {
    theme: {
        current: "light",
        switchTheme: (state) => {
            state.current = state.current ==="dark"?"light":"dark"
    }}
}

const store = createStore(model);


ReactDOM.render(<StoreProvider store={store}>
    <App />
    </StoreProvider>
, document.getElementById('root'));
