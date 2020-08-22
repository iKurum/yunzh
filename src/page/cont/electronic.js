import React, { useState } from 'react';
import { Form, Row, Col } from 'antd';
import { Filter } from 'page/componet/filter';
import { Content } from 'page/componet/content';
import { Retrieval } from 'page/componet/retrieval';
import { CollapsePanel } from 'page/componet/collapsePanel';
import { SubBtn } from 'page/componet/subBtn';
import { Excel } from 'page/componet/excel';
import { VerticalAlignBottomOutlined } from '@ant-design/icons';
import { Tips } from 'page/componet/tips';

export function Electronic() {
  const columns = [
    {
      title: '订单完成时间',
      dataIndex: 'name',
      key: '0',
      width: 150,
    },
    {
      title: '批次号',
      dataIndex: 'name',
      key: '1',
      width: 150,
    },
    {
      title: '平台订单号',
      dataIndex: 'name',
      key: '2',
      width: 150,
    },
    {
      title: '商户订单号',
      dataIndex: 'name',
      key: '3',
      width: 150,
    },
    {
      title: '回单名称',
      dataIndex: 'name',
      key: '4',
      width: 150,
    },
    {
      title: '打款通道',
      dataIndex: 'name',
      key: '5',
      width: 150,
    },
    {
      title: '用户收款金额(元)',
      dataIndex: 'name',
      key: '6',
      width: 150,
    },
  ];
  const tabRight = [
    {
      title: '订单状态',
      key: 'r1',
      fixed: 'right',
      width: 100,
    },
    {
      title: '操作',
      key: 'r2',
      fixed: 'right',
      width: 100,
      render: () => <span>action</span>,
    },
  ];

  const [panel, setPanel] = useState();
  const list1 = [
    { o: 4, fn: 'time' },
    { o: 1, p: '平台订单号', fn: 'platform-order' },
    { o: 1, p: '批次号', fn: 'batch' },
  ];
  const list2 = [
    { o: 1, p: '商户订单号', fn: 'merchant-reder' },
    { o: 1, p: '收款账号', fn: 'collextion-account' },
    { o: 1, p: '收款户名', fn: 'payee' },
  ];
  const tab = (
    <>
      <Tips
        text={['温馨提示：', '仅部分渠道支持查询电子回单，订单完成后第二个自然日可查，特殊情况可能会稍有延迟。']}
      />
      <Form onFinish={onFinish}>
        <Row gutter={8}>
          <Filter data={list1} inForm={true} />
          <Col style={{ marginLeft: '10px' }}>
            <Retrieval cb={() => { setPanel(panel ? '' : '1') }} acKey={panel} />
          </Col>
          <SubBtn />
        </Row>
        <CollapsePanel activeKey={panel} openKey={'1'} data={list2} inForm={true} />
      </Form>
      <Excel
        tabRight={tabRight}
        list={[columns, []]}
        hasTotal
        total={'共计0条记录'}
        btn={[{ n: '批量下载', i: <VerticalAlignBottomOutlined /> }]}
      />
    </>
  );
  function onFinish(vlues) {
    console.log('Success: ', vlues);
  }

  return <Content data={tab} />
}