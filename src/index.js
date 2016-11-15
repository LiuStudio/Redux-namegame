import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import App from 'components/app';
import NameGame from './containers/name-game';
import INITIAL_STATE from './utilities/project-constant';

const loggerMiddleware = createLogger();
const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk,loggerMiddleware)
		));


ReactDOM.render(
	(<Provider store={store}>
		<NameGame />
	</Provider>
	), document.getElementById('root'));


	