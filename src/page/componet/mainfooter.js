import React from 'react';
import { Row, Col } from 'antd';

export function Footer() {
  return (
    <Row justify='center'>
      <Col style={{ marginTop: '20px'}}>
        版权所有 © 云账户
      </Col>
    </Row>
  );
}