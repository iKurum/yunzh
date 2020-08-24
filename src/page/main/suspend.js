import React, { useState } from 'react';
import { Form, Row } from 'antd';
import { Content } from 'page/component/content';
import { Filter } from 'page/component/filter';
import { SubBtn } from 'page/component/subBtn';
import { Excel } from 'page/component/excel';
import { methods } from 'page/common/methods';
import { MenuOutlined } from '@ant-design/icons';
import { checkIframe } from 'page/main';

function Suspend(props) {
  const columns = [
    {
      title: '订单创建时间',
      dataIndex: 'name',
      key: '0',
      filter: {
        id: 0,
        choose: true,
        checkbox: false
      },
      width: 150,
    },
    {
      title: '最后更新时间',
      dataIndex: 'name',
      key: '1',
      filter: {
        id: 1,
        choose: true,
        checkbox: false
      },
      width: 150,
    },
    {
      title: '批次号',
      dataIndex: 'name',
      key: '2',
      filter: {
        id: 2,
        choose: true,
        checkbox: false
      },
      width: 150,
    },
    {
      title: '平台订单号',
      dataIndex: 'name',
      key: '3',
      filter: {
        id: 3,
        choose: true,
        checkbox: false
      },
      width: 150,
    },
    {
      title: '商户打款金额(元)',
      dataIndex: 'name',
      key: '4',
      filter: {
        id: 4,
        choose: true,
        checkbox: false
      },
      width: 150,
    },
    {
      title: '收款户名',
      dataIndex: 'name',
      key: '5',
      filter: {
        id: 5,
        choose: true,
        checkbox: false
      },
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
  const list = [
    { o: 4, fn: 'time' },
    { o: 1, p: '平台订单号', fn: '1' },
    { o: 1, p: '收款户名', fn: '2' },
  ];

  const [showOwn, setShowOwn] = useState(false);
  const html = (
    <>
      <Form>
        <Row gutter={8}>
          <Filter data={list} inForm={true} />
          <SubBtn />
        </Row>
      </Form>
      <Excel
        list={methods.initTab(columns)}
        tabRight={tabRight}
        hasModal
        hasTotal
        total={'共计0条记录；商户请求打款0元'}
        modalConfig={{ key: showOwn, fn: () => { setShowOwn(!showOwn) } }}
        btn={[
          { n: '批量重试打款', d: true },
          { n: '自定义表格', i: <MenuOutlined />, fn: () => { setShowOwn(!showOwn) } }
        ]}
      />
    </>
  );
  if (checkIframe()) return <Content data={html} />;
  return null;
}

export default Suspend;