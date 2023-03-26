
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M36 10H24V24H10V36C10 37.1046 10.8954 38 12 38H24V24H38V12C38 10.8954 37.1046 10 36 10ZM42 24V35.1429V36C42 39.3137 39.3137 42 36 42H35.1429H24H12C8.68629 42 6 39.3137 6 36V24V12.8571V12C6 8.68629 8.68629 6 12 6H12.8571H24H36C39.3137 6 42 8.68629 42 12V24Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Mosaic = defineComponent({
    name: 'QMosaic',
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

  Mosaic.install = (app) => {
    app.component(Mosaic.name, Mosaic);
  }

  export default Mosaic;
</script>
