import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers';
import App from './components/App';

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
