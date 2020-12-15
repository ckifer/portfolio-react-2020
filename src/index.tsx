import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.scss';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'firebase/firestore';
import { environment } from './environments/environments';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

firebase.initializeApp(environment.firebase);
firebase.firestore();

const rrfProps = {
  firebase,
  config: environment.firebase,
  dispatch: store.dispatch,
  createFirestoreInstance,
  useFirestoreForProfile: true,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
