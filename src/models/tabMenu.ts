import { useReducer } from 'react';

/**
 * 判断path在tabs中是否存在
 * @param {*} path
 * @param {*} tabs
 * @returns
 */
export const hasExitTab = (
  path: string,
  tabs: { key: string; tab: string }[],
) => {
  let hasExist = false;
  for (let k = 0; k < tabs.length; k++) {
    const tab = tabs[k];
    // if (path.indexOf(tab.path) > -1) {
    if (path === tab.key) {
      hasExist = true;
    }
  }
  return hasExist;
};

const initData = {
  key: '/main',
  tab: '主题色',
};

export type ITabMenu = {
  tabs: { key: string; tab: string }[];
  activeKey: string;
  theme: string;
};
export default function useTabMenu() {
  const initialState: ITabMenu = {
    tabs: [initData], // {name:'',path:''}
    activeKey: '',
    theme: '#1DA57A',
  };

  const reducer = (
    state: ITabMenu,
    {
      type,
      payload,
    }: {
      type: 'CHANGE_STATE' | 'ADD' | 'REMOVE' | 'CHANGE_THEME';
      payload: Partial<ITabMenu>;
    },
  ) => {
    if (!payload.activeKey) {
      payload.activeKey = state.activeKey;
    }
    switch (type) {
      case 'CHANGE_STATE': {
        return { ...state, ...payload };
      }
      case 'REMOVE': {
        return { ...state, ...payload };
      }
      case 'ADD': {
        return { ...state, ...payload };
      }
      case 'CHANGE_THEME': {
        return { ...state, ...payload };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return { ...state, dispatch };
}
