import { App } from '@vue/runtime-core'
import Button from '@vue3-ui/button'
import Icon from '@vue3-ui/icon'

const components = [
    Button,
    Icon
]
const install = (app: App): void => {
    components.forEach(component => {
        console.log('x', component);
        
        app.component(component.name, component)
    })
}

export default {
    install
}