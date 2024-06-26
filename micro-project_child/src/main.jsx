import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/reset.css'
import './assets/styles/tailwind.css'

import { BrowserRouter } from 'react-router-dom'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const initQianKun = () => {
  renderWithQiankun({
    // 当前应用在主应用中的生命周期
    mount(props) {
      render(props.container)
      //  可以通过props读取主应用的参数：msg
      // 监听主应用传值
      props.onGlobalStateChange((res) => {
        console.log('>>>>>>> %s',res.count)
      })
    },
    bootstrap() { 
     console.log("bootstrap");

    },
    unmount() { },
  })
}

const render = (container) => {
  // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
  const appDom = container ? container : document.getElementById('micro-box')
  ReactDOM.createRoot(appDom).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()