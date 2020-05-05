import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Memo from './memo/Memo';

import { Provider } from 'react-redux';
import MemoStore from './memo/Store';

ReactDOM.render(
  <Provider store={MemoStore}>
    <Memo />
  </Provider>,
  document.getElementById('root')
);
