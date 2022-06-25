import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'default-passive-events'

// redux react-redux 
// 把Provider包在根组件的外层,可以让所有的子组件都能拥有state,我们只需要在这把store传过去就好。
import store from './store';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
   </Provider>
  // </React.StrictMode>
);

