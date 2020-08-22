import React, { useState } from 'react';
import { Content } from 'page/component/content';
import { Row, Form } from 'antd';
import { Filter } from 'page/component/filter';
import { Retrieval } from 'page/component/retrieval';
import { SubBtn } from 'page/component/subBtn';
import { CollapsePanel } from 'page/component/collapsePanel';
import { Excel } from 'page/component/excel';
import { Tips } from 'page/component/tips';
import { Cont } from 'page/component/cont';

function Record(props) {
  const columns = [
    {
      title: '调单流水号',
      dataIndex: 'name',
      key: '0',
      width: 150,
    },
    {
      title: '创建时间',
      dataIndex: 'name',
      key: '1',
      width: 150,
    },
    {
      title: '风险点',
      dataIndex: 'name',
      key: '2',
      width: 150,
    },
    {
      title: '调单说明',
      dataIndex: 'name',
      key: '3',
      width: 150,
    },
    {
      title: '订单数量',
      dataIndex: 'name',
      key: '4',
      width: 150,
    },
    {
      title: '平台订单号',
      dataIndex: 'name',
      key: '5',
      width: 150,
    },
    {
      title: '收款户名',
      dataIndex: 'name',
      key: '6',
      width: 150,
    },
    {
      title: '订单状态',
      dataIndex: 'name',
      key: '7',
      width: 150,
    },
    {
      title: '审核结论',
      dataIndex: 'name',
      key: '8',
      width: 150,
    },
  ];

  const [panel, setPanel] = useState();
  const list1 = [
    { o: 4, fn: 'time' },
    { o: 1, p: '平台订单号', fn: '1' },
    { o: 1, p: '收款户名', fn: '2' },
  ];
  const orderStatus = [
    { v: '0', n: '已受理' },
    { v: '1', n: '打款失败' },
    { v: '2', n: '待打款' },
    { v: '3', n: '订单挂起' },
    { v: '4', n: '已打款' },
    { v: '5', n: '打款中' },
    { v: '6', n: '打款失败（已退款）' },
    { v: '7', n: '已失效' }
  ];
  const list2 = [
    { o: 1, p: '调单流水号', fn: '1' },
    { o: 3, p: '状态', cs: '4', fn: 'order-status', c: orderStatus },
    { o: 3, p: '审核结论', fn: 'order-k', c: [{v: '1', n: '通过'}, {v: '2', n: '未通过'}] },
  ];
  const tipsTxt = [
    '温馨提示',
    '调单为云账户对用户的首款行为难以确认其适用情况，而期望贵公司协助证实用户收入及业务场景真实性；',
    '请根据调单说明提供所需资料，并于反馈截止时间前反馈；',
    '收到反馈后，依据反馈资料给予审核结论，并通过系统及邮件方式反馈审核结论及结论说明；',
    '如有疑问请联系所属商务经理。'
  ];

  function onFinish(v) { console.log('Success: ', v) };

  const html = (
    <>
      <Tips text={tipsTxt} index={true} />
      <Form onFinish={onFinish}>
        <Row gutter={8}>
          <Filter data={list1} inForm={true} />
          <Retrieval cb={() => { setPanel(panel ? '' : '1') }} acKey={panel} />
          <SubBtn />
        </Row>
        <CollapsePanel activeKey={panel} openKey={'1'} data={list2} inForm={true} />
      </Form>
      <Excel
        tabRight={[
          {
            title: '操作', key: 'r2', fixed: 'right', width: 100, render: () => <span>action</span>
          }
        ]}
        list={[columns, []]}
        hasTotal
        total={'总计0条记录'}
      />
    </>
  );
  return <Cont p={<Content data={html} />} />;
}

export default Record;