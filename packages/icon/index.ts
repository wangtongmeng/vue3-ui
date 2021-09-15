import { App } from 'vue'
import { createApp } from 'vue'
import Icon from './src/icon.vue'

Icon.install = (app:App):void => {
    app.component(Icon.name, Icon) // 注册全局组件
}

createApp({}).use(Icon)


type IWithInstall<T> = T & { install(app:App):void }

const _Button: IWithInstall<typeof Icon>  = Icon
export default _Button
