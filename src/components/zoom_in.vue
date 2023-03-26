
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.08 18.08H9.08002V12.08V8.08002H13.08H19.08V12.08H15.9084L21.4942 17.6658L22.9084 19.08L20.08 21.9084L18.6658 20.4942L13.08 14.9084V18.08ZM29.4142 26.5858L28 25.1716L25.1716 28L26.5858 29.4142L32.1716 35H29V39H35H39V35V29H35V32.1716L29.4142 26.5858Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const ZoomIn = defineComponent({
    name: 'QZoomIn',
    props: {
      color: String,
      size: String,
    },
    emits: ['click'],
    setup(props, ctx) {
      const iconStyle = computed(() => ({
        display: 'inline-block',
        fontSize: props.size,
        color: props.color,
        width: '1em',
        height: '1em',
        lineHeight: '1em',
      }));

      const click = (e) => ctx.emit('click', e);

      return { iconStyle, click };
    }
  });

  ZoomIn.install = (app) => {
    app.component(ZoomIn.name, ZoomIn);
  }

  export default ZoomIn;
</script>
