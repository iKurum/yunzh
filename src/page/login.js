import React, { useState } from 'react';
import { Button, Col, Row, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Css from '../css/login.module.css';

function Login() {
    const [l, setL] = useState(1)
    const onFinish = values => {
        const un = values.username.trim();
        if (un !== "") {
            sessionStorage["un"] = un;
            window.location.href = `/choose-account?user=${un}`;
        }
    }
    const login = (
        <div className={Css.login}>
            <Row justify='center' className={Css.way}>
                <Col>
                    <span
                        type='text'
                        onClick={() => {
                            setL(2);
                        }}
                        className={l === 2 ? Css.choseWay : ''}
                    >微信登錄</span>
                </Col>
                <Col span='2'></Col>
                <Col>
                    <span
                        type='text'
                        onClick={() => {
                            setL(1);
                        }}
                        className={l === 1 ? Css.choseWay : ''}
                    >賬號登錄</span>
                </Col>
            </Row>
            {
                l === 1
                    ?
                    <Row className={Css.formInput}>
                        <Form name='login' onFinish={onFinish} className='w100'>
                            <Form.Item
                                name='username'
                                rules={[{ required: true, message: '账号不能为空' }]}
                            >
                                <Input
                                    prefix={<UserOutlined className='site-form-item-icon' />} placeholder='登录用户名/邮箱'
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '密码不能为空' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className='site-form-item-icon' />}
                                    type='password'
                                    placeholder='登录密码'
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type='primary'
                                    htmlType='submit'
                                    className='w100'
                                >
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                        <Row className={['w100', Css.iw]} justify='space-between'>
                            <Col>忘记密码？</Col>
                            <Col>还没有账号？请联系客服</Col>
                        </Row>
                    </Row>
                    :
                    <Row>
                        <Col span='24'>扫码</Col>
                    </Row>
            }
        </div>
    );
    const html = (
        <div
            className={['bg', Css.banner].join(' ')}
            style={{
                backgroundImage: 'url(./assets/banner.png)',
                fontSize: '18px'
            }}
        >
            <Row justify='space-around'>
                <Col>雲賬戶 | 綜合服務平臺</Col>
                <Col span='8'></Col>
                <Col>—— 關於雲賬戶</Col>
            </Row>
            <Row
                justify='space-around'
                align='middle'
                style={{ flexGrow: 1 }}
            >
                <Col className={Css.slogan}>
                    <p>不忘初心、牢記使命</p>
                    <p>前行在高质量发展的新时代长征路上</p>
                </Col>
                <Col span='8'>{login}</Col>
            </Row>
        </div>
    );

    return html;
}

export default Login;