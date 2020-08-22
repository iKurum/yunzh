import React from 'react';
import { Col, Space, Select } from 'antd';
import Css from '../css/account.module.css';

function account() {
  const { Option } = Select
  const onChange = value => {
    console.log(`selected ${value}`);
    if (sessionStorage['un']) {
      sessionStorage['ac'] = value;
      window.location.href = `/main?p=index`;
    } else
      window.location.href = '/login';
  }

  const html = (
    <Space className={['w100', Css.sp].join(' ')} direction='vertical'>
      <Col
        span='10'
        offset='7'
      >
        <img src='./assets/logo.png' width='100%' alt='logo'></img>
      </Col>
      <Col span='12' offset='6'>
        <Select
          showSearch
          className='w100'
          size='large'
          placeholder='请选择商户'
          optionFilterProp='children'
          onChange={onChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value='jack'>Jack</Option>
          <Option value='lucy'>Lucy</Option>
          <Option value='tom'>Tom</Option>
        </Select>
      </Col>
    </Space>
  );

  return html;
}

export default account;