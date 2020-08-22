import React, { useEffect } from 'react';
import { Row, Col, Button, Card, Checkbox, Form, Modal } from 'antd';

export function ModalOwn(props) {
  const [form] = Form.useForm();
  const onOk = () => {
    if (!!form) {
      form
        .validateFields()
        .then(values => {
          console.log('Success: ', values);
        })
        .then(() => {
          form.resetFields();
          props.show.fn();
        })
        .catch(err => {
          console.log('Validate Failed: ', err);
        })
    }
  };

  useEffect(() => {
    const initialValues = [];
    if (!!props.checked) {
      props.checked.map((v, _) => {
        if (v.filter && !!v.filter.choose) {
          initialValues.push(v.key);
        }
        return null;
      })
      form.setFieldsValue({ 'choose': initialValues });
    }
  }, [props.checked, form]);

  return (
    !!props
    &&
    <Modal
      visible={props.show.key}
      title='自定义表格'
      okText='确认'
      cancelText='取消'
      onCancel={props.show.fn}
      onOk={onOk}
    >
      <Form form={form}>
        <Form.Item name='choose'>
          <Checkbox.Group>
            <Card
              title='当前选择'
              bordered={false}
              headStyle={{ backgroundColor: '#fff' }}
              extra={<Button>自定义排序</Button>}
            >
              <Row gutter={[10, 10]}>

                {
                  props.checked.map((v, i) => (
                    <Col key={i}>
                      <Checkbox
                        value={v.key}
                        disabled={!v.filter.checkbox}
                      >{v.title}</Checkbox>
                    </Col>
                  ))
                }
              </Row>
            </Card>
            <Card
              title='其他可选'
              bordered={false}
              headStyle={{ backgroundColor: '#fff' }}
            >
              <Row gutter={[10, 10]}>

                {
                  props.unCheck.map((v, i) => (
                    <Col key={i}>
                      <Checkbox
                        value={v.key}
                        disabled={!v.filter.checkbox}
                      >{v.title}</Checkbox>
                    </Col>
                  ))
                }
              </Row>
            </Card>
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
}