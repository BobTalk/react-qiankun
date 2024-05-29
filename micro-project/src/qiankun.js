import { registerMicroApps, start } from 'qiankun';
const micors = [
  {
    name: 'micro-project_child', // 微应用的名字，自拟最好能一眼看出这个应用的功能
    entry: '//localhost:5174', // 微应用的入口地址
    container: '#container', // 微应用要挂载的容器id
    activeRule: '/app1',// 微应用对应的路由匹配规则
  },
];
registerMicroApps(micors,{
    beforeLoad: (app) => {
        return Promise.resolve();
    },
    beforeMount: (app) => {
        return Promise.resolve();
    },
});
 
start();// 最后别忘了启动哟