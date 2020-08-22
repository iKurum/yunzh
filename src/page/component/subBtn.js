import React from 'react';
import { Col, Space, Button } from 'antd';
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';

export function SubBtn(props) {
  return (
    <>
      <Col style={{ flex: '1 1 auto' }}></Col>
      <Col>
        <Space>
          <Button type='primary' htmlType='submit'><SearchOutlined />搜索</Button>
          <Button htmlType='reset'><RedoOutlined />重置</Button>
        </Space>
      </Col>
    </>
  );
}