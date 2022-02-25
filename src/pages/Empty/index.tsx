import { Button, Result } from 'antd';
import { history } from 'umi';

const Empty = () => {
  return (
    <Result
      status="warning"
      title="Empty."
      extra={
        <Button
          type="primary"
          onClick={() => {
            history.push('/');
          }}
        >
          回到主页
        </Button>
      }
    />
  );
};
export default Empty;
