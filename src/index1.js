import React from 'react';
import ReactDOM from 'react-dom';
import App, { getById } from 'App';
import Main from 'page/main';
import { ConfigProvider } from 'antd';
import locale from 'antd/es/locale/zh_CN';
import 'index.css';

ReactDOM.render((
  <ConfigProvider locale={locale}>
    <App default={Main} />
  </ConfigProvider>
), getById('domRoot'));