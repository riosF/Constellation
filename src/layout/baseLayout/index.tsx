import IndexPage from '@/pages';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { useModel } from 'umi';

moment.locale('zh-cn');

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

export default Layout;
