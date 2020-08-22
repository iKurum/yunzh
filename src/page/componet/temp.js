import React, { useImperativeHandle, useState } from 'react';
import { Breadcrumb } from 'antd';
import { Footer } from './mainfooter';
import { Home } from 'page/home';
import Css from '../../css/temp.module.css';

export const Temp = React.forwardRef((props, ref) => {
  const [p, setP] = useState({ dom: Home });
  useImperativeHandle(ref, () => ({
    page: d => {
      setP({ dom: d });
    }
  }))

  // console.log(props.bread);
  return (
    <div className={Css.temp}>
      <div>
        <div style={{ minHeight: 'calc(100% - 50px)' }}>
          {
            props && props.bread.length > 1
              ?
              <Breadcrumb className={Css.breadcrumb}>
                {
                  props.bread.map((v, i) => <Breadcrumb.Item key={i}>{v}</Breadcrumb.Item>)
                }
              </Breadcrumb>
              :
              ''
          }
          <p.dom />
        </div>
        <Footer />
      </div>
    </div>
  );
})
