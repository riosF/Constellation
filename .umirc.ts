import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  headScripts: [
    'http://api.map.baidu.com/api?type=webgl&v=1.0&ak=q8Bantye74r6i8yuZrUSRWhw8hTjtnFo',
  ],
  title: 'Hello',
  // layout: {},
  routes: [
    {
      path: '/',
      component: '@/layout/baseLayout',
      routes: [
        { path: '/main', component: '@/pages/Main/index' },
        { path: '/analysis', component: '@/pages/Analysis/index' },
        { path: '/test', component: '@/pages/FormTest/index' },
        { path: '/empty', component: '@/pages/Empty/index' },
      ],
    },
  ],
  fastRefresh: {},
  // mfsu: {
  //   development: {
  //     output: "./.mfsu-dev",
  //   },
  //   production: {
  //     output: "./.mfsu-prod",
  //   }
  // }
});
