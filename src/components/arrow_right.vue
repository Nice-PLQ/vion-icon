
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.9627 24.0099L34.9741 23.9985L18.0035 7.02795L15.1751 9.85638L29.3377 24.019L15.1842 38.1725L18.0126 41.0009L34.9831 24.0303L34.9627 24.0099Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const ArrowRight = defineComponent({
    name: 'QArrowRight',
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

  ArrowRight.install = (app) => {
    app.component(ArrowRight.name, ArrowRight);
  }

  export default ArrowRight;
</script>
