
<template>
  <i class="v-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 8C32.8366 8 40 15.1634 40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 15.1634 15.1634 8 24 8ZM24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM29.6569 15.5147L32.4853 18.3431L26.8284 24L32.4853 29.6568L29.6569 32.4853L24 26.8284L18.3431 32.4853L15.5147 29.6568L21.1716 24L15.5147 18.3431L18.3431 15.5147L24 21.1716L29.6569 15.5147Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const ClosCircle = defineComponent({
    name: 'ClosCircle',
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

  ClosCircle.install = (app) => {
    app.component(ClosCircle.name, ClosCircle);
  }

  export default ClosCircle;
</script>
