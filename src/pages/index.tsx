import { Layout, Menu, Result, Tabs } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { history, Route, Switch, useModel } from 'umi';
import './index.less';
import { SlackOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.variable.min.css';

// import 'antd/dist/antd.variable.min.css';

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

const menuDatas = [
  {
    key: '/main',
    tab: '主题色',
  },
  {
    key: '/analysis',
    tab: '分析',
  },
  {
    key: '/test',
    tab: '博纳拉',
  },
];

export default function IndexPage(props: any) {
  const { activeKey, tabs, dispatch } = useModel('tabMenu');

  const isFirst = useRef(true);

  useEffect(() => {
    if (history.location.pathname === '/') {
      dispatch({
        type: 'ADD',
        payload: {
          tabs: menuDatas.filter((rs) => rs.key === '/main'),
          activeKey: '/main',
        },
      });
      history.replace('/main');
      return;
    }

    const path =
      history.location.pathname === '/' ? '/main' : history.location.pathname;
    if (isFirst.current) {
      dispatch({
        type: 'ADD',
        payload: {
          tabs: menuDatas.filter((rs) => rs.key === path),
          activeKey: path,
        },
      });
      isFirst.current = false;
    }
  }, [history.location.pathname]);

  const getComponent = (pathName: string) => {
    const newPath = pathName === '/' ? '/main' : pathName;
    props.routes;
    for (let i = 0; i < props.routes.length; i++) {
      const { routes } = props.routes[i];
      if (routes) {
        for (let j = 0; j < routes.length; j++) {
          const { component, path } = routes[j];
          if (path === newPath) {
            return component;
          }
        }
      }
    }
    return <div></div>;
  };

  return (
    <Layout className="layout">
      <Header style={{ zIndex: 1, width: '100%' }}>
        <div className="logo">
          {/* <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            alt=""
            height="20"
            className="logo__img"
            style={{ filter:'blur(2px)'}}
          /> */}
          <SlackOutlined className="logo__img" style={{ fontSize: 20 }} />
          <div className="logo__text">Colgroup Umi</div>
        </div>
        <div className="layout-menu">
          <Tabs
            activeKey={activeKey}
            style={{ height: 60 }}
            onChange={(e) => {
              history.push(`${e}`);
              const array = tabs.filter((s) => s.key === e);
              if (array.length === 0) {
                const newArray = menuDatas.filter((s) => s.key === e);
                dispatch({
                  type: 'ADD',
                  payload: {
                    tabs: [...tabs, ...newArray],
                    activeKey: e,
                  },
                });
              } else {
                dispatch({
                  type: 'CHANGE_STATE',
                  payload: {
                    activeKey: e,
                  },
                });
              }
            }}
          >
            {menuDatas.map((rc) => {
              return <TabPane {...rc} />;
            })}
          </Tabs>
        </div>
      </Header>
      <Content className="site-layout">
        <div className="site-layout-background app-content">
          {tabs.length > 0 ? (
            <Tabs
              activeKey={activeKey}
              type="editable-card"
              className="section-layout-tabs"
              onChange={(e) => {
                history.push(`${e}`);
                dispatch({
                  type: 'CHANGE_STATE',
                  payload: {
                    activeKey: e,
                  },
                });
              }}
              hideAdd={true}
              onEdit={(e, action) => {
                if (action === 'remove') {
                  const newArray = tabs.filter((s) => s.key !== e);
                  let path = '/empty';
                  let ac = activeKey;
                  if (e === history.location.pathname && newArray.length > 0) {
                    path = newArray[newArray.length - 1].key;
                    history.push(path);
                    ac = path;
                  }

                  if (newArray.length === 0) {
                    history.push(path);
                    ac = path;
                  }

                  dispatch({
                    type: 'REMOVE',
                    payload: {
                      tabs: newArray,
                      activeKey: ac,
                    },
                  });
                }
              }}
            >
              {tabs.map((rs, index) => {
                const cm = getComponent(rs.key);
                return (
                  <TabPane tab={rs.tab} key={rs.key}>
                    <div style={{ padding: 24 }}>
                      <Switch>
                        <Route component={cm} />
                      </Switch>
                    </div>
                  </TabPane>
                );
              })}
            </Tabs>
          ) : (
            props.children
          )}
        </div>
      </Content>
    </Layout>
  );
}
