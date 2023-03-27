
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0534 24.0099L13.042 23.9985L30.0126 7.02795L32.841 9.85638L18.6784 24.019L32.8319 38.1725L30.0035 41.0009L13.0329 24.0303L13.0534 24.0099Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const ArrowLeft = defineComponent({
    name: 'ArrowLeft',
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

  ArrowLeft.install = (app) => {
    app.component(ArrowLeft.name, ArrowLeft);
  }

  export default ArrowLeft;
</script>
