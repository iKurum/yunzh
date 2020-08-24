import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeFilled,
  AccountBookFilled,
  CreditCardFilled,
  ShoppingFilled,
  FundFilled,
  AppstoreFilled
} from '@ant-design/icons';
import { go } from 'app';

export function MainNav(props) {
  const rootSubmenuKeys = ['首页', '交易中心', '财务中心', '商户中心', '数据中心', '系统中心'];
  const [openKey, setOpenKey] = useState(['首页']);
  const { Sider } = Layout;
  const { Item, SubMenu } = Menu;
  const menuList = [
    {
      name: '首页',
      icon: HomeFilled,
      id: 'index'
    },
    {
      name: '交易中心',
      icon: AccountBookFilled,
      od: 0,
      id: 'trading',
      children: [
        {
          name: '交易管理',
          children: [
            {
              name: '交易订单',
              id: 'orders'
            },
            {
              name: '电子回单',
              id: 'electronic'
            },
            {
              name: '挂起订单',
              id: 'suspend'
            }
          ]
        },
        {
          name: '调单管理',
          children: [
            {
              name: '调单记录',
              id: 'record'
            }
          ]
        },
        {
          name: '任务库',
          children: [
            {
              name: '全部任务',
              id: 'tasks'
            },
            {
              name: '新建任务批次',
              id: 'create-task'
            },
            {
              name: '任务模板',
              id: 'template'
            }
          ]
        }
      ]
    },
    {
      name: '财务中心',
      icon: CreditCardFilled,
      od: 0,
      id: 'financial',
      children: [
        {
          name: '资金管理',
          children: [
            {
              name: '账户管理',
              id: 'account'
            },
            {
              name: '资金流水',
              id: 'flows'
            }
          ]
        },
        {
          name: '账单管理',
          children: [
            {
              name: '余额日账单',
              id: 'balance'
            }
          ]
        },
        {
          name: '发票管理',
          children: [
            {
              name: '发票申请',
              id: 'application'
            },
            {
              name: '申请记录',
              id: 'records'
            },
            {
              name: '已开发票',
              id: 'have'
            },
            {
              name: '开票信息',
              id: 'information'
            }
          ]
        }
      ]
    },
    {
      name: '商户中心',
      icon: ShoppingFilled,
      od: 0,
      id: 'merchant-center',
      children: [
        {
          name: '用户管理',
          id: 'user',
          children: [
            {
              name: '免验证名单',
              id: 'verification-free'
            },
            {
              name: '签约用户',
              id: 'agency'
            }
          ]
        },
        {
          name: '商户管理',
          children: [
            {
              name: '商户信息',
              id: 'businesses'
            },
            {
              name: '签约信息',
              id: 'sign-info'
            },
            {
              name: '对接信息',
              id: 'butt-info'
            },
            {
              name: '提醒设置',
              id: 'remind'
            }
          ]
        }
      ]
    },
    {
      name: '数据中心',
      icon: FundFilled,
      od: 0,
      id: 'data-center',
      children: [
        {
          name: '基础数据',
          children: [
            {
              name: '商户数据',
              id: 'merchant-data'
            }
          ]
        }
      ]
    },
    {
      name: '系统中心',
      icon: AppstoreFilled,
      od: 0,
      id: 'system',
      children: [
        {
          name: '权限管理',
          children: [
            {
              name: '账号管理',
              id: 'account-management'
            }
          ]
        },
        {
          name: '消息管理',
          children: [
            {
              name: '函件通知',
              id: 'letter'
            },
            {
              name: '更新日志',
              id: 'update'
            },
            {
              name: '系统公告',
              id: 'announcement'
            }
          ]
        },
        {
          name: '安全管理',
          children: [
            {
              name: '安全证书',
              id: 'safety'
            }
          ]
        },
        {
          name: '下载管理',
          id: 'download'
        }
      ]
    }
  ];

  const m = l => l.map((v, _) => {
    const icon = v.icon ? <v.icon /> : null;

    if (v.children) {
      return (
        <SubMenu
          key={v.name}
          title={v.name}
          icon={icon}
        >{m(v.children)}</SubMenu>
      );
    } else
      return (
        <Item key={v.name} icon={icon} onClick={() => { page(v.id, v.name) }}>
          {v.name}
        </Item>
      );
  });

  function page(id, name) {
    if (name === '首页') {
      setOpenKey([name]);
      props.setBread([name]);
    } else {
      props.setBread(openKey.concat(name));
    }
    go(`/main/${id}`);
  }

  function onOpenChange(openKeys) {
    const lastOpenKey = openKeys.find(key => openKey.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(lastOpenKey) === -1) {
      setOpenKey([...[openKeys[0]], openKeys[openKeys.length - 1]]);
    } else {
      setOpenKey(lastOpenKey ? [lastOpenKey] : []);
    }
  };

  return (
    <Sider collapsible>
      <Menu
        theme='dark'
        mode='inline'
        openKeys={openKey}
        defaultSelectedKeys={openKey}
        onOpenChange={onOpenChange}
      >
        {m(menuList)}
      </Menu>
    </Sider>
  );
}
