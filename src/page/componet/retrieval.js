import React from 'react';
import { Button } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

export function Retrieval(props) {
  return (
    <Button onClick={props.cb}>
      高级检索 {props.acKey ? <DownOutlined /> : <UpOutlined />}
    </Button>
  );
}
