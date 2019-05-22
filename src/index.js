import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './components/App/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import styles from './index.css';


const store = createStore(rootReducer);

const documentRoot = document.getElementById('index');
documentRoot.className = styles.index;

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	documentRoot
);
