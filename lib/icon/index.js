import { defineComponent, openBlock, createElementBlock, normalizeClass, createApp } from 'vue';

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

export { _Button as default };
