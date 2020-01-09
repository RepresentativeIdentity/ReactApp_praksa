import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import {LoginProvider} from '../src/Components/Login/store/LoginContext';

ReactDOM.render(
  <LoginProvider>
    <App />
  </LoginProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
