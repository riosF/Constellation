import { useState, useEffect, useMemo } from 'react';
import * as React from 'react';
import './index.less';
import { Input } from 'antd';
import { useAntdTable } from 'ahooks';
import { DropdownTable } from 'dropdown-table';
import { DrawingManager, Map } from 'react-bmapgl';
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
const Analysis = () => {
  const [keys, setKeys] = useState<string[]>([]);
  // const [mapRef, setMapRef] = useState<any>();
  const mapRef = React.useRef<any>();
  const { tableProps } = useAntdTable(
    (rs) => {
      const { current, pageSize } = rs;
      return getData(current, pageSize);
    },
    {
      refreshDeps: [],
      defaultPageSize: 5,
    },
  );
  return (
    <div className="anylastics">
      <Map
        style={{ height: 'calc(100vh - 38px - 48px - 64px)' }}
        ref={(r) => {
          mapRef.current = r;
        }}
        center={{ lng: 116.402544, lat: 39.928216 }}
        zoom={13}
      >
        <DrawingManager
          style={{
            top: 130,
            left: 32,
            position: 'absolute',
            width: 360,
            zIndex: 100,
          }}
          enableLimit
          enableCalculate
          onOverlaycomplete={(e, info) => {
            console.log(e, info);
          }}
          map={mapRef.current}
        />
      </Map>
    </div>
  );
};
export default Analysis;
