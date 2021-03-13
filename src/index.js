import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers';
import App from './components/App';

// переменные для actions 
export const ACTION_SET_COUNT_WIN = 'ACTION_SET_COUNT_WIN';
export const ACTION_SET_COUNT_FAIL = 'ACTION_SET_COUNT_FAIL';
export const ACTION_SET_LVL = 'ACTION_SET_LVL';
export const ACTION_SET_TIMER = 'ACTION_SET_TIMER';


// store с полученным редюсером
const store = createStore(rootReducer);
console.log("InitialState", store.getState());

ReactDOM.render(
  // обворачиваем в провайдер, чтоб все дочерние App видели стор
  < Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
