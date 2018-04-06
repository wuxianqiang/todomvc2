import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import Todo from './components/todo/todo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><Todo /></Provider>, document.getElementById('root'));
registerServiceWorker();
