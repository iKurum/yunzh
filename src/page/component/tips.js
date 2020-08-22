import React, { useState } from 'react';
import { Row, Col, Button } from 'antd';
import { ExclamationCircleFilled, UpOutlined } from '@ant-design/icons';

export function Tips(props) {
  const [a, setA] = useState(true)
  const pStyle = {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#FEF6E0',
    color: '#E3B274',
    padding: '10px 0 0 10px',
    marginBottom: '10px',
  };

  // console.log(props.text);
  return (
    <Row style={{
      height: a ? '' : '42px',
      ...pStyle
    }} gutter={8}>
      <Col><ExclamationCircleFilled /></Col>
      <Col>{props.text[0]}</Col>
      <Col span='20'>
        <Row gutter={[10, 10]}>
          {
            props.text.map((v, i) => {
              if (i !== 0) {
                return <Col key={i} span='20'>
                  {!!props.index && <span>{i}. </span>}
                  {v}</Col>
              }
              return null;
            })
          }
        </Row>
      </Col>
      {
        props.text.length > 2
        &&
        <Col span='2'>
          <Button
            type='text'
            style={{
              color: '#E3B274',
              position: 'relative',
              top: '-5px',
            }}
            onClick={() => { setA(!a) }}
          >
            {a ? '收起' : '展开'}
            <UpOutlined rotate={a ? 0 : 180} /></Button>
        </Col>
      }
    </Row>
  );
}