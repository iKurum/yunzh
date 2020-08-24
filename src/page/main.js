import React, { useState, useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { ManHeader } from 'page/component/mainheader';
import { MainNav } from 'page/component/mainnav';
import { Footer } from 'page/component/mainfooter';
import Login from 'page/login';
import Index from 'page/main/index';
import { setTarget, go, open, encodeUrl } from 'app';
import Css from 'css/main.module.css';

export function checkIframe(v) {
  if (mainInit === 0) {
    open('/main?ref=' + encodeUrl(window.location.href));
    return false;
  }
  return true;
}

let pageInit = null;
function Page() {
  const [dom, setDom] = useState({
    app: Index,
    data: null,
    hash: null
  });

  useEffect(() => {
    setTarget(setDom);
    if (pageInit) {
      go(pageInit);
      pageInit = null;
    }
  }, [])

  return <dom.app data={dom.data} hash={dom.hash} />;
}


let mainInit = 0;
function Main(props) {
  const [bread, setBread] = useState([]);

  mainInit = 1;

  if (!pageInit && props.data && props.data.ref) pageInit = props.data.ref;

  console.log(bread);
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
                    <Page />
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

export default Main;