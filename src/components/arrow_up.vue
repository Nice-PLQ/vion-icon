
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.9945 30.01L38.1661 32.8384L24.0126 18.6849L9.84999 32.8475L7.02157 30.0191L23.9921 13.0485L24.0035 13.0599L24.024 13.0394L40.9945 30.01Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const ArrowUp = defineComponent({
    name: 'QArrowUp',
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

  ArrowUp.install = (app) => {
    app.component(ArrowUp.name, ArrowUp);
  }

  export default ArrowUp;
</script>
