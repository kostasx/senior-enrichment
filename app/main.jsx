'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Root from './components/Root'
import StatefulCampuses from './components/StatefulCampuses'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main'

render (
  <div>
  <Provider store={store}>
    <Router>
   {/* <StatefulCampuses/> */}
     {/* <Root/>  */}
     <Main /> 
    </Router>
  </Provider>
  </div>,
  document.getElementById('main')
)