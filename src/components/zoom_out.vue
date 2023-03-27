
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4142 10.5858L12 9.17157L9.17157 12L10.5858 13.4142L16.1716 19H13V23H19H23V19V13H19V16.1716L13.4142 10.5858ZM25 35H29V31.8284L34.5858 37.4142L36 38.8284L38.8284 36L37.4142 34.5858L31.8284 29H35V25H29H25V29V35Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const ZoomOut = defineComponent({
    name: 'ZoomOut',
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

  ZoomOut.install = (app) => {
    app.component(ZoomOut.name, ZoomOut);
  }

  export default ZoomOut;
</script>
