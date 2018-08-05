import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
