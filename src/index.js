import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './components/redux/store/configureStore';
import 'antd/dist/antd.css';
import {LocaleProvider} from 'antd';
import sp from 'antd/lib/locale-provider/es_ES';

export const store = configureStore();

const WithRouter = ()=>(
  <BrowserRouter>
      <LocaleProvider locale={sp}>
          <App/>
      </LocaleProvider>
  </BrowserRouter>
);

const ReduxProvider = () =>(
  <Provider store={store} >
      <WithRouter/>
  </Provider>
);

ReactDOM.render(<ReduxProvider />, document.getElementById('root'));
registerServiceWorker();
