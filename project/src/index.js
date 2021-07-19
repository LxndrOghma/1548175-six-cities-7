import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router as BrowserRouter } from 'react-router-dom';
import { composeWithDevTools} from 'redux-devtools-extension';

import App from './components/app/app';
import { createApi } from './services/api';
import { checkAuth } from './store/api-actions';
import { requiredAuthorization } from './store/action';
import { AuthorizationStatus } from './const';
import { redirect } from './store/middlewares/redirect';
import browserHistory from './browser-history';
import rootReducer from './store/root-reducer';

const api = createApi(
  () => store.dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

store.dispatch(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
