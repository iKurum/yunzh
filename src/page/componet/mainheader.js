import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import Css from '../../css/header.module.css';

export function ManHeader() {
    const { Header } = Layout;
    const [icon, setIcon] = useState(0);
    const [ac, setAc] = useState(sessionStorage['ac']);
    const quit = () => {
        sessionStorage.removeItem('un');
        sessionStorage.removeItem('ac');
        window.location.href = "/login";
    }
    const content = (
        <div className={Css.hc}>
            <span onClick={() => {
                setAc(123);
            }}>切换账户</span>
            <span>账户密码</span>
            <span onClick={quit}>退出登录</span>
        </div>
    );

    console.log('ManHeader ---');
    return (
        <Header style={{
            padding: '0 10px',
            backgroundColor: '#fff'
        }}>
            <Row justify='space-around'>
                <Col span='4'>
                    <img src='../assets/logo.png' width='100%' alt='logo'></img>
                </Col>
                <Col span='16'></Col>
                <Col>
                    <div
                        className={Css.hp}
                        onMouseEnter={() => {
                            setIcon(1);
                        }}
                        onMouseLeave={() => {
                            setIcon(0);
                        }}
                    >
                        <span style={{margin: '0 10px 0 30px'}}>{sessionStorage['un']} | {ac}</span>
                        {icon ? <>{ content }<UpOutlined /></> : <DownOutlined />}
                    </div>
                </Col>
            </Row>
        </Header>
    );
}