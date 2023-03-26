
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.4767 13.435L34.6482 10.6066L24.0416 21.2132L13.435 10.6066L10.6066 13.435L21.2132 24.0416L10.6066 34.6482L13.435 37.4767L24.0416 26.8701L34.6482 37.4767L37.4767 34.6482L26.8701 24.0416L37.4767 13.435Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const Close = defineComponent({
    name: 'QClose',
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

  Close.install = (app) => {
    app.component(Close.name, Close);
  }

  export default Close;
</script>
