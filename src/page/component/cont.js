import React, { useState } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { ManHeader } from 'page/component/mainheader';
import { MainNav } from 'page/component/mainnav';
import { Footer } from 'page/component/mainfooter';
import Login from 'page/login';
import Css from 'css/cont.module.css';

export function Cont(props) {
    const [bread, setBread] = useState([]);
    // console.log(props);
    return (
        <>
            {
                sessionStorage['un'] && sessionStorage['ac']
                    ?
                    <Layout className={Css.h100v}>
                        <ManHeader />
                        <Layout>
                            <MainNav setBread={setBread} />
                            <div className={Css.temp}>
                                <div>
                                    <div style={{ minHeight: 'calc(100% - 50px)' }}>
                                        {
                                            bread.length > 1
                                                ?
                                                <Breadcrumb className={Css.breadcrumb}>
                                                    {
                                                        bread.map((v, i) => <Breadcrumb.Item key={i}>{v}</Breadcrumb.Item>)
                                                    }
                                                </Breadcrumb>
                                                :
                                                ''
                                        }
                                        {props.p}
                                    </div>
                                    <Footer />
                                </div>
                            </div>
                        </Layout>
                    </Layout>
                    :
                    <Login />
            }
        </>
    );
}
