import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import frank from './frank';
import App from './App';

frank();

let div = document.getElementById('root')

ReactDOM.render(<App />, div);