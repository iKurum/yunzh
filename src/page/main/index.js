import React, { useState } from 'react';
import { Card, Row, Col, Statistic, Empty, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { go } from 'app';
import Css from 'css/home.module.css';
import { checkIframe } from 'page/main';

function Index(props) {
  const [tabKey, setTabKey] = useState('tab1');
  const list = [
    {
      t: '账户充值',
      s: '专属收款账户'
    },
    {
      t: '任务管理',
      s: '在线发布任务',
      id: 'create-task'
    },
    {
      t: '发票申请',
      s: '2小时快速开票'
    }
  ];
  const acc = [
    {
      title: '账户余额',
      search: [
        {
          t: '可用余额（元）',
          m: 0
        },
        {
          t: '不可用金额（元）',
          m: 0
        }
      ]
    },
    {
      title: '服务费抵扣账户',
      search: [
        {
          t: '可用余额（元）',
          m: 0
        },
        {
          t: '累计返还（元）',
          m: 0
        }
      ]
    }
  ];
  const work = [
    {
      search: [
        {
          t: '打款成功总额（元）',
          unit: '笔',
          m: 0,
          n: 0
        },
        {
          t: '请求打款总额（元）',
          unit: '笔',
          m: 0,
          n: 0
        }
      ]
    },
    {
      search: [
        {
          t: '签收发票总额（元）',
          unit: '张',
          m: 0,
          n: 0
        },
        {
          t: '申请发票总额（元）',
          unit: '张',
          m: 0,
          n: 0
        }
      ]
    }
  ];
  const tabList = [
    {
      key: 'tab1',
      tab: '系统公告'
    },
    {
      key: 'tab2',
      tab: '函件'
    }
  ];
  const contList = {
    'tab1': <p>Tab 1</p>,
    'tab2': <p>Tab 2</p>,
  }
  const onTabChange = key => {
    console.log(key);
    setTabKey(key);
  }
  const html = (
    <>
      <Row>
        <Col span='18'>
          <Row>
            {
              list.map((v, i) => (
                <Col span='8' key={i}>
                  <Card
                    hoverable
                    bordered={false}
                    className={Css.ca}
                    onClick={() => { go(`/cont/${v.id}`) }}
                  >
                    <p>{v.t}</p>
                    <p>{v.s}</p>
                  </Card>
                </Col>
              ))
            }
          </Row>
          <Row>
            <Col span='24'>
              <Card
                title='账户概览'
                extra={<Button type='link'>更多详情 <RightOutlined /></Button>}
                className={Css.ca}
              >
                {
                  acc.map((v, i) => (
                    <Card.Grid
                      hoverable={false}
                      key={i}
                      style={{ width: '50%', padding: '24px 5rem' }}
                    >
                      <p style={{ fontSize: '16px' }}>{v.title}</p>
                      <div>
                        {
                          v.search.map((v, i) => (
                            <div key={i}>
                              <Statistic title={v.t} value={v.m} precision={2} />
                            </div>
                          ))
                        }
                      </div>
                    </Card.Grid>
                  ))
                }
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span='6'>
          <Card
            tabList={tabList}
            tabBarExtraContent={<Button type='link'>更多详情 <RightOutlined /></Button>}
            activeTabKey={tabKey}
            className={[Css.ca, Css.h100].join(' ')}
            onTabChange={key => {
              onTabChange(key);
            }}
          >
            {0 ? contList[tabKey] : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span='18'>
          <Card
            title='业务概览'
            extra={<Button type='link'>更多详情 <RightOutlined /></Button>}
            className={Css.ca}
          >
            {
              work.map((v, i) => (
                <Card.Grid hoverable={false} key={i} style={{ width: '50%', padding: '24px 5rem' }}>
                  <div>
                    {
                      v.search.map((v, i) => (
                        <div key={i}>
                          <Statistic title={v.t} value={v.m} precision={2} />
                          <p>{i === 0 ? '成功' : '共计'}{v.n}{v.unit}</p>
                        </div>
                      ))
                    }
                  </div>
                </Card.Grid>
              ))
            }
          </Card>
        </Col>
        <Col span='6'>
          <Card
            title='待办事项'
            className={[Css.ca, Css.h100].join(' ')}
          >
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span='18'>
          <Card
            title='业务概览'
            extra={<Button type='link'>更多详情 <RightOutlined /></Button>}
            className={Css.ca}
          >
            {
              work.map((v, i) => (
                <Card.Grid hoverable={false} key={i} style={{ width: '50%', padding: '24px 5rem' }}>
                  <div>
                    {
                      v.search.map((v, i) => (
                        <div key={i}>
                          <Statistic title={v.t} value={v.m} precision={2} />
                          <p>{i === 0 ? '成功' : '共计'}{v.n}{v.unit}</p>
                        </div>
                      ))
                    }
                  </div>
                </Card.Grid>
              ))
            }
          </Card>
        </Col>
        <Col span='6'>
          <Card
            title='待办事项'
            className={[Css.ca, Css.h100].join(' ')}
          >
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </Card>
        </Col>
      </Row>
    </>
  );

  if (checkIframe()) return html;
  return null;
}

export default Index;