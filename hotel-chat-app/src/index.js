

import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, IndexRoute, Switch } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import history from './utils/history';
/*import allReducers from './reducers';*/
import allReducers from './reducers';
import App from './App'


const store = createStore(
   allReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
 

ReactDOM.render((
   <Provider store={store}>
      <BrowserRouter>
      <Router history={history} >
        <Switch>
          <Route exact path="/" component={App}/>

        </Switch>
        </Router>
      </BrowserRouter>
    </Provider>
), document.getElementById('root'));
