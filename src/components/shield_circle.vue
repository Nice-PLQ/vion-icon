
<template>
  <i class="q-icon" @click="click" :style="iconStyle"><svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 8C32.8366 8 40 15.1634 40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 15.1634 15.1634 8 24 8ZM24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM27.5355 22.6361L30.364 25.4645L26.8284 29L30.364 32.5356L27.5355 35.364L24 31.8284L20.4645 35.364L17.636 32.5356L21.1716 29L17.636 25.4645L20.4645 22.6361L24 26.1716L27.5355 22.6361ZM17 14H21V18H17V14ZM31 14H27V18H31V14Z" fill="currentColor"/>
</svg>
</i>
</template>

<script>
  import { defineComponent, computed } from 'vue';

  const ShieldCircle = defineComponent({
    name: 'QShieldCircle',
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

  ShieldCircle.install = (app) => {
    app.component(ShieldCircle.name, ShieldCircle);
  }

  export default ShieldCircle;
</script>
