import { defineComponent, openBlock, createElementBlock, createApp, normalizeClass } from 'vue';

var script$1 = defineComponent({
    name: 'VButton',
    setup() {
    },
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", null, "按钮"))
}

script$1.render = render$1;
script$1.__file = "packages/button/src/button.vue";

script$1.install = (app) => {
    app.component(script$1.name, script$1); // 注册全局组件
};
createApp({}).use(script$1);
const _Button$1 = script$1;

var script = defineComponent({
    name:'VIcon',
    props:{
        name:{
            type:String,
            default:''
        }
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("i", {
    class: normalizeClass(`v-icon-${_ctx.name}`)
  }, null, 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/icon/src/icon.vue";

script.install = (app) => {
    app.component(script.name, script); // 注册全局组件
};
createApp({}).use(script);
const _Button = script;

const components = [
    _Button$1,
    _Button
];
const install = (app) => {
    components.forEach(component => {
        console.log('x', component);
        app.component(component.name, component);
    });
};
var index = {
    install
};

export { index as default };
