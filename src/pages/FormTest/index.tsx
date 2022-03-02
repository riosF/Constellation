import React from 'react';
// import { DropdownTable } from 'dropdown-table';
import { useAntdTable } from 'ahooks';
import { Button, Col, Form, message, Row, Space, Statistic } from 'antd';
import { useState } from 'react';
import './index.less';
import { CountUp } from 'count-up-es-react';
import { LikeOutlined } from '@ant-design/icons';
import DropdownTable from '@/components/ColorRGBPicker/DropdownTable';

const columns = [
  {
    title: '用户名',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
];

const names = ['张', '李', '陈', '荀', '诸葛', '牛', '刘'];
const dataSource: { name: string; id: string }[] = [];
for (let i = 0; i < 20; i++) {
  const index = Math.floor(Math.random() * names.length);
  dataSource.push({
    name: `${names[index]}${i + 1}`,
    id: `${i + 1}`,
  });
}

const getData = (current: number, pageSize: number, searchKey?: string) => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      const start = (current - 1) * pageSize;
      const array: { name: string; id: string }[] = [];

      if (searchKey) {
        array.push(
          ...[...dataSource].filter((rs) => rs.name.indexOf(searchKey) !== -1),
        );
        if (array.length > 5) {
          resolve({
            total: array.length,
            list: [...array].splice(start, pageSize),
          });
        } else {
          resolve({
            total: array.length,
            list: array,
          });
        }
      } else {
        array.push(...[...dataSource].splice(start, pageSize));
        resolve({
          total: 20,
          list: array,
        });
      }
    }, 500);
  });
};

const FormTest = () => {
  const [form] = Form.useForm();
  const [text, setText] = useState('');

  const [searchKey, setSearchKey] = useState('');

  const { tableProps } = useAntdTable(
    (rs) => {
      const { current, pageSize } = rs;
      return getData(current, pageSize, searchKey);
    },
    {
      refreshDeps: [searchKey],
      defaultPageSize: 5,
    },
  );

  return (
    <div className="form-test">
      <h2>dropdown-table 组件示例</h2>
      <h4> yarn add dropdown-table </h4>
      <Row gutter={12} style={{ marginTop: 24, marginBottom: 12 }}>
        <Col span={8}>
          <div className="form-test__demo">
            <div className="form-test__title">普通单选用法</div>
            <div className="form-test__explore">
              用法与Select相同，多了columns与tableProps等几个参数，mode为
              radio与checkbox
            </div>
            <div className="form-test__content">
              <DropdownTable
                columns={columns}
                mode="radio"
                placeholder="点击选择用户"
                searchPlaceholder="请输入用户名或者姓名搜索"
                optionValueProp="id"
                optionLabelProp="name"
                onChange={(selectedKeys) => {
                  console.log('selectedKeys:', selectedKeys);
                }}
                tableProps={{ ...(tableProps as any) }}
              />
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="form-test__demo">
            <div className="form-test__title">普通多选用法</div>
            <div className="form-test__explore">
              设置下拉框样式时，宽度要使用minWidth: 600
            </div>
            <div className="form-test__content">
              <DropdownTable
                size="large"
                columns={columns}
                mode="checkbox"
                placeholder="点击选择用户"
                maxTagCount="responsive"
                searchPlaceholder="请输入用户名或者姓名搜索"
                optionValueProp="id"
                optionLabelProp="name"
                onChange={(selectedKeys) => {
                  console.log('selectedKeys:', selectedKeys);
                }}
                tableProps={{ ...(tableProps as any) }}
                dropdownStyle={{ minWidth: 600 }} // 设置下拉表最小宽度，此处设置width无效必须设置minWidth
              />
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="form-test__demo">
            <div className="form-test__title">搭配表单使用</div>
            <div className="form-test__explore">
              表单设置初始值并禁选key为1 8
            </div>
            <div className="form-test__content">
              <Form
                onFinish={(values) => {
                  message.info(`获取到表单数据${JSON.stringify(values)}`);
                  setText('表单数据' + JSON.stringify(values));
                }}
                form={form}
                initialValues={{ table: ['3', '4'] }}
              >
                <Form.Item label="Form" name="table">
                  <DropdownTable
                    columns={columns}
                    defaultOptions={[...dataSource]
                      .map((rs) => {
                        return { value: rs.id, label: rs.name };
                      })
                      .splice(2, 2)}
                    mode="checkbox"
                    value={[]}
                    maxTagCount="responsive"
                    placeholder="点击选择用户"
                    searchPlaceholder="请输入用户名或者姓名搜索"
                    optionValueProp="id"
                    optionLabelProp="name"
                    disableKeys={['1', '8']}
                    // onChange={(selectedKeys) => {
                    //   console.log('selectedKeys:', selectedKeys);
                    // }}
                    onSearch={(keyword) => {
                      setSearchKey(keyword);
                    }}
                    tableProps={{ ...(tableProps as any) }}
                    dropdownStyle={{ minWidth: 360 }} // 设置下拉表最小宽度，此处设置width无效必须设置minWidth
                  />
                </Form.Item>
              </Form>
              <Space>
                <Button
                  onClick={() => {
                    form.submit();
                  }}
                  style={{ marginTop: -12 }}
                >
                  提交
                </Button>
                <div>{text}</div>
              </Space>
            </div>
          </div>
        </Col>
      </Row>
      <h2>count-up-es-react 组件示例</h2>
      <h4> yarn add count-up-es-react</h4>
      <Row gutter={12} style={{ marginTop: 24 }}>
        <Col span={6}>
          <div className="form-test__demo" style={{ height: 150 }}>
            <div className="form-test__title">CountUp普通用法</div>
            <div className="form-test__explore">
              在10s内从0-999，动画easeInCubic（先慢后快）
            </div>
            <div className="form-test__content">
              <CountUp
                start={0}
                end={999}
                easing="easeInCubic"
                duration={5000}
                render={({ value }) => {
                  return <div className="form-test__number">{value}</div>;
                }}
              />
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="form-test__demo" style={{ height: 150 }}>
            <div className="form-test__title">CountUp普通用法</div>
            <div className="form-test__explore">
              easeOutCubic（先快后慢），搭配antd组件
            </div>
            <CountUp
              start={0}
              end={100}
              easing="easeOutCubic"
              duration={3000}
              render={({ rawValue }) => {
                return (
                  <Statistic
                    title="Feedback"
                    value={Math.ceil(rawValue)}
                    prefix={<LikeOutlined />}
                  />
                );
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FormTest;

// const FormTest = ()=>{
//   return <div>F</div>
// }

// export default FormTest;
