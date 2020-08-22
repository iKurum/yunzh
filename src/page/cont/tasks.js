import React, { useState, useContext } from 'react';
import { Row, Form, List, Empty, Button } from 'antd';
import { Content } from 'page/componet/content';
import { Filter } from 'page/componet/filter';
import { SubBtn } from 'page/componet/subBtn';
import { PageContent } from 'page/componet/content';

export function Tasks(props) {
  const goPage = useContext(PageContent);
  const [active, setActive] = useState('tab1');
  const tabList = [
    { key: 'tab1', tab: '进行中' },
    { key: 'tab2', tab: '已结束' },
  ];

  const data = [];

  const content = {
    tab1: (
      <>
        <Form>
          <Row gutter={8}>
            <Filter
              data={[
                { o: 4, fn: 'time' },
                {
                  o: 3, p: '任务模板', fn: 'tasks', cs: ['4'], c: [
                    { v: '1', n: '模板 一' },
                    { v: '2', n: '模板 二' },
                    { v: '3', n: '模板 三' },
                    { v: '4', n: '模板 四' },
                  ]
                }]}
              inForm={true}
            />
            <SubBtn />
          </Row>
        </Form>
        <List
          dataSource={data}
          locale={{
            emptyText: (<Empty description={<span>暂无进行中的任务~</span>}>
              <Button type='primary' onClick={() => { goPage('create-task') }}>新建任务批次</Button>
            </Empty>)
          }}
        >
        </List>
      </>
    ),
    tab2: (<>Tab 2</>),
  };

  function onTabChange(key) { setActive(key) };

  return <Content data={content[active]} tabList={tabList} activeTabKey={active} cb={onTabChange} />;
}