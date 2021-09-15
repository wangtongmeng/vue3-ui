declare module '*.vue' {
    import type { App, DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any> & { install(app: App): void };
    export default component
}

// 定义所有以.vue文件结尾的类型