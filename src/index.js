import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './components/App/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('index')
);
