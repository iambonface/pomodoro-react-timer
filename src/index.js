import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import ReactGA from 'react-ga';

ReactGA.initialize('UA-105774952-1')

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
