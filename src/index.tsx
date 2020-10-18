import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import App from './App';
import { Provider } from './Store';

import zhCN from 'antd/es/locale/zh_CN';
import './index.css';

// const isDev = process.env.NODE_ENV === 'development'

const Index = () => (
  <React.StrictMode>
    <Provider>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);
