import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import { BrowserRouter, Route } from 'react-router-dom';


import './index.css';
import store from './app/store';

import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// Reused pages
import Header from './pages/header/Header';
import Footer from './pages/footer/Footer';

// Imported Pages
import Homepage from './pages/homepage/Homepage';
import Discover from './pages/discover/Discover';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>

      <Header />

      <Provider store={store}>
        <Route exact path='/' component={Homepage} />
        <Route path='/discover' component={Discover} />
      </Provider>

      <Footer />

    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();