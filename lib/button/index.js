import { defineComponent, openBlock, createElementBlock, createApp } from 'vue';

var script = defineComponent({
    name: 'VButton',
    setup() {
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", null, "按钮"))
}

script.render = render;
script.__file = "packages/button/src/button.vue";

script.install = (app) => {
    app.component(script.name, script); // 注册全局组件
};
createApp({}).use(script);
const _Button = script;

export { _Button as default };
