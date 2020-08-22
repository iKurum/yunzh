import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'antd';
import { Content } from 'page/component/content';
import { Filter } from 'page/component/filter';
import Css from 'css/createTask.module.css';
import { Cont } from 'page/component/cont';

function CreateTask(props) {
  const [radio1, setRadio1] = useState();
  const [radio2, setRadio2] = useState();
  const [radio3, setRadio3] = useState();
  const list = [
    [
      {
        o: 1, p: '请输入任务名称，如：推荐返佣，最多30个字', fn: '1', cs: ['12', 2], label: '任务名称',
        rules: [{ required: true }]
      },
      {
        o: 3, p: '请选择任务模板', fn: '2', cs: ['12', 2], label: '任务模板',
        rules: [{ required: true }],
        c: [{ v: '1', n: '任务模板 一' }, { v: '2', n: '任务模板 二' }, { v: '3', n: '任务模板 三' }]
      }
    ],
    [
      {
        o: 5, fn: '3', cs: ['12', 2], dv: '1', label: '接单模式',
        tooltip: '指定用户接单，用户无需接取',
        rules: [{ required: true }],
        cb: e => { setRadio1(e.target.value) },
        v: radio1,
        c: [{ v: '1', n: '派单模式' }, { v: '2', n: '抢单模式（暂不支持）', d: true }]
      },
      {
        o: 5, fn: '4', cs: ['12', 2], dv: '1', label: '验收标准',
        rules: [{ required: true }],
        cb: e => { setRadio2(e.target.value) },
        v: radio2,
        c: [{ v: '1', n: '不验收' }, { v: '2', n: '需要验收' }]
      }
    ],
    [
      {
        o: 5, fn: '5', cs: ['12', 2], dv: '1', label: '验收标准',
        rules: [{ required: true }],
        cb: e => { setRadio3(e.target.value) },
        v: radio3,
        c: [{ v: '1', n: '单价' }, { v: '2', n: '按效果' }]
      },
      {
        o: 3, p: '请选择综合服务主体', fn: '6', cs: ['12', 2], label: '综合服务主体',
        rules: [{ required: true }],
        c: [{ v: '1', n: '综合服务主体 一' }, { v: '2', n: '综合服务主体 二' }, { v: '3', n: '综合服务主体 三' }]
      }
    ]
  ];
  const html = (
    <Form>
      <Row>
        <Col span={24} className={Css.title}>任务描述</Col>
        <Filter data={list[0]} inForm />
      </Row>
      <Row>
        <Col span={24} className={Css.title}>任务配置</Col>
        <Filter data={list[1]} inForm />
      </Row>
      <Row>
        <Col span={24} className={Css.title}>计费标准</Col>
        <Filter data={list[2]} inForm />
      </Row>
      <Row gutter={8}>
        <Col offset={4}>
          <Button type='primary' htmlType='submit'>提交</Button>
        </Col>
        <Col>
          <Button htmlType='reset'>取消</Button>
        </Col>
      </Row>
    </Form>
  );
  return <Cont p={<Content data={html} />} />;
}

export default CreateTask;