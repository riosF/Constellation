import { SlackOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, Space, Tabs } from 'antd';
import { useEffect, useRef } from 'react';
import { history, Route, Switch, useModel } from 'umi';
import './index.less';

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
    tab: '地图',
  },
  {
    key: '/test',
    tab: '组件推荐',
  },
];

export default function IndexPage(props: any) {
  const { activeKey, tabs, dispatch, theme } = useModel('tabMenu');

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
      <Header style={{ zIndex: 1, width: '100%', background: theme }}>
        <div className="logo">
          <SlackOutlined
            className="logo__img"
            style={{ fontSize: 20, color: 'white' }}
          />
          <div className="logo__text">柯基的React</div>
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
      {/* <Affix offsetBottom={40} style={{ left: 12 }}>
        <Button type="primary">Affix</Button>
      </Affix> */}
    </Layout>
  );
}
