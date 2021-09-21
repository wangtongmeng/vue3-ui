import { App } from 'vue';
import Icon from './src/icon.vue';
declare type IWithInstall<T> = T & {
    install(app: App): void;
};
declare const _Button: IWithInstall<typeof Icon>;
export default _Button;
