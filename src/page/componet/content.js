import React from 'react';
import { Card } from 'antd';

export const PageContent = React.createContext();

export function Content(props) {
  return (
    !!props
    &&
    < Card
      style={{
        width: '100%',
        backgroundColor: '#f0f2f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
      }
      headStyle={{
        width: '100%',
        backgroundColor: '#fff'
      }}
      bodyStyle={{
        margin: '20px',
        width: 'calc(100% - 40px)',
        backgroundColor: '#fff'
      }}
      tabList={props.tabList && props.tabList}
      activeTabKey={props.active && props.active}
      bordered={false}
      onTabChange={props.cb && props.cb}
    >
      <div>{props.data}</div>
    </Card >
  );
}