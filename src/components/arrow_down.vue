
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.0126 31.3441L38.1661 17.1906L40.9945 20.019L24.0239 36.9896L24.0035 36.9691L23.9921 36.9805L7.02156 20.0099L9.84999 17.1815L24.0126 31.3441Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const ArrowDown = defineComponent({
    name: 'ArrowDown',
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

  ArrowDown.install = (app) => {
    app.component(ArrowDown.name, ArrowDown);
  }

  export default ArrowDown;
</script>
