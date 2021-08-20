import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './config';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

