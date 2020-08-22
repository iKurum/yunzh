import React, { useRef, useEffect, useState } from 'react';
import { Layout } from 'antd';

import { Home } from 'page/home';
import { Orders } from 'page/cont/orders';
import { Electronic } from 'page/cont/electronic';
import { Suspend } from 'page/cont/suspend';
import { Record } from 'page/cont/record';
import { CreateTask } from 'page/cont/create-task';
import { Tasks } from 'page/cont/tasks';

import { ManHeader } from 'page/componet/mainheader';
import { MainNav } from 'page/componet/mainnav';
import { Temp } from 'page/componet/temp';
import { PageContent } from 'page/componet/content';
import Login from 'page/login';
import Css from '../css/main.module.css';

function Main(props) {
    const tempRef = useRef();
    const [bread, setBread] = useState([]);
    const goPage = id => {
        // console.log('加载 page ... ...', id || page);
        const un = sessionStorage['un'];
        const ac = sessionStorage['ac'];
        let dom = '';
        if (un && ac) {
            switch (id) {
                case 'orders': dom = Orders; break;
                case 'create-task': dom = CreateTask; break;
                case 'electronic': dom = Electronic; break;
                case 'suspend': dom = Suspend; break;
                case 'record': dom = Record; break;
                case 'tasks': dom = Tasks; break;
                default: dom = CreateTask; break;
            }
            tempRef.current.page(dom);
        } else
            window.location.href = '/login';
    };

    useEffect(() => {
        const page = props && props.data ? props.data.p : '';
        goPage(page);
    }, [props])

    return (
        <>
            {
                sessionStorage['un'] && sessionStorage['ac']
                    ?
                    <Layout className={Css.h100v}>
                        <ManHeader />
                        <Layout>
                            <PageContent.Provider value={goPage}>
                                <MainNav setBread={setBread} />
                                <Temp ref={tempRef} bread={bread} />
                            </PageContent.Provider>
                        </Layout>
                    </Layout>
                    :
                    <Login />
            }
        </>
    );
}

export default Main;