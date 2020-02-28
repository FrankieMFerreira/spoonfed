import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import routes from './routes'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import thunk from 'redux-thunk'
import { Router, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import App from './components/App'




const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
	<Provider store={store} >
		<Router history={browserHistory} routes={routes} />
	</Provider>, document.getElementById('container')
);
