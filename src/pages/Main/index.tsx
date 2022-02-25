import { useState, useEffect } from 'react';
import * as React from 'react';
import {
  Button,
  Col,
  Input,
  Row,
  Select,
  Form,
  Space,
  Switch,
  Radio,
  Slider,
} from 'antd';
import ColorRGBPicker from '@/components/ColorRGBPicker';
import { useModel } from 'umi';
// import 'antd/dist/antd.variable.min.css';

const Main = () => {
  const { theme, dispatch } = useModel('tabMenu');

  const types = ['primary', 'ghost', 'dashed', 'link', 'text', 'default'];
  return (
    <div className="main">
      <Row>
        <Col span={4}>
          <Form.Item label="主题色改变">
            <ColorRGBPicker
              value={theme}
              onChange={(e) => {
                dispatch({ type: 'CHANGE_THEME', payload: { theme: e } });
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <div className="">
        <Space>
          {types.map((t) => {
            return <Button type={t as any}>{t}</Button>;
          })}
        </Space>
        <Row style={{ marginTop: 24 }}>
          <Space>
            <Switch defaultChecked />
            <Switch size="small" defaultChecked />
          </Space>
        </Row>
        <Row style={{ marginTop: 24 }}>
          <Radio.Group defaultValue="a" size="large">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
          </Radio.Group>
        </Row>
        <Row style={{ marginTop: 12 }}>
          <Radio.Group
            buttonStyle="solid"
            defaultValue="a"
            style={{ marginTop: 16 }}
          >
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
          </Radio.Group>
        </Row>
        <Row style={{ marginTop: 24 }}>
          <Slider style={{ width: 200 }} min={0} max={100} />
        </Row>
      </div>
    </div>
  );
};
export default Main;
