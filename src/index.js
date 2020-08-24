import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app';
import Main from 'page/main';
import 'index.css';

ReactDOM.render(<App default={Main} />, document.getElementById('domRoot'));