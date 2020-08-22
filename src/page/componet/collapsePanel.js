import React from 'react';
import { Row, Collapse, Col } from 'antd';
import { Filter } from './filter';
import Css from '../../css/collapsePanel.module.css';

export function CollapsePanel(props) {
  const { Panel } = Collapse;

  return (
    <Row gutter={[8,10]}>
      <Col span='24'>
        <Collapse ghost activeKey={props.activeKey} destroyInactivePanel>
          <Panel showArrow={false} key={props.openKey} className={Css.panel}>
            <Row gutter={8}>
              <Filter data={props.data} inForm={props.inForm} />
            </Row>
          </Panel>
        </Collapse>
      </Col>
    </Row>
  );
}