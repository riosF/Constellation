### 主题色切换-（Umi + Antd）

按antd官方文档，要动态切换主题不能引用@import '~antd/dist/antd.less';而需要引用@import '~antd/dist/antd.variable.min.css';
```
// 在src/global.less下引入@import '~antd/dist/antd.variable.min.css'; 如果没有global.less自己创建一个

@import '~antd/dist/antd.variable.min.css';

```

引入完毕后，配置动态主题色Config。(此处我使用useModel作为状态管理，有用Redux的也可以换成Redux)
```
const Layout: React.FC = (props) => {
  const { theme } = useModel('tabMenu');

  ConfigProvider.config({
    theme: {
      primaryColor: theme,
    },
  });
  return (
    <ConfigProvider locale={locale}>
      <IndexPage {...props} />
    </ConfigProvider>
  );
};
```

配置好后，切换主题色。改变状态参数theme即可。

例如：
```
const { theme, dispatch } = useModel('tabMenu');
  return (
    <div className="main">
      <ColorRGBPicker
        value={theme}
        onChange={(e) => {
          dispatch({ type: 'CHANGE_THEME', payload: { theme: e } });
        }}
      />
    </div>
  );

```

切换主题一共就这三处地方，极为简单。

该项目地址以上传[github](https://github.com/riosF/pc-phone)