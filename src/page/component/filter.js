import React from 'react';
import { Form, Input, Col, InputNumber, DatePicker, Select, Radio, Space } from 'antd';
import Css from 'css/filter.module.css';

/**
 * Filter 
 * @param {Boolean} props.inForm
 * @param {Array} props.data
 * [{
    o: 1,
    p: 'placeholder',
    cs: 'col-span',
    s: {style},
    v: value,
    label: 'string',
    tooltip: 'string',
    fn: 'name(inForm)',
    dv: 'defaultValue',
    bs: {buttonStyle},
    cb: () => {},
    fc: {FormConfig(inForm)},
    c: [{v: value, n: name}],
  }]
 * @param {Number} props.data[].o
 * 1-Input 2-InputNumber 3-Select 4-RangePicker 5-Radio
 */
export function Filter(props) {
  const { RangePicker } = DatePicker;
  const { Option } = Select;

  return (
    !!props && (!!props.inForm
      ?
      props.data.map((v, i) => {
        switch (v.o) {
          case 1:
            return (
              <Col key={i} span={!!v.cs && v.cs[0]} offset={!!v.cs && v.cs[1]}>
                <Form.Item name={v.fn} label={v.label} rules={v.rules}>
                  <Input placeholder={v.p} />
                </Form.Item>
              </Col>
            );
          case 2:
            return (
              <Col key={i} span={!!v.cs && v.cs[0]} offset={!!v.cs && v.cs[1]}>
                <Form.Item name={v.fn} label={v.label} rules={v.rules}>
                  <InputNumber placeholder={v.p} />
                </Form.Item>
              </Col>
            );
          case 3:
            return (
              <Col key={i} span={!!v.cs && v.cs[0]} offset={!!v.cs && v.cs[1]}>
                <Form.Item name={v.fn} label={v.label} rules={v.rules}>
                  <Select placeholder={v.p}>
                    {
                      v.c.map((v, i) => <Option key={i} value={v.v}>{v.n}</Option>)
                    }
                  </Select>
                </Form.Item>
              </Col>
            );
          case 4:
            return (
              <Col key={i} span={!!v.cs && v.cs[0]} offset={!!v.cs && v.cs[1]}>
                <Form.Item name={v.fn} {...v.fc} label={v.label} rules={v.rules}>
                  <RangePicker
                    separator='~'
                    format={v.dv && v.dv}
                  />
                </Form.Item>
              </Col>
            );
          case 5:
            return (
              <Col style={v.s} key={i} span={!!v.cs && v.cs[0]} offset={!!v.cs && v.cs[1]}>
                <Form.Item name={v.fn} label={v.label} rules={v.rules}>
                  <div>
                    <Radio.Group defaultValue={v.dv} buttonStyle={v.bs} onChange={v.cb} value={v.v}>
                      <Space>
                        {
                          v.c.map((v, i) => {
                            if (v.btn) {
                              return <Radio.Button key={i} value={v.v} disabled={v.d}>{v.n}</Radio.Button>
                            } else {
                              return <Radio key={i} value={v.v} disabled={v.d}>{v.n}</Radio>
                            }
                          })
                        }
                      </Space>
                    </Radio.Group>
                    {
                      !!v.tooltip
                      &&
                      <span className={Css.tooltip}>{v.tooltip}</span>
                    }
                  </div>
                </Form.Item>
              </Col>
            );
          default:
            return null;
        }
      })
      :
      props.data.map((v, i) => {
        switch (v.o) {
          case 1:
            return (
              <Col key={i} span={v.cs}>
                <Input placeholder={v.p} />
              </Col>
            );
          case 2:
            return (
              <Col key={i} span={v.cs}>
                <InputNumber placeholder={v.p} />
              </Col>
            );
          case 3:
            return (
              <Col key={i} span={v.cs}>
                <Select placeholder={v.p}>
                  {
                    v.c.map((v, i) => <Option key={i} value={v.v}>{v.n}</Option>)
                  }
                </Select>
              </Col>
            );
          case 4:
            return (
              <Col key={i}>
                <RangePicker
                  separator='~'
                  format={v.dv && v.dv}
                />
              </Col>
            );
          case 5:
            return (
              <Col style={v.s} key={i}>
                <Radio.Group defaultValue={v.dv} buttonStyle={v.bs} onChange={v.cb} value={v.v}>
                  <Space>
                    {
                      v.c.map((v, i) => <Radio.Button key={i} value={v.v}>{v.n}</Radio.Button>)
                    }
                  </Space>
                </Radio.Group>
              </Col>
            );
          default:
            return null;
        }
      }))
  );
}