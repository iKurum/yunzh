import React from 'react';
import { Row, Col, Button, Table } from 'antd';
import { ModalOwn } from 'page/component/modalOwn';

/*
* Excel
* tabRight: [右侧固定栏]
* list: [[checked], [uncheck]]
* btn: [{n: name, fn: () => {}}]
* hasModal: boolean
*/
export function Excel(props) {
  const data = [];

  // console.log(props);
  return (
    !!props
    &&
    <>
      {
        !!props.btn
        &&
        <Row gutter={[4, 10]}>
          <Col style={{ flex: '1 1 auto' }}></Col>
          {
            props.btn.map((v, i) => (
              <Col key={i}><Button disabled={v.d} onClick={v.fn}>{v.i}{v.n}</Button></Col>
            ))
          }
        </Row>
      }
      <Table
        columns={props.list[0].concat(props.tabRight)}
        dataSource={data}
        scroll={{ x: props.list[0].length * 150 }}
      />
      {
        !!props.hasModal
        &&
        <ModalOwn
          show={{ key: props.modalConfig.key, fn: props.modalConfig.fn }}
          checked={props.list[0]}
          unCheck={props.list[1]}
        />
      }
      {
        !!props.hasTotal
        &&
        <Row style={{
          padding: '10px',
          backgroundColor: 'rgba(245, 245, 245, .7)'
        }}>· {props.total.replace(/0/, data.length)}</Row>
      }
    </>
  );
}