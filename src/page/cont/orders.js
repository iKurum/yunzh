import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'antd';
import moment from 'moment';
import { Excel } from 'page/component/excel';
import { Filter } from 'page/component/filter';
import { Content } from 'page/component/content';
import { CollapsePanel } from 'page/component/collapsePanel';
import { Retrieval } from 'page/component/retrieval';
import { SubBtn } from 'page/component/subBtn';
import { methods } from 'page/common/methods';
import { VerticalAlignBottomOutlined, MenuOutlined } from '@ant-design/icons';
import { Cont } from 'page/component/cont';

function Orders() {
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
      dataIndex: 'age',
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
      dataIndex: 'address',
      key: '2',
      filter: {
        id: 2,
        choose: true,
        checkbox: true
      },
      width: 150,
    },
    {
      title: '平台订单号',
      dataIndex: 'address',
      key: '3',
      filter: {
        id: 3,
        choose: true,
        checkbox: true
      },
      width: 150,
    },
    {
      title: '商户打款金额(元)',
      dataIndex: 'address',
      key: '4',
      filter: {
        id: 4,
        choose: true,
        checkbox: false
      },
      width: 150,
    },
    {
      title: '商户服务费(元)',
      dataIndex: 'address',
      key: '5',
      filter: {
        id: 5,
        choose: true,
        checkbox: true
      },
      width: 150,
    },
    {
      title: '打款通道',
      dataIndex: 'address',
      key: '6',
      filter: {
        id: 6,
        choose: true,
        checkbox: true
      },
      width: 150,
    },
    {
      title: '收款银行名称',
      dataIndex: 'address',
      key: '7',
      filter: {
        id: 7,
        choose: true,
        checkbox: true
      },
      width: 150,
    },
    {
      title: '商户订单号',
      dataIndex: 'address',
      key: '8',
      filter: {
        id: 8,
        choose: true,
        checkbox: true
      },
      width: 150,
    },
    {
      title: '收款户名',
      dataIndex: 'address',
      key: '9',
      filter: {
        id: 9,
        choose: true,
        checkbox: true
      },
      width: 150,
    },
    {
      title: '证件号码',
      dataIndex: 'address',
      key: '10',
      filter: {
        id: 10,
        choose: true,
        checkbox: true
      },
      width: 150,
    },
    {
      title: '收款账号',
      dataIndex: 'address',
      key: '11',
      filter: {
        id: 11,
        choose: true,
        checkbox: true
      },
      width: 150,
    },
    {
      title: '银行预留手机号',
      dataIndex: 'address',
      key: '12',
      filter: {
        id: 12,
        choose: false,
        checkbox: true
      },
      width: 150,
    },
    {
      title: '综合服务主体',
      dataIndex: 'address',
      key: '13',
      filter: {
        id: 13,
        choose: false,
        checkbox: true
      },
      width: 150,
    },
    {
      title: '已退用户实收金额(元)',
      dataIndex: 'address',
      key: '14',
      filter: {
        id: 14,
        choose: false,
        checkbox: true
      },
      width: 150,
    },
    {
      title: '已退商户服务费(元)',
      dataIndex: 'address',
      key: '15',
      filter: {
        id: 15,
        choose: false,
        checkbox: true
      },
      width: 150,
    },
    {
      title: '已退用户服务费(元)',
      dataIndex: 'address',
      key: '16',
      filter: {
        id: 16,
        choose: false,
        checkbox: true
      },
      width: 150,
    },
    {
      title: '打款备注',
      dataIndex: 'address',
      key: '17',
      filter: {
        id: 17,
        choose: false,
        checkbox: true
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
  const [active, setActive] = useState('tab1');
  const [panel1, setPanel1] = useState();
  const [panel2, setPanel2] = useState();
  const [quickSel, setQuickSel] = useState('a');
  const [showOwn, setShowOwn] = useState(false);
  const [form] = Form.useForm();

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
  const tab1_formList = [
    { o: 4, fn: 'time' },
    { o: 1, p: '平台订单号', fn: 'platform-order' },
    { o: 1, p: '商户订单号', fn: 'merchant-reder' },
    { o: 1, p: '收款账号', fn: 'collextion-account' },
    { o: 1, p: '收款户名', fn: 'payee' },
    { o: 1, p: '证件号码', fn: 'docu-num' },
    {
      o: 3, p: '打款通道', fn: 'payment', c: [
        { v: '0', n: '支付宝' },
        { v: '1', n: '银行卡' },
        { v: '2', n: '微信' },
      ]
    },
    { o: 3, p: '订单状态', cs: '4', fn: 'order-status', c: orderStatus },
    {
      o: 3, p: '交易类型', fn: 'transaction', c: [
        { v: '0', n: '实时打款' },
        { v: '1', n: '批量打款' },
      ]
    },
  ];
  const radioDay = [
    {
      o: 5, dv: 'a', bs: 'solid', s: { marginLeft: '10px' },
      cb: e => {
        setQuickSel(e.target.value);
        console.log(e.target);
      },
      c: [
        { v: 'a', n: '今天' },
        { v: 'b', n: '昨天' },
        { v: 'c', n: '最近7天' },
        { v: 'd', n: '最近30天' },
      ]
    }
  ];
  const tab2_formList = [
    { o: 1, p: '平台订单号', fn: 'platform-order' },
    { o: 1, p: '商户订单号', fn: 'merchant-reder' },
    { o: 1, p: '收款账号', fn: 'collextion-account' },
    { o: 1, p: '收款户名', fn: 'payee' },
  ];
  const tabList = [
    {
      key: 'tab1',
      tab: '高级搜索'
    },
    {
      key: 'tab2',
      tab: '精准搜索'
    }
  ];
  const defaultDate = {
    'a': [moment().startOf('day'), moment().endOf('day')],
    'b': [
      moment().subtract(1, 'days').startOf('day'),
      moment().subtract(1, 'days').endOf('day')
    ],
    'c': [
      moment().subtract(7, 'days').startOf('day'),
      moment().endOf('day')
    ],
    'd': [
      moment().subtract(30, 'days').startOf('day'),
      moment().endOf('day')
    ]
  }
  const rangeQuick = [{
    o: 4,
    fn: 'range-picker',
    dv: 'YYYY-MM-DD HH:mm:ss',
  }];

  const content = {
    tab1: (
      <>
        <Form onFinish={onFinish} form={form}>
          <Row>
            <Filter data={rangeQuick} inForm={true} />
            <Filter data={radioDay} />
            <Col style={{ marginLeft: '10px' }}>
              <Retrieval cb={() => { setPanel1(panel1 ? '' : '1') }} acKey={panel1} />
            </Col>
            <SubBtn />
          </Row>
          <CollapsePanel activeKey={panel1} openKey={'1'} data={tab1_formList} inForm={true} />
        </Form >
        <Excel
          tabRight={tabRight}
          list={methods.initTab(columns)}
          hasModal
          modalConfig={{ key: showOwn, fn: () => { setShowOwn(!showOwn) } }}
          btn={[
            { n: '下载订单列表', i: <VerticalAlignBottomOutlined /> },
            { n: '自定义表格', i: <MenuOutlined />, fn: () => { setShowOwn(!showOwn) } }
          ]}
        />
      </>
    ),
    tab2: (
      <>
        <p>注：精确搜索没有时间范围限制，可按搜索条件查询出综合服务平台全部符合条件记录。</p>
        <Form onFinish={onFinish}>
          <Row gutter={8}>
            <Filter data={tab2_formList} inForm={true} />
            <SubBtn />
          </Row>
          <Row>
            <Retrieval cb={() => { setPanel2(panel2 ? '' : '1') }} acKey={panel2} />
          </Row>
          <CollapsePanel activeKey={panel2} openKey={'1'} data={[{ o: 1, p: '证件号码', fn: 'docu-num' }]} inForm={true} />
        </Form>
        <Excel
          tabRight={tabRight}
          list={methods.initTab(columns)}
          hasModal={true}
          modalConfig={{ key: showOwn, fn: () => { setShowOwn(!showOwn) } }}
          btn={[
            { n: '下载订单列表', i: <VerticalAlignBottomOutlined /> },
            { n: '自定义表格', i: <MenuOutlined />, fn: () => { setShowOwn(!showOwn) } }
          ]}
        />
      </>
    )
  };

  function onFinish(values) {
    console.log('Success: ', values);
  }

  function onTabChange(key) { setActive(key) };

  useEffect(() => {
    form.setFieldsValue({ 'range-picker': defaultDate[quickSel] });
  }, [quickSel, form, form.setFieldsValue, defaultDate]);

  return (
    <Cont
      p={<Content data={content[active]} tabList={tabList} activeTabKey={active} cb={onTabChange} />}
    />
  );
}

export default Orders;