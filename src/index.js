import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App';


// store с полученным редюсером
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware()
  // 2й элемент это devtools
));
// console.log("InitialState", store.getState());

ReactDOM.render(
  // обворачиваем в провайдер, чтоб все дочерние App видели стор
  < Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
